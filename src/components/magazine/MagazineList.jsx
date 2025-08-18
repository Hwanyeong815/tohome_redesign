import { MagazineListStyle } from './style';
import magazineData from '../../assets/data/magazineData';

const MagazineList = () => {
    return (
        <MagazineListStyle>
            <section className="left">
                {magazineData.slice(0, 12).map((list) => (
                    <div className="img-wrap" key={list.id}>
                        <img src={list.images} alt="" />
                    </div>
                ))}
            </section>
            <section className="right">
                <div className="right-title">
                    <h2>Bon’s appetit</h2>
                    <h3>Chef’s Recipe at Home</h3>
                    <h4>
                        <span>7월 첫째주 셰프의 레시피</span>‘으깬 감자 구이’
                    </h4>
                </div>
                <div className="right-high">
                    <h3>Tohome Magazine : 집에서 만드는 셰프의 레시피</h3>
                </div>

                <button className="more">
                    자세히보기 <img src="/images/icon/icon_all.png" alt="icon_all.png" />{' '}
                </button>
                <div className="right-main-images-wrap">
                    <img
                        src="/images/magazine/recipe-meshpotato.png"
                        alt="레시피재료"
                        className="recipe-meshpotato"
                    />
                    <img
                        src="/images/magazine/recipe-potato.png"
                        alt="레시피재료"
                        className="recipe-potato"
                    />
                    <img
                        src="/images/magazine/recipe-basil.png"
                        alt="레시피재료"
                        className="recipe-basil"
                    />
                    <img
                        src="/images/magazine/recipe-cheese.png"
                        alt="레시피재료"
                        className="recipe-cheese"
                    />
                    <img
                        src="/images/magazine/recipe-lemon.png"
                        alt="레시피재료"
                        className="recipe-lemon"
                    />
                    <img
                        src="/images/magazine/recipe-yogurt.png"
                        alt="레시피재료"
                        className="recipe-yogurt"
                    />
                    <img
                        src="/images/magazine/recipe-parsley.png"
                        alt="레시피재료"
                        className="recipe-parsley"
                    />
                    <img
                        src="/images/magazine/recipe-blueberry.png"
                        alt="레시피재료"
                        className="recipe-blueberry"
                    />
                    <img
                        src="/images/magazine/recipe-eucalyptus.png"
                        alt="레시피재료"
                        className="recipe-eucalyptus"
                    />
                </div>
            </section>
        </MagazineListStyle>
    );
};

export default MagazineList;
