"use client"
import Image from "next/image"
import Link from "next/link"

const Logo = () => {
    return (
        <Link href="/">
            <Image
                className="hidden md:block cursor-pointer"
                alt="Logo"
                height={100}
                width={100}
                src={"/images/logo.png"}
            />
        </Link>
    )
}

export default Logo