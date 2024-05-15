import './Bottom.css';
export default function Bottom()
{
    return <div className="b-outer">
        <div className="b-inner">
            <div className="b-top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREVabZnO6zy99IYMqlBCMnf0nT_BlZvIBAvw&s"/>
            </div>
            <div className="b-mid">
                <div>
                    <span>Rita Correia</span>
                    <span>32</span>
                </div>
                <div>London</div>
            </div>
            <div className="b-bottom">
                <div>
                    <span>80K</span>
                    <span>Followers</span>
                </div>
                <div> 
                    <span>803K</span>
                    <span>Likes</span>
                </div>
                <div>
                    <span>1.4K</span>
                    <span>Photos</span>
                </div>
            </div>
        </div>
    </div>
}