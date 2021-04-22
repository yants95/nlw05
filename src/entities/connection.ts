import { User } from '@/entities'

import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('connections')
export class Connection {
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
  socket_id: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor () {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
