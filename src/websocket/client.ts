import { io } from '../http'

import {
  CreateConnectionService,
  CreateUserService,
  FindUserByEmailService,
  FindUserByIdService,
  CreateMessageService,
  ListMessageServiceByUser
} from '@/services'

import { CreateConnectionDTO, CreateMessageDTO, CreateParamsDTO } from '@/dtos'

io.on('connect', (socket) => {
  const createConnectionService = new CreateConnectionService()
  const createUserService = new CreateUserService()
  const findUserByEmailService = new FindUserByEmailService()
  const findUserByIdService = new FindUserByIdService()
  const createMessageService = new CreateMessageService()
  const listMessageServiceByUser = new ListMessageServiceByUser()

  socket.on('client_first_access', async params => {
    const socket_id = socket.id
    const { text, email } = params as CreateParamsDTO
    let user_id = null

    let connectionsParams: CreateConnectionDTO = {
      socket_id: '',
      user_id: ''
    }

    const userExists = await findUserByEmailService.find(email)

    if (!userExists) {
      const user = await createUserService.create(email)

      connectionsParams = {
        socket_id,
        user_id: user.id
      }

      await createConnectionService.create(connectionsParams)

      user_id = user.id
    } else {
      user_id = userExists.id

      const connection = await findUserByIdService.find(userExists.id)

      if (!connection) {
        await createConnectionService.create(connectionsParams)
      } else {
        connection.socket_id = socket_id
        await createConnectionService.create(connection)
      }
    }

    const messageParams: CreateMessageDTO = {
      user_id,
      text
    }

    await createMessageService.create(messageParams)

    const allMessages = await listMessageServiceByUser.list(user_id)

    socket.emit('client_list_all_messages', allMessages)
  })
})
