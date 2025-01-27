"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { AiFillBug } from 'react-icons/ai'
import classnames from 'classnames'
const NavBar = () => {
    const currPath = usePathname();
    console.log(currPath);
    const Links=[
        {label:'Dashboard',href:'/'},
        {label:'issues', href:'/issues'}
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href='/'><AiFillBug/></Link>
        <ul className='flex space-x-6'>
            {Links.map(link =>
                <Link 
                key={link.href}
                className={classnames({
                    'text-zinc-800':link.href === currPath,
                    'text-zinc-500' : link.href !==currPath,
                    'hover:text-zinc-900 transition-colors': true
                })} 
                href={link.href} >{link.label}</Link>
             )}
            
        </ul>
    </nav>
  )
}
  export default NavBar