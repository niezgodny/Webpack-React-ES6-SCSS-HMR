import bar from './bar';
import './base.scss';
import ReactDOM from 'react-dom';
import React from 'react';

bar();

if (module.hot) {
    module.hot.accept('./app.js')
}

ReactDOM.render(
    <div>Hello React!</div>,
    document.getElementById('app')
)
