import { Connection } from '@/entities'
import { ConnectionRepository } from '@/repositories'

import { getCustomRepository } from 'typeorm'

export class UpdateAdminByIdService {
  private readonly repository: ConnectionRepository

  constructor () {
    this.repository = getCustomRepository(ConnectionRepository)
  }

  async update (user_id: string, admin_id: string) {
    return await this.repository
      .createQueryBuilder()
      .update(Connection)
      .set({ admin_id })
      .where('user_id = :user_id', { user_id })
      .execute()
  }
}
