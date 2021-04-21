import { CreateSettingDTO } from '@/dtos'
import { SettingRepository } from '@/repositories'
import { Setting } from '@/entities'

import { getCustomRepository } from 'typeorm'

export class SettingsService {
  async create (data: CreateSettingDTO): Promise<Setting> {
    const settingRepository = getCustomRepository(SettingRepository)

    const userExisting = await settingRepository.findOne({ username: data.username })

    if (userExisting) throw new Error('User already exists.')

    const setting = settingRepository.create({
      chat: data.chat,
      username: data.username
    })

    await settingRepository.save(setting)
    return setting
  }
}
