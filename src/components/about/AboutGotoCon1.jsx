import { Link } from 'react-router-dom';
import { AboutLeft } from './style';

const AboutGotoCon1 = () => {
    return (
        <>
            <AboutLeft>
                <li>
                    <div className="con-text">
                        <h3
                            style={{
                                background:
                                    "url('/images/about/about_icon_01.png') no-repeat right 10px top 0",
                            }}
                        >
                            투홈구독
                        </h3>
                        <p className="green-title">나의 규칙적 미식 생활</p>
                        <p>
                            반찬 걱정은 투홈이 덜어드릴게요. 원하는 주기에 맞춰
                            찾아오는 작은 미식의 기쁨을 누려보세요.
                        </p>
                        <p>
                            부지런한 발걸음과 날카로운 감각으로 고른 영양 밸런스
                            건강 식단, 푸드케어 구독까지 담겨 있습니다.
                        </p>
                        <p>
                            전문가가 신중히 고른 식재료가 몇 번의 클릭만으로,
                            당신의 식탁 위에 오릅니다.
                        </p>
                    </div>
                </li>
                <li
                    style={{
                        background:
                            "url('/images/about/about_info_01.jpg') no-repeat 0 0",
                    }}
                >
                    <Link to="/sideDish" className="goto">
                        구독투홈 바로가기
                        <img src="/images/about/forward.png" alt="" />
                    </Link>
                </li>
            </AboutLeft>
        </>
    );
};

export default AboutGotoCon1;
