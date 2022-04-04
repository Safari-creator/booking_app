import './index.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';
import { addItemAsync, addBooking } from '../../redux/actions/async-actions';
import { PaginationProps } from '../../models/pagination.model';
import Header from '../../common/header';
import { Button, Table } from 'react-bootstrap';
import BookingModal from '../Bookingmodal/index';
import { useNavigate } from 'react-router-dom';
import { BookingDetails } from '../../models/bookingdetails.model';
const BookingDashboard = () => {
    const navigate = useNavigate();
    const [pagination] = useState<PaginationProps>({
        sortBy: 'serviceDate',
        order: 'ASC',
        take: 100,
        offSet: 0,
    });
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const { bookingList } = useSelector((state: IRootState) => {
        return {
            bookingList: state.bookingList,
        };
    });
    useEffect(() => {
        addItemAsync(dispatch, pagination);
    }, []);
    const onshowBookingDetails = (id: string) => {
        navigate(`/booking/${id}`);
    };
    const showBookingModal = () => {
        setShow(true);
    };
    const hideBookingModal = () => {
        setShow(false);
    };
    const createBooking = (bookingDetails: BookingDetails) => {
        addBooking(dispatch, bookingDetails);
        addItemAsync(dispatch, pagination);
        hideBookingModal();
    };
    return (
        <div>
            <Header />
            <div className="main-wrapper">
                <div className="flex-between">
                    <h1 className="page-title">Bookings</h1>
                    <Button variant="primary" className="default-btn" onClick={showBookingModal}>
                        Create booking
                    </Button>
                </div>
                <Table responsive="md">
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Booking Type</th>
                            <th>Booking Date/Time</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingList.list?.bookings?.length &&
                            bookingList.list.bookings.map((list: any) => (
                                <tr key={list.id} onClick={() => onshowBookingDetails(list.id)}>
                                    <td>{list.name}</td>
                                    <td>{list.email}</td>
                                    <td>{list.address}</td>
                                    <td>{list.type}</td>
                                    <td>{list.serviceDate}</td>
                                    <td>{list.status}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </div>
            <BookingModal
                show={show}
                showBookingModal={showBookingModal}
                hideBookingModal={hideBookingModal}
                createBooking={createBooking}
            />
        </div>
    );
};

export default BookingDashboard;
