import React from 'react';
import { ItemBox } from './style';
import { FaMinus } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa6';
import { IoGiftOutline } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

const SubBox = () => {
    return (
        <ItemBox>
            {/* <div className="subBox"> */} 
            <div className="image"></div>
            <div className="txt">
                <div className="brandName">
                    <p>[브랜드이름]</p>
                </div>
                <div className="name">
                    <p>제품명</p>
                    <span>제품명 무게 (냉동여부)</span>
                </div>
                <div className="price">
                    <p>17,900원</p>
                    <span>25,580</span>
                </div>
                <div className="calc">
                    <button className="minus">
                        <FaMinus />
                    </button>
                    <p className="num">1</p>
                    <button className="plus">
                        <FaPlus />
                    </button>
                </div>
                <div className="purchase">
                    <button>바로구매</button>
                </div>
                <div className="icons">
                    <div className="gift">
                        <IoGiftOutline />
                    </div>
                    <div className="cancel">
                        <IoClose />
                    </div>
                </div>
            </div>
            {/* </div> */}
        </ItemBox>
    );
};

export default SubBox;
