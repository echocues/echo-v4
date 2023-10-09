import type {RequestEvent} from "@sveltejs/kit";
import {EchoBackend} from "$lib/server/api";
import {fail, redirect} from "@sveltejs/kit";
import {EchoConstants} from "$lib/ts/utils";

export const actions = {
    default: async (event: RequestEvent) => {
        const data = await event.request.formData()
        const username = data.get("username") as string;
        const password = data.get("password") as string;

        if (!username) {
            return fail(400, {password, missingUsername: true});
        }

        if (!password) {
            return fail(400, {password, missingPassword: true});
        }

        try {
            const token = await EchoBackend.loginAuth(username, password);
            event.cookies.set(EchoConstants.sessionId, token, {
                httpOnly: true,
                path: '/',
                //      s    m    h    d
                // maxAge: 60 * 60 * 24 * 7
                maxAge: 60 * 5
            });
        } catch (error) {
            return {fail: true};
        }

        throw redirect(303, "/app");
    }, 
}
