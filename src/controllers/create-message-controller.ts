import { CreateMessageService } from '@/services'

import { Request, Response } from 'express'

export class CreateMessageController {
  async create (request: Request, response: Response): Promise<Response> {
    try {
      const { admin_id, user_id, text } = request.body
      const createMessageService = new CreateMessageService()

      const messageParams = {
        admin_id,
        user_id,
        text
      }
      const message = await createMessageService.create(messageParams)

      return response.json(message)
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }
}
