import { Router } from "express"
import {
    getUserIssues, addIssue, updateIssue,
    deleteIssue, getIssue, getGlobalIssues, getProjectIssues
} from "../../controllers/issues"
import { authenticateToken } from '../jwt'
import paginate from '../../middlewares/paginate'

const router: Router = Router()

router.get("/issues/global", authenticateToken, getGlobalIssues, paginate)

router.get("/issues/user/:userId", authenticateToken, getUserIssues, paginate)

router.get("/issues/project/:projectId", authenticateToken, getProjectIssues, paginate)

router.get("/issues/:issueId", authenticateToken, getIssue)

router.post("/add-issue", authenticateToken, addIssue)

router.put("/edit-issue/:issueId", authenticateToken, updateIssue)

router.delete("/delete-issue/:issueId", authenticateToken, deleteIssue)

export default router
