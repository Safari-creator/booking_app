import './index.scss';
import React, { useEffect, useState } from 'react';
import Header from '../../common/header';
import { IRootState } from '../../redux/store';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { cancelBooking } from '../../redux/actions/async-actions';
import { useParams, useNavigate } from 'react-router-dom';
const BookingDetails = () => {
    const [bookingData, setBookingData] = useState<any>([]);
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const { bookingList } = useSelector((state: IRootState) => {
        return {
            bookingList: state.bookingList,
        };
    });
    useEffect(() => {
        const data = bookingList.list?.bookings?.filter((data: any) => data.id === params.id);
        console.log(data);
        setBookingData(data[0]);
        console.log(bookingList);
    }, []);
    const DeleteBooking = () => {
        const id = params.id || '';
        cancelBooking(dispatch, id);
        navigate('/');
    };
    return (
        <div>
            <Header />
            <div className="main-wrapper">
                <div className="flex-between mb-4">
                    <h1 className="page-title page-title-dark">Bookings Details</h1>
                    <Button
                        variant="primary"
                        className="default-btn default-red"
                        onClick={DeleteBooking}
                    >
                        Delete booking
                    </Button>
                </div>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col sm="6">
                                <div className="p-2">
                                    <Card.Title>Customer Details</Card.Title>
                                    <div className="mb-4">
                                        <Card.Text className="mb-0">{bookingData?.name}</Card.Text>
                                        <Card.Text className="mb-0">{bookingData?.email}</Card.Text>
                                    </div>
                                    <Card.Text className="mb-0">{bookingData.address}</Card.Text>
                                </div>
                            </Col>
                            <Col sm="6">
                                <div className="p-2">
                                    <Card.Title className="mt-3 mt-sm-0">Details</Card.Title>
                                    <div className="mb-4">
                                        <Card.Text className="mb-0">{bookingData.type}</Card.Text>
                                    </div>
                                    <Card.Text className="mb-0">
                                        {bookingData.serviceDate}
                                    </Card.Text>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default BookingDetails;
