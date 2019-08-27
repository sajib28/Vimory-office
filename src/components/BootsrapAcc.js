import React, { Component } from 'react'

import { Accordion, Card } from 'react-bootstrap';
class BootsrapAcc extends Component {
    render() {

        return (
            <Accordion defaultActiveKey="2">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <h5>Can I edit videos as well, or only pictures? <i className="fas fa-chevron-down"></i></h5>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <p>You can use all the features of this app after subscription. Without any subscription you can't use some of the premium features.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        <h5>I have found a bug, what should I do now?
                    <i className="fas fa-chevron-down"></i></h5>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <p>You can use all the features of this app after subscription. Without any subscription you can't use some of the premium features.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        <h5>What are the benefits of subscription?
                    <i className="fas fa-chevron-down"></i></h5>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <p>You can use all the features of this app after subscription. Without any subscription you can't use some of the premium features.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        <h5>How can i cancel my subscription?
                    <i className="fas fa-chevron-down"></i></h5>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <p>You can use all the features of this app after subscription. Without any subscription you can't use some of the premium features.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                        <h5>Is there an option to modify the speed?
                    <i className="fas fa-chevron-down"></i></h5>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            <p>You can use all the features of this app after subscription. Without any subscription you can't use some of the premium features.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}
export default BootsrapAcc;