import { PrismaClient } from '@prisma/client'

// para instanciar un solo elemento Prismacliente es necesario tener este codigo
// ya que cada vez q se reinicie el server automaticamente se generaba un objeto PrismaClient nuevamente
// lo cual es incorrecto
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
