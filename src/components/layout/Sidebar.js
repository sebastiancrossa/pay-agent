import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div>
            <Link to="/client/add" className="btn btn-success btn-block">
                <span className="fas fa-plus"></span> New
            </Link>
        </div>
    )
}

export default Sidebar;