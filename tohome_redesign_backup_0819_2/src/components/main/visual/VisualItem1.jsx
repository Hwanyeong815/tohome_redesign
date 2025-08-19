import { BannerWrap } from './style';

const VisualItem1 = ({ visual }) => {
    const { title, des, img, position } = visual;
    // Wrap에 클래스 추후에 붙히기
    return (
        <BannerWrap $position={position}>
            <div className="img-box">
                <img src={img} alt={title} />
            </div>
            <div className="txt-box">
                <h3>
                    {title.split('\n').map((line, i) => (
                        <span key={i}>
                            {line}
                            <br />
                        </span>
                    ))}
                </h3>
                <p>
                    {des.split('\n').map((line, i) => (
                        <span key={i}>
                            {line}
                            <br />
                        </span>
                    ))}
                </p>
                <div className="more">더보기</div>
            </div>
        </BannerWrap>
    );
};

export default VisualItem1;
