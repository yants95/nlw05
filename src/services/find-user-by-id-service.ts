import { ConnectionRepository } from '@/repositories'

import { getCustomRepository } from 'typeorm'

export class FindUserByIdService {
  private readonly repository: ConnectionRepository

  constructor () {
    this.repository = getCustomRepository(ConnectionRepository)
  }

  async find (user_id: string) {
    return await this.repository.findOne({ user_id })
  }
}
