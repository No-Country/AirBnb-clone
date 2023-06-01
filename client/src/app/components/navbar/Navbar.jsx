"use client"

import Container from "../Container"
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"

const Navbar = () => {
    return (
        <nav className="fixed w-full z-[100]">
            <div className="py-4">
                <Container>
                    <div className="flex items-center justify-between gap-3 md:gap-0">
                        <Logo />
                        <UserMenu />
                    </div>
                    <div className="px-5 flex justify-center">
                        <Search />
                    </div>
                </Container>
            </div>
        </nav>
    )
}

export default Navbar