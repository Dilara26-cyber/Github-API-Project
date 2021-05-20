import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from 'react-router'
interface ParamTypes{
    login: string
}

const UsersDetails: React.FC= () => {
    const [userBio, setUserBio] = useState("")
    const [avatar, setAvatar] = useState("")
    const [name, setName] = useState([])
    const [userRepos, setUserRepos] = useState([])
    const { login } = useParams<ParamTypes>()
        
    async function fetchUserInfo() {
        const response = await axios.get(`https://api.github.com/users/${login}`)
        setUserBio(response.data.bio)
        setAvatar(response.data.avatar_url)
        setName(response.data.name)
    }

    useEffect(() => {
            fetchUserInfo()
            fetchUserRepo()
    }, [])
    
   async function fetchUserRepo() {
       const response = await axios.get(`https://api.github.com/users/${login}/repos`)
       setUserRepos(response.data) 
   }
    return (
        <div>
            <div className="user__card">
             <img src={avatar} alt={login} />   
            <h1>{ name }</h1>
            <p>{ login }</p>
            {userBio != null ? <p>{userBio}</p> : <p>It seems this user does not have any additional information.</p>}
            </div>
            <div>
            <h1>Repositories <span>{userRepos.length + 1}</span></h1>
                {userRepos.map((repo: any, index:number) => {
                  return (
                    <div key={repo.id}>
                  
                        <h2>{repo.full_name}</h2>
                        <p>{repo.description}</p>
                    </div>
                    )})}
            </div>
            
        </div>
    )
}

export default UsersDetails
