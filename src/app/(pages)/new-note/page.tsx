import NoteForm from "@/app/Components/NoteForm/NoteForm";
import styles from '@/app/(pages)/pages.module.scss'

export default async function Add() {
    return (
        <>
            <main className={styles.main}>
                <h2 className='sub-title'>Создать новую заметку</h2>
                <NoteForm  />
            </main>
        </>
    )
}
