import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//https://api.escuelajs.co/api/v1 - fakeAPI

//https://redux-toolkit.js.org/rtk-query/usage/queries
//RTKQuery поєднує в собі запити на бекеннд і редакс
export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  tagTypes: ['Products'],

  // Query endpoints are defined by returning an object inside the endpoints section of createApi, and defining the fields using the builder.query() method.
  // Конечные точки запроса определяются путем возврата объекта в разделе конечных точек createApi и определения полей с помощью метода builder.query().

  endpoints: builder => ({
    getProducts: builder.query({
      query: () => 'products',
      providesTags: ['Products'],
    }),
    deleteProducts: builder.mutation({
      query: id => ({ url: `products/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Products'],
    }),
  }),
});

//Hooks are automatically generated based on the name of the endpoint in the service definition. An endpoint field with getPost: builder.query() will generate a hook named useGetPostQuery.
// Hooks создаются автоматически на основе имени конечной точки в определении службы. Поле конечной точки с getPost: builder.query() создаст хук с именем useGetPostQuery.

export const { useGetProductsQuery, useDeleteProductsMutation } = productsApi;
