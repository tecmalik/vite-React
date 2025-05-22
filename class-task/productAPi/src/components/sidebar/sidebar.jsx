import react from 'react'
import { Link } from 'react-router';

const SideBar = () => {
    return (
        <div className="fullWrapper">
            <div className="panel">
                <Link to = "/dummyjson"> DummyJsonProducts </Link>
                <br/>
                <Link to = "/fakeProduct"> fakeProducts </Link>
            </div>
            <div>SideBAr</div>

        </div>
        
    )
}

export default SideBar;