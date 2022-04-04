import './index.scss';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import BookingForm from './bookingForm';
const BookingModal = (props: any) => {
    // {show,showBookingModal,hideBookingModal} = props

    return (
        <div>
            <Modal
                show={props.show}
                onHide={() => props.hideBookingModal()}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                scrollable
            >
                <Modal.Header className="border-0 pb-0" closeButton>
                    <Modal.Title>Create booking</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            email: '',
                            name: '',
                            address: '',
                            city: '',
                            state: '',
                            zipCode: '',
                            date: '',
                            time: '',
                            bookingType: '',
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string()
                                .trim()
                                .email('Email must be a valid Email')
                                .required('Please add your email address*'),
                            name: Yup.string().trim().required('Please add your name*'),
                            address: Yup.string().trim().required('Please add your address*'),
                            city: Yup.string().trim().required('Please add your city*'),
                            state: Yup.string().trim().required('Please add your state*'),
                            zipCode: Yup.string()
                                .required('Please add your zipCode*')
                                .matches(/^[0-9]+$/, 'Must be only digits')
                                .min(5, 'Must be exactly 5 digits')
                                .max(5, 'Must be exactly 5 digits'),
                            date: Yup.string().trim().required('Please add your date*'),
                            time: Yup.string().trim().required('Please add your time*'),
                            bookingType: Yup.string()
                                .trim()
                                .required('Please select your Booking Type*'),
                        })}
                        onSubmit={(values) => {
                            const bookingdetails = {
                                type: values.bookingType,
                                email: values.email,
                                name: values.name,
                                address: `${values.address} , ${values.city} , ${values.state} ,${values.zipCode}`,
                                serviceDate: values.date + values.time,
                            };
                            props.createBooking(bookingdetails);
                        }}
                    >
                        {(props) => <BookingForm {...props} />}
                    </Formik>
                </Modal.Body>
                <Modal.Footer className="border-0">
                    {/* <Button className="default-btn">Create booking</Button> */}
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default BookingModal;
