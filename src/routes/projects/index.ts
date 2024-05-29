import { Router } from "express"
import { getUserProjects, addProject, updateProject, deleteProject, getProject, getGlobalProjects } from "../../controllers/projects"
import { authenticateToken } from '../jwt'
import { getPullRequests, getGitHubIssues } from '../../middlewares/getPullRequests'
import paginate from '../../middlewares/paginate'

const router: Router = Router()

router.get("/projects/global", authenticateToken, getGlobalProjects, paginate)

router.get("/projects/user/:userId", authenticateToken, getUserProjects, paginate)

router.get("/projects/:projectId", authenticateToken, getProject)

router.post("/add-project", authenticateToken, getPullRequests, getGitHubIssues, addProject)

router.put("/edit-project/:projectId", authenticateToken, updateProject)

router.delete("/delete-project/:projectId", authenticateToken, deleteProject)

export default router
