import { groupBy } from "../../../Utils/Collections";

export default function ShoppingListItems ({ items }) {
  if (items.length <= 0) {
    return <div>NoItems</div>
  }

  const groupByCategory = groupBy(items, item => item.category)

  return (
    <div>
      {groupByCategory.map(([category, items], index) => (
        <div key={index} className='mb-10'>
          <div className="text-base font-medium text-gray-400 mb-1">{category}</div>
          {items.map((item, index) => (
            <div key={index} className='h-full flex justify-center items-center mb-4'>
              <div className="text-xl font-medium ">{item.name}</div>
              <div className="grow"></div>
              <button className="text-xl px-4 rounded-full outline outline-2 outline-orange-400 text-orange-400">{item.quantity}&nbsp;pcs</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
