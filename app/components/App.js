const React = require('react');
const Popular = require('./Popular');

class App extends React.Component{
    render(){
        return(
            <div className="container">
                <div>Main App</div>
                <Popular />
            </div>
        )
    }
}

module.exports = App;