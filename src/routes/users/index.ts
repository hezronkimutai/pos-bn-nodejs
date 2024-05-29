import { Router } from "express"
import { getUsers, addUser, updateUser, deleteUser, loginUser, getUser } from "../../controllers/users"
import paginate from '../../middlewares/paginate'

const router: Router = Router()

router.get("/users", getUsers, paginate)

router.get("/users/:userId", getUser)

router.post("/signup", addUser)

router.post("/login", loginUser)

router.put("/edit-user/:userId", updateUser)

router.delete("/delete-user/:userId", deleteUser)



export default router