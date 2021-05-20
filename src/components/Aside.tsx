import React from 'react'
import { IoMdDocument } from "react-icons/io"
interface asideProps{
    totalCount: string,
}
const Aside: React.FC<asideProps> = ({totalCount}) => {
    return (
        <div>
            <IoMdDocument/>
            <p>Repositories</p>
            <p>{totalCount}</p>
        </div>
    )
}

export default Aside
