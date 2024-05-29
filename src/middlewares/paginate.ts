import { Request, Response } from "express";
import Issues from '../models/issues'
import Users from '../models/users'
import PullRequests from "../models/pullRequests";
import Projects from "../models/projects";
import Payments from '../models/wallet'

// Define the types for your models object
interface Models {
    issues: typeof Issues;
    users: typeof Users;
    pullRequests: typeof PullRequests;
    projects: typeof Projects;
    payments: typeof Payments;
}

const models: Models = {
    issues: Issues,
    users: Users,
    pullRequests: PullRequests,
    projects: Projects,
    payments: Payments
}

const paginate = (req: Request, res: Response) => {
    const unParsedpage = req.query.page as string
    const unParsedItemsPerPage = req.query.itemsPerPage as string

    const page = parseInt(unParsedpage) || 1;
    const itemsPerPage = parseInt(unParsedItemsPerPage) || 1000;

    const startIndex = (page - 1) * itemsPerPage;

    (models as Record<string, any>)[req.body.paginate.model]
        .find({ ...(req.body.paginate.where || {}) })
        .skip(startIndex)
        .limit(itemsPerPage)
        .then((docs: any) => {
            res.json({
                totalItems: docs.length,
                page,
                totalPages: Math.ceil(docs.length / itemsPerPage),
                [req.body.paginate.key]: docs,
            });
        })
        .catch((error: any) => {
            console.error(error);
            res.json({
                message: 'An error occurred while fetching',
                error
            });
        });
};







export const selectAll = (req: Request, res: Response) => {
    const unParsedpage = req.query.page as string
    const unParsedItemsPerPage = req.query.itemsPerPage as string

    const page = parseInt(unParsedpage) || 1;
    const itemsPerPage = parseInt(unParsedItemsPerPage) || 1000;

    const startIndex = (page - 1) * itemsPerPage;

    (models as Record<string, any>)[req.body.paginate.model]
        .find({ ...(req.body.paginate.where || {}) })
        .skip(startIndex)
        .limit(itemsPerPage)
        .then((docs: any) => {
            res.json({
                totalItems: docs.length,
                page,
                totalPages: Math.ceil(docs.length / itemsPerPage),
                [req.body.paginate.key]: docs,
            });
        })
        .catch((error: any) => {
            console.error(error);
            res.json({
                message: 'An error occurred while fetching',
                error
            });
        });
};



export default paginate;
