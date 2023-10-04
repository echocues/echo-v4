import {EchoProject} from "$lib/ts/models";

export namespace EchoBackend {
    const url: string = "http://127.0.0.1:8000";

    export async function loginAuth(username: string, password: string): Promise<string> {
        let response = await fetch(`${url}/auth/token`, {
            method: "POST",
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                'username': username,
                'password': password,
            })
        });
        let body = await response.json();

        if (!response.ok) {
            throw new Error(`Failed to login: ` + JSON.stringify(body.detail))
        }

        return body.access_token;
    }

    export async function register(username: string, password: string): Promise<void> {
        let response = await fetch(`${url}/users/`, {
            method: "POST",
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        let json = await response.json();

        if (!response.ok) {
            throw new Error(`Failed to register: ` + JSON.stringify(json.detail));
        }
    }
    
    export async function getProjects(token: string): Promise<EchoProject[]> {
        const response = await fetch(`${url}/projects/`, {
            method: "GET",
            headers: {
                'Authorization': "Bearer " + token,
                'Accept': "application/json",
                'Content-Type': "application/json"
            }
        }) 
        
        const json = await response.json();
        
        if (!response.ok) {
            throw new Error(`Failed to get projects: ` + JSON.stringify(json.detail));
        }
        
        return json.map((element: any) => new EchoProject(element));
    }
}
