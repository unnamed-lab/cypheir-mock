import prisma from "../../prisma";

export async function connectDatabase() {
    try {
        await prisma.$connect();
    } catch (error) {
        console.log("Error: ", error);
        throw new Error("Unable to connect to database");
    }
}
