import { io } from '../http'
import { FindAllConnectionsWithoutAdminService, ListMessageServiceByUser } from '@/services'

io.on('connect', async socket => {
  const findAllConnectionsWithoutAdminService = new FindAllConnectionsWithoutAdminService()
  const listMessageServiceByUser = new ListMessageServiceByUser()

  const allConnectionsWithoutAdmin = await findAllConnectionsWithoutAdminService.find()

  io.emit('admin_list_all_users', allConnectionsWithoutAdmin)

  socket.on('admin_list_messages_by_user', async (params, callback) => {
    const { user_id } = params
    const allMessages = await listMessageServiceByUser.list(user_id)
    callback(allMessages)
  })
})
