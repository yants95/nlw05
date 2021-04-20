import { Setting } from '../entities'

import { Repository, EntityRepository } from 'typeorm'

@EntityRepository(Setting)
export class SettingRepository extends Repository<Setting> {

}
