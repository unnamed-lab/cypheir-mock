export async function getUserData({
    name,
    email,
}: {
    name: string;
    email: string;
}) {
    const body = JSON.stringify({ name, email });
    const data = await fetch(
        `${process.env.NEXTAUTH_URL as string}/api/auth/register`,
        {
            method: "POST",
            body,
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    if (data) {
        const output = await data.json();
        return JSON.parse(output);
    }

    return null;
}
