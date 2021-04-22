import { Message } from '@/entities'
import { MessageRepository } from '@/repositories'

import { getCustomRepository } from 'typeorm'
export class ListMessageServiceByUser {
  private readonly repository: MessageRepository

  constructor () {
    this.repository = getCustomRepository(MessageRepository)
  }

  async list (user_id: string): Promise<Message[]> {
    return await this.repository.find({
      where: { user_id },
      relations: ['user']
    })
  }
}
