import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";
import { connectDatabase } from "@/helpers/server.helper";

export async function POST(req: Request) {
    try {
        const { name, email }: { name: string; email: string } =
            await req.json();
        if (!name || !email)
            return NextResponse.json(
                { message: "invalid data" },
                { status: 422 }
            );
        await connectDatabase();

        const hasUser = await prisma.user.findFirst({
            where: { email },
        });

        if (!hasUser) {
            const user = await prisma.user.create({ data: { email, name } });
            return NextResponse.json({ user }, { status: 201 });
        }

        if (hasUser.name !== name || hasUser.email !== email) {
            const user = await prisma.user.update({
                where: { id: hasUser.id },
                data: { email, name },
            });
            return NextResponse.json({ user }, { status: 200 });
        }

        return NextResponse.json({ user: hasUser }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "server error" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
