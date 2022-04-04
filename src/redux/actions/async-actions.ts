import { Dispatch } from 'redux';
import * as actions from './actions';
import { DemoActions } from './types';
import axios from 'axios';
import { PaginationProps } from '../../models/pagination.model';
import { BookingDetails } from '../../models/bookingdetails.model';
export async function addItemAsync(dispatch: Dispatch<DemoActions>, pagination: PaginationProps) {
    dispatch(actions.setLoading(true));
    axios({
        url: 'https://qz1l95.sse.codesandbox.io/',
        method: 'post',
        data: {
            query: `
            query {
                bookings(sortBy: ${pagination.sortBy},order: ${pagination.order},take:${pagination.take},offset:${pagination.offSet}) {
                  total
                  bookings {
                    id
                    email
                    type
                    status
                    name
                    address
                    serviceDate
                  }
                }
              }
            `,
        },
    }).then((result) => {
        console.log(result.data.data.bookings);
        dispatch(actions.addItemToList(result.data.data.bookings));
    });
}

export async function cancelBooking(dispatch: Dispatch<DemoActions>, bookingId: string) {
    axios({
        url: 'https://qz1l95.sse.codesandbox.io/',
        method: 'post',
        data: {
            query: `
            mutation Bookings {
                cancelBooking(bookingId: "${bookingId}") {
                  name
                }
              }
            `,
        },
    }).then((result) => {
        dispatch(actions.addItemToList(result.data.data));
    });
}
export async function addBooking(_dispatch: Dispatch<DemoActions>, bookingDetails: BookingDetails) {
    axios({
        url: 'https://qz1l95.sse.codesandbox.io/',
        method: 'post',
        data: {
            query: `
            mutation Bookings{
              createBooking(input: {name: "${bookingDetails.name}",email:"${bookingDetails.email}",serviceDate:"${bookingDetails.serviceDate}",address:"${bookingDetails.address}",type:${bookingDetails.type}}) {
                name
                email
                serviceDate
                address
                type
              }
            }
        `,
        },
    }).then((_result) => {
        console.log(_result);
    });
}
