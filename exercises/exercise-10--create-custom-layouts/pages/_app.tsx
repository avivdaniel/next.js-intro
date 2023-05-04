import type {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import Layout from "../src/components/layout";

// ✍️ import the custom layout

const App = ({Component, pageProps}: AppProps) => {
    // ✍️ wrap the Component with the custom layout
    return (
        <ChakraProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}

export default App
