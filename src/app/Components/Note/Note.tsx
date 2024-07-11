'use client'
import {INote} from "@/app/Interfaces/INote";
import styles from './NoteItem.module.scss'
import Link from "next/link";
import  {useContext, useEffect, useState} from "react";
import {Context} from "@/app/logic/context";
import {removeNote} from "@/app/logic/api";
import {useRouter} from "next/navigation";

export default function  NoteItem({note}:  { note: INote})  {
    const {id, title, content} = note
    const [date, setDate] = useState('');
    useEffect(() => {
        setDate(new Date(Number(id)).toLocaleString());
    }, []);
    const { dispatch }  = useContext<any>(Context)
    const router = useRouter()
    return  (
        <article className={styles.container}>
            <div className={styles.flex}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.flex}>
                    <Link href={`/edit-note/${id}`}
                    >
                        <button>✏️</button>
                    </Link>
                    <Link href={`/`}>
                        <button onClick={async (event) =>{
                            event.preventDefault();
                            try {
                                const  result =  await removeNote(id); // Удаление Записи
                                (result.success) ?
                                    dispatch({type: 'remove', payload: id}) : // Обновление списка (чтобы не делать лишни запрос к БД)
                                        router.push('/error500') // Редирект на страницу error500
                            } catch {
                                router.push('/error500') // Редирект на страницу error500
                            };
                        }}>❌</button>
                    </Link>
                </div>
            </div>
            <time className={styles.time}>Заметка создана {date}</time>
            <p className={styles.content}>{content}</p>
        </article>
    )
}

