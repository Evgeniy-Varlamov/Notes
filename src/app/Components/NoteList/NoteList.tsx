'use client'
import reducer from '../../../../store';
import {useReducer} from "react";
import NoteItem from "@/app/Components/Note/Note";
import {Context} from "../../logic/context";
import NonNotes from "@/app/Components/NonNotes/NonNotes";

const NoteList = (data: any) => {
    const [notes, dispatch] = useReducer(reducer, (data.notes));
    if (notes.length === 0) {
        return (
            <NonNotes />
        )
    }
    return (
        <Context.Provider value={{dispatch}}>
            <ul className='row p-0 m-0' >
                {
                    notes.map((note) =>
                        <li className='col-lg-4 col-md-6 mb-4' key={note.id}>
                            <NoteItem note={note} />
                        </li>
                    )
                }
            </ul>
        </Context.Provider>
    )
};

export default NoteList;
