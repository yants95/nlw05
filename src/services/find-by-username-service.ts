import { SettingRepository } from '@/repositories'

import { getCustomRepository } from 'typeorm'

export class FindByUsernameService {
  private readonly repository: SettingRepository

  constructor () {
    this.repository = getCustomRepository(SettingRepository)
  }

  async find (username: string) {
    return await this.repository.findOne({ username })
  }
}
