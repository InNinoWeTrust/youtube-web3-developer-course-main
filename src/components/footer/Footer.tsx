import Link from "next/link";

export function Footer() {
    return (
        <div className="flex flex-col items-center mt-20">
            <Link
                className="text-center text-sm text-white-400 bg-red-500 px-4 py-2 rounded-md"
                target="_blank"
                href="https://discord.gg/qETmz5MpQ3"
            >
               </Link>
               Join Brown Waters Discord
            <Link
                className="text-center text-sm text-gray-400 mt-2"
                target="_blank"
                href="https://github.com/InNinoWeTrust/youtube-web3-developer-course"
            >
                View code on GitHub
            </Link>
            <Link href={"/"} className="text-sm text-gray-400 mt-8">
                Back to menu
            </Link>
        </div>
    )
}