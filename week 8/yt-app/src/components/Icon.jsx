export default function Icon({src,title})
{
    return <div className="grid p-1 grid-cols-2">
        <div>
            <img className="w-6 h-6 text-black" src={src}/>
        </div>
        <div>
            <span className="text-lg font-semibold antialiased capitalize font-sans">{title}</span>
        </div>
    </div>
}