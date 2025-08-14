import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { JoinInfoStyle } from './style';
import Checkbox from '../../ui/CheckBox';

const JoinInfo = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    return (
        <JoinInfoStyle>
            <section className="info-tab-wrap">
                <div className="info-tab-head">
                    <form action="">
                        <Checkbox
                            className="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            label="[필수] 이용약관 동의"
                            htmlFor="admit1"
                        />
                        {/* <input type="checkbox" name="admit1" id="" /> */}
                        {/* <label htmlFor="admit1">[필수] 이용약관 동의</label> */}
                    </form>
                    <p className="arrowDown">
                        <MdOutlineKeyboardArrowDown />
                    </p>
                </div>
                <div className="info-tab-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, sed at.
                    Architecto dicta excepturi dolorum eius ullam voluptates laborum voluptatibus
                    veniam, fugiat, odit, aut ipsum dignissimos accusantium. Et, magnam tempora!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, sed at.
                    Architecto dicta excepturi dolorum eius ullam voluptates laborum voluptatibus
                    veniam, fugiat, odit, aut ipsum dignissimos accusantium. Et, magnam tempora!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, sed at.
                    Architecto dicta excepturi dolorum eius ullam voluptates laborum voluptatibus
                    veniam, fugiat, odit, aut ipsum dignissimos accusantium. Et, magnam tempora!
                </div>
            </section>
        </JoinInfoStyle>
    );
};

export default JoinInfo;
