import { Connection } from '@/entities'

import { Repository, EntityRepository } from 'typeorm'

@EntityRepository(Connection)
export class ConnectionRepository extends Repository<Connection> {

}
