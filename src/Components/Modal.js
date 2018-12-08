import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

const DataModal = (props) => {
    return (
            <Modal size={'small'} open={props.modalIsOpen} onClose={props.closeModal}>
                <Modal.Header>VEHICLE DETAILS</Modal.Header>
                <Modal.Content>
                    {props.modalData}
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={props.closeModal}>Close</Button>
                </Modal.Actions>
            </Modal>
    );
}

export default DataModal;
