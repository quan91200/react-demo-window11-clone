import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Slider = ({ isMenuOpen, toggleMenu }) => {
    const [currentTime, setCurrentTime] = useState(new Date())
    const [funFact, setFunFact] = useState("")

    useEffect(() => {
        const fetchFunFact = async () => {
            try {
                const res = await fetch(
                    "https://uselessfacts.jsph.pl/random.json?language=en"
                )
                const data = await res.json()
                setFunFact(data.text)
            } catch (error) {
                console.error("Error fetching fun fact: ", error)
            }
        }
        fetchFunFact()
        const intervalID = setInterval(fetchFunFact, 20000)

        return () => clearInterval(intervalID)
    }, [])

    useEffect(() => {
        const updateTime = () => setCurrentTime(new Date())
        const intervalID = setInterval(updateTime, 1000)

        return () => clearInterval(intervalID)
    }, [])

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                toggleMenu()
            }
        }
        document.addEventListener("visibilitychange", handleVisibilityChange)
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange)
        }
    }, [toggleMenu])

    const formatDate = (date) => {
        const options =
        {
            weekday: "long",
            month: "long",
            day: "numeric"
        }
        return date.toLocaleDateString("en-US", options)
    }

    const photoUrls = [
        'https://images3.alphacoders.com/137/thumb-1920-1375393.jpg',
        'https://images4.alphacoders.com/121/thumbbig-1217868.webp',
        'https://images2.alphacoders.com/136/thumbbig-1368062.webp',
        'https://images4.alphacoders.com/122/thumbbig-1221084.webp'
    ]

    const getRandomPhoto = () => {
        const randomIndex = Math.floor(Math.random() * photoUrls.length)
        return photoUrls[randomIndex]
    }
    const formatTime = (time) => {
        const options =
        {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        }
        return time.toLocaleDateString([], options)
    }
    return (
        <motion.nav
            transition={{ type: "spring", damping: 200, stiffness: 1000 }}
            initial={{ y: "-100%" }}
            animate={{ y: isMenuOpen ? "0%" : "-110%" }}
            className='fixed inset-0 bg-neutral-800 h-full z-50'
            onClick={(e) => {
                e.stopPropagation()
                toggleMenu()
            }}
            style={{
                background: "url(https://c.wallhere.com/photos/82/41/abstract_shapes_fluid_liquid_artwork_digital_art_8_K_colorful-1993817.jpg!d)",
                backgroundSize: "cover"
            }}
        >
            <div className='relative flex flex-col justify-center h-full text-primary'>
                <div className='absolute flex flex-col items-center w-full top-32 text-white'>
                    <div className='text-9xl font-bold'>{formatTime(currentTime)}</div>
                    <div className='font-semibold text-3xl mt-5'>{formatDate(currentTime)}</div>
                    <div className='font-semibold text-xl mt-40 w-72 flex flex-col items-center'>
                        Did you know?
                        <div className='mt-3'>{funFact}</div>
                    </div>
                </div>
                <div className='absolute top-0 flex justify-between w-full h-full py-12 px-32 text-white'>
                    <a
                        href='https://app.daily.dev/'
                        className='btn'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Open Daily.dev'
                    >
                        <div className='material-symbols-outlined'>search</div>
                    </a>
                    <a
                        href={getRandomPhoto()}
                        className='btn'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Open Photo'
                    >
                        <div className='material-symbols-outlined'>photo_camera</div>
                    </a>
                </div>
            </div>
        </motion.nav>
    )
}
export default Slider