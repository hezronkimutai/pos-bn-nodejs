import { Response, Request, NextFunction } from "express"
import { IProject } from "../../types/projects"
import Project from "../../models/projects"
import PullRequests from "../../models/pullRequests"
import Issues from "../../models/issues"
import { log } from "console"

export const getGlobalProjects = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        req.body.paginate = { model: 'projects', collection: Project, key: 'globalProjects' }
        next()
    } catch (error) {
        throw error
    }
}

export const getUserProjects = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        req.body.paginate = { model: 'projects', collection: Project, key: 'userProjects', where: {} }
        next()
    } catch (error) {
        throw error
    }
}


export const getProject = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const project: IProject | null = await Project.findOne({ _id: req.params.projectId })
        res.status(200).json({ project })
    } catch (error) {
        throw error
    }
}


const addProject = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const body = req.body
        console.log(body.pullRequests);

        const project: IProject = new Project({
            name: body.name,
            description: body.description,
            link: body.link,
        })


        const newProject: IProject = await project.save()
        const pullRequests = await PullRequests.insertMany(body.pullRequests.map((pullRequest: any) => ({ ...pullRequest, projectId: newProject._id })))
        const issues = await Issues.insertMany(body.issues.map((issue: any) => ({ ...issue, projectId: newProject._id })))

        res
            .status(201)
            .json({ message: "Project added", project: newProject, pullRequests: [], issues })
    } catch (error) {
        throw error
    }
}

const updateProject = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateProject: IProject | null = await Project.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allProjects: IProject[] = await Project.find()
        res.status(200).json({
            message: "Project updated",
            project: updateProject,
            projects: allProjects,
        })
    } catch (error) {
        throw error
    }
}

const deleteProject = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const deletedProject: IProject | null = await Project.findByIdAndRemove(
            req.params.id
        )
        const allProjects: IProject[] = await Project.find()
        res.status(200).json({
            message: "Project deleted",
            project: deletedProject,
            projects: allProjects,
        })
    } catch (error) {
        throw error
    }
}

export { addProject, updateProject, deleteProject }



