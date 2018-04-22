import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import Home from './routes/home/home.component';
import UserDetails from './routes/userDetails/userDetails.component';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/user/:userLogin' component={UserDetails} />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();