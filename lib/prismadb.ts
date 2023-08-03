import { PrismaClient } from '@prisma/client';

// В разработке команда next dev очищает кеш Node.js при запуске.
// Это инициализирует новый экземпляр PrismaClient каждый раз из - за горячей перезагрузки, что создает соединение с базой данных.
// Решение этой проблемы заключается в создании единственного экземпляра PrismaClient и сохранении его в объекте globalThis.

declare global {
  var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismadb;

export default prismadb;
