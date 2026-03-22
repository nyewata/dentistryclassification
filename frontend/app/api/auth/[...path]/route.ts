import { authApiHandler } from "@neondatabase/auth/next/server";
import { NextRequest } from "next/server";

const { GET: _GET, POST: _POST } = authApiHandler();

/**
 * Neon upstream may emit Set-Cookie with Path=/api/auth so the session is only
 * sent to /api/auth/*. Browsers then omit it on navigation to /doctor, and
 * authServer.getSession() in RSC sees no session. Force Path=/ for auth cookies.
 */
function rewriteNeonAuthSetCookiePaths(response: Response): Response {
    const getSetCookie = response.headers.getSetCookie?.bind(response.headers);
    if (!getSetCookie) return response;

    const setCookies = getSetCookie();
    if (!setCookies.length) return response;

    const newHeaders = new Headers();
    response.headers.forEach((value, key) => {
        if (key.toLowerCase() !== "set-cookie") {
            newHeaders.append(key, value);
        }
    });

    for (const line of setCookies) {
        const rewritten = line.replace(
            /;\s*[Pp]ath=([^;]+)/g,
            (match, pathVal: string) => {
                const p = String(pathVal).trim();
                if (p === "/api/auth" || p.startsWith("/api/auth/")) {
                    return "; Path=/";
                }
                return match;
            }
        );
        newHeaders.append("set-cookie", rewritten);
    }

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
    });
}

function withNeonOrigin(request: NextRequest): NextRequest {
    const neonBaseUrl = process.env.NEON_AUTH_BASE_URL;
    if (!neonBaseUrl) return request;

    const neonOrigin = new URL(neonBaseUrl).origin;
    const headers = new Headers(request.headers);
    headers.set("origin", neonOrigin);

    return new NextRequest(request.url, {
        method: request.method,
        headers,
        body: request.body,
        duplex: "half",
    });
}

export async function GET(
    request: NextRequest,
    ctx: { params: Promise<{ path: string[] }> }
) {
    const res = await _GET(request, ctx);
    return rewriteNeonAuthSetCookiePaths(res);
}

export async function POST(
    request: NextRequest,
    ctx: { params: Promise<{ path: string[] }> }
) {
    const res = await _POST(withNeonOrigin(request), ctx);
    return rewriteNeonAuthSetCookiePaths(res);
}
