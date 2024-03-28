export interface MsgReq {
    type: 'pr-msg';
    user: string;
    ack: {
        [user: string]: number;
    }
    send: {
        [user: string]: string[];
    }
}

export type ReceivedMsg = {
    /**
     * number of all messages ever sent to "us" from the according sender
     */
    cnt: number;
    msg: string[];
}

export type MsgResp = {
    type: 'success';
    rcv: {
        [user: string]: ReceivedMsg;
    }
}