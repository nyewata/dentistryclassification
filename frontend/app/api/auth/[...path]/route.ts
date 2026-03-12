import { authApiHandler } from "@neondatabase/auth/next/server";
import { NextRequest } from "next/server";

const { GET: _GET, POST: _POST } = authApiHandler();

async function withNeonOrigin(request: NextRequest): Promise<NextRequest> {
    const neonBaseUrl = process.env.NEON_AUTH_BASE_URL;
    if (!neonBaseUrl) return request;

    const neonOrigin = new URL(neonBaseUrl).origin;
    const headers = new Headers(request.headers);
    headers.set("origin", neonOrigin);

    const rawBody = await request.text();

    // #region agent log
    const debugData = {
        originalOrigin: request.headers.get("origin"),
        rewrittenOrigin: neonOrigin,
        url: request.url,
        bodyLength: rawBody.length,
    };
    console.log("[DEBUG-9f6369] proxy-origin-rewrite", JSON.stringify(debugData));
    fetch('http://127.0.0.1:7353/ingest/2cc87a84-6d44-4b79-8c5a-cc3886685a54',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'9f6369'},body:JSON.stringify({sessionId:'9f6369',location:'route.ts:20',message:'proxy-origin-rewrite',data:debugData,timestamp:Date.now(),hypothesisId:'H5'})}).catch(()=>{});
    // #endregion

    return new NextRequest(request.url, {
        method: request.method,
        headers,
        body: rawBody,
    });
}

export async function GET(request: NextRequest, ctx: any) {
    return _GET(request, ctx);
}

export async function POST(request: NextRequest, ctx: any) {
    const proxiedRequest = await withNeonOrigin(request);
    const response = await _POST(proxiedRequest, ctx);

    let responseErrorBody: string | null = null;
    if (response.status >= 400) {
        try {
            responseErrorBody = (await response.clone().text()).slice(0, 300);
        } catch {
            responseErrorBody = "<unreadable>";
        }
    }

    // #region agent log
    const responseData = {
        url: request.url,
        status: response.status,
        errorBody: responseErrorBody,
    };
    console.log("[DEBUG-9f6369] proxy-POST-response", JSON.stringify(responseData));
    fetch('http://127.0.0.1:7353/ingest/2cc87a84-6d44-4b79-8c5a-cc3886685a54',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'9f6369'},body:JSON.stringify({sessionId:'9f6369',location:'route.ts:49',message:'proxy-POST-response',data:responseData,timestamp:Date.now(),hypothesisId:'H5'})}).catch(()=>{});
    // #endregion

    return response;
}
