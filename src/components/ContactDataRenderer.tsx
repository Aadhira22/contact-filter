import {useMemo, useState} from 'react'
import { Contacts} from '../data/Contacts'
import type { Contact} from '../data/Contacts'
export const ContactDataRenderer = () => {
    const [query,setQuery]=useState("");

    const visibleContacts: Contact[] = useMemo(() =>{
        if(!query.trim()) return Contacts;
        const keyword = query.toLowerCase();
        return Contacts.filter(
            ({name, email}) =>
                name.toLowerCase().includes(keyword) || email.toLowerCase().includes(keyword)
        );
    }, [query]);
  return (
    <div className='container'>
        <header>
            <h1>Contact List</h1>
        </header>
        <div className='filter-section'>
            <input className='filter-input' type='search' placeholder='Search' value={query}
            onChange={(e)=>setQuery(e.target.value)}/>
        </div>
        <div className='contacts-grid'>
            {visibleContacts.length > 0 ? (
                visibleContacts.map(({id,name,email,phone}) =>(
                    <article key={id} className='contact-card'>
                        <h2 className='contact-name'>Name: {name}</h2>
                        <h2 className='contact-email'>Email: {email}</h2>
                        <h2 className='contact-phone'>Phone: {phone}</h2>
                    </article>
                ))
            ) : (
                <p>No Contact Found</p>
            )}
        </div>
    <style>
            {
                `
                .container{
                margin: 0 auto;
                max-width:1000px;}
                h1{
                margin-bottom:30px;
                text-align: center;
                font-size:2.5rem;
                }
                .filter-section{
                display:flex;
                justify-content:center;
                margin-bootm:30px;}
                .filter-input{
                width:100%;
                max-width:500px;
                margin-bottom:30px;
                padding:15px 20px;
                font-size: 16px;
                border: 2px solid;
                outline:none;
                transition:border-color 0.3s;
                }
                .filter-input:focus{
                border-color:#3498db;}
                .contacts-grid{
                display:grid;
                gap:20px;
                grid-template-column:repeat(auto-fill,minmax(300px,1fr));}
                .contact-card{
                backgroud:#f5f5f5;
                padding:10px;
                border-radius:10px;
                box-shadow:0 2px 10px rgba(0,0,0,0.1);
                transition:transform 0.2s,box-shadpw 0.2s;}
                .contact-card:hover{
                transform:translateY(-2px);
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);}
                @media (max-width:760px){
                h1{
                 font-size:2rem;
                 margin-bottom:20px;}
                 .contacts-grid{
                 grid-tempelate-column: 1fr;
                 gap:15px;}
                .contact-name{
                font-size:16px;}}
                `
            }
        </style>
    </div>
  );
};

