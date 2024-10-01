import React, { useState, useCallback } from "react"
import {
    Login,
    Slider
} from '../components/apps'

function Lockscreen() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev)
    }, [])

    return (
        <>
            <div
                className="absolute bg-black h-screen w-full blur-sm"
                style={{
                    background:
                        "url(https://images.alphacoders.com/111/thumb-1920-1112564.jpg) no-repeat center center",
                    backgroundSize: "cover",
                }}
            ></div>

            <div className="absolute left-0 top-0 h-screen w-full flex flex-col items-center z-10">
                <Login />
            </div>

            <Slider
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                toggleMenu={toggleMenu}
            />
        </>
    )
}

export default Lockscreen