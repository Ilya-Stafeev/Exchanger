import  { useLayoutEffect, useState } from "react"

export const useTheme = () => {
    const [theme, setTheme] = useState('light-mode')
    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])
    
    return {theme, setTheme}
}