import { CreateSettingDTO } from '@/dtos'
import { Setting } from '@/entities'

import { getRepository, Repository } from 'typeorm'

export class CreateSettingService {
  private readonly repository: Repository<Setting>

  constructor () {
    this.repository = getRepository(Setting)
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
