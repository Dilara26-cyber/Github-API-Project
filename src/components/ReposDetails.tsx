import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { VscBookmark } from "react-icons/vsc"
import axios from "axios"
import book from "../images/book.svg"
import watch from "../images/eye.png"
import star from "../images/star.png"
import fork from "../images/fork.png"
import branch from "../images/branch.png"
import issue from "../images/issue.png"
import pull from "../images/pull.png"
import "../styles/reposDetails.scss"
interface ParamTypes{
    login: string;
    repo: string;
}
interface reposDetailsProps {
    bookmarkFunction: Function;
    removeBookmark: Function;
    bookmarked: {id: number, bookmarked: boolean}[];
}
const ReposDetails: React.FC<reposDetailsProps> = ({bookmarkFunction, removeBookmark, bookmarked}) => {
    const [description, setDescription] = useState("")
    const [id, setId] = useState("")
    const [watchers, setWatchers] = useState("")
    const [stars, setStars] = useState("")
    const [forks, setForks] = useState("")
    const [url, setUrl] = useState("")
    const [branches, setBranches] = useState("")
    const [pulls, setPulls] = useState("")
    const [issues, setIssues] = useState("")
    const [fullName, setFullName] = useState("")
    const { login, repo } = useParams<ParamTypes>()
    async function fetchBranch() {
        const response = await axios.get(`https://api.github.com/repos/${login}/${repo}/branches`)
        setBranches(response.data.length + 1)
    }
    async function fetchPull() {
        const response = await axios.get(`https://api.github.com/repos/${login}/${repo}/pulls`)
        setPulls(response.data.length + 1)
    }
    useEffect(() => {
            fetchRepo()
            fetchBranch()
            fetchPull()
    }, [])
    
   async function fetchRepo() {
       const response = await axios.get(`https://api.github.com/repos/${login}/${repo}`)
       setData(response.data)
   }

   const setData = ({id, full_name, description, html_url, watchers_count, stargazers_count, forks_count, open_issues}:any) => {
        setId(id)
        setFullName(full_name);
        setDescription(description)
        setUrl(html_url)
        setWatchers(watchers_count)
        setStars(stargazers_count)
        setForks(forks_count)
        setIssues(open_issues)
   }
   const idFilter = bookmarked.map((repo: any) =>{return repo.id})
   const bookmarkedBoolean = idFilter.includes(id)
    return (
        <main className="main">
            <section className="aside user__card">
                <div className="side">
                    <img src={ book } alt={ login }/>
                <h1>{fullName}</h1>
                <p>{description}</p>
                <a href={url} target="_blank" rel="noreferrer">{`${login}/${repo}`}</a>
                </div>
                
                <div className="side">
                <div className="side_one"><img src={watch} alt="Watcher's Number" /><p>Watch <span>{watchers}</span></p> </div>
                <hr/>
                <div className="side_one"><img src={star} alt="Stargazes Count" /><p>Star <span>{stars}</span></p></div>
                <hr/>
                <div className="side_one"><img src={fork} alt="Fork Count" /><p>Fork <span>{forks}</span></p></div>
                </div>
                <div className="side">
                    <div className="side_one">
                    <img src={branch} alt="Branch Count" /><p>Branches <span>{branches}</span></p>
                    </div>
                    <hr/>
                    <div className="side_one">
                    <img src={issue} alt="Open Issue Count" /><p>Issues <span>{issues}</span></p>
                    </div>
                    <hr/>
                    <div className="side_one">
                    <img src={pull} alt="Pull Request Count" /><p>Pull Requests <span>{pulls}</span></p>
                    </div>
                   
                </div>
                 </section>
                 <div className="info info__repo">
                <div className="repo__count">{description}</div>
                {bookmarkedBoolean ? <button className="btn_bookmark remove" onClick={() => removeBookmark(id)}><VscBookmark/> Remove Bookmark</button> : <button className="btn_bookmark add" onClick={() => bookmarkFunction(id)}><VscBookmark/>Add to Bookmarks</button>}
                
                </div>
        </main>
    )
}

export default ReposDetails
