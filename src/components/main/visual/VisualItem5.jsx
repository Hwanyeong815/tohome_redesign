import { BannerWrap } from './style';

const VisualItem5 = ({ visual }) => {
    const { title, des, img, position } = visual;
    // Wrap에 클래스 추후에 붙히기
    return (
        <BannerWrap $position={position} className="visual-con5">
            <div className="img-box">
                <img src={img} alt={title} />
            </div>
            <div className="txt-box">
                <h3>
                    <img src="/images/main/mainVisual5tit.png" alt={title} />
                </h3>
                <p>{des}</p>
                <div className="more">더보기</div>
            </div>
        </BannerWrap>
    );
};

export default VisualItem5;
