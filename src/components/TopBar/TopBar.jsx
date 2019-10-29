import React from 'react';
import imageOfJuan from 'assets/self.png';
import './TopBar.scss';

const TopBar = () => {
    return (
        <div className="TopBar">
            <div>
                <img
                    className="avatar"
                    src={imageOfJuan}
                    alt="Picture of Juan smiling to the camera."
                />
            </div>
            <div>
                <p className="line name">Juan X. Gomez</p>
                <p className="line title">Front End Engineer</p>
                <p className="line email">xendke@gmail.com</p>
            </div>
        </div>
    );
}

export default TopBar;