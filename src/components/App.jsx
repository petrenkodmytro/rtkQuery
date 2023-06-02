import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Products from './Products/Products';
import ScrollToTop from 'react-scroll-to-top';

export const App = () => {
  return (
    <Layout>
      <Products />

      <ScrollToTop/>
      <ToastContainer />
      <GlobalStyle />
    </Layout>
  );
};
