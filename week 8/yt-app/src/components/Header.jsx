export default function Header()
{
    return <div className="h-20 bg-white px-5 border-2 w-full">
        <div className="flex justify-between items-center">
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4TdQa9xvFpj9ZPBKS2HlJauJZyVzqOuUI8ROCBMAX&s" className="w-24" />
            </div>
            <div>
            <div class="flex items-center justify-center">
                <div class="rounded-lg p-5">
                    <div class="flex border-2 rounded-xl">
                    <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                        <svg viewBox="0 0 20 20" aria-hidden="true" class="pointer-events-none absolute w-5 fill-gray-500 transition">
                        <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                        </svg>
                    </div>
                    <input type="text" class="w-full max-w-[160px] pl-2 text-base font-semibold outline-0" placeholder="" id=""/>
                    <input type="button" value="Search" class="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"/>
                    </div>
                </div>
            </div>
            </div>
            <div className="flex p-4 justify-between">
                <img className="w-6 h-6 text-black" src="https://cdn.iconscout.com/icon/free/png-256/free-watch-later-1781603-1513853.png?f=webp"/>
                <img className="w-6 h-6 text-black" src="https://cdn.iconscout.com/icon/free/png-256/free-watch-later-1781603-1513853.png?f=webp"/>
                <img className="w-6 h-6 text-black" src="https://cdn.iconscout.com/icon/free/png-256/free-watch-later-1781603-1513853.png?f=webp"/>
            </div>

        </div>

    </div>
}