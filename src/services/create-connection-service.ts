import { CreateConnectionDTO } from '@/dtos'
import { Connection } from '@/entities'

import { getRepository, Repository } from 'typeorm'

export class CreateConnectionService {
  private readonly repository: Repository<Connection>

  constructor () {
    this.repository = getRepository(Connection)
  }

  async create (data: CreateConnectionDTO): Promise<Connection> {
    const connection = this.repository.create(data)
    await this.repository.save(connection)

    return connection
  }
}
