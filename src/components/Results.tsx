import React from 'react'
import { Route, Switch} from "react-router-dom"
import Aside from './Aside'
import Repos from './Repos'
import Users from './Users'
import Bookmarked from "./Bookmarked"
import "../styles/results.scss"
interface resultsProps{
    totalCountRepo: string;
    totalCountUser: string;
    totalCountBookmark: number,
    bookmarkFunction: Function;
    bookmarked: { id: number, full_name: string, name: string, description: string, owner:{login:string}}[],
    repos: { id: number, full_name: string, name: string, description: string, owner:{login:string}}[];
    users: { id: number, login: string, avatar_url: string, html_url: string}[]
}
const Results: React.FC<resultsProps> = ({totalCountRepo, repos, totalCountUser, users, totalCountBookmark, bookmarkFunction, bookmarked}) => {
    return (
        <main className="main">
            <Aside totalCountRepo={totalCountRepo} totalCountUser={totalCountUser} totalCountBookmark={totalCountBookmark}/>
            <Switch>
                <Route path="/results/repos"><Repos totalCountRepo={totalCountRepo} repos={repos} bookmarkFunction={bookmarkFunction}/></Route> 
                <Route path="/results/users"><Users totalCountUser={totalCountUser} users={users}/></Route>
                <Route path="/results/bookmarks"><Bookmarked bookmarked={bookmarked} bookmarkFunction={bookmarkFunction} totalCountBookmark={totalCountBookmark}/></Route>
            </Switch>
        </main>
    )
}

export default Results
