const React = require("react");
const PropTypes = require('prop-types');

class Results extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>Results</div>
        )
    }
}

module.exports = Results;