import React, { useState } from 'react'

const RightClick = ({ option }) => {
    const [contextMenuPos, setContextMenuPos] = useState({
        x: 0,
        y: 0
    })

    const [showContextMenu, setShowContextMenu] = useState(false)

    const handleContextMenu = (event) => {
        event.preventDefault()
        const x = event.clientX
        const y = event.clientY
        const menuWidth = 240
        const menuHeight = 290

        const newX = x + menuWidth > window.innerWidth ? window.innerWidth - menuWidth : x
        const newY = y + menuHeight > window.innerHeight ? window.innerHeight - menuHeight : y

        setContextMenuPos({
            x: newX,
            y: newY
        })
        setShowContextMenu(true)
    }

    const handleClick = () => {
        setShowContextMenu(false)
    }

    return (
        <div>
            {showContextMenu && (
                <div
                    className='context-menu z-10 menu p-2 shadow rounded-xl bg-neutral-700 border-neutral-600 border-2 absolute'
                    style={{ left: contextMenuPos.x, top: contextMenuPos.y }}
                    role='menu'
                    aria-labelledby='context-menu'
                >
                    <div className='w-[15rem] text-gray-300'>
                        {option ? (
                            <>
                                <MenuItem text="View" showArrow />
                                <MenuItem text="Sort by" showArrow />
                                <MenuItem text="Refresh" onClick={handleClick} />
                                <div className="divider m-0"></div>
                                <MenuItem text="New" showArrow />
                                <div className="divider m-0"></div>
                                <MenuItem text="Display Settings" />
                                <MenuItem text="Personalize" />
                                <MenuItem text="Show More Options" />
                            </>
                        ) : (
                            <>
                                Not Found
                            </>
                        )}
                    </div>
                </div>
            )}
            <div
                id="content"
                onContextMenu={handleContextMenu}
                onClick={handleClick}
                className="w-full h-full"
            ></div>
        </div>
    )
}

const MenuItem = ({ text, onClick, showArrow = false }) => (
    <div
        className="hover:bg-neutral-700 rounded-md whitespace-nowrap w-full h-7 select-none flex items-center justify-between px-1"
        onClick={onClick}
    >
        <div className="justify-center">{text}</div>
        {showArrow && (
            <div className="material-symbols-outlined rotate-[-90deg] justify-end opacity-50 font-extralight">
                expand_more
            </div>
        )}
    </div>
)

export default RightClick