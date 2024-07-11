import styles from './Header.module.scss'
import Link from "next/link";

export default function  Header()  {
    return (
        <header className={styles.header}>
            <h1 className='text-center'>Приложение Заметки</h1>
            <Link className={styles.btn}
                  href={`/new-note/`}>
                    Создать новую заметку
            </Link>
        </header>
    )
}
