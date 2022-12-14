import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

  // Create 1 user
  const newUser =async() =>{
    prisma.user.create({
      data: {
        name:"Steven",
        email:"test@test.com",
        password:"7777777"
      }
    })
  }

  // Read all sser
  const readAll=async()=>{
    const allUsers = await prisma.user.findMany();
    console.log('allUsers',allUsers)
  }
  
  // Update user password
  const updateUserPassword=async()=>{
    await prisma.user.update({
      where: {
        id: "a0cf21cb-5bd9-4b29-8821-3e8345c35e5d",
      },
      data: {
        password: "88888888",
      },
  })
}

  // Delete user
  const deleteUser=async()=>{
    const deleteOne =prisma.user.delete({
      where: {
        id: "a0cf21cb-5bd9-4b29-8821-3e8345c35e5d",
      }
    })
  }


// let test = newUser();