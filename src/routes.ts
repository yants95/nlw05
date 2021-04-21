import { SettingsController, UserController, MessageController } from '@/controllers'

import { Router } from 'express'

const routes = Router()

const settingsController = new SettingsController()
const usersController = new UserController()
const messageController = new MessageController()

routes.post('/settings', settingsController.create)
routes.post('/users', usersController.create)
routes.post('/messages', messageController.create)

export { routes }
