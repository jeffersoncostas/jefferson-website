import * as React from 'react';
import './App.scss';
import PictureName from './components/picture-name/picture-name.component';

import RouterComponent from './router/router';

interface IApp {
    title: string;
}

export default class App extends React.Component<{}, IApp> {
    public titulo: string;

    constructor(props: any) {
        super(props);
    }

    public getTitulo(): string {
        return this.titulo;
    }
    public render() {
        return (
            <div className="App">
                <section className="App__wrapper">
                    <div className="App__wrapper__text-bg" />
                    <PictureName />
                    <RouterComponent />
                </section>
            </div>
        );
    }
}
