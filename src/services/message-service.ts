import { MessageRepository } from '@/repositories'
import { CreateMessageDTO } from '@/dtos'
import { Message } from '@/entities'

import { getCustomRepository } from 'typeorm'

export class MessageService {
  async create (data: CreateMessageDTO): Promise<Message> {
    const messageRepository = getCustomRepository(MessageRepository)

    const message = messageRepository.create({
      admin_id: data.admin_id,
      text: data.text,
      user_id: data.user_id
    })

    await messageRepository.save(message)

    return message
  }
}
