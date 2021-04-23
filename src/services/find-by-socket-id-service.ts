import { ConnectionRepository } from '@/repositories'

import { getCustomRepository } from 'typeorm'

export class FindBySocketIdService {
  private readonly repository: ConnectionRepository

  constructor () {
    this.repository = getCustomRepository(ConnectionRepository)
  }

  async find (socket_id: string) {
    return await this.repository.findOne({ socket_id })
  }
}
