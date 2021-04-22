import { FindByUsernameService } from '@/services'

import { Request, Response } from 'express'

export class FindByUsernameController {
  async find (request: Request, response: Response): Promise<Response> {
    try {
      const { username } = request.params
      const findUsername = new FindByUsernameService()
      const settings = await findUsername.find(username)

      return response.json(settings)
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }
}
