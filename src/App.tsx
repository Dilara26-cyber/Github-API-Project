import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom"
import Navbar from "./components/Navbar"
import './App.css';
import axios from "axios";
import Results from './components/Results';
import Home from './components/Home';
import UsersDetails from "./components/UsersDetails"
import ReposDetails from "./components/ReposDetails"

function App() {
  const [users, setUsers]=useState([])
  const [repos, setRepos] = useState([])
  const [totalCountRepo, setTotalCountRepo] = useState("")
  const [totalCountUser, setTotalCountUser] = useState("")
  const [text, setText] = useState("")
  const history:any = useHistory()
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
    fetchRepo()
    fetchUser()
};
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    searchForRepos();
    history.push("/results/repos")
    setText("")
  }

  async function fetchRepo() {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${text}`)
    setRepos(response.data.items)
    setTotalCountRepo(response.data.total_count)
  }
 async function fetchUser() {
   const response = await axios.get(`https://api.github.com/search/users?q=${text}`)
   setUsers(response.data.items)
   setTotalCountUser(response.data.total_count)
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
      <Switch> 
        <Route exact path="/"><Home/></Route>
        <Route path="/results"><Results totalCountRepo={totalCountRepo} totalCountUser={totalCountUser} repos={repos} users={users}/></Route>
        <Route path="/user/:login"><UsersDetails/></Route>
        <Route exact path="/:repo/:login"><ReposDetails/></Route>
       </Switch>
    </div> 
  );
}

export default App;
