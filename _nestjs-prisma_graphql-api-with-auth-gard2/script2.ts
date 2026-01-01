import { prisma } from './lib/prisma.js'

async function main() {
  // Create a new board with a post
  let board = await prisma.board.create({
    data: {
      name: 'board entry1 ',
      email: 'alice@prisma.io',
      posts: {
        create: {
          title: 'Hello World',
          content: 'This is my first post!',
          published: true,
        },
      },
    },
    include: {
      posts: true,
    },
  })
  console.log('Created board:', board)
   board = await prisma.board.create({
    data: {
      name: 'board entry2 ',
      email: 'alice2@prisma.io',
      posts: {
        create: {
          title: 'Hello World2',
          content: 'This is my second post!',
          published: true,
        },
      },
    },
    include: {
      posts: true,
    },
  })
  console.log('Created board:', board)

  // Fetch all users with their posts
  const allBoards = await prisma.board.findMany({
    include: {
      posts: true,
    },
  })
  console.log('All boards:', JSON.stringify(allBoards, null, 2))
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

