export default function Taskbar({
    toggleStart,
    toggleExplorer,
    toggleBrowser,
}) {

    return (
        <>
            <div className="fixed bottom-2 left-1/2 flex justify-center mx-auto h-[3.2rem] bg-[rgba(64,64,64,0.7)] select-none pointer-events-auto py-[0.2rem] px-2 text-white z-40 transform -translate-x-1/2 rounded-lg">
                <div className="flex justify-center w-auto items-center gap-2">
                    <div
                        className="flex justify-center items-center font-semibold text-sm hover:bg-[rgba(64,64,64,1)] my-1 h-full rounded-md px-1 w-11"
                        onClick={toggleStart}
                    >
                        <img
                            src="/images/apps/windows.png"
                            alt="windows_logo"
                            className="h-8"
                        />
                    </div>
                    <div
                        className="flex justify-center items-center font-semibold text-sm hover:bg-[rgba(64,64,64,1)] my-1 h-full rounded-md px-1 w-11"
                        onClick={() => {
                            toggleExplorer(true)
                        }}
                    >
                        <img
                            src="/images/apps/explorer.png"
                            alt="windows_logo"
                            className="h-7"
                        />
                    </div>
                    <div
                        className="flex justify-center items-center font-semibold text-sm hover:bg-[rgba(64,64,64,1)] my-1 h-full rounded-md px-1 w-11"
                        onClick={toggleBrowser}
                    >
                        <img
                            src="/images/apps/edge.png"
                            alt="windows_logo"
                            className="h-8"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}