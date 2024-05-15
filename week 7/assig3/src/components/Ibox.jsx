import './Ibox.css'
export default function Ibox({inputval,setinfo,setinput})
{
    return <div>
        <div className="input-group">
            <input type="text" className="input" id="Email" name="Email" placeholder="search..." autocomplete="off" onChange={(x) =>{
                setinput(x.target.value);
            } }/>
            <input className="button--submit" value="Search" type="submit" onClick={() =>{
                fetch("https://api.github.com/users/" + inputval).then(async (res)=>{
                    const json = await res.json();
                    setinfo(json);
                })
            } }/>
        </div>
    </div>
}