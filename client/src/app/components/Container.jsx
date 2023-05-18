"use client"
const Container = ({children}) => {
  return (
    <div className="flex md:block max-2-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        {children}
    </div>
  )
}

export default Container