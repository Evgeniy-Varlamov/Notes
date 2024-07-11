'use server'
import {revalidatePath} from "next/cache";
import {INote} from "@/app/Interfaces/INote";
import {IServerStatus} from "@/app/Interfaces/IServerStatus";

// Основной URL адрес для запросов
const mainURL = 'http://localhost:3001/notes/'

/**
 * Получить список всех заметок
 */
async function  getAllNote(): Promise<IServerStatus> {
    let success: boolean = true
    try {
        const response = await (await fetch(mainURL)).json()
        return {success, response}
    } catch (error) {
        success = false;
        return {success, error: String(error)}
    }
}

/**
 * Получить конкретную заметку
 * @param id - Id заметки
 */
async function getNote(id: string): Promise<IServerStatus>  {
    let success: boolean = true
    try {
        const response = await (await fetch(`${mainURL}${id}`)).json()
        return {success, response}
    } catch (error) {
        success = false;
        return {success, error: String(error)}
    }
}

/**
 *  Создать новую заметку
 * @param body - объект типа INote {id title content}
 */
async function addNote(body: INote): Promise<IServerStatus>  {
    let success: boolean = true
    try {
        const resp = await fetch(mainURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })
        return { success }
    } catch (error) {
        success = false;
        return {success, error: String(error)}
    } finally {
        revalidatePath('/')
    }
}

/**
 * Редактировать  заметку
 * @param id - Id заметки которую нужно редактировать
 * @param body - объект типа INote {id title content}
 */
async function editNote(id: string, body: INote): Promise<IServerStatus>  {
    let success: boolean = true
    try {
        const resp = await fetch(`${mainURL}${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })
        return { success }
    } catch (error) {
        success = false;
        return {success, error: String(error)}
    } finally {
        revalidatePath('/')
    }
}
/**
 * Удаление заметки
 * @param id - Id заметки которую нужно удалить
 */
async function removeNote(id: string): Promise<IServerStatus>  {
    let success: boolean = true
    try {
        const resp = await fetch(`${mainURL}${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        })
        return { success }
    } catch (error) {
        success = false;
        return {success, error: String(error)}
    } finally {
        revalidatePath('/')
    }
}

export {getAllNote, getNote, removeNote, editNote, addNote}
