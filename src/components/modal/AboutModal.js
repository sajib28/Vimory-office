import React, { Component } from 'react';
import { Modal,Button} from 'react-bootstrap';
class AboutModal extends Component {
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
         About Us
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sapiente iure maiores, voluptatum eius quisquam ex deleniti provident sint in nemo accusantium excepturi, aut perspiciatis adipisci, quis inventore commodi! Aspernatur molestiae earum similique, voluptate provident numquam harum vitae ipsa autem necessitatibus cupiditate voluptas magni eius? A ex odio porro nulla dolor. Officiis ad, ratione totam quas facilis vitae et id aut sit ipsa esse reiciendis cumque ipsam itaque impedit, voluptatum nisi. Voluptatibus fuga enim fugiat neque dolores doloribus asperiores adipisci magni voluptatum, nemo saepe eum ullam doloremque atque delectus expedita eos id beatae repellat odio dolore porro laboriosam veritatis. Cupiditate autem asperiores, commodi voluptatem obcaecati molestiae nam quibusdam necessitatibus dolorum? Iure distinctio, quos consequuntur nemo quis quisquam a sapiente voluptatem debitis sunt. Odit, eum magni repellendus quas beatae eveniet nihil asperiores. Beatae corrupti dolores ducimus inventore asperiores cupiditate voluptas explicabo ullam ipsum, eaque pariatur vero? Neque cupiditate repellat ex, doloribus omnis ullam consectetur beatae at qui officiis unde? Aut fuga animi doloremque quae sed, laudantium ex odit praesentium sequi, ipsum rem expedita fugit consequuntur, excepturi nulla. Ea, sint architecto non iste rerum nam harum distinctio deserunt quas consequuntur qui, illo dolorem eligendi doloribus corporis odit est laudantium a possimus labore!
         commodi! Aspernatur molestiae earum similique, voluptate provident numquam harum vitae ipsa autem necessitatibus cupiditate voluptas magni eius? A ex odio porro nulla dolor. Officiis ad, ratione totam quas facilis vitae et id aut sit ipsa esse reiciendis cumque ipsam itaque impedit, voluptatum nisi. Voluptatibus fuga enim fugiat neque dolores doloribus asperiores adipisci magni voluptatum, nemo saepe eum ullam doloremque atque delectus expedita eos id beatae repellat odio dolore porro laboriosam veritatis. Cupiditate autem asperiores, commodi voluptatem obcaecati molestiae nam quibusdam necessitatibus dolorum? Iure distinctio, quos consequuntur nemo quis quisquam a sapiente voluptatem debitis sunt. Odit, eum magni repellendus quas beatae eveniet nihil asperiores. Beatae corrupti dolores ducimus inventore asperiores cupiditate voluptas explicabo ullam ipsum, eaque pariatur vero? Neque cupiditate repellat ex, doloribus omnis ullam consectetur beatae at qui officiis unde? Aut fuga animi doloremque quae sed, laudantium ex odit praesentium sequi, ipsum rem expedita fugit consequuntur, excepturi nulla. Ea, sint architecto non iste rerum nam harum distinctio deserunt quas consequuntur qui, illo dolorem eligendi doloribus corporis odit est laudantium a possimus labore!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        )
    }
}
export default AboutModal;