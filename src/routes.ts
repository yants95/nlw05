import {
  CreateSettingController,
  CreateUserController,
  CreateMessageController,
  ListMessagesByUserController,
  FindByUsernameController,
  UpdateSettingsController
} from '@/controllers'

import { Router } from 'express'

const routes = Router()

const createSettingController = new CreateSettingController()
const createUserController = new CreateUserController()
const createMessageController = new CreateMessageController()
const listMessagesByUserController = new ListMessagesByUserController()
const findByUsernameController = new FindByUsernameController()
const updateSettingsController = new UpdateSettingsController()

routes.post('/settings', createSettingController.create)
routes.get('/settings/:username', findByUsernameController.find)
routes.put('/settings/:username', updateSettingsController.update)

routes.post('/users', createUserController.create)

routes.post('/messages', createMessageController.create)
routes.get('/messages/:id', listMessagesByUserController.list)

export { routes }
