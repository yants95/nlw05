import { io } from '../http'
import { FindAllConnectionsWithoutAdminService, ListMessageServiceByUser, CreateMessageService, FindUserByIdService, UpdateAdminByIdService } from '@/services'
import { CreateMessageDTO } from '@/dtos'

io.on('connect', async socket => {
  const findAllConnectionsWithoutAdminService = new FindAllConnectionsWithoutAdminService()
  const listMessageServiceByUser = new ListMessageServiceByUser()
  const createMessageService = new CreateMessageService()
  const findUserByIdService = new FindUserByIdService()
  const updateAdminByIdService = new UpdateAdminByIdService()

  const allConnectionsWithoutAdmin = await findAllConnectionsWithoutAdminService.find()
  io.emit('admin_list_all_users', allConnectionsWithoutAdmin)

  socket.on('admin_list_messages_by_user', async (params, callback) => {
    const { user_id } = params
    const allMessages = await listMessageServiceByUser.list(user_id)
    callback(allMessages)
  })

  socket.on('admin_send_message', async params => {
    const { text, user_id } = params

    const messageParams: CreateMessageDTO = {
      ...params,
      admin_id: socket.id
    }

    await createMessageService.create(messageParams)
    const { socket_id } = await findUserByIdService.find(user_id)

    io.to(socket_id).emit('admin_send_to_client', {
      text,
      socket_id: socket.id
    })
  })

  socket.on('admin_user_in_support', async params => {
    const { user_id } = params
    await updateAdminByIdService.update(user_id, socket.id)

    const allConnectionsWithoutAdmin = await findAllConnectionsWithoutAdminService.find()
    io.emit('admin_list_all_users', allConnectionsWithoutAdmin)
  })
})
