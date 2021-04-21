import { MessageService } from '@/services'

import { Request, Response } from 'express'

export class MessageController {
  async create (request: Request, response: Response): Promise<Response> {
    try {
      const { admin_id, user_id, text } = request.body
      const messageService = new MessageService()

      const messageParams = {
        admin_id,
        user_id,
        text
      }
      const message = await messageService.create(messageParams)

      return response.json(message)
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }
}
