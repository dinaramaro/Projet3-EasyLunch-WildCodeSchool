import React from 'react';
import { Col, Row } from 'reactstrap';
import './Equipe.css';

const Equipe = () => {
    return (
        <Row className="equipe">
            <Col className="person">
                <img src="http://static8.viadeo-static.com/_oqZQQ8r004CbcMel3x0gYobYLw=/300x300/member/002unsgxp0sx8q3%3Fts%3D1413156530000" alt="Easy-lunch-Arthur" />
                <h1>Arthur Del Piano</h1>
                <p>Co-fondateur</p>
            </Col>
            <Col className="person">
                <img src="http://static8.viadeo-static.com/kwrEXUPRO_olqZQG6g9uZEz2NAc=/300x300/member/0021gi46s33odp1t%3Fts%3D1535908781000" alt="Easy-lunch-Theo" />
                <h1>Théo Del Piano</h1>
                <p>Co-fondateur</p>
            </Col>
        </Row>
    )
}

export default Equipe;