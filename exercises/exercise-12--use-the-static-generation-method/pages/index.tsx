// ✍️ import GetStaticProps from 'next'
import {List, ListItem, Container, Heading} from '@chakra-ui/react'
import {GetStaticProps} from "next";
import Link from "next/link";

type Props = {
    genres: string[]
}

const Home = ({genres}: Props) => {
    return (
        <Container>
            <Heading mb={4}>Genres:</Heading>
            <List>
                {genres.map((genre) => (
                    <ListItem key={genre}>
                        <Link href={`/${genre}`}>
                            {genre}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}

// ✍️ export the getStaticProps method and return an array of genres as props - safe for sb connection
export const getStaticProps: GetStaticProps<Props> = () => {
    return {
        props: {
            genres: ['rock', 'country', 'pop', 'indie']
        }
    }
}
export default Home
