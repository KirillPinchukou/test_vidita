import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IOrder, ServerResponse } from 'models/models'

export const ordersApi = createApi({
    reducerPath: 'orders',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://639a098c16b0fdad775225e0.mockapi.io/'  
    }),
    endpoints: build => ({
        documents1: build.query<IOrder[], string> ({
            query: () => ({
                url: 'orders',
                method: 'GET'
            }),
            transformResponse: (response: ServerResponse<IOrder[]>) => {
                return response.items
            }
        }),
        disableOrders: build.mutation<string, string> ({
            query: (payload) => { 
                return {
                url: 'cancel',
                method: 'POST',
                body: payload
            }}
        })
    }),
    
})

export const { useDocuments1Query, useDisableOrdersMutation } = ordersApi