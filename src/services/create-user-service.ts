import { User } from '@/entities'

import { Repository, getRepository } from 'typeorm'

export class CreateUserService {
  private readonly repository: Repository<User>

  constructor () {
    this.repository = getRepository(User)
  }

  async create (email: string): Promise<User> {
    const userExisting = await this.repository.findOne({ email })

    if (userExisting) throw new Error('User already exists.')

    const user = this.repository.create({ email })
    await this.repository.save(user)

    return user
  }
}
