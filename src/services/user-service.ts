import { CreateUserDTO } from '@/dtos'
import { UserRepository } from '@/repositories'
import { User } from '@/entities'

import { getCustomRepository } from 'typeorm'

export class UserService {
  async create ({ email }: CreateUserDTO): Promise<User> {
    const userRepository = getCustomRepository(UserRepository)

    const userExisting = await userRepository.findOne({ email })

    if (userExisting) throw new Error('User already exists.')

    const user = userRepository.create({ email })
    await userRepository.save(user)

    return user
  }
}
