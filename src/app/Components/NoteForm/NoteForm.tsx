'use client'


import {ChangeEvent, useState} from "react";
import styles from './NoteForm.module.scss'
import {addNote, editNote} from "@/app/logic/api";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {IServerStatus} from "@/app/Interfaces/IServerStatus";

const NoteForm = ({ note = { id: '', title: '', content: '' } }) => {
    let id: string = note.id;
    const [title, setTitle] = useState<string>(note.title);
    const [content, setContent] = useState<string>(note.content);
    const router = useRouter()
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input type="text"
                       className={styles.title}
                       value={title}
                       required
                       placeholder={'Введите заголовок'}
                       onChange={(event: ChangeEvent<HTMLInputElement>)=>{setTitle(event.target.value)}}
                />
                <textarea
                    className={styles.content}
                    value={content}
                    required
                    placeholder={'Введите текст '}
                    onChange={(event: ChangeEvent<HTMLTextAreaElement>)=>{setContent(event.target.value)}}
                ></textarea>
                <button className={styles.btn}
                        disabled={!content || !title}
                        onClick={ async (event)=> {
                            event.preventDefault()
                            try {
                                let result: IServerStatus
                                if (id) {
                                    result = await editNote(id, {id, title, content} );
                                } else {
                                    id = String(+Date.now())
                                    result = await addNote({id, title, content} );
                                }
                                const urlRedirect  = result.success ?  '/' : '/error500'
                                    router.push(urlRedirect)
                            } catch {
                                router.push('/error500')
                            }
                        }}
                >
                    Сохранить
                </button>
                <Link className={styles.back} href={'/'}>Назад</Link>
            </form>
        </div>
    )
}
export default NoteForm;
