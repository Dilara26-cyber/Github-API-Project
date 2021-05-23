import React, { useState, useEffect } from 'react';
import axios from "axios"; 
import { BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom"
import Navbar from "./components/Navbar"
import Results from './components/Results';
import Home from './components/Home';
import UsersDetails from "./components/UsersDetails"
import ReposDetails from "./components/ReposDetails"
import './App.css';
const bookmarkedReposLocalStorage = JSON.parse(localStorage.getItem("bookmarked") || "[]")
function App() {
  const [users, setUsers]=useState([])
  const [repos, setRepos] = useState([])
  const [totalCountRepo, setTotalCountRepo] = useState("")
  const [totalCountUser, setTotalCountUser] = useState("")
  const [totalCountBookmark, setTotalCountBookmark] = useState<any>()
  const [text, setText] = useState("")
  const [bookmarked, setBookmarked] = useState<any>(bookmarkedReposLocalStorage)
  const history:any = useHistory()

//Adding the bookmarked repos to the local Storage
  useEffect(() => {
    localStorage.setItem("bookmarked", JSON.stringify(bookmarked))
  }, [bookmarked])

//Refresh the page and go back to home page
  window.onload = function() {
      history.push("/")
    } 
//Set the input value as the searched term
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(prev => e.target.value)
  }
//Fetch Data from API
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

//Search Functionality
  const searchForRepos = () => {
    fetchRepo()
    fetchUser()
};

//After submitting the form, fetch data, go to the result page and clean the input
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    searchForRepos();
    history.push("/results/repos")
    setText("")
  }

//Bookmark the repo result and check if it is already bookmarked
  const bookmark = (id: any) => {
     const bookmarkedRepo: any = repos.filter((repo: any) => {
          repo.bookmarked = true
          return id === repo.id
      })
      const idFilter = bookmarked.map((repo: any) =>{return repo.id})
      if(idFilter.includes(id)){
        return id !== id
      }
      setBookmarked([...bookmarked, ...bookmarkedRepo])
      console.log(bookmarked)
      setTotalCountBookmark(bookmarked.length + 1)
    }

//Remove a repo from the bookmarked
    const remove = (id: number) => {
    const updatedBookmarkedRepo: any = bookmarked.filter((repo: any) => {
         return repo.id !== id
      })
       setBookmarked([...updatedBookmarkedRepo])
       console.log(bookmarked)
       setTotalCountBookmark(bookmarked.length - 1)
     }


  return (
    <div className="App"> 
    <Navbar onChange={handleChange} value={text} onSubmit={handleSubmit}/>
      <Switch> 
        <Route exact path="/"><Home/></Route>
        <Route path="/results"><Results totalCountBookmark={totalCountBookmark} totalCountRepo={totalCountRepo} totalCountUser={totalCountUser} repos={repos} users={users} bookmarkFunction={bookmark} bookmarked={bookmarked}/></Route>
        <Route path="/user/:login"><UsersDetails/></Route>
        <Route exact path="/:repo/:login"><ReposDetails bookmarkFunction={bookmark} removeBookmark={remove} bookmarked={bookmarked}/></Route>
       </Switch>
    </div> 
  );
}

export default App;
