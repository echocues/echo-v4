import type {RequestEvent} from "@sveltejs/kit";

export const actions = {
    login: async (event: RequestEvent) => {
        const data = await event.request.formData()
        const username = data.get("username");
        const password = data.get("password");
        
        console.log(username);
        console.log(password);
    }
}