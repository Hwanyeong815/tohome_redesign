import { useEffect, useState } from 'react';
import { FloatingBtnStyle } from './style';
import { Link, useNavigate } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';

const FloatingBtn = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const navigate = useNavigate();

    const onClick1 = () => {
        navigate('/dawnDelivery');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <>
            {isVisible && (
                <FloatingBtnStyle>
                    <div>
                        <p className="img-box" onClick={onClick1}>
                            <img src="/images/icon/icon_dawnDelivery.png" alt="새벽배송" />
                            새벽배송
                        </p>
                        <p className="img-box">
                            <Link to="/cart" className="cart">
                                <RiShoppingCartLine /> <span>0</span>
                            </Link>
                            장바구니
                        </p>
                    </div>
                    <button className="top" onClick={scrollToTop}>
                        <p>TOP</p>
                        <img src="/images/icon/icon_topBtn.png" alt="탑버튼" />
                    </button>
                </FloatingBtnStyle>
            )}
        </>
    );
};

export default FloatingBtn;
