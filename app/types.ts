export interface FaqRes {
    status: string;
    data: FAQ[]
 }
export interface FAQ {
    id: number;
    question: string;
    answer: string
}

export interface User {
    id: number,
    name: string,
    email: string,
    imageUrl: string
}

export interface Property {
    id: number,
    title: string,
    featured_image: string,
    location: string,
    type: string,
    bedrooms: number,
    bathrooms: number,
    area: number,
    status: boolean,
    createdAt: string,
    governorate: string,
    city: string,
    user: User,
    imageUrl: string,
    price: number
}

export interface Article {
    id: number,
    title: string,
    content: string,
    slug: string,
    image: string,
    created_at: Date,
    updated_at: Date,
    user: {
        name: string,
        avatar_url: string
    },
    category: {
        name: string
    }
}

export interface Category {
    id: number,
    name: string
}