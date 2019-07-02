const React = require("react");
const PropTypes = require('prop-types');

class Results extends React.Component{
    render(){
        let players = queryString.parse(this.props.location.search)
        console.log(players);
        return(
            <div>Results</div>
        )
    }
}

module.exports = Results;