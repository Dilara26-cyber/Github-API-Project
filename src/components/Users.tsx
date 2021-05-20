import React from 'react'
import book from "../images/book.svg"
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
                                 <img src={book} alt="Bookmark the repo" />
                                  <h2>{user.login}</h2>
                           </div>
                            <img src={user.avatar_url} alt={user.login} />
                       </section>
                   ) 
                } ))}
                
            </section>
        </div>
    )
}

export default Users