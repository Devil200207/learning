export default function Card()
{
    return <div>
        <div className="box-border flex flex-col h-64 p-4 border-4">
            <div className="grow bg-slate-700"></div>
            <div className="flex-none text-lg">decription</div>
            <div className="flex-none text-sm">watchtime</div>
        </div>
    </div>
}