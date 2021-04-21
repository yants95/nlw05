import { User } from '@/entities'

import { Repository, EntityRepository } from 'typeorm'

@EntityRepository(User)
export class UserRepository extends Repository<User> {

}
