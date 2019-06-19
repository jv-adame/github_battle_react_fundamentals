const React = require("react");
const Link = require("react-router-dom").Link;

class Home extends React.Component {
    render(){
        return(
            <div className="home_container">
                <h1>Github Battle: Battle Your Friends</h1>

                <Link className="button" to="/battle">
                    Battle
                </Link>
            </div>
        )
    }
}

module.exports = Home;