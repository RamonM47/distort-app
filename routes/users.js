import { Router } from 'express'
import * as usersCtrl from '../controllers/users.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, usersCtrl.index)
router.post('/:id/createList', usersCtrl.createList)
router.post('/:id', usersCtrl.addFollower)

export { router }