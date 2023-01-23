import React from 'react'

const Navbar = () => {
  return (
    <div>
          {/* <!-- Navbar --> */}
  <nav class="py-8 bg-white">
    <div class="md:container px-4 md:px-0 mx-auto flex justify-between">
      <img class="w-16" src="https://capp.nicepage.com/bf483e57c95e271afd13aa25e2ecbbe017068d1d/images/default-logo.png" alt="" />
      <div class="space-y-1.5 cursor-pointer">
        <div class="h-1 w-8 bg-gray-600 rounded"></div>
        <div class="h-1 w-8 bg-gray-600 rounded"></div>
        <div class="h-1 w-8 bg-gray-600 rounded"></div>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar