import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const HomeTemplate = (props: Props) => {
  return (
    <>
    <header className='header'>Header</header>
    <div style={{minHeight:'800px'}}>

    <Outlet/>

    </div>
<footer className='footer'>Footer</footer>
    
    </>
  )
}

export default HomeTemplate