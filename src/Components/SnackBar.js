import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const SnackBar = (props) => {
    let vertical = 'top', horizontal = 'center';
    let accidentLocations = ['Dubai', 'Coimbatore', 'Bangalore', 'Delhi', 'Mumbai', 'Kolkatta', 'Hyderabad'];

    function generateRandomInteger(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min))
    }

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={props.snackbarIsOpen}
                autoHideDuration={2000}
                onClose={props.snackbarClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={
                    <div>
                        <div>
                            <b>Met with an accident {generateRandomInteger(1, 20)} mins ago.</b>
                        </div>
                        <div>{accidentLocations[generateRandomInteger(1, 5)]}</div>
                    </div>
                } />
        </div>
    );
}



export default SnackBar;
