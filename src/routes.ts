import { CreateSettingController, CreateUserController, CreateMessageController, ListMessagesByUserController } from '@/controllers'

import { Router } from 'express'

const routes = Router()

const createSettingController = new CreateSettingController()
const createUserController = new CreateUserController()
const createMessageController = new CreateMessageController()
const listMessagesByUserController = new ListMessagesByUserController()

routes.post('/settings', createSettingController.create)

routes.post('/users', createUserController.create)

routes.post('/messages', createMessageController.create)
routes.get('/messages/:id', listMessagesByUserController.list)

export { routes }
