import { CreateMessageDTO } from '@/dtos'
import { Message } from '@/entities'
import { MessageRepository } from '@/repositories'

import { getCustomRepository } from 'typeorm'

export class CreateMessageService {
  private readonly repository: MessageRepository

  constructor () {
    this.repository = getCustomRepository(MessageRepository)
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
