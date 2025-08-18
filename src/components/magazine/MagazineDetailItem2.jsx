import { MagazineDetailItem2Style } from './style';

const MagazineDetailItem2 = () => {
    return (
        <MagazineDetailItem2Style>
            {' '}
            <div className="chefs">
                <img src="/images/magazine/detail-chef.png" alt="" />
            </div>
            <div className="txts">
                <h2 className="fontChange">Chef&apos;s Say</h2>
                <h3>"겉은 바삭하고 속은 부드러운 으깬 감자구이"</h3>
                <p>
                    “강원도 고랭지에서 막 수확한 제철 감자를 삶아 곱게 으깬 뒤 파르미지아노 치즈와
                    파슬리를 올렸습니다. 에어프라이어로 겉은 은은하고 바삭하게, 속은 촉촉하게 구워
                    한 입마다 부드럽게 녹아내리죠. 치즈와 파슬리로 맛을 더 풍부하게 하고, 그릭
                    요거트와 레몬을 곁들여 향과 고소함을 완성했습니다. 집에서도 간단히 만들 수
                    있지만, 맛과 품격은 레스토랑 한 접시와 다름없습니다.”
                </p>
            </div>
        </MagazineDetailItem2Style>
    );
};

export default MagazineDetailItem2;
