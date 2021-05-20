import React from 'react'
import Aside from './Aside'
import "../styles/Results.scss"
import Repos from './Repos'
import Users from './Users'
interface resultsProps{
    totalCountRepo: string;
    totalCountUser: string;
    repos: { id: number, full_name: string, description: string, owner:{login:string}}[];
    users: { id: number, login: string, avatar_url: string}[]
}
const Results: React.FC<resultsProps> = ({totalCountRepo, repos, totalCountUser, users}) => {
    return (
        <div>
            <Aside totalCount={totalCountRepo}/>
            <Repos totalCountRepo={totalCountRepo} repos={repos}/>
            <Users totalCountUser={totalCountUser} users={users}/>
        </div>
    )
}

export default Results
