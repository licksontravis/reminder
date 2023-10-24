import React from 'react';
import './board.css';
import List from './list';

const Info = [
    {
        img : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Sofia Cooper", birthday : "1995-10-21"
    },
    {
        img : "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Miller Wright", birthday : "1998-05-29"
    },
    {
        img : "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Tara Kelly", birthday : "1991-12-02"
    },
    {
        img : "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Brianna Baker", birthday : "1994-07-05"
    },
    {
        img : "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Brad Myers", birthday : "1997-01-28"
    }
]

export default function Board() {
  return (
    <main id='site-main'>
        <h1 className='text-dark title'>Birthday Reminder</h1>

        <div className='board'>
            <List info={Today(Info)}></List>
            <h2 className='upcoming text-dark'>Upcoming</h2>
            <List info={Upcoming(Info,1000)} upcoming={true}></List>
        </div>
    </main>
  )
}

function Today(person){
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();

    let filter = person.filter(data => {
        let day = new Date(data.birthday).getDate();
        let month = new Date(data.birthday).getMonth();
        return currentDay === day && currentMonth === month;
    })

    return filter;
}

// upcoming birthday
function Upcoming(person, toMonth){
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDate();

    let filter = person.filter(data => {
        let month = new Date(data.birthday).getMonth();
        let day = new Date(data.birthday).getDate();

        // eslint-disable-next-line
        if(currentDay === day) return
        return (currentMonth <= month) && (month <= (currentMonth + toMonth))
    })

    return filter;
}
