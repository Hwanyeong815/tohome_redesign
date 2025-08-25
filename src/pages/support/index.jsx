import { useState } from 'react';
import Customer from '../../components/support/customer/Customer';
import Faq from '../../components/support/faq/Faq';
import Notice from '../../components/support/notice/Notice';
import { SupporMainTap, SupportWrap } from './style';
import { Outlet, useMatch, useNavigate } from 'react-router-dom';

const Support = () => {
    const [activeTab, setActiveTab] = useState('all');
    const isIndex = useMatch({ path: '/support', end: true });
    const navigate = useNavigate();

    const goTab = (tab) => {
        setActiveTab(tab);
        // 탭 화면은 /support 인덱스에서만 보여주기 위해 보장
        if (!isIndex) navigate('/support');
    };

    return (
        <SupportWrap>
            <div className="inner">
                <SupporMainTap>
                    <h2>고객센터</h2>
                    <div className="tab">
                        <p
                            className={activeTab === 'all' ? 'on' : ''}
                            onClick={() => goTab('all')}
                        >
                            ALL
                        </p>
                        <p
                            className={activeTab === 'faq' ? 'on' : ''}
                            onClick={() => goTab('faq')}
                        >
                            자주 묻는 질문
                        </p>
                        <p
                            className={activeTab === 'notice' ? 'on' : ''}
                            onClick={() => goTab('notice')}
                        >
                            공지사항
                        </p>
                        <p
                            className={activeTab === 'customer' ? 'on' : ''}
                            onClick={() => goTab('customer')}
                        >
                            문의 게시판
                        </p>
                    </div>
                </SupporMainTap>

                {/* ✅ 인덱스(/support)일 때만 탭 콘텐츠 렌더 */}
                {isIndex && (
                    <>
                        {(activeTab === 'all' || activeTab === 'faq') && (
                            <Faq />
                        )}
                        {(activeTab === 'all' || activeTab === 'notice') && (
                            <Notice />
                        )}
                        {(activeTab === 'all' || activeTab === 'customer') && (
                            <Customer />
                        )}
                    </>
                )}

                <Outlet />
            </div>
        </SupportWrap>
    );
};

export default Support;
