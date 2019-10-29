import React from 'react';
import './ScrollTarget.scss';

const ScrollTarget = React.forwardRef(({ children }, ref) => (
    <div className="ScrollTarget" ref={ref}>{children}</div>
))

export default ScrollTarget;