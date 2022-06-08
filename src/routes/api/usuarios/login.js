export const post = async ({ request, locals }) => {
    const headers = new Headers(request.headers);
    headers.set("content-type", "application/json");
    const body = await request.json();
    const apiURI = locals.apiURI;

    console.log("POST TO:", `${apiURI}/api/login`);
    const data = JSON.stringify(body);
    console.log("WITH DATA:", data);

    console.log(request.headers);

    const response = await fetch(`${apiURI}/api/login`, {
        method: "POST",
        headers,
        body: data,
        mode: "no-cors"
    });

    console.log(response);

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