"use client"
import { AiFillStar, AiOutlineHeart } from "react-icons/ai"
import { MdIosShare } from "react-icons/md"

const Title = () => {
    return (
        <section className="mb-3">
            <div>
                <h1 className="text-2xl mb-1">Private Room in Elegant French Gothic Home</h1>
            </div>
            <div className="flex justify-between">
                <div className="flex">
                    <div className="flex">
                        <div className="flex items-center">
                            <AiFillStar />
                        </div>
                        <div className="flex items-center">
                            <p> 4.83 · <u className="font-medium cursor-pointer">80 reviews</u> · <u className="font-medium cursor-pointer">Greater London, England, United Kingdom</u></p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex rounded p-1 pe-2 hover:bg-gray-100">
                        <button>
                            <div className="flex items-center gap-1">
                                <MdIosShare />
                                <u>Share</u>
                            </div>
                        </button>
                    </div>
                    <div className="flex rounded px-1 pe-2 hover:bg-gray-100">
                        <button>
                            <div className="flex items-center gap-1">
                                <AiOutlineHeart />
                                <u>Save</u>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Title
