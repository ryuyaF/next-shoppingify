import '../styles/globals.css'
import Image from 'next/image'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined'
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Link from 'next/link'
import NavigateIcon from '../components/navigators/navigateIcon'
import css from 'styled-jsx/css'
import { useRouter } from 'next/router'
import ShoppingList from '../components/navigators/shoppingList/shoppingList'

const styles = css`
  .main-bg-color {
    background-color: #FAFAFE;
  }
  .side-bar-bg-color {
    background-color: #FFFFFF;
  }
  .cart-bg-color {
    background-color: #F9A109;
  }
`

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const ActiveMenuBar = ({route = '/items'}) => {
    let className = 'w-3 h-full rounded-lg active-menu-color'
    if (!(router.route === route)) className += ' opacity-0'

    return <>
      <style jsx>{`
        .active-menu-color {
          background-color: #F9A109;
        }
      `}</style>
      <span className={className}></span>
    </>
  }

  console.log('process.env.NEXT_PUBLIC_APP_URL: ', process.env.NEXT_PUBLIC_APP_URL)
  console.log('process.env.VERCEL_URL: ', process.env.VERCEL_URL)
  console.log('process.env.NEXT_PUBLIC_VERCEL_URL: ', process.env.NEXT_PUBLIC_VERCEL_URL)

  return (
    <>
      <style jsx>{styles}</style>
      <div className='min-w-full max-h-screen rounded-xl flex main-bg-color'>
        {/* 1列目 サイドメニュー */}
        <div className='w-24 min-h-screen flex flex-col justify-between side-bar-bg-color'>
          <div className='flex-1 flex items-start justify-center mt-8'>
            <Image src={'/pictures/logo.svg'} alt='Picture of the logo' width={40} height={40}/>
          </div>
          <ul className="flex-1 flex flex-col justify-between items-center">
            <li className='mr-1 w-full h-16 flex'>
              <ActiveMenuBar route='/items'/>
              <NavigateIcon text='items'>
                <Link href="/items">
                  <a><ListOutlinedIcon sx={{ color: '#000' }} fontSize='large' /></a>
                </Link>
              </NavigateIcon>
            </li>
            <li className="mr-1 w-full h-16 flex">
              <ActiveMenuBar route='/histories'/>
              <NavigateIcon text='history'>
                <Link href="/histories">
                  <a><ReplayOutlinedIcon sx={{ color: '#000' }} fontSize='large' /></a>
                </Link>
              </NavigateIcon>
            </li>
            <li className="mr-1 w-full h-16 flex">
              <ActiveMenuBar route='/statics'/>
              <NavigateIcon text='statics'>
                <Link href="/statics">
                  <a><InsertChartOutlinedIcon sx={{ color: '#000' }} fontSize='large' /></a>
                </Link>
              </NavigateIcon>
            </li>
          </ul>
          <div className='flex-1 flex flex-col justify-end'>
            <div className='w-10 h-10 mx-auto rounded-full mb-8 flex flex-col justify-center items-center cart-bg-color'>
              <ShoppingCartOutlinedIcon sx={{ color: '#FFF', fontSize: 20 }} />
            </div>
          </div>
        </div>
        {/* 2列目 メインコンテンツ */}
        <div className='w-full max-h-screen flex'>
          {/* ページコンテンツ */}
          <div className='w-full max-h-screen overflow-y-auto hidden-scrollbar'>
            <Component {...pageProps} />
          </div>
          {/* 買い物リスト */}
          <div className='w-2/5 max-h-screen'>
            <ShoppingList />
          </div>
        </div>
      </div>
    </>
  )
}

export default MyApp
