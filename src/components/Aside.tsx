import React from 'react'
import { NavLink } from "react-router-dom"
import { IoMdDocument } from "react-icons/io"
import "../styles/aside.scss"
import user from "../images/aside_user.png"
import bookmark from "../images/aside_bookmark.png"
interface asideProps{
    totalCountRepo: string;
    totalCountUser: string;
    totalCountBookmark: number;
}
const Aside: React.FC<asideProps> = ({totalCountRepo, totalCountUser, totalCountBookmark}) => {
    return (
        <aside className="aside">
            <NavLink to="/results/repos" activeClassName="active" className="aside__link"><IoMdDocument/><p className="aside-link">Repositories <span>{totalCountRepo}</span></p></NavLink>
            <NavLink to="/results/users" activeClassName="active" className="aside__link"><img src={user} alt="Go to the user section"/><p className="aside-link">Users <span>{totalCountUser}</span></p></NavLink>
            <NavLink to="/results/bookmarks" activeClassName="active" className="aside__link"><img src={bookmark} className="size" alt="Go to the bookmark section"/><p className="aside-link">Bookmarked <span>{totalCountBookmark}</span></p></NavLink>
        </aside>
    )
}

export default Aside
