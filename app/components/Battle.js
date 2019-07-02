const React = require("react");
const PropTypes = require('prop-types');
const Link = require("react-router-dom").Link;
const config = require("./config.js");
const PlayerPreview = require("./PlayerPreview.js");


class PlayerInput extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        //declaration from event

        const {name, value} = event.target;

        this.setState(function(){
            return{
                [name]: value
            }
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit(
            this.props.id,
            this.state.username
        );
    }
    render(){
        return (
            <div>
                <form className="column" onSubmit={this.handleSubmit}>
                    <label className="header" htmlFor="username">
                        {this.props.label}
                    </label>
                    <input
                        id="username"
                        name="username"
                        placeholder="github username"
                        type="text"
                        autoComplete="off"
                        value={this.state.username}
                        onChange={this.handleChange}
                        />
                    <button
                        className="button"
                        type="submit"
                        disabled={!this.state.username}>
                            Submit
                    </button>
                </form>
            </div>
        )
    }

}

PlayerInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

PlayerInput.defaultProps = {
    label: "Username",
}

class Battle extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            playerOneName: "",
            playerTwoName: "",
            playerOneImage: null,
            playerTwoImage: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(id, username){
        this.setState(function(){
            let newState = {};
            newState[id + "Name"] = username;
            newState[id + "Image"] = "http://github.com/" + username + ".png?size=200";
            return newState;
        })
    }

    handleReset(id){
        this.setState(function(){
            let newState = {};
            newState[id + "Name"] = "";
            newState[id + "Image"] = null;
            return newState;
        })
    }    
    render(){

        let match = this.props.match;
        let playerOneName = this.state.playerOneName;
        let playerTwoName = this.state.playerTwoName;
        let playerOneImage = this.state.playerOneImage;
        let playerTwoImage = this.state.playerTwoImage;
        return(
            <div>
                <div className="row">
                    {!playerOneName ? <PlayerInput 
                                            id={"playerOne"}
                                            label="Player One"
                                            onSubmit={this.handleSubmit}/>
                                    : <PlayerPreview 
                                            avatar={playerOneImage}
                                            username={playerOneName}>
                                            <button 
                                                className="reset"
                                                onClick={this.handleReset.bind(null, "playerOne")}>
                                                    Reset
                                            </button>
                                        </PlayerPreview> }
    
                    {!playerTwoName ? <PlayerInput 
                                            id={"playerTwo"}
                                            label="Player Two"
                                            onSubmit={this.handleSubmit}/>
                                    : <PlayerPreview 
                                            avatar={playerTwoImage}
                                            username={playerTwoName}>
                                            <button 
                                                className="reset"
                                                onClick={this.handleReset.bind(null, "playerTwo")}>
                                                    Reset
                                            </button>
                                        </PlayerPreview>}
                </div>
                {playerOneImage && playerTwoImage &&
                    <Link
                        className="button"
                        to={{
                            pathname: match.url + "/results",
                            search: "?playerOneName=" + playerOneName + "&playerTwoName=" + playerTwoName
                        }}>
                        Battle
                    </Link>}
            </div>
        )
    }
}

module.exports = Battle;