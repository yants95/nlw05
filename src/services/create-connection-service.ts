import { CreateConnectionDTO } from '@/dtos'
import { Connection } from '@/entities'
import { ConnectionRepository } from '@/repositories'

import { getCustomRepository } from 'typeorm'

export class CreateConnectionService {
  private readonly repository: ConnectionRepository

  constructor () {
    this.repository = getCustomRepository(ConnectionRepository)
  }

  async create (data: CreateConnectionDTO): Promise<Connection> {
    const connection = this.repository.create(data)
    await this.repository.save(connection)

    return connection
  }
}
