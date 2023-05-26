import { useState } from "react"

function usePrice(initialValue) {
  const [currentPrice, setCurrentPrice] = useState(initialValue)
  
  const changePrice = (e) => {
    const newMinPrice = e.target.value
    setCurrentPrice(newMinPrice)
  }

  return {
    currentPrice,
    changePrice,
  }
}

export {usePrice}