import React, { useState } from "react";
import axios from "axios";
import Link from 'next/link'

export default function CreateUser () {
    const [user, setUser] = useState({name: null})

    const handleChangeUser = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSaveUser = async () => {
        const config = {
            method: 'POST',
            url: '/api/users',
            data: user
        }
        const createdUser = await axios(config).then(res => res.data)
        alert(`データの登録に成功しました。\nid:${createdUser.id}\nname:${createdUser.name}`)
    }

    return (
        <>
            <Link href="/users">
                <a>ユーザー一覧に戻る</a>
            </Link>
            <h1>ユーザー登録</h1>
            <div>
                <label>名前:</label>
                <input type="text" name="name" value={user.name} onChange={handleChangeUser} />
            </div>
            <div>
                <button onClick={handleSaveUser}>保存</button>
            </div>
        </>
    )
}
