import { ListMessageServiceByUser } from '@/services'

import { Request, Response } from 'express'

export class ListMessagesByUserController {
  async list (request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const listMessages = new ListMessageServiceByUser()
      const listUserMessages = await listMessages.list(id)

      return response.json(listUserMessages)
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }
}
