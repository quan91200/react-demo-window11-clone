import React, { useState, useCallback } from "react"
import {
    Login,
    Slider
} from '../components'

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
                        "url(https://c.wallhere.com/photos/82/41/abstract_shapes_fluid_liquid_artwork_digital_art_8_K_colorful-1993817.jpg!d) no-repeat center center",
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