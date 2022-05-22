const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

/**
 * カテゴリーを10件、カテゴリーアイテムを50件作成する
 */
async function main() {
  createCategories()
}

async function createCategories() {
  let categoryNo = 1
  let itemNo = 1
  for(; categoryNo <= 10; categoryNo++) {
    const itemData = []
    for(let j = 0; j < 5; j++) {
      itemData.push({name: `item_${itemNo}`})
      itemNo++
    }

    await prisma.category.create({
      data: {
        name: `category_${categoryNo}`,
        items: {
          createMany: {
            data: itemData
          }
        }
      }
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
