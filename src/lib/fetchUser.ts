export async function getUserData(name: string, email: string) {
    const body = JSON.stringify({ name, email });
    const data = await fetch(`/api/auth/register`, {
        method: "POST",
        body,
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (data) {
        const output = await data.json();
        return output;
    }
    return null;
}
