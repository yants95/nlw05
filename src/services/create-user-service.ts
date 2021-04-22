import { User } from '@/entities'
import { UserRepository } from '@/repositories'

import { getCustomRepository } from 'typeorm'
export class CreateUserService {
  private readonly repository: UserRepository

  constructor () {
    this.repository = getCustomRepository(UserRepository)
  }

  async create (email: string): Promise<User> {
    const userExisting = await this.repository.findOne({ email })

    if (userExisting) throw new Error('User already exists.')

    const user = this.repository.create({ email })
    await this.repository.save(user)

    return user
  }
}
