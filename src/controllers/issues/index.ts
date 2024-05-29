import { Response, Request, NextFunction } from "express"
import { IIssue } from "../../types/issues"
import Issue from "../../models/issues"

export const getGlobalIssues = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        req.body.paginate = { collection: Issue, model: 'issues', key: 'globalIssues' }
        next()
    } catch (error) {
        throw error
    }
}

export const getUserIssues = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        req.body.paginate = { collection: Issue, model: 'issues', key: 'userIssues', where: { _id: req.params.projectId } }
        next()
    } catch (error) {
        throw error
    }
}
export const getProjectIssues = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        req.body.paginate = { collection: Issue, model: 'issues', key: 'projectIssues', where: { 'projectId': req.params.projectId } }
        next()
    } catch (error) {
        console.log({ error });
    }
}

export const getIssue = async (req: Request, res: Response): Promise<void> => {
    try {
        const issue: IIssue | null = await Issue.findOne({ _id: req.params.issueId })
        res.status(200).json({ issue })
    } catch (error) {
        throw error
    }
}


export const addIssue = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body

        const issue: IIssue = new Issue({
            name: body.name,
            description: body.description,
            link: body.link,
        })

        const newIssue: IIssue = await issue.save()

        res
            .status(201)
            .json({ message: "Issue added", issue: newIssue })
    } catch (error) {
        throw error
    }
}

export const updateIssue = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateIssue: IIssue | null = await Issue.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allIssues: IIssue[] = await Issue.find()
        res.status(200).json({
            message: "Issue updated",
            issue: updateIssue,
            issues: allIssues,
        })
    } catch (error) {
        throw error
    }
}

export const deleteIssue = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedIssue: IIssue | null = await Issue.findByIdAndRemove(
            req.params.id
        )
        const allIssues: IIssue[] = await Issue.find()
        res.status(200).json({
            message: "Issue deleted",
            issue: deletedIssue,
            issues: allIssues,
        })
    } catch (error) {
        throw error
    }
}
