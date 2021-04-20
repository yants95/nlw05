import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('settings')
export class Setting {
  @PrimaryColumn()
  id: string

  @Column()
  username: string

  @Column()
  chat: boolean

  @CreateDateColumn()
  updated_at: Date

  @UpdateDateColumn()
  created_at: Date

  constructor () {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}