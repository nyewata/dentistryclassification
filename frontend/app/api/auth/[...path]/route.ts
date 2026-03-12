import { authApiHandler } from "@neondatabase/auth/next/server";
import { NextRequest } from "next/server";

const { GET: _GET, POST: _POST } = authApiHandler();

function withNeonOrigin(request: NextRequest): NextRequest {
    const neonBaseUrl = process.env.NEON_AUTH_BASE_URL;
    if (!neonBaseUrl) return request;

    const neonOrigin = new URL(neonBaseUrl).origin;
    const headers = new Headers(request.headers);
    headers.set("origin", neonOrigin);

    // #region agent log
    const debugData = { originalOrigin: request.headers.get("origin"), rewrittenOrigin: neonOrigin, url: request.url };
    console.log("[DEBUG-9f6369] proxy-origin-rewrite", JSON.stringify(debugData));
    fetch('http://127.0.0.1:7353/ingest/2cc87a84-6d44-4b79-8c5a-cc3886685a54',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'9f6369'},body:JSON.stringify({sessionId:'9f6369',location:'route.ts:12',message:'proxy-origin-rewrite',data:debugData,timestamp:Date.now(),hypothesisId:'H5'})}).catch(()=>{});
    // #endregion

    return new NextRequest(request.url, {
        method: request.method,
        headers,
        body: request.body,
        // @ts-expect-error duplex is required for streaming body in undici
        duplex: "half",
    });
}

export async function GET(request: NextRequest, ctx: any) {
    return _GET(request, ctx);
}

export async function POST(request: NextRequest, ctx: any) {
    const response = await _POST(withNeonOrigin(request), ctx);

    // #region agent log
    console.log("[DEBUG-9f6369] proxy-POST-response", JSON.stringify({ url: request.url, status: response.status }));
    fetch('http://127.0.0.1:7353/ingest/2cc87a84-6d44-4b79-8c5a-cc3886685a54',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'9f6369'},body:JSON.stringify({sessionId:'9f6369',location:'route.ts:30',message:'proxy-POST-response',data:{url:request.url,status:response.status},timestamp:Date.now(),hypothesisId:'H5'})}).catch(()=>{});
    // #endregion

    return response;
}
