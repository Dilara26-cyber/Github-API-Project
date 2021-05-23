import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from "axios"
import book from "../images/book.svg"
import "../styles/usersDetails.scss"
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
        <main className="main">
                <section className="aside user__card">
                    <img src={avatar} alt={login} />   
                     <h1>{ name }</h1>
                    <p className="username">{ login }</p>
                    {userBio != null ? <p>{userBio}</p> : <p>It seems this user does not have any additional information.</p>}
                </section>
             
            <div className="info">
                <div className="repo__count">
                <h1 className="repo__count--heading">Repositories</h1> <p>{userRepos.length + 1}</p>
                </div>
                {userRepos.map((repo: any, index:number) => {
                  return (
                    <div key={repo.id} className="results__info">
                        <div className="results__info--heading">
                        <img src={book} alt="Bookmark the repo" />
                        <h2>{repo.full_name}</h2>
                        </div>
                        <p>{repo.description}</p>
                    </div>
                    )})}
            </div>
        </main>
    )
}

export default UsersDetails
