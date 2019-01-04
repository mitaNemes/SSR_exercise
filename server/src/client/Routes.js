import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import UsersList from './components/UserList';

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/userList" component={UsersList}/>
        </div>
    )
}