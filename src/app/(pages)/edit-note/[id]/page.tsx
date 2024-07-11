import {redirect} from "next/navigation";
import { getNote} from "@/app/logic/api";
import NoteForm from "@/app/Components/NoteForm/NoteForm";
import styles from '@/app/(pages)/pages.module.scss'
import {IServerStatus} from "@/app/Interfaces/IServerStatus";
import {INote} from "@/app/Interfaces/INote";

export default async function Edit({params}: { params: { id: string } }) {

    const data: IServerStatus = await getNote(params.id);
    const note: INote | undefined = (!Array.isArray(data.response)) ? data.response : undefined
    if (!note) redirect('/error500') // Если объект не найдет то редирект на страницу error500
    return (
        <>
            <main className={styles.main}>
                <h2 className='sub-title'>Редактируем заметку</h2>
                <NoteForm note={note} />
            </main>
        </>
    )
}
