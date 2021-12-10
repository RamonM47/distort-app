import { Router } from 'express'
import * as usersCtrl from '../controllers/users.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, usersCtrl.index)
router.get('/:id', usersCtrl.show)
router.post('/:id/createList', usersCtrl.createList)
router.patch('/:id/follow', usersCtrl.addFollower)

export { router }