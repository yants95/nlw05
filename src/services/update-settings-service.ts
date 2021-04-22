import { SettingRepository } from '@/repositories'
import { Setting } from '@/entities'

import { getCustomRepository } from 'typeorm'

export class UpdateSettingsService {
  private readonly repository: SettingRepository

  constructor () {
    this.repository = getCustomRepository(SettingRepository)
  }

  async update (username: string, chat: boolean) {
    await this.repository
      .createQueryBuilder()
      .update(Setting)
      .set({ chat })
      .where('username = :username', { username })
      .execute()
  }
}
