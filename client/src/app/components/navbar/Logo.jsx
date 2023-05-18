"use client"
import Image from "next/image"

const Logo = () => {
    return (
        <Image
        className="hidden md:block cursor-pointer"
            alt="Logo"
            height={100}
            width={100}
            src={"/images/logo.png"}
        />
    )
}

export default Logo