import Image from 'next/image'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const styles = {
  mainBGColor: '#FAFAFE',
  sideBarBGColor: '#FFFFFF',
  cartBGColor: '#F9A109'
}

export default function Home() {
  return (
    <div className='container min-w-full min-h-screen rounded-xl' style={{backgroundColor: styles.mainBGColor}}>
      <div className="w-24 min-h-screen grid grid-rows-3" style={{backgroundColor: styles.sideBarBGColor}}>
          <div className='flex flex-col mt-8'>
            <Image src={'/pictures/logo.svg'} alt='Picture of the logo' width={40} height={40}/>
          </div>
          <div className=' bg-red-600'>
            item2
          </div>
          <div className='h-full flex flex-col justify-end'>
            <div className='w-10 h-10 mx-auto rounded-full mb-8 flex justify-center' style={{backgroundColor: styles.cartBGColor}}>
              <ShoppingCartIcon sx={{ color: '#FFF', fontSize: 20 }} />
            </div>
          </div>
      </div>
      <ul className="flex border-b">
        <li className="mr-1">
          <a className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="#">Active</a>
        </li>
        <li className="-mb-px mr-1">
          <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Tab</a>
        </li>
        <li className="mr-1">
          <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Tab</a>
        </li>
        <li className="mr-1">
          <a className="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" href="#">Tab</a>
        </li>
      </ul>
    </div>
  )
}
