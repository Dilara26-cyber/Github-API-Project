import React from 'react'
import { Link } from "react-router-dom"
import book from "../images/book.svg"
interface reposProps{
    totalCountRepo: string;
    bookmarkFunction: Function;
    repos: { id: number, full_name: string, name: string, description: string, owner:{login:string}}[]
}
const Repos: React.FC<reposProps> = ({totalCountRepo, repos, bookmarkFunction}) => {
    return (
        <div className="repos__search__page">
            <section className="results">
                <h1>{totalCountRepo} Repository Results</h1>
                {repos.map((repo =>{
                   return (
                       <section key={repo.id} className="results__info">
                           <div className="results__info--heading">
                                 <img style={{cursor: "pointer"}} src={book} alt="Bookmark the repo" onClick={() => bookmarkFunction(repo.id)}/>
                                 <h2><Link to={`/${repo.name}/${repo.owner.login}`}>{repo.full_name}</Link></h2>
                           </div>
                            <p>{repo.description}</p>
                       </section>
                   ) 
                } ))}
                
            </section>
        </div>
    )
}

export default Repos
