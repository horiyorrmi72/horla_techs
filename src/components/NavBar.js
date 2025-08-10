'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import logo from '../../public/horlatechs_logo.png'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null)
    const buttonRef = useRef(null)

    // Close mobile menu when clicking outside (but not the button)
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target)
            )
            {
                setMenuOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    // Close mobile menu when a link is clicked
    const handleLinkClick = () => {
        setMenuOpen(false)
    }

    return (
        <header className="flex justify-between md:justify-around items-center px-3 py-4 bg-transparent relative">
            {/* Logo */}
            <div className="flex tracking-wider gap-x-2.5 items-center">
                <Image
                    src={logo}
                    width={32}
                    height={40}
                    alt="HorlaTechs logo"
                    className="object-cover"
                />
                <h1 className="font-bold">HorlaTechs</h1>
            </div>

            {/* Desktop nav with Get Started button */}
            <div className="hidden md:flex items-center space-x-6 justify-between gap-x-24">
                <nav>
                    <ul className="flex space-x-6 capitalize">
                        <li className="border-b-2 border-transparent hover:border-b-blue-500 transition-colors duration-200">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="border-b-2 border-transparent hover:border-b-blue-500 transition-colors duration-200">
                            <Link href="/services">Services</Link>
                        </li>
                        <li className="border-b-2 border-transparent hover:border-b-blue-500 transition-colors duration-200">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="border-b-2 border-transparent hover:border-b-blue-500 transition-colors duration-200">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <button className="px-8 py-2 font-sans font-semibold text-white bg-black/90 rounded-full h-[40px]">
                    Get Started
                </button>
            </div>

            {/* Mobile menu button */}
            <button
                ref={buttonRef}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="rounded-full backdrop-sepia-0 bg-gray-200 p-2 md:hidden"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
            >
                <MenuIcon />
            </button>

            {/* Overlay */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-10"></div>
            )}

            {/* Mobile nav */}
            <nav
                ref={menuRef}
                className={`fixed top-10 text-center w-full bg-white/95 z-20 shadow-md rounded-lg p-4 md:hidden transform transition-all duration-300 ${menuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
            >
                <ul className="flex flex-col space-y-3 capitalize">
                    <li className="border-b-2 border-transparent hover:border-b-blue-500 transition-colors duration-200">
                        <Link href="/" onClick={handleLinkClick}>Home</Link>
                    </li>
                    <li className="border-b-2 border-transparent hover:border-b-blue-500 transition-colors duration-200">
                        <Link href="/services" onClick={handleLinkClick}>Services</Link>
                    </li>
                    <li className="border-b-2 border-transparent hover:border-b-blue-500 transition-colors duration-200">
                        <Link href="/about" onClick={handleLinkClick}>About</Link>
                    </li>
                    <li className="border-b-2 border-transparent hover:border-b-blue-500 transition-colors duration-200">
                        <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
