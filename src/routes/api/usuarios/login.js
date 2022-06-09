export const post = async ({ request, locals }) => {
    console.log(request.headers);
    const headers = new Headers({
        accept: "*/*",
        "accept-encoding": "gzip, deflate, br",
        host: request.headers.get("host"),
        referer: request.headers.get("referer"),
        "content-type": "application/json",
        connection: "keep-alive",
        cookie: request.headers.get("cookie")
    });
    // headers.set("Content-Type", "application/json");
    // headers.set("connection", "keep-alive");
    // headers.set("cookie", request.headers.get('cookie'));
    // headers.set("host", request.headers.get('host'));
    const body = await request.json();
    const apiURI = locals.apiURI;

    console.log(headers);

    const response = await fetch(`${apiURI}/api/login`, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
        //mode: "no-cors"
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
