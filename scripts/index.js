import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './common/App';
import View1 from './components/View1';
import View2 from './components/View2';
import View3 from './components/View3';

render((
    <Router history={browserHistory}>
        <Route path="/react-starter-kit/" component={App}>
            <IndexRoute component={View1}></IndexRoute>
            <Route path="/view2" component={View2}></Route>
            <Route path="/view3" component={View3}></Route>
        </Route>
    </Router>
), document.getElementById('app'));
