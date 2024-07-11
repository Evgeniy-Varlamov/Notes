// 'use client'
// import {useEffect, useState} from 'react';
// import {Provider, useDispatch} from 'react-redux';
// import axios from 'axios';
// import { setNotes } from '../../store';
//
// import NoteList from "@/app/Components/NoteList";
import {getAllNote} from "@/app/logic/api";
import NoteList from "@/app/Components/NoteList/NoteList";
import {Context} from "@/app/logic/context";
import {INote, TNoteList} from "@/app/Interfaces/INote";
import Link from "next/link";
import {redirect} from "next/navigation";
import Header from "@/app/Components/Header/Header";
import {IServerStatus} from "@/app/Interfaces/IServerStatus";

const Home = async  () => {
    const data: IServerStatus = await getAllNote();
    const notes: TNoteList = (Array.isArray(data.response)) ? data.response : []
    return (
        <>
            <Header  />
            <main>
                <div>
                    <NoteList  notes={notes}/>
                </div>
            </main>
        </>


    )
};

export default Home;
