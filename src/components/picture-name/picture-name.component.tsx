import * as React from 'react';
import './picture-name.component.scss';

export default class PictureName extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="pic-name-all">
                <section className="picture-name">
                    <div className="picture-name__pic-c">
                        <div className="picture-name__pic-c__pic" />
                        <div className="picture-name__pic-c__container" />
                    </div>
                    <h1>Jefferson Costa</h1>
                </section>
                <section className="picture-socials">
                    <ul>
                        <li />
                        <li />
                    </ul>
                </section>
            </div>
        );
    }
}
