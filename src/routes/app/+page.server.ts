import {EchoConstants} from "$lib/ts/utils";
import {redirect} from "@sveltejs/kit";
import {EchoBackend} from "$lib/server/api";

// @ts-ignore
export async function load({cookies}) {
    const sessionId = cookies.get(EchoConstants.sessionId);

    if (!sessionId) {
        throw redirect(308, "/auth/login");
    }
    
    // TODO: shows not authorized..?
    return {
        projects: await EchoBackend.getProjects()
    }
}