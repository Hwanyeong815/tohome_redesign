import Layout from './common/Layout';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
    About,
    Best,
    Cart,
    DawnDelivery,
    DirectDelivery,
    Gift,
    HealFood,
    Join,
    Login,
    Magazine,
    Main,
    NewProducts,
    NotFiles,
    Sale,
    SideDish,
    SpecialBrand,
    Support,
} from './pages';
import GlobalStyle from './styled/GlobalStyle';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CustomerDetail from './components/support/customer/CustomerDetail';
import ProductDetail from './components/product/ProductDetail';
import Customer from './components/support/customer/Customer';
import CustomerAdd from './components/support/customer/CustomerAdd';
import CustomerEdit from './components/support/customer/CustomerEdit';
import NoticeDetail from './components/support/notice/NoticeDetail';
import Notice from './components/support/notice/Notice';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/best" element={<Best />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/directDelivery" element={<DirectDelivery />} />
                        <Route path="/gift" element={<Gift />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/join" element={<Join />} />
                        <Route path="/magazine" element={<Magazine />} />
                        <Route path="/newProducts" element={<NewProducts />} />
                        <Route path="/dawnDelivery" element={<DawnDelivery />} />
                        <Route path="/notice">
                            <Route index element={<Notice />} />
                            <Route path=":noticeID" element={<NoticeDetail />} />
                        </Route>
                        <Route path="/customer">
                            <Route index element={<Customer />} />
                            <Route path="customeradd" element={<CustomerAdd />} />
                            <Route path="customeredit" element={<CustomerEdit />} />
                            <Route path=":customerID" element={<CustomerDetail />} />
                        </Route>
                        <Route path="/sale" element={<Sale />} />
                        <Route path="/specialBrand" element={<SpecialBrand />} />
                        <Route path="/support" element={<Support />} />
                        {/* 공통상세페이지 */}
                        <Route path="/product/:productID" element={<ProductDetail />} />

                        <Route path="/healFood" element={<HealFood />} />
                        <Route path="/sideDish" element={<SideDish />} />

                        <Route path="*" element={<NotFiles />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
