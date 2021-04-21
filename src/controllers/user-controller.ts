import { UserService } from '@/services'

import { Request, Response } from 'express'

export class UserController {
  async create (request: Request, response: Response): Promise<Response> {
    try {
      const { email } = request.body
      const userService = new UserService()
      const user = await userService.create(email)

      return response.json(user)
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }
}
