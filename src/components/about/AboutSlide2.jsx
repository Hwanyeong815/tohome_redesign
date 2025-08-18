import { Link } from 'react-router-dom';
import { AboutSlideItem } from './style';

const AboutSlide2 = ({ about }) => {
    const {
        imgUrl,
        title,
        titleEng,
        des,
        magazine,
        bannersubl,
        bannersubttll,
        bannersubr,
        bannersubttlr,
    } = about;
    return (
        <AboutSlideItem>
            <li>
                <img src={imgUrl} alt="" />
            </li>
            <li className="AboutSlideDetail">
                <h4>
                    {titleEng}
                    <span>2</span>
                </h4>
                <strong>{title}</strong>
                <p>{des}</p>
                <ul className="AboutMagazine">
                    <li>
                        <small>{magazine}</small>
                        <div className="AboutBanner">
                            <p>{bannersubl}</p>
                            <em>{bannersubttll}</em>
                            <img src="/images/about/about_arrow.png" alt="" />
                        </div>
                    </li>

                    <li>
                        <small>{magazine}</small>
                        <div className="AboutBanner">
                            <p>{bannersubr}</p>
                            <em>{bannersubttlr}</em>
                            <img src="/images/about/about_arrow.png" alt="" />
                        </div>
                    </li>
                </ul>
            </li>
        </AboutSlideItem>
    );
};

export default AboutSlide2;
