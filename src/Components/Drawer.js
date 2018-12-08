import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import Drawer from '@material-ui/core/Drawer';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';

/* Component Import */
import Search from './Search';
import DataModal from './Modal';
import SnackBar from './SnackBar';
import DrawerIcon from './DrawerIcon';
 
import VehicleList from './VehicleList';

import './css/Drawer.scss';

class DrawerComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      vertical: 'top',
      horizontal: 'center',
      modalIsOpen: false,
      vehicleData: []
    }
  }

  componentDidMount = () => this.setState({ vehicleData: this.props.vehicle_data });

  handleDrawer = () => this.props.dispatch({ type: 'HANDLE_DRAWER' });

  snackbarOpen = () => this.props.dispatch({ type: 'SNACKBAR_OPEN' });

  snackbarClose = () => this.props.dispatch({ type: 'SNACKBAR_CLOSE' });

  openModal = (index) => this.setState({ index: index, modalIsOpen: true });

  closeModal = () => this.setState({ modalIsOpen: false })

  accidentStatus = (accidentCount) => {
    return (accidentCount === 0) ? '#C1C1C1' : (accidentCount <= 2) ? '#51CE6A' : (accidentCount >= 3 && accidentCount <= 5) ? '#FFD458' : '#FF4444';
  }

  markerHighlight = (vehicle_number, index) => {
    let temp_vehicle_data = [];
    let v_data = this.props.vehicle_data[index];
    for (let key in v_data) {
      if (v_data.hasOwnProperty(key)) {
        if (v_data[key] === vehicle_number) {
          temp_vehicle_data.push(this.props.vehicle_data[index]);
        }
      }
    }
    this.props.dispatch({ type: 'HIGHLIGHT_MARKER', payload: temp_vehicle_data });
  }

  markerUnHighlight = () => this.props.dispatch({ type: 'UNHIGHLIGHT_MARKER' });

  searchText = (e) => {
    let updatedList = this.props.vehicle_data;
    updatedList = updatedList.filter(function (item) {
      return item.vehicle_name.toString().toLowerCase().search(
        e.target.value.toString().toLowerCase()) !== -1;
    });
    this.setState({ vehicleData: updatedList });
  }

  render() {

    const { classes } = this.props;

    const VehicleDetails = () => {
      let data = this.state.vehicleData[this.state.index];
      return (
        <Fragment>
          <p><b>VEHICLE TYPE:</b> {data.vehicle_type}</p>
          <p><b>VEHICLE NAME:</b> {data.vehicle_name}</p>
          <p><b>VEHICLE NUMBER:</b> {data.vehicle_number}</p>
          <p><b>ACCIDENTS:</b> {data.accidents}</p>
          <p><b>LOCATION: </b>{data.lat + ', ' + data.lng}</p>
        </Fragment>
      )
    }

    return (
      <div>
        <SnackBar
          snackbarIsOpen={this.props.snackbarIsOpen}
          snackbarOpen={this.snackBarOpen}
          snackbarClose={this.snackbarClose} />

        <DataModal
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          modalData={<VehicleDetails />} />

        <Drawer
          className="drawer"
          variant="persistent"
          anchor="left"
          open={this.props.drawerIsOpen}
          classes={{ paper: classes.drawerPaper }}>

          <Search 
            searchText={this.searchText}
            inputStyles={classes.input}
          />

          <VehicleList
            vehicleData={this.state.vehicleData}
            markerHighlight={this.markerHighlight}
            markerUnHighlight={this.markerUnHighlight}
            openModal={this.openModal}
            accidentStatus={this.accidentStatus} />

        </Drawer>

        <DrawerIcon 
          drawerIsOpen={this.props.drawerIsOpen}
          handleDrawer={this.handleDrawer}/>
      </div>
    );
  }
}

const styles = theme => ({
  drawerPaper: {
    width: '300px'
  },
  inputInput: {
    transition: theme.transitions.create('width'),
    width: '100%',
    margin: '7px 0px 0px 40px'
  }
});

function mapStateToProps(state) {
  return {
    drawerIsOpen: state.drawerIsOpen,
    snackbarIsOpen: state.snackbarIsOpen,
    vehicle_data: state.vehicle_data
  };
}


export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(DrawerComponent));