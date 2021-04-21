import { Message } from '@/entities'

import { getRepository, Repository } from 'typeorm'
export class ListMessageServiceByUser {
  private readonly repository: Repository<Message>

  constructor () {
    this.repository = getRepository(Message)
  }

  async list (user_id: string): Promise<Message[]> {
    return await this.repository.find({
      where: { user_id },
      relations: ['user']
    })
  }
}
