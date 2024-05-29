import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';

const MPESA_CONSUMER_KEY = 'NWhpCjeA1GC7QRpXrt5iEUGLk8rotgUJ';
const MPESA_CONSUMER_SECRET = 'WGPY93VcTPllQ1js';
const MPESA_OAUTH_TOKEN_URL = process.env.MPESA_OAUTH_TOKEN_URL || '';


const consumerKey: string = MPESA_CONSUMER_KEY;
const consumerSecret: string = MPESA_CONSUMER_SECRET;
const tokenUrl: string = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';



export const getMpesaCredentials = async (req: Request, res: Response, next: NextFunction) => {
    const auth = Buffer.from(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`).toString('base64');

    console.log({ auth })
    const Timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    let accessToken = 'GD1hq8tkZFanSvRaLPAK3ZaMjhgU'
    const tokenUrl: string = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
    const authorizationHeader: string = `Bearer ${'TldocENqZUExR0M3UVJwWHJ0NWlFVUdMazhyb3RnVUo6V0dQWTkzVmNUUGxsUTFqcw'}`
    try {
        // const accessToken = await refreshAccessToken()

        // console.log({ accessToken });

        const response = await axios.post(tokenUrl, null, {
            headers: {
                'Authorization': authorizationHeader,
            },
        });
        // console.log('Response Status:', response.status); // Log the status code
        // console.log('Response Headers:', response.headers); // Log the response headers
        console.log('Response Data:', response); // 

    } catch (error) {
        // console.log(error)
    }
    const Password = 'MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMxMDE2MTI0MDA5'
    //  Buffer.from(`${SHORTCODE}${LNM_PASSKEY}${Timestamp}`).toString('base64');

    // C 2 B
    const BusinessShortCode = 174379
    const TransactionType = "CustomerPayBillOnline"
    const Amount = 1
    const PartyA = 254708374149
    const PartyB = 174379
    const PhoneNumber = 254708374149
    const CallBackURL = "https://29d9-41-89-187-10.ngrok-free.app/callback"
    const AccountReference = "CompanyXLTD"
    const TransactionDesc = "Payment of X"
    const OriginatorConversationID = uuidv4();

    // B 2 C
    const InitiatorName = "testapi"
    const SecurityCredential = Password;
    const CommandID = "SalaryPayment"
    // const Amount = 10
    // const PartyA = 600977
    // const PartyB = 254708374149
    const Remarks = "Test remarks"
    const QueueTimeOutURL = "https://29d9-41-89-187-10.ngrok-free.app/callback"
    const ResultURL = "https://29d9-41-89-187-10.ngrok-free.app/callback"
    const Occasion = ""


    req.body.mpesa = {
        Timestamp: '20231016124009',
        CallBackURL,
        BusinessShortCode,
        Password,
        TransactionType,
        Amount,
        PartyA,
        PartyB,
        PhoneNumber,
        AccountReference,
        TransactionDesc,
        OriginatorConversationID,
        InitiatorName,
        SecurityCredential,
        CommandID,
        //   Amount,PartyA, PartyB ,
        Remarks,
        QueueTimeOutURL,
        ResultURL,
        Occasion,
        accessToken,
    }
    next()
};

