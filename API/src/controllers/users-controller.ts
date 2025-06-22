import { AppError } from "@/utils/AppError"
import { Request, Response } from "express"
import { prisma } from "@/database/prisma"
import { UserRole } from "@prisma/client"
import { hash } from "bcrypt"
import { z } from "zod"

class UsersController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string().trim().min(2, { message: "Name is required." }),
      email: z
        .string()
        .trim()
        .email({ message: "E-mail not valid" })
        .toLowerCase(),
      password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters long." }),
      role: z
        .enum([UserRole.employee, UserRole.manager])
        .default(UserRole.employee),
    })

    const { name, email, password, role } = bodySchema.parse(request.body)
    console.log({ name, email, password })

    const userWithSameEmail = await prisma.user.findFirst({ where: { email } })

    if (userWithSameEmail) {
      throw new AppError("A user with this email already exists.")
    }

    const hashedPassword = await hash(password, 8)

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    })

    response.status(201).json()
  }
}

export { UsersController }
