import { UpdateSettingsService } from '@/services'

import { Request, Response } from 'express'

export class UpdateSettingsController {
  async update (request: Request, response: Response): Promise<Response> {
    try {
      const { username } = request.params
      const { chat } = request.body

      const updateSettings = new UpdateSettingsService()
      const settings = await updateSettings.update(username, chat)

      return response.json(settings)
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }
}
