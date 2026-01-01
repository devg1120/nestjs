import { prisma } from './lib/prisma.js'
import * as bcrypt from './src/common/bcrypt.js';

const enc_password = await bcrypt.encodePassword("test");

async function main() {
  // Create a new user with a post
  let user = await prisma.user.create({
    data: {
      employee_number: '00000001',
      //password: 'test',
      password: enc_password,
      name: 'Alice',
      email: 'alice@prisma.io',
      },
    })

  console.log('Created user:', user)

  user = await prisma.user.create({
    data: {
      employee_number: '00000002',
      //password: 'test',
      password: enc_password,
      name: 'Gusa',
      email: 'gusa@prisma.io',
      role: 'GENERAL',
      },
    })

  console.log('Created user:', user)
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

