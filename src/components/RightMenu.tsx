import React from 'react';
import { useWindowDimensions } from '../hooks/useWindowDimensions';

const RightMenu = () => {
    const { width } = useWindowDimensions();
    
    if (width <= 768) return null;

    return <div className="rightmenu">Right menu</div>
}

export default RightMenu;