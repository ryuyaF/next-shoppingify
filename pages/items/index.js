import Link from 'next/link'

export default function Items() {
    return (
        <>
          <h1>アイテムページ</h1>
          <Link href="/">
              <button>TOPに戻る</button>
          </Link>
        </>
    )
}
