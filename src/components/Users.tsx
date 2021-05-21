import React from 'react'
import book from "../images/book.svg"
import axios from "axios"
import { Link } from 'react-router-dom'
interface userProps{
    totalCountUser: string;
    users: { id: number, login: string, avatar_url: string, html_url:string}[]
}


const Users: React.FC<userProps> = ({totalCountUser, users}) => {
    return (
        <div className="users__search__page">
            <section className="results">
                <h1>{totalCountUser} User Results</h1>
                {users.map((user =>{
                   return (
                       <section key={user.id} className="results__info">
                           <div className="results__info--heading">
                           <img src={user.avatar_url} alt={user.login} className="avatar_img"/>
                            <h2><Link to={`/user/${user.login}`} title="Click for user information.">{user.login}</Link></h2>
                           </div>
                           <a href={user.html_url} className="btn" target="_blank" rel="noreferrer">Click for user account.</a>
                       </section>
                   ) 
                } ))}
                
            </section>
        </div>
    )
}

export default Users