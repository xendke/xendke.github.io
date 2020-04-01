import React from "react";
import ReactDOM from "react-dom";
import App from 'components/App';
import 'assets/favicon.ico';
import 'assets/keybase.txt';
import 'normalize.css';

const zeroPadded = (number) => (number > 9 ? number : `0${number}`);

if(location.search.includes('?devstack')) {
    const date = new Date;

    let month = zeroPadded(date.getMonth()+1);
    let day = zeroPadded(date.getDate());

    const dateString = `${month}${day}${date.getFullYear().toString().substr(-2)}`;

    location.href = `https://devstack-jgomez${dateString}-web.use1.dev.us.fdbox.net`;
}

ReactDOM.render(<App />, document.getElementById("root"));
