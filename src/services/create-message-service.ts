import { CreateMessageDTO } from '@/dtos'
import { Message } from '@/entities'

import { getRepository, Repository } from 'typeorm'

export class CreateMessageService {
  private readonly repository: Repository<Message>

  constructor () {
    this.repository = getRepository(Message)
  }

  async create (data: CreateMessageDTO): Promise<Message> {
    const message = this.repository.create({
      admin_id: data.admin_id,
      text: data.text,
      user_id: data.user_id
    })

    await this.repository.save(message)

    return message
  }
}
