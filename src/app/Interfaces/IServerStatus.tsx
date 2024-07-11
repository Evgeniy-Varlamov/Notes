import {INote, TNoteList} from "@/app/Interfaces/INote";

export interface IServerStatus {
    success: boolean,
    error?: string,
    response?: INote | TNoteList
}
