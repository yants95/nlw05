import { SettingRepository } from '../repositories'

import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

export class SettingsController {
  async create (request: Request, response: Response) {
    const { chat, username } = request.body
    const settingRepository = getCustomRepository(SettingRepository)

    const setting = settingRepository.create({
      chat,
      username
    })

    await settingRepository.save(setting)
    return response.json(setting)
  }
}