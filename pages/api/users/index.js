import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient()

export default async function handler(req, res) {

    const {
        query: {id},
        body,
        method,
    } = req

    switch (method) {
        case 'GET':
            const users = await prisma.users.findMany({
                orderBy: [{id}]
            })
            res.status(200).json(users)
            break
        case 'POST':
            const createdUser = await prisma.users.create({
                data: body
            })
            res.status(201).json(createdUser)
            break
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }

}