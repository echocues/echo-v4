import {EchoConstants} from "$lib/ts/utils";
import {redirect} from "@sveltejs/kit";
import {EchoBackend} from "$lib/server/api";

export async function load({cookies}) {
    const sessionId = cookies.get(EchoConstants.sessionId);

    if (!sessionId) {
        console.log("No session");
        throw redirect(308, "/auth/login");
    }

    return {
        projects: await EchoBackend.getProjects()
    }
}