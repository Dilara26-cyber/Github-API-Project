import React from 'react'
import { Link } from "react-router-dom"
import book from "../images/book.svg"
interface bookmarkedProps{
    totalCountBookmark: number
    bookmarked:{ id: number, full_name: string, name: string, description: string, owner:{login:string}}[],
    bookmarkFunction: Function;
}
const Bookmarked: React.FC<bookmarkedProps> = ({totalCountBookmark, bookmarked, bookmarkFunction,}) => {
    return (
        <div className="repos__search__page">
            <section className="results">
                <h1>Bookmarks</h1>
                {bookmarked.map((repo: any) => {
                   return (  
                       <section key={repo.id} className="results__info">
                           <div className="results__info--heading">
                           <img src={book} alt="Bookmark the repo" onClick={() => bookmarkFunction(repo.id)}/>
                                 <h2><Link to={`/${repo.name}/${repo.owner.login}`}>{repo.full_name}</Link></h2>
                           </div>
                            <p>{repo.description}</p>
                       </section>
                )})}
                
            </section>
        </div>
    )
}

export default Bookmarked;
