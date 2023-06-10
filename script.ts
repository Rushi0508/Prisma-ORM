import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// const prisma = new PrismaClient({log: ["query"]})
// We can log the queries by this.

async function main() {
    /*************Deletes all********/

    // await prisma.user.deleteMany()

    /*********Create a single user*******/

    // const user = await prisma.user.create({
    //     data: {
    //         name: "Rushi",
    //         age: 19,
    //         email: "rushigandhi14@gmail.com",
    //         userPreference:{
    //             create: {
    //                 emailUpdates: true,
    //             }
    //         }
    //     },
    //     // include:{
    //     //     userPreference: true
    //     // }
    //     select: {
    //         name: true,
    //         userPreference: {
    //             select: {id: true}
    //         }
    //     }
    //     // We can only use any one from select or include.
    //     // Select and Include will return the given fields which we mention.
    // })
    // console.log(user);

    /******** Creates Multiple Users **********/

    // const users = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "Virat",
    //             age: 34,
    //             email: "virat@gmail.com"
    //         },{
    //             name: "Rohit",
    //             age: 36,
    //             email: "rohit@gmail.com"
    //         }
    //     ]
    // })
    // console.log(users);
    
    /******** Read UNIQUE ************/

    // const user = await prisma.user.findUnique({
    //     where: {
    //         // name_age:{
    //         //     name: "Rohit",
    //         //     age: 36
    //         // },
    //         email: "virat@gmail.com"
    //     }
    // })
    // console.log(user);

    /************* Read by Find First ***************/

    // const user = await prisma.user.findFirst({
    //     where: {
    //         name: "Rushi"
    //     }
    // })
    // console.log(user);

    /*********** Find Many  ********** */

    // const users = await prisma.user.findMany({
    //     where: {
    //         // userPreference: {
    //         //     emailUpdates: true
    //         // }
    //         writtenPosts: {
    //             // every: {
    //             //     title: "HELLO"
    //             // }
    //             // none: {
    //             //     title: "HELLO"
    //             // }
    //             some: {
    //                 title: "HELLO"
    //             }
    //         }
    //     },
    //     orderBy: {
    //         age: "asc"
    //     },
    // })
    // console.log(users);

    /********* Update *********** */
    const user = await prisma.user.update({
        where:{
            email: "rohit@gmail.com"
        },
        data: {
            userPreference: {
                connect: {
                    id: "3185ec14-9af5-497f-b0a5-6398473c2327"
                }
            }
        }
    })
    console.log(user);
    

    
}

main()
    .catch(e=>{
        console.error(e.message)
    })
    .finally(async ()=>{
        await prisma.$disconnect()
    })