import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string

  @Column()
  email: string

  @CreateDateColumn()
  created_at: Date

  constructor () {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
