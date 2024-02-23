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
    cnt: number;
    msg: string[];
}

export type MsgResp = {
    type: 'success';
    rcv: {
        [user: string]: ReceivedMsg;
    }
}