import React, { useState } from 'react'
import NavBar from '../components/navbar/NavBar'
import SideBarMenu from '../components/navbar/SideBarMenu'

export default function Home() {

    const [open, setOpen] = useState(false)

    const handleOpenClose = () => {
        setOpen(!open)
        console.log('HandleOpenClose is working')
    }

    return (
        <>
            <NavBar handleOpenClose={handleOpenClose} />
            {open && <SideBarMenu open={open} handleOpenClose={handleOpenClose} />}
        </>
    )
}
