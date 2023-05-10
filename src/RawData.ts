export interface AuthenticatedPayload {
    user: RawUser;
    servers: any[];
    serverMembers: any[];
    messageMentions: any[]
    channels: any[];
    serverRoles: any[];
    presences: any[];
    friends: any[];
    inbox: any[];
    lastSeenServerChannelIds: Record<string, number>; // { [channelId]: timestamp }
}
export interface RawUser {
    id: string;
    avatar?: string;
    banner?: string;
    username: string;
    hexColor: string;
    tag: string;
    badges: number;
    joinedAt?: number;
}

export enum MessageType {
    CONTENT = 0,
    JOIN_SERVER = 1,
    LEAVE_SERVER = 2,
    KICK_USER = 3,
    BAN_USER = 4
}

export interface RawMessage {
    id: string;
    channelId: string;
    content?: string;
    createdBy: RawUser;
    type: MessageType;
    createdAt: number;
    editedAt?: number;
    mentions?: Array<RawUser>;
    attachments?: Array<any>
  }