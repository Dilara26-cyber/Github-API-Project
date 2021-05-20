import React from 'react'
import { Route, Switch} from "react-router-dom"
import Aside from './Aside'
import Repos from './Repos'
import Users from './Users'
import "../styles/Results.scss"
interface resultsProps{
    totalCountRepo: string;
    totalCountUser: string;
    repos: { id: number, full_name: string, description: string, owner:{login:string}}[];
    users: { id: number, login: string, avatar_url: string}[]
}
const Results: React.FC<resultsProps> = ({totalCountRepo, repos, totalCountUser, users}) => {
    return (
        <div>
            <Aside totalCountRepo={totalCountRepo} totalCountUser={totalCountUser}/>
            <Switch>
                <Route path="/results/repos"><Repos totalCountRepo={totalCountRepo} repos={repos}/></Route> 
                <Route path="/results/users"><Users totalCountUser={totalCountUser} users={users}/></Route>
            </Switch>
        </div>
    )
}

export default Results
