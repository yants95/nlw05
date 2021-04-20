import { SettingRepository } from './repositories'

import { Router } from 'express'

import { getCustomRepository } from 'typeorm'

const routes = Router()

routes.post('/settings', async (request, response) => {
  const { chat, username } = request.body
  const settingRepository = getCustomRepository(SettingRepository)

  const setting = settingRepository.create({
    chat,
    username
  })

  await settingRepository.save(setting)
  return response.json(setting)
})

export { routes }