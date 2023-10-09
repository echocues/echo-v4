import {error, text} from "@sveltejs/kit";
import {EchoBackend} from "$lib/server/api";
import {EchoConstants} from "$lib/ts/utils";

// @ts-ignore
export async function POST({ request, cookies }): Promise<Response> {
    
    const json = await request.json();
    const token = cookies.get(EchoConstants.sessionId);
    
    try {
        await EchoBackend.createProject(token, json.title, json.description);
    } catch {
        throw error(500);
    }
    
    return text("OK");
}