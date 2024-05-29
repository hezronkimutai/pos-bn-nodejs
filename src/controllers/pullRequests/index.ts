import { Response, Request, NextFunction } from "express"
import { IPullRequest } from "../../types/pullRequests"
import PullRequest from "../../models/pullRequests"
import { log } from "console"

export const getGlobalPullRequests = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        req.body.paginate = { model: 'pullRequests', collection: PullRequest, key: 'globalPullRequests' }
        next()
    } catch (error) {
        throw error
    }
}

export const getUserPullRequests = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        req.body.paginate = { model: 'pullRequests', collection: PullRequest, key: 'userPullRequests', where: {} }
        next()
    } catch (error) {
        throw error
    }
}

export const getProjectPullRequests = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        req.body.paginate = { model: 'pullRequests', collection: PullRequest, key: 'projectPullRequests', where: { "projectId": req.params.projectId } }
        next()
    } catch (error) {
        console.log({ error });
    }
}

export const getPullRequest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const pullRequest: IPullRequest | null = await PullRequest.findOne({ _id: req.params.pullRequestId })
        res.status(200).json({ pullRequest })
    } catch (error) {
        throw error
    }
}


export const addPullRequest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const body = req.body

        const pullRequest: IPullRequest = new PullRequest({
            name: body.name,
            description: body.description,
            link: body.link,
        })

        const newPullRequest: IPullRequest = await pullRequest.save()

        res
            .status(201)
            .json({ message: "PullRequest added", pullRequest: newPullRequest })
    } catch (error) {
        throw error
    }
}

export const updatePullRequest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updatePullRequest: IPullRequest | null = await PullRequest.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allPullRequests: IPullRequest[] = await PullRequest.find()
        res.status(200).json({
            message: "PullRequest updated",
            pullRequest: updatePullRequest,
            pullRequests: allPullRequests,
        })
    } catch (error) {
        throw error
    }
}

export const deletePullRequest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const deletedPullRequest: IPullRequest | null = await PullRequest.findByIdAndRemove(
            req.params.id
        )
        const allPullRequests: IPullRequest[] = await PullRequest.find()
        res.status(200).json({
            message: "PullRequest deleted",
            pullRequest: deletedPullRequest,
            pullRequests: allPullRequests,
        })
    } catch (error) {
        throw error
    }
}
