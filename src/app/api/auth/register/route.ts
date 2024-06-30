import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";
import { connectDatabase } from "../../../../helpers/server.helper";

export async function POST(req: Request) {
    try {
        const { name, email } = await req.json();
        if (!name || !email)
            return NextResponse.json(
                { message: "invalide data" },
                { status: 422 }
            );
        await connectDatabase();
        const user = await prisma.user.create({ data: { email, name } });
        return NextResponse.json({ user }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "server error" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
