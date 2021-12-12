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
            const user = await prisma.users.findFirst(id)
            res.status(200).json(user)
            break
        case 'PATCH':
            const updatedUser = await prisma.users.update({
                where: {id: Number(id)},
                data: body,
            })
            res.status(200).json(updatedUser)
            break
        case 'DELETE':
            await prisma.users.delete({
                where: {id: Number(id)}
            })
            res.status(200).json({result: true})
            break
        default:
            res.setHeader('Allow', ['GET', 'PATCH', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}