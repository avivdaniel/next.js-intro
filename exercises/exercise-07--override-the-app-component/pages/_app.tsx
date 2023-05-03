import {AppProps} from "next/app";

export default function App({Component, pageProps}: AppProps) {
    pageProps.title = 'This is my title';
    return <Component {...pageProps} />
}
