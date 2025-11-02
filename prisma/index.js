import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    //todo create (insert data)
    //? single user
    /*
    const user=await prisma.user.create({
        data:{
            name:"sumit",
            email:"sumit@gmail.com"
        }
    })
    */

    //? multiple user
    /*
    const user = await prisma.user.createMany({
        data: [
            { name: "rahul", email: "rahil@gmail.com" },
            { name: "prasad", email: "prasad@gmail.com" },
        ],
    });

    console.log(user);
    */


    //todo read data
    //?all users
    /*
    const user =await prisma.user.findMany();
    console.log(user)
    */

    //? get a single user by ID
    /*
    const user=await prisma.user.findUnique({
        where:{id:2},
    });
    */

    //? get a singlr value Filter 
    /*
        const user= await prisma.user.findMany({
            where:{name:"sumit"},
        })
    */


    //todo update (Modify data)
    //? update one user
    /*
        const user=await prisma.user.update({
            where:{id:3},
            data:{name:"sumitPrasad"}
        })
    */

    //? update many user
    /*
        const user = await prisma.user.updateMany({
            where: { id: 3 },
            data: { name: "prasad" }
        })
     */


    //todo Delete 
    // ?single user
    /*
    const user=await prisma.user.delete({
        where:{id:3},
    })
    */

    //?MULTIPLE USER
/*
    const user=prisma.user.deleteMany({
        where:[
            {id:1},
            {id:2},
            {id:3},
            {name:"prasad"},
            {id:4},
        ]
    })
*/

    console.log(user)
}


main().catch((e) => console.error(e)).finally(async () => {
    await prisma.$disconnect();
})