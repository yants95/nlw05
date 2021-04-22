import { UserRepository } from '@/repositories'

import { getCustomRepository } from 'typeorm'

export class FindUserByEmailService {
  private readonly repository: UserRepository

  constructor () {
    this.repository = getCustomRepository(UserRepository)
  }

  async find (email: string) {
    return await this.repository.findOne({ email })
  }
}
