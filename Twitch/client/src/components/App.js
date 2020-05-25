import React from 'react';
import {Router,Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import history from '../history'

import Header from './Header'

const App=()=>{
    return (
        <div>
            
            <Router history={history}>
            
                <div className="ui container">
                <Header/>
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" exact component={StreamCreate} />
                <Route path="/streams/edit/:id" exact component={StreamEdit} />
                <Route path="/streams/delete" exact component={StreamDelete} />
                <Route path="/streams/show" exact component={StreamShow} />


    
                </div>
              


            </Router>
        </div>
    )
}
export default App