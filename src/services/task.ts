import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getAllTasks = async () => {
  return prisma.todo.findMany();
};

export const getTaskCount = async (completed?: boolean) => {
  if(typeof completed === "undefined") {
    return prisma.todo.count();
  }
  return prisma.todo.count({where: {completed}})
}

export const getTask = async (id: string) => {
  return prisma.todo.findFirst({where: {id: Number(id)}});
}

export const createTask = async (data: { title: string; color: string }) => {
  return prisma.todo.create({data});
};

export const updateTask = async (
  id: number,
  data: { title?: string; color?: string; completed?: boolean }
) => {
  return prisma.todo.update({
    where: {id},
    data,
  });
};

export const deleteTask = async (id: number) => {
  return prisma.todo.delete({
    where: {id},
  });
};
