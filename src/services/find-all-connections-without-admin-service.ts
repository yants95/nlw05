import { ConnectionRepository } from '@/repositories'

import { getCustomRepository } from 'typeorm'

export class FindAllConnectionsWithoutAdminService {
  private readonly repository: ConnectionRepository

  constructor () {
    this.repository = getCustomRepository(ConnectionRepository)
  }

  async find () {
    return await this.repository.find({
      where: { admin_id: null },
      relations: ['user']
    })
  }
}
