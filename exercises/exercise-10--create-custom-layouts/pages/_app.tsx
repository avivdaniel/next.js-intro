import type {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";

// ✍️ import the custom layout
type NextPAgeWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
    Component: NextPAgeWithLayout
}
const App = ({Component, pageProps}: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page) => page)
    // ✍️ wrap the Component with the custom layout
    return (
        <ChakraProvider>
            {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
    )
}

export default App
