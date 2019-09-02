import React, { Component } from 'react';
import { Modal,Button} from 'react-bootstrap';
class PrivacyPolicyModal extends Component {
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
          Privacy Policy
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ipsum, vitae adipisci cum molestiae harum, blanditiis eligendi maiores dolorum reiciendis odio. Magni, vero ipsa beatae quia illo quos consequatur pariatur corrupti repellendus molestias debitis perspiciatis similique ab magnam voluptates sequi saepe error cumque obcaecati totam iste! Autem ex similique minima?
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam laudantium repudiandae facere odit dignissimos, sunt eos pariatur quisquam culpa aliquam consequatur natus. Nulla aut recusandae quasi quo natus voluptatem repellendus neque nam sequi deserunt alias eligendi nemo, sit ea illum quaerat minus totam placeat ducimus cum veritatis iste. Harum impedit laudantium quos omnis iste tempore itaque eveniet quo quibusdam unde! Necessitatibus architecto repellendus iusto impedit debitis consectetur doloremque corporis velit officiis ex obcaecati qui iure, ea nisi reprehenderit, corrupti possimus aperiam repellat. Nam perspiciatis similique distinctio nostrum eius, architecto, id ea autem dolorem corporis, voluptatibus laborum omnis ad earum tempora.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        )
    }
}
export default PrivacyPolicyModal;