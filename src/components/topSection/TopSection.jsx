import React from 'react';
import { TitleBox } from './style';
const TopSection = ({ title, subtitle }) => {
    return (
        <TitleBox>
            <h2>
                <img src="/images/directDelivery/icon/title.png" alt="" />
                {title}
            </h2>
            <p>{subtitle}</p>
        </TitleBox>
    );
};
export default TopSection;
