import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

/* Component Import */
import HorizontalLine from '../Components/HorizontalLine';

import './css/VehicleList.scss';

const VehicleList = (props) => {
  return (
    <List>
      {
        props.vehicleData.map((vehicle, index) => (
          <Fragment key={index}>
            <ListItem
              button
              onMouseEnter={() => props.markerHighlight(vehicle.vehicle_number, index)} onMouseLeave={props.markerUnHighlight}
              onClick={() => props.openModal(index)}>
              
              <ListItemText>
                <div className="listContent">
                  <div className="dotContainer">
                    <span className="dot"
                      style={{
                        borderColor: props.accidentStatus(vehicle.accidents),
                        backgroundColor: props.accidentStatus(vehicle.accidents)
                      }}></span>
                  </div>
                  <div className="contentContainer">
                    {vehicle.vehicle_name + ' ' + vehicle.vehicle_number}
                  </div>
                  <div className="accidentCountContainer">
                    {
                      vehicle.accidents >= 1 ?
                        <span className="badge" style={{ backgroundColor: props.accidentStatus(vehicle.accidents) }}>{vehicle.accidents}</span> : null
                    }
                  </div>
                </div>
              </ListItemText>

            </ListItem>

            <HorizontalLine lineProps={{
              color: '#A6A6A6',
              top: '0px',
              left: '7px',
              right: '7px',
              bottom: '0px'
            }} />

          </Fragment>
        ))
      }
    </List>
  );
}


export default VehicleList;
