import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface Users {
  id: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  birthday: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  lastChangedBy: string;
}

interface Tasks {
  id: string;
  title: string;
  description: string;
  date: string;
  hour: string;
  responsable: string;
  status: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  lastChangedBy: string;
}

const userData: Users[] = [
  {
    id: '1234-5678-9874',
    username: 'admin',
    password: '123456',
    email: 'admin@training.io',
    phone: '123456789',
    birthday: '13/5/2021',
    createdAt: new Date(),
    createdBy: 'admin',
    updatedAt: new Date(),
    lastChangedBy: 'admin',
  },
];

const taskData: Tasks[] = [
  {
    id: 'abcr-1',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description:
      'Sed vitae lobortis nulla, ut vulputate augue. Nullam mollis non ante et consequat. Cras quis dapibus augue. Phasellus nec fermentum mauris. Aenean et eros ut erat gravida rhoncus a et velit.',
    date: new Date().toString(),
    hour: new Date().getHours().toString(),
    responsable: 'option 1',
    status: 'todo',
    createdAt: new Date(),
    createdBy: 'admin',
    updatedAt: new Date(),
    lastChangedBy: 'admin',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const item of userData) {
    const user = await prisma.users.create({
      data: item as any,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  for (const item of taskData) {
    const task = await prisma.tasks.create({
      data: item as any,
    });
    console.log(`Created task with id: ${task.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
