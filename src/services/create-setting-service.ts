import { CreateSettingDTO } from '@/dtos'
import { Setting } from '@/entities'
import { SettingRepository } from '@/repositories'

import { getCustomRepository } from 'typeorm'
export class CreateSettingService {
  private readonly repository: SettingRepository

  constructor () {
    this.repository = getCustomRepository(SettingRepository)
  }

  async create (data: CreateSettingDTO): Promise<Setting> {
    const userExisting = await this.repository.findOne({ username: data.username })

    if (userExisting) throw new Error('User already exists.')

    const setting = this.repository.create({
      chat: data.chat,
      username: data.username
    })

    await this.repository.save(setting)
    return setting
  }
}
