import React, {useState, useEffect} from 'react';
import Navbar from "./components/Navbar"
import './App.css';
import axios from "axios";
function App() {
  const [users, setUsers] = useState([])
  const [repos, setRepos] = useState([])
  const [totalCount, setTotalCount] = useState([])
  const [text, setText] = useState("")
 /* useEffect(() => {
    async function getApi() {
      const response = await axios.get(`https://api.github.com/search/users?q="${text}"`)
     setUsers(response.data.items)
     users.forEach(function (user:any) :void { 
       console.log(user.login)  })
    }
    getApi()
  }, []) */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value)
  }
 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await axios.get(`https://api.github.com/search/repositories?q=${text}`)
    setTotalCount(response.data.total_count)
    setRepos(response.data.items)
     repos.forEach(function (repo:any) :void { 
       console.log(repo.full_name)  
      })
 }

  return (
    <div className="App"> 
    <Navbar onChange={handleChange} value={text} onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
