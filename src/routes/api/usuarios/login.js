export const post = async ({ request, locals }) => {
    const headers = new Headers(request.headers);
    headers.set("Content-Type", "application/json");
    headers.set("connection", "keep-alive");
    const body = await request.json();
    const apiURI = locals.apiURI;

    console.log(headers);

    const response = await fetch(`${apiURI}/api/login`, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
        mode: "no-cors"
    });

    if (response.ok) {
        return {
            status: 200,
            headers: response.headers
        }
    } else {
        return {
            status: 401,
            body: JSON.stringify({
                message: "Usuario y contraseña no válidos.",
                error: await response.text()
            })
        }
    }
}