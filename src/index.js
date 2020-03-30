import React from "react";
import ReactDOM from "react-dom";
import App from 'components/App';
import 'assets/favicon.ico';
import 'normalize.css';

if(location.search.includes('?devstack')) {
    const date = new Date;

    let month = date.getMonth()+1;
    month = month > 9 ? month : `0${month}`;

    const dateString = `${month}${date.getDate()}${date.getFullYear().toString().substr(-2)}`;

    location.href = `https://devstack-jgomez${dateString}-web.use1.dev.us.fdbox.net`;
}

ReactDOM.render(<App />, document.getElementById("root"));
