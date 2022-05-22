import { PrismaClient } from "@prisma/client"
import SearchIcon from '@mui/icons-material/Search';
import categoryAndItems from '../../stub/categoryAndItems';
import css from 'styled-jsx/css'

const prisma = new PrismaClient()

const styles = css`
  .main-bg-color {
    background-color: #FAFAFE;
  }
`

export default function Items ({ categories }) {
  return (
      <>
        <style jsx>{styles}</style>
        <div className='w-full h-full flex flex-col px-20 py-14'>
          {/* TOPメッセージと検索ボックス */}
          <div className='h-24 w-full flex justify-between items-start pb-4 mb-10 sticky top-0 main-bg-color'>
            <p className='h-full w-2/3 font-bold text-2xl leading-8 tracking-widest'>
              <span className='text-orange-400'>Shoppingify</span> allows you take your <br/> shopping list wherever you go
            </p>
            <div className='h-2/3 w-1/3 flex justify-start items-center bg-white rounded-lg shadow'>
              <SearchIcon sx={{ color: '#000' }} fontSize='large' className='m-4'/>
              <input type='text' placeholder='seach item' className='outline-none'></input>
            </div>
          </div>

          {/* アイテム一覧 */}
          <div className='w-full'>
            {categories.map((category, index) => (
              <div key={index} className='mb-10'>
                <h1>{category.name}</h1>
                <div className='grid grid-cols-4'>
                  {category.items.map((categoryItem, itemIndex) => (
                    <div className='break-all bg-white rounded-xl shadow-md m-2 p-4 flex' key={itemIndex}>
                      <span className='mr-auto'>{categoryItem.name}</span>
                      <button className='mx-2'>
                        <svg className='transition ease-out delay-75 duration-150 fill-gray-400 hover:scale-125 hover:fill-black active:fill-gray-400' width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 2H11V11H2V13H11V22H13V13H22V11H13V2Z"/>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
  )
}

export async function getStaticProps() {
  const categories = await prisma.category.findMany({
      include: {
        items: true
      },
      orderBy: [{id: 'asc'}]
  })

  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories))
    },
  }
}
