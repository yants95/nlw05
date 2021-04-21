import { CreateMessageService } from '@/services'

import { Request, Response } from 'express'

export class CreateMessageController {
  async create (request: Request, response: Response): Promise<Response> {
    try {
      const createMessageService = new CreateMessageService()
      const message = await createMessageService.create(request.body)

      return response.json(message)
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }
}
