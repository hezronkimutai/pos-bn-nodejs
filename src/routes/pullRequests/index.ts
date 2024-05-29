import { Router } from "express"
import {
    getUserPullRequests, addPullRequest, updatePullRequest,
    deletePullRequest, getPullRequest, getGlobalPullRequests, getProjectPullRequests
} from "../../controllers/pullRequests"
import { authenticateToken } from '../jwt'
import paginate from "../../middlewares/paginate"
import { getPullRequests } from "../../middlewares/getPullRequests"


const router: Router = Router()

router.get("/pullRequests/global", authenticateToken, getPullRequests, getGlobalPullRequests, paginate)

router.get("/pullRequests/user/:userId", authenticateToken, getUserPullRequests, paginate)

router.get("/pullRequests/project/:projectId", authenticateToken, getProjectPullRequests, paginate)

router.get("/pullRequests/:pullRequestId", authenticateToken, getPullRequest)

router.post("/add-pullRequest", authenticateToken, addPullRequest)

router.put("/edit-pullRequest/:pullRequestId", authenticateToken, updatePullRequest)

router.delete("/delete-pullRequest/:pullRequestId", authenticateToken, deletePullRequest)

export default router
