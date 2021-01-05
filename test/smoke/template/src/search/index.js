

import React from 'react';
import ReactDom from 'react-dom';
import './main.less';
import logo from './imgs/it-ch.png';
import '../../common/';
import { a } from './tree-shaking';
import largeNumber from 'large-number-add-demo';

class Search extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            Text: null
        };
    }
    loadComponent() {
        console.log(this);
        import('./text.js').then(r => {
            console.log(this);
            this.setState({
                Text: r.default
            });
        });
    }
    render() {
        const { Text } = this.state;
        const funcA = a();
        const addResult = largeNumber('999', '1');
        return <div className="search-text">
            { Text ? <Text /> : null }
            { addResult }
            {funcA}search text 哈哈哈aaa<img src={ logo } onClick={this.loadComponent.bind(this)} />
        </div>;
    }
}

ReactDom.render(
    <Search />,
    document.getElementById('root')
);
