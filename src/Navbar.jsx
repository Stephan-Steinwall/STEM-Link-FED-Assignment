import React from 'react';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Navbar = ({ name }) => {
    return (
        <nav className="navbar flex justify-between items-center py-4 px-8 bg-white fixed top-0 w-full z-10">
            {/* Left section */}
            <div className="left-section flex items-center gap-8 w-1/4">
                <a href="/" className="logo text-2xl font-bold text-[#333] no-underline">Mebius</a>
                <div className="nav-links flex items-center gap-6">
                    <a href="/home" className="text-[#333] no-underline hover:text-[#666]">Home</a>
                    <a href="/shop" className="text-[#333] no-underline hover:text-[#666]">Shop</a>
                </div>
            </div>

            {/* Center section - Search */}
            <div className="center-section w-1/3">
                <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                        type="text"
                        placeholder="Search Premium Products"
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
                    />
                </div>
            </div>

            {/* Right section */}
            <div className="right-section flex items-center gap-6 justify-end w-1/4">


                <div className="cart-container flex items-center gap-2">
                    <span className="cart-count text-base text-[#333]">0</span>
                    <div className="cart-icon flex items-center">
                        <ShoppingCart />
                    </div>
                </div>

                {name ? (
                    <span className="user-greeting text-base text-[#333]">
                        Hi, {name}
                    </span>
                ) : (
                    <div className="auth-links flex items-center gap-4">
                        <a
                            href="/signin"
                            className="text-base text-[#333] hover:text-[#666] no-underline"
                        >
                            Sign In
                        </a>
                        <a
                            href="/signup"
                            className="text-base bg-[#333] text-white px-4 py-2 rounded-md hover:bg-[#444] no-underline transition-colors"
                        >
                            Sign Up
                        </a>
                    </div>
                )}

                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>


            </div>
        </nav>
    )
}

export default Navbar