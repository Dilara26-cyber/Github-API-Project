import React, {useState, useEffect} from 'react';
import Navbar from "./components/Navbar"
import './App.css';
import axios from "axios";
import Results from './components/Results';
import bodyImage from "./images/body-image.png"
function App() {
  const [users, setUsers] = useState([])
  const [repos, setRepos] = useState([])
  const [totalCountRepo, setTotalCountRepo] = useState("")
  const [totalCountUser, setTotalCountUser] = useState("")
  const [text, setText] = useState("")
  const [isSearched, setIsSearched] = useState(false)
 /*useEffect(() => {
    async function getApi() {
      const response = await axios.get(`https://api.github.com/search/users?q="${text}"`)
    }
    getApi()
  }, []) */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(prev => e.target.value)
      console.log(text)
  }
  const searchForRepos = () => {
    setIsSearched(true)
    fetchRepo()
    fetchUser()
};
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    searchForRepos();
    setText("")
  }
  function fetchRepo() {
    axios({
      method: "get",
      url: `https://api.github.com/search/repositories?q=${text}`
    }).then(res => {
    setRepos(res.data.items)
    setTotalCountRepo(res.data.total_count)  })
  }
  function fetchUser() {
    axios({
      method: "get",
      url: `https://api.github.com/search/users?q=${text}`
    }).then(res => {
    setUsers(res.data.items)
    setTotalCountUser(res.data.total_count)
  })
  }
  
    
    /*setTotalCount(response.data.total_count)
    setRepos(data)
    setUsers(response.data.items.owner)
    console.log(repos)
     repos.forEach(function (repo:any) :void { 
       console.log(repo.full_name) })
 }*/

  return (
    <div className="App"> 
    <Navbar onChange={handleChange} value={text} onSubmit={handleSubmit}/>
    {isSearched ? <Results totalCountRepo={totalCountRepo} totalCountUser={totalCountUser} repos={repos}/> : (<div className="search_false">
      <img src={bodyImage} alt="Search Icon" />
      <p>Search results will appear here</p>
    </div>)}
    </div>
  );
}

export default App;
