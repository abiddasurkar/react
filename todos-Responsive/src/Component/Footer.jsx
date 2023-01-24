import React from 'react'
import { Link } from 'react-router-dom'
// import '../Component/footer.css'

export const Footer = () => {

  let footerStyle = {
  
                         
  }


  return (
    
<footer className="p-4  bg-white rounded-lg my-3 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800" style={footerStyle}>
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="https://flowbite.com/" className="hover:underline">Flowbite™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6 ">About</Link>
        </li>
        <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
        </li>
        <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6">Licensing</Link>
        </li>
        <li>
            <Link to="#" className="hover:underline">Contact</Link>
        </li>
    </ul>
</footer>

  
  )
}
