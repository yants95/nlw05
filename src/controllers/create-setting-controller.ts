import { CreateSettingService } from '@/services'

import { Request, Response } from 'express'
export class CreateSettingController {
  async create (request: Request, response: Response): Promise<Response> {
    try {
      const createSettingService = new CreateSettingService()
      const setting = await createSettingService.create(request.body)

      return response.json(setting)
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }
}
