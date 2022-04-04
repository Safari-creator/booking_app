import './index.scss';
import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
const BookingForm = (props: any) => {
    const { values, touched, errors, handleChange, handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Row>
                <Col md="6">
                    <Form.Group className="mb-2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                            placeholder=""
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                        />
                        {errors.name && touched.name && (
                            <b className="text-danger">{errors.name}</b>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            id="emailaddress"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && touched.email && (
                            <b className="text-danger">{errors.email}</b>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Street Address</Form.Label>
                        <Form.Control
                            type="text"
                            id="address"
                            name="address"
                            value={values.address}
                            onChange={handleChange}
                        />
                        {errors.address && touched.address && (
                            <b className="text-danger">{errors.address}</b>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            name="city"
                            id="city"
                            value={values.city}
                            onChange={handleChange}
                        />
                        {errors.city && touched.city && (
                            <b className="text-danger">{errors.city}</b>
                        )}
                    </Form.Group>
                    <Row>
                        <Col md="6">
                            <Form.Group className="mb-2">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="state"
                                    id="state"
                                    value={values.state}
                                    onChange={handleChange}
                                />
                                {errors.state && touched.state && (
                                    <b className="text-danger">{errors.state}</b>
                                )}
                            </Form.Group>
                        </Col>
                        <Col md="6">
                            <Form.Group className="mb-2">
                                <Form.Label>Zip code</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="zipCode"
                                    id="zipCode"
                                    value={values.zipCode}
                                    onChange={handleChange}
                                />
                                {errors.zipCode && touched.zipCode && (
                                    <b className="text-danger">{errors.zipCode}</b>
                                )}
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>
                <Col md="6">
                    <Form.Group className="mb-2">
                        <Form.Label>Booking type</Form.Label>
                        <Form.Select
                            id="type"
                            name="bookingType"
                            value={values.bookingType}
                            onChange={handleChange}
                        >
                            <option value="">Select Type</option>
                            <option value="Housekeeping">Housekeeping</option>
                            <option value="DogWalk">Dog walks</option>
                        </Form.Select>
                        {errors.bookingType && touched.bookingType && (
                            <b className="text-danger">{errors.bookingType}</b>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Booking Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="date"
                            id="date"
                            value={values.date}
                            onChange={handleChange}
                        />
                        {errors.date && touched.date && (
                            <b className="text-danger">{errors.date}</b>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Booking Time</Form.Label>
                        <Form.Control
                            type="Time"
                            name="time"
                            id="date"
                            value={values.time}
                            onChange={handleChange}
                        />
                        {errors.time && touched.time && (
                            <b className="text-danger">{errors.time}</b>
                        )}
                    </Form.Group>
                </Col>
                <Button className="default-btn" type="submit">
                    Create booking
                </Button>
            </Row>
        </form>
    );
};

export default BookingForm;
