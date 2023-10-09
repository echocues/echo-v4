import {redirect} from "@sveltejs/kit";

// @ts-ignore
export async function load({url}) {
    throw redirect(303, url.pathname + "/sounds");
}