import { PrismaClient } from "@prisma/client"
import Link from 'next/link'

const prisma = new PrismaClient()

export async function getStaticProps() {
    const users = await prisma.users.findMany({
        orderBy: [{id: 'asc'}]
    })

    return {
        props: {
            users
        }
    }
}

export default function Users({users}) {
    return (
        <>
            <h1>ユーザー一覧</h1>
            <Link href="/users/create">
                <button>新規作成</button>
            </Link>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link href="/users/[id]" as={`/users/${user.id}`}>
                            <a>{user.id}:{user.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
