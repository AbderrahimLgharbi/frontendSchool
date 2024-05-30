import React from 'react'
import { Outlet, Link } from 'react-router-dom'


const Layout = () => {
    return (
        <>

            {/* <header class="w-full h-16 bg-indigo-600 drop-shadow-lg">
                <div class="container px-4 md:px-0 h-full mx-auto flex justify-between items-center">
                    <a class="text-yellow-400 text-xl font-bold italic" href="https://www.kindacode.com">KINDA<span
                        class="text-white">CODE</span></a>

                    <ul id="menu" class="hidden fixed top-0 right-0 px-10 py-16 bg-gray-800 z-50
                md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6">

                        <li class="md:hidden z-90 fixed top-4 right-6">
                            <a href="javascript:void(0)" class="text-right text-white text-4xl"
                                onclick="toggleMenu()">&times;</a>
                        </li>

                        <li>
                            <a class="text-white opacity-70 hover:opacity-100 duration-300" href="#">Home</a>
                        </li>
                        <li>
                            <a class="text-white opacity-70 hover:opacity-100 duration-300" href="#">Something</a>
                        </li>
                        <li>
                            <a class="text-white opacity-70 hover:opacity-100 duration-300" href="#">Forums</a>
                        </li>

                        <li>
                            <a class="text-white opacity-70 hover:opacity-100 duration-300" href="#">About</a>
                        </li>
                        <li>
                            <a class="text-white opacity-70 hover:opacity-100 duration-300" href="#">Contact</a>
                        </li>
                    </ul>

                    <div class="flex items-center md:hidden">
                        <button class="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
                            onclick="toggleMenu()">&#9776;
                        </button>
                    </div>
                </div>
            </header> */}
            <nav class="bg-gray-800">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mb-4">
                    <div class="relative flex h-16 items-center justify-between">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

                            <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="absolute -inset-0.5"></span>
                                <span class="sr-only">Open main menu</span>

                                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex flex-shrink-0 items-center">
                                <img class="h-9 mr-3 w-auto" src="https://img.icons8.com/?size=100&id=RWH5eUW9Vr7f&format=png&color=000000" alt="Your Company" />
                                <span className='text-white'>School Management</span>
                            </div>

                        </div>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                            <div class="hidden sm:ml-6 sm:block">

                                <ul className='flex space-x-4 text-white'>
                                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                        <Link to={'/'}>Home page</Link>
                                    </li>
                                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                        <Link to={'/Signin'}>Sign in</Link>
                                    </li>
                                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                        <Link to={'/Signup'}>Sign up</Link>
                                    </li>
                                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                        <Link to={'/users'}>users</Link>
                                    </li>
                                    <li>
                                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-3 rounded-full">Dark Mode</button>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>


            </nav>
            <main className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"><Outlet /></main>
            {/* <footer className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">footer</footer> */}
        </>
    )
}

export default Layout