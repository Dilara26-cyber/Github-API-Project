import React from 'react'
import { IoMdDocument } from "react-icons/io"
import book from "../images/book.svg"
interface asideProps{
    totalCountRepo: string;
    totalCountUser: string;
}
const Aside: React.FC<asideProps> = ({totalCountRepo, totalCountUser}) => {
    return (
        <aside className="aside">
            <p><IoMdDocument/>  {totalCountRepo} Repositories</p>
            <p>{totalCountUser} Users</p>
            <div><img src={book} alt="Go to the bookmark section"/><p>Bookmarks</p></div>

        </aside>
    )
}

export default Aside
