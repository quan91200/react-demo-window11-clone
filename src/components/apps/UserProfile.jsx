import { useEffect, useState } from "react"

const UserProfile = ({ name }) => {
    const [userInitials, setUserInitials] = useState("")

    useEffect(() => {
        if (name) {
            setUserInitials(generateInitials(name))
        }
    }, [name]);

    return (
        <div className="flex items-center justify-center w-36 h-full bg-blue-500 rounded-full text-white text-2xl font-bold select-none">
            {name ? (
                <div className="text-white text-4xl font-normal">{userInitials}</div>
            ) : (
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img
                            src="https://giffiles.alphacoders.com/219/219858.gif"
                            alt="Profile"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

const generateInitials = (name) => {
    const words = name.split(" ")
    const initals = words.map((word) => word.charAt(0)).join("").toUpperCase()
    return initals
}
export { UserProfile, generateInitials }