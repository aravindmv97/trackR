import React from 'react';
import { Icon } from 'semantic-ui-react';

import './css/DrawerIcon.scss';

const DrawerIcon = (props) => {
    return (
        <div className="drawerIcon" style={{ marginLeft: props.drawerIsOpen ? '300px' : '2px' }} onClick={props.handleDrawer}>
            {
                props.drawerIsOpen ?
                    <Icon name='caret left' className="margin" /> : <Icon name='caret right' />
            }
        </div>
    );
}

export default DrawerIcon;
