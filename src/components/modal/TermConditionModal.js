import React, { Component } from 'react';
import { Modal,Button} from 'react-bootstrap';
class TermConditionModal extends Component {
    // constructor(props){
    //     super(props);
    // }
    
    render() {

        return (
            <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Terms and Conditions
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ipsum, vitae adipisci cum molestiae harum, blanditiis eligendi maiores dolorum reiciendis odio. Magni, vero ipsa beatae quia illo quos consequatur pariatur corrupti repellendus molestias debitis perspiciatis similique ab magnam voluptates sequi saepe error cumque obcaecati totam iste! Autem ex similique minima?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        )
    }
}
export default TermConditionModal;