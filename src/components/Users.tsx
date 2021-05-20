import React from 'react'
import book from "../images/book.svg"
import axios from "axios"
import { Link } from 'react-router-dom'
interface userProps{
    totalCountUser: string;
    users: { id: number, login: string, avatar_url: string}[]
}


const Users: React.FC<userProps> = ({totalCountUser, users}) => {
    return (
        <div>
            <section className="results">
                <h1>{totalCountUser} User Results</h1>
                {users.map((user =>{
                   return (
                       <section key={user.id} className="results__info">
                           <div className="results__info--heading">
                           <img src={user.avatar_url} alt={user.login} className="avatar_img"/>
                            <h2><Link to={`/${user.login}`}>{user.login}</Link></h2>
                           </div>
                       </section>
                   ) 
                } ))}
                
            </section>
        </div>
    )
}

export default Users