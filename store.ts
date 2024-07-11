import {INote, TNoteList} from "@/app/Interfaces/INote";

type TAction = {
    type: string,
    payload?: INote | string | INote[]
}


export default function   (list: TNoteList, action: TAction) {
    switch (action.type) {
        case 'remove':
            return list.filter((note: INote) => note.id !== action.payload)
        default:
            return [...list]
    }
}
