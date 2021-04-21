import { User } from '@/entities'

import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('messages')
export class Message {
  @PrimaryColumn()
  id: string

  @Column()
  admin_id: string

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User)
  user: User

  @Column()
  user_id: string

  @Column()
  text: string

  @CreateDateColumn()
  created_at: Date

  constructor () {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
