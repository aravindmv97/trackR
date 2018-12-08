import React from 'react';
import Loader from 'react-loader-spinner';

import './css/ComponentLoader.scss';

const ComponentLoader = () =>
    (
        <div className="loaderContainer">
            <div className="loaderIcon" >
                <Loader type="ThreeDots" color="gray" height="40" width="40" />
            </div>
            <div className="loaderText" >
                <h4><b>Loading your console...</b></h4>
            </div>
        </div>
    );

export default ComponentLoader;
