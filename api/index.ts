import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import path from 'path'

const server = fastify()
export const prisma = new PrismaClient()
async function create (){
  await prisma.games.create({
    data:{
      partyName: "JOURS III",
      winner: "null",
      chasseur: true,
      cupidon: true
    }
  })
  
};
//create()
server.register(require("@fastify/static"),{
  root: path.join(__dirname, 'src', "assets"),
  "prefix": "/public/"
})
server.register(require("./src/routes/games/"));

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})