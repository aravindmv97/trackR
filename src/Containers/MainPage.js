import React, { Component, Fragment } from 'react';

import Map from '../Components/Map';
import DrawerComponent from '../Components/Drawer';
import ComponentLoader from '../Components/ComponentLoader';

import './css/MainPage.scss';

class MainPage extends Component {
    state = {
        loading: true
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 3000);
    }

    render() {
        return (
            <Fragment>
                {
                    (this.state.loading) ?
                        (
                            <ComponentLoader />
                        ) : (
                            <Fragment>
                                <DrawerComponent />
                                <Map />
                            </Fragment>
                        )
                }
            </Fragment>
        );
    }
}

export default MainPage;
