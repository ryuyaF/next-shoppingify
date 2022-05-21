import { PrismaClient } from ".prisma/client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from 'next/link'
import { route } from "next/dist/server/router";

const prisma = new PrismaClient()
const APP_URL = process.env.NEXT_PUBLIC_APP_URL

export async function getStaticPaths() {
    const users = await prisma.users.findMany();
    const paths = users.map(user => `/users/${user.id}`)

    return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
    const user = await prisma.users.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    return {
        props: {
            user
        }
    }
}

export default function User (props) {
    const [user, setUser] = useState(props.user)
    const router = useRouter()

    const handleChangeUser = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleUpdateUser = async () => {
        const config = {
            method: 'PATCH',
            url: `/api/users/${user.id}`,
            data: user,
        }
        await axios(config)
        alert(`データの更新に成功しました。`)
    }

    const handleDeleteUser = async () => {
        const config = {
            method: 'DELETE',
            url: `/api/users/${user.id}`
        }
        await axios(config)
        alert(`データの削除に成功しました。`)
        router.replace(`/users`)
    }

    return (
        <>
            <Link href="/users">
                <a>ユーザー一覧に戻る</a>
            </Link>
            <h1>ユーザー詳細</h1>
            {user && (
                <>
                    <div>
                        <label>ID:</label>
                        <input type="text" name="id" value={user.id} onChange={handleChangeUser}  disabled/>
                    </div>
                    <div>
                        <label>名前:</label>
                        <input type="text" name="name" value={user.name} onChange={handleChangeUser} />
                    </div>
                    <div>
                        <button onClick={handleUpdateUser}>更新</button>
                        <button onClick={handleDeleteUser}>削除</button>
                    </div>
                </>
            )}
        </>
    )
}
