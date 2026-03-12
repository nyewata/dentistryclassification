import { authApiHandler } from "@neondatabase/auth/next/server";
import { NextRequest } from "next/server";

const { GET: _GET, POST: _POST } = authApiHandler();

// #region agent log
function logRequest(label: string, request: NextRequest, response: Response) {
    const debugInfo = {
        url: request.url,
        method: request.method,
        origin: request.headers.get("origin"),
        referer: request.headers.get("referer"),
        host: request.headers.get("host"),
        responseStatus: response.status,
        neonAuthBaseUrl: process.env.NEON_AUTH_BASE_URL?.substring(0, 60),
    };
    console.log(`[DEBUG-9f6369] ${label}`, JSON.stringify(debugInfo));
    fetch('http://127.0.0.1:7353/ingest/2cc87a84-6d44-4b79-8c5a-cc3886685a54',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'9f6369'},body:JSON.stringify({sessionId:'9f6369',location:'route.ts:api-auth',message:label,data:debugInfo,timestamp:Date.now(),hypothesisId:'H3'})}).catch(()=>{});
}

async function logErrorBody(label: string, response: Response) {
    if (response.status >= 400) {
        try {
            const cloned = response.clone();
            const body = await cloned.text();
            console.log(`[DEBUG-9f6369] ${label}-error-body`, body.substring(0, 500));
            fetch('http://127.0.0.1:7353/ingest/2cc87a84-6d44-4b79-8c5a-cc3886685a54',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'9f6369'},body:JSON.stringify({sessionId:'9f6369',location:'route.ts:api-auth-error',message:`${label}-error-body`,data:{status:response.status,body:body.substring(0,500)},timestamp:Date.now(),hypothesisId:'H3'})}).catch(()=>{});
        } catch {}
    }
}
// #endregion

export async function GET(request: NextRequest, ctx: any) {
    const response = await _GET(request, ctx);
    // #region agent log
    logRequest("api-auth-GET", request, response);
    await logErrorBody("api-auth-GET", response);
    // #endregion
    return response;
}

export async function POST(request: NextRequest, ctx: any) {
    const response = await _POST(request, ctx);
    // #region agent log
    logRequest("api-auth-POST", request, response);
    await logErrorBody("api-auth-POST", response);
    // #endregion
    return response;
}
