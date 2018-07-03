import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import routes from './routes.js';
import Nav from './components/Nav.jsx';

const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);

const App = () => (
        <div>
            <BrowserRouter>
                <Nav>
                    <Switch>
                        {routeComponents}
                    </Switch>
                </Nav>
            </BrowserRouter>
        </div>
);

ReactDom.render(<App/>, document.getElementById('react-app'));
