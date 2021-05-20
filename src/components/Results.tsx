import React from 'react'
import Aside from './Aside'
import book from "../images/book.svg"
import "../styles/Results.scss"
interface resultsProps{
    totalCountRepo: string;
    totalCountUser: string;
    repos: { id: number, full_name: string, description: string, owner:{login:string}}[]
}
const Results: React.FC<resultsProps> = ({totalCountRepo, repos, totalCountUser}) => {
    return (
        <div>
            <Aside totalCount={totalCountRepo}/>
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

export default Results
