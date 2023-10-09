import {EchoConstants} from "$lib/ts/utils";

//@ts-ignore
export function load({cookies}) {
    const sessionId = cookies.get(EchoConstants.sessionId);
 
    return {
        needLogin: sessionId === undefined
    }
}