import React from 'react'
import book from "../images/book.svg"
interface reposProps{
    totalCountRepo: string;
    repos: { id: number, full_name: string, description: string, owner:{login:string}}[]
}
const Repos: React.FC<reposProps> = ({totalCountRepo, repos}) => {
    return (
        <div>
            <section className="results">
                <h1>{totalCountRepo} Repository Results</h1>
                {repos.map((repo =>{
                   return (
                       <section key={repo.id} className="results__info">
                           <div className="results__info--heading">
                                 <img src={book} alt="Bookmark the repo" />
                                  <h2>{repo.full_name}</h2>
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
