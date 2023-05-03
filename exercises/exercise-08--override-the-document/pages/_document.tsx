import React from 'react';
import {Head, Html, NextScript, Main} from "next/document";

//Only rendered in the server.
const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💩</text></svg>"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
};

export default Document;