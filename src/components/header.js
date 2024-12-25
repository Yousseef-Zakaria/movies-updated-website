export default function Header() {
    return (
        <header className="flex w-[100%] px-5 justify-between items-center text-white bg-[#2E073F] h-20 ">
            <a href="./" className="flex gap-1 items-center">
                <img src="/clapperboard.png" className="w-[12%]" alt="logo"></img>
                <span className="text-4xl">MOVIES</span>
            </a>
            <nav className="flex">
                <a href="./" className="bg-[#EBD3F8] text-black transition rounded-lg p-2 w-24 text-center text-xl hover:bg-[#fbf4ff]">Sign up</a>
            </nav>
        </header>
    );
}

    // .catch(error => console.log('error', error));
// 5c9d805d55521ca13b1f5efdb808082f API key

