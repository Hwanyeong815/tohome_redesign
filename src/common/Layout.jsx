import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Spinner from '../components/spinner';

const Layout = () => {
    return (
        <div className="wrap">
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
