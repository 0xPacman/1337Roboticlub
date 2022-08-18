import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import '../styles/globals.css';

const theme = extendTheme({
    colors : {
        brand: {
            900: '#06283D',
            800: '#AED9EA',
            700: '#DFF6FF',
        }
    },
    fonts: {
        heading: 'Iceland',
        Text: 'Iceland',
        body: 'Iceland',
        Button: 'Iceland',
    }
});

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
