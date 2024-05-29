import { NextFunction, Request, Response } from "express";

import axios from 'axios';





export const getPullRequests = (req: Request, res: Response, next: NextFunction) => {

    const { link } = req.body

    const owner = link.split("/").slice().reverse()[1];
    const repo = link.split("/").slice().reverse()[0];

    axios
        .get(`https://api.github.com/repos/${owner}/${repo}/pulls`)
        .then((response: any) => {
            const pullRequests = response.data;
            req.body.pullRequests = pullRequests
            next()
        })
        .catch((error: any) => {
            res.status(400).json({ message: 'An error occurred while fetching git pulls', error })
        });
}


export const getGitHubIssues = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { link } = req.body
        const owner = link.split("/").slice().reverse()[1];
        const repo = link.split("/").slice().reverse()[0];
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`);
        const issues = response.data;
        req.body.issues = issues
        next()
    } catch (error) {
        res.status(400).json({ message: 'An error occurred while fetching git issues', error })
    }
}