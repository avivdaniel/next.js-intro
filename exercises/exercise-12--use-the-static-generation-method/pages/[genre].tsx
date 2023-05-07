import React from 'react';
import {GetStaticPaths, GetStaticProps} from "next";

type Props = {
    genre: string
}
const Genre = ({genre}: Props) => {
    return (
        <div>
            Hello {genre}
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: ['rock', 'country', 'pop'].map(genre => ({params: {genre}})),
        fallback: false // False - 404 page if not exists
    }
}

export const getStaticProps: GetStaticProps<Props> = (context) => {
    const genre = context.params?.genre as string;

    if (!genre) {
        return {
            notFound: true
        }
    };

    return {
        props: {
            genre
        },
        revalidate: 5 //ISR
    }
};


export default Genre;