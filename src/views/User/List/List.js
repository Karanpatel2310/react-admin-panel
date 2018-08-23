import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import { Link, Route } from 'react-router-dom'
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table, Button } from 'reactstrap';
import Create from '../Create/Create';

class UserList extends Component {

    render() {
        // constructor() {
        //   super(props);
        //   this.state = {
        //     article: [],
        //   };
        // state = {
        //   redirect: false
        // }
        // }
        // setRedirect = () => {
        //   this.setState({
        //     redirect: true
        //   })
        // }
        // renderRedirect = () => {
        //   if (this.state.redirect) {
        //     return <Redirect to='/target' />
        //   }
        // }
        <Route path="/user/create" name="Create" component={Create} />
        return (
            <Col xs="12">
                <Row >
                    <Col md="1" sm>
                        {/* <Button onClick={this.props.history.push('/create')}>Add</Button> */}
                        <Link to='/user/create' > Add User </Link>
                    </Col>
                </Row>
                <br></br>
                <Card>
                    <CardBody>
                        <Table responsive bordered>
                            <thead >
                                <tr className="text-center">
                                    <th>First name</th>
                                    <th>Last name</th>
                                    <th>Email</th>
                                    <th>User name</th>
                                    <th>Status</th>
                                    <th>CreatedAt</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td>Pompeius</td>
                                    <td>René</td>
                                    <td>ex@gmail.com</td>
                                    <td>Pompeius René</td>
                                    <td>
                                        <Badge color="danger">Inactive</Badge>
                                    </td>
                                    <td>2012/01/01</td>
                                </tr>
                                <tr>
                                    <td>Pompeius</td>
                                    <td>René</td>
                                    <td>ex@gmail.com</td>
                                    <td>Pompeius René</td>
                                    <td>
                                        <Badge color="success">Active</Badge>
                                    </td>
                                    <td>2012/01/01</td>
                                </tr>
                                <tr>
                                    <td>Pompeius</td>
                                    <td>René</td>
                                    <td>ex@gmail.com</td>
                                    <td>Pompeius René</td>
                                    <td>
                                        <Badge color="danger">Inactive</Badge>
                                    </td>
                                    <td>2012/01/01</td>
                                </tr>
                                <tr>
                                    <td>Pompeius</td>
                                    <td>René</td>
                                    <td>ex@gmail.com</td>
                                    <td>Pompeius René</td>
                                    <td>
                                        <Badge color="success">Active</Badge>
                                    </td>
                                    <td>2012/01/01</td>
                                </tr>
                                <tr>
                                    <td>Pompeius</td>
                                    <td>René</td>
                                    <td>ex@gmail.com</td>
                                    <td>Pompeius René</td>
                                    <td>
                                        <Badge color="danger">Inactive</Badge>
                                    </td>
                                    <td>2012/01/01</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Pagination >
                            <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                            <PaginationItem active>
                                <PaginationLink tag="button">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem className="page-item"><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                        </Pagination>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default UserList;