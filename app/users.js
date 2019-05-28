const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
const App = require('./components/App');
require('./index.css');

class Users extends React.Component{
    render(){

        let users = this.props.list.filter(function(user){
            return user;
          });
              
          let newFriends = users.filter(function(friend){
              return friend.friend === true;
          });
          
          let nonFriends =
             users.filter(function(nonFriend){
               return nonFriend.friend !== true;
             });
      
        return(
            <div>
                <h1>Friends</h1>
                    <ul>
                        {
                            newFriends.map(function (user){
                                return <li key={user.name}>{user.name}</li>
                            })
                        }
                    </ul>
                    
                    <hr />
                    
                    <h1> Non Friends </h1>
                    <ul>
                        {
                            nonFriends.map(function (user){
                                return <li key={user.name}>{user.name}</li>
                            })           
                        }
                    </ul>   
            </div>
        )
    }
}

Users.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        friend: PropTypes.bool.isRequired,
    })),
}

ReactDOM.render(
    <Users list={[
        { name: 'Tyler', friend: true },
        { name: 'Ryan', friend: true },
        { name: 'Michael', friend: false },
        { name: 'Mikenzi', friend: false },
        { name: 'Jessica', friend: true },
        { name: 'Dan', friend: false } ]} 
      />,
    document.getElementById('app')
);