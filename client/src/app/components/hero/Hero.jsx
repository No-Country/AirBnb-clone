"use client"

const Hero = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-[url('/images/home.png')] bg-cover bg-no-repeat">
            <div className="flex flex-col content items-center">
                <span className="text-black font-bold mb-5">¿No estás seguro de adónde ir? Perfecto</span>
                <div className="flex justify-center border shadow-md bg-white rounded-full w-2/4 py-4 cursor-pointer hover:bg-gray-100">
                    <span className="font-extrabold text-[#52305F]">Soy flexible</span>
                </div>
            </div>
        </div>
    )
}

export default Hero