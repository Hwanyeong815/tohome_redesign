import { useState } from 'react';
import Customer from '../../components/support/customer/Customer';
import Faq from '../../components/support/faq/Faq';
import Notice from '../../components/support/notice/Notice';
import { SupporMainTap, SupportWrap } from './style';

const Support = () => {
    const [activeTab, setActiveTab] = useState('all'); // all, faq, notice, customer

    return (
        <SupportWrap>
            <div className="inner">
                <SupporMainTap>
                    <h2>고객센터</h2>
                    <div className="tab">
                        <p
                            className={activeTab === 'all' ? 'on' : ''}
                            onClick={() => setActiveTab('all')}
                        >
                            ALL
                        </p>
                        <p
                            className={activeTab === 'faq' ? 'on' : ''}
                            onClick={() => setActiveTab('faq')}
                        >
                            자주 묻는 질문
                        </p>
                        <p
                            className={activeTab === 'notice' ? 'on' : ''}
                            onClick={() => setActiveTab('notice')}
                        >
                            공지사항
                        </p>
                        <p
                            className={activeTab === 'customer' ? 'on' : ''}
                            onClick={() => setActiveTab('customer')}
                        >
                            문의 게시판
                        </p>
                    </div>
                </SupporMainTap>

                {/* 탭에 따른 컴포넌트 조건 렌더링 */}
                {(activeTab === 'all' || activeTab === 'faq') && <Faq />}
                {(activeTab === 'all' || activeTab === 'notice') && <Notice />}
                {(activeTab === 'all' || activeTab === 'customer') && <Customer />}
            </div>
        </SupportWrap>
    );
};

export default Support;

// import Customer from '../../components/support/customer/Customer';
// import Faq from '../../components/support/faq/Faq';
// import Notice from '../../components/support/notice/Notice';
// import { SupporMainTap, SupportWrap } from './style';

// const Support = () => {
//     return (
//         <SupportWrap>
//             <div className="inner">
//                 <SupporMainTap>
//                     <h2>고객센터</h2>
//                     <div className="tab">
//                         <p className="on">ALL</p>
//                         <p>자주하는 질문</p>
//                         <p>공지사항</p>
//                         <p>문의 게시판</p>
//                     </div>
//                 </SupporMainTap>
//                 <Faq />
//                 <Notice />
//                 <Customer />
//             </div>
//         </SupportWrap>
//     );
// };

// export default Support;
