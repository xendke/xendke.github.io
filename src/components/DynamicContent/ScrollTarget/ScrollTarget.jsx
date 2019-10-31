import React from 'react';
import './ScrollTarget.scss';

const ScrollTarget = React.forwardRef(({ children, last }, ref) => (
    <div className={`ScrollTarget ${last ? 'lastSection' : ''}`} ref={ref}>{children}</div>
))

export default ScrollTarget;