import * as React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { ProjectsPage } from '../pages/projects.page';

import './router.scss';

export default class RouterComponent extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <section>
                    <menu className="menu">
                        <ul>
                            <li>
                                <div />
                                <Link to="/projects"> Projects</Link>
                            </li>
                            <li>
                                <div />
                                <Link to="/about"> About</Link>
                            </li>
                        </ul>
                    </menu>

                    <Route path="/projects" component={ProjectsPage} />
                    <Route path="/about" />
                </section>
            </BrowserRouter>
        );
    }
}
