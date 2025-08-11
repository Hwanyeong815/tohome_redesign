import { useState } from 'react';
import Brand1Myeong from '../../components/specialBrand/brand1_Myeong/Brand1Myeong';
import Brand2Table from '../../components/specialBrand/brand2_Table/Brand2Table';
import Brand3Yehyang from '../../components/specialBrand/brand3_Yehyang/Brand3Yehyang';
import Brand4Market from '../../components/specialBrand/brand4_Market/Brand4Market';

import BrandList from '../../components/specialBrand/BrandList';
import { SpecialBrandWrap } from './style';

const SpecialBrand = () => {
    const [activeTab, setActiveTab] = useState('Brand1Myeong');
    return (
        <SpecialBrandWrap>
            <div className="inner">
                <div className="top">
                    <p>가치 있는 먹거리를 향한 현대식품관의 큐레이션</p>
                    <h2>현대백화점 특화브랜드관</h2>
                    <div className="brand">
                        <p
                            className={activeTab === 'Brand1Myeong' ? 'on' : ''}
                            onClick={() => setActiveTab('Brand1Myeong')}
                        >
                            명인명촌
                        </p>
                        <p
                            className={activeTab === 'Brand2Table' ? 'on' : ''}
                            onClick={() => setActiveTab('Brand2Table')}
                        >
                            1TABLE
                        </p>
                        <p
                            className={activeTab === 'Brand3Yehyang' ? 'on' : ''}
                            onClick={() => setActiveTab('Brand3Yehyang')}
                        >
                            예향
                        </p>
                        <p
                            className={activeTab === 'Brand4Market' ? 'on' : ''}
                            onClick={() => setActiveTab('Brand4Market')}
                        >
                            동행마켓
                        </p>
                    </div>
                </div>
                {(activeTab === '명인명촌' || activeTab === 'Brand1Myeong') && <Brand1Myeong />}
                {(activeTab === '1TABLE' || activeTab === 'Brand2Table') && <Brand2Table />}
                {(activeTab === '예향' || activeTab === 'Brand3Yehyang') && <Brand3Yehyang />}
                {(activeTab === '동행마켓' || activeTab === 'Brand4Market') && <Brand4Market />}
            </div>
        </SpecialBrandWrap>
    );
};

export default SpecialBrand;
