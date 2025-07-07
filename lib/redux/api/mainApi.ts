import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { FaqRes, Article } from '@/app/types'

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://real-estate.jamous-tech.com/api/' }),
    endpoints: (builder) => ({
        getFaqs: builder.query<FaqRes, void>({
          query: () => `faqs`,
        }),
        getProperties: builder.query<any, void>({
          query: () => 'properties'
        }),
        getCategories: builder.query<any, void>({
          query: () => 'categories'
        }),
        getArticles: builder.query<any, void>({
          query: () => 'articles'
        }),
        getArticlesByCat: builder.query<any, number>({
          query: (id: number) => `categories/${id}/articles`
        }),
        getArticle: builder.query< Article , string>({
          query: (slug) => `articles/${slug}`,
          transformResponse: (response: { data: Article }) => response.data,
        }),
    })
})

export const {useGetFaqsQuery, useGetPropertiesQuery, useGetArticlesQuery, useGetArticleQuery, useGetCategoriesQuery, useGetArticlesByCatQuery} = mainApi