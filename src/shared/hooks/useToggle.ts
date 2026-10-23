import { useState } from "react"

export const useToggle = () => {
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
      setIsOn(!isOn)
    }
  return {isOn, toggle}
}