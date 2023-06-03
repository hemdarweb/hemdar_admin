import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from "../utils/theme";
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import MainBody from '../components/layout/MainBody';
import Footer from '../components/layout/Footer';



function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
  <CssBaseline />
  {/* <Header /> */}
  <Sidebar />
  <MainBody>
    <Component {...pageProps} />
  </MainBody>
  <Footer />
</ThemeProvider>
}

export default MyApp
