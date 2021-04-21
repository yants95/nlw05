import { SettingsService } from '@/services'

import { Request, Response } from 'express'
export class SettingsController {
  async create (request: Request, response: Response): Promise<Response> {
    try {
      const settingsService = new SettingsService()
      const setting = await settingsService.create(request.body)

      return response.json(setting)
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }
}
