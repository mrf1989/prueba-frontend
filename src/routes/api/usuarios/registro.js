export const post = async ({ request, locals }) => {
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("connection", "keep-alive");
    const body = await request.json();
    const apiURI = locals.apiURI;

    const response = await fetch(`${apiURI}/api/usuarios`, {
        method: "POST",
        headers,
        body: JSON.stringify(body)
    });

    if (response.ok) {
        return {
            status: 201,
            body: await response.json()
        }
    } else {
        return {
            status: 500,
            body: JSON.stringify({
                message: "No se ha podido registrar un usuario con estos datos."
            })
        }
    }
}