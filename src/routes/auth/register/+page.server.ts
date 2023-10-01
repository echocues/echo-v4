import type {RequestEvent} from "@sveltejs/kit";
import {fail, redirect} from "@sveltejs/kit";
import {EchoBackend} from "$lib/server/api";

const act = async (event: RequestEvent) => {
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
        await EchoBackend.register(username, password);
    } catch (error) {
        return {fail: true};
    }

    throw redirect(308, "/auth/login");
};

export const actions = {
    register: act,
}