import Image from "next/image";
import { useState } from "react"
import css from 'styled-jsx/css'
import _JSXStyle from 'styled-jsx/style'
import ShoppingListItems from './shoppingListItems'
import stubItems from '../../../stub/shoppingListItems'

const styles = css`
  .bg-color-list {
    background-color: #FFF0DE;
  }
  .bg-color-add-item {
    background-color: #80485B;
  }
  .color-item-quantiry {
    border-color: #F9A109;
  }
`

const ShoppingList = (props) => {
  const [items, setItems] = useState(stubItems)

  return (
    <>
      <style jsx>{styles}</style>
      {/* styled-jsxのユニーク識別子が付与されないクラスの書き方 */}
      <_JSXStyle>{`
        .flsj-position > span {
          top: 10px;
        }
        .source-position > span {
          top: -20px;
          left: -20px;
        }
      `}</_JSXStyle>
      <div className="min-w-full h-full flex flex-col">
        {/* リストのアイテム操作欄 */}
        <div className="min-w-full h-full bg-color-list">
          <div className="h-full flex flex-col">

            {/* アイテム追加画像 */}
            <div className="my-12 flex justify-center items-center">
              <div className="h-36 w-4/5 bg-color-add-item rounded-3xl flex justify-center">
                <div className="w-5/12 source-position">
                  <Image src={'/pictures/source.svg'} alt='source' width={150} height={150}/>
                </div>
                <div className="w-7/12 flex flex-col p-4">
                  <div className="h-full flex-1 text-white">
                    <p className="font-bold text-base">Didn&apos;t find what you need?</p>
                  </div>
                  <div className="h-full flex-1 flex justify-start items-center">
                    <button className="h-10 w-32 bg-white text-black rounded-lg">Add item</button>
                  </div>
                </div>
              </div>
            </div>

            {/* アイテム一覧 */}
            <div className="h-full flex justify-center items-center">
              <div className="h-full w-4/5">
                <ShoppingListItems
                  items={items}
                />
              </div>
            </div>
            {items.length <= 0 && (
              <div className="h-full flex-1 flex flex-col justify-end flsj-position">
                  <Image src={'/pictures/undraw_shopping_app_flsj.svg'} alt='Undraw shopping app flsj' width={200} height={200}/>
              </div>
            )}
          </div>
        </div>
        {/* リストへのアクション欄 */}
        <div className="min-w-full h-1/6 bg-white flex justify-center items-center">
          <div className="h-16 border-2 border-gray-400 rounded-lg flex pl-2">
            <input type="text" placeholder="Enter a name" className="m-2 outline-none" />
            <button type="button" className="px-8 bg-gray-400 rounded-md text-white hover:shadow-xl active:shadow-none">Save</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingList
