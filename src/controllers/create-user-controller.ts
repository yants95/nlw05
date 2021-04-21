import { CreateUserService } from '@/services'

import { Request, Response } from 'express'

export class CreateUserController {
  async create (request: Request, response: Response): Promise<Response> {
    try {
      const { email } = request.body
      const createUserService = new CreateUserService()
      const user = await createUserService.create(email)

      return response.json(user)
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }
}
