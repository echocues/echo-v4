import {EchoConstants} from "$lib/ts/utils";

//@ts-ignore
export function load({cookies}) {
    const sessionId = cookies.get(EchoConstants.sessionId);
    
    if (sessionId) {
        // redirect if not already in app
    }
}