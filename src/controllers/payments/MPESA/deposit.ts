import { Request, Response, NextFunction } from 'express';



import axios, { AxiosRequestConfig } from 'axios';

const stkPushUrl: string = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
const accessToken: string = 'GD1hq8tkZFanSvRaLPAK3ZaMjhgU'; // Replace with your access token

export async function deposit(req: any, res: Response, next: NextFunction) {
    try {
        const { BusinessShortCode,
            Password,
            Timestamp,
            TransactionType,
            Amount,
            PartyA,
            PartyB,
            PhoneNumber,
            CallBackURL,
            AccountReference,
            TransactionDesc,
            accessToken, OriginatorConversationID } = req.body.mpesa
        const data = {
            BusinessShortCode,
            Password,
            Timestamp,
            TransactionType,
            Amount,
            PartyA,
            PartyB,
            PhoneNumber,
            CallBackURL,
            AccountReference,
            TransactionDesc,
            OriginatorConversationID
        };

        const axiosConfig: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
        };

        await axios.post(stkPushUrl, data, axiosConfig);

        req.body.transaction = {
            type: 'DEPOSIT',
            transactionId: OriginatorConversationID,
            ammount: Amount,
            userId: req?.user?.id,
            status:'PENDING'
        }
        next()
    } catch (error) {
        res.status(400).json({ message: "UNKNOWN ERROR", error });
    }
}
