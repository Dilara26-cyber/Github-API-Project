import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from "axios"
import book from "../images/book.svg"
import watch from "../images/eye.png"
import star from "../images/star.png"
import fork from "../images/fork.png"
import "../styles/reposDetails.scss"
interface ParamTypes{
    login: string
    repo: string 
}
const ReposDetails: React.FC= () => {
    const [description, setDescription] = useState("")
    const [watchers, setWatchers] = useState("")
    const [stars, setStars] = useState("")
    const [forks, setForks] = useState("")
    const [url, setUrl] = useState("")
    const [issues, setIssues] = useState("")
    const [fullName, setFullName] = useState("")
    const { login, repo } = useParams<ParamTypes>()
    async function fetchUserInfo() {
        const response = await axios.get(`https://api.github.com/repos/${login}/${repo}`)
    }

    useEffect(() => {
            fetchUserInfo()
            fetchUserRepo()
    }, [])
    
   async function fetchUserRepo() {
       const response = await axios.get(`https://api.github.com/repos/${login}/${repo}`)
       setData(response.data)
   }

   const setData = ({full_name, description, html_url, watchers_count, stargazers_count, forks_count, open_issues}:any) => {
        setFullName(full_name);
        setDescription(description)
        setUrl(html_url)
        setWatchers(watchers_count)
        setStars(stargazers_count)
        setForks(forks_count)
        setIssues(open_issues)
   }
    return (
        <div className="repos">
            <main className="user__card">
             <img src={ book } alt={ login } />   
            <h1>{ login }</h1>
            <p className="username">{ login }</p>
            <section>
                <h1>{fullName}</h1>
                <p>{description}</p>
                <a href={url} target="_blank" rel="noreferrer">{`${login}/${repo}`}</a>
                <div className="side_one"><img src={watch} alt="Watcher's Number" /><p>Watch <span>{watchers}</span></p> </div>
                <div className="side_one"><img src={star} alt="Stargazes Count" /><p>Star <span>{stars}</span></p></div>
                <div className="side_one"><img src={fork} alt="Fork Count" /><p>Fork <span>{forks}</span></p></div>
            </section>
            {/*repos.map((repo: any, index:number) => {
                  return (
                    <div key={repo.id} className="results__info">
                        <div className="results__info--heading">
                        <img src={book} alt="Bookmark the repo" />
                        <h2>{repo.full_name}</h2>
                        </div>
                        <p>{repo.description}</p>
                        <a href={repo.html_url}></a>
                    </div>
                  )})*/}
                  
            </main>
            
        </div>
    )
}

export default ReposDetails
