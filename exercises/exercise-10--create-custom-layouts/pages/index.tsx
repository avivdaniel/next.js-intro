import {Heading} from '@chakra-ui/react'
import {ReactElement} from "react";
import Layout from "../src/components/layout";

const Home = () => {
    return (
        <Heading w="full" textAlign="center">
            This is our homepage content!
        </Heading>
    )
}

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>
export default Home
