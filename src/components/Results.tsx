import React from 'react'
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
            <Repos totalCountRepo={totalCountRepo} repos={repos}/>
            <Users totalCountUser={totalCountUser} users={users}/>
        </div>
    )
}

export default Results
