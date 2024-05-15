import './Caed.css';
export default function Card({ info }) {
    if (!info.login) {
        return <div></div>
    }
    else {
        return <div className="container">
            <div className="box">
                <span className="title">Name: {info.login}</span>
                <div>
                    <strong>No of Followrs: {info.followers}</strong>
                    <p>No of Following: {info.following}</p>
                    <span>created at: </span> <span>{info.created_at}</span>
                </div>
            </div>
        </div>
    }
}
