import { Col, Container, Row } from "react-bootstrap";
import MainNavBar from "../components/MainNavBar"
import MyBreadcrumb from "../components/MyBreadcrumb";
function About() {
    return (
        <>
        <MainNavBar />
        <MyBreadcrumb pagename = "About" />
            <Container className="my-5">
                <Row>
                    <Col>
                        <span className="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolorum, ab veniam sequi, ut quae aperiam non velit incidunt inventore numquam pariatur consectetur dolor ipsum atque rem delectus totam dolorem!</span>
                    </Col>
                </Row>
            </Container>
        </>
    )
    
}

export default About;