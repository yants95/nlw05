import { Message } from '@/entities'

import { Repository, EntityRepository } from 'typeorm'

@EntityRepository(Message)
export class MessageRepository extends Repository<Message> {

}
