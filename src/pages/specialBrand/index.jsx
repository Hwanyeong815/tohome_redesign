import Brand1Myeong from "../../components/specialBrand/brand1_Myeong/Brand1Myeong";
import Brand2Table from "../../components/specialBrand/brand2_Table/Brand2Table";
import Brand3Yehyang from "../../components/specialBrand/brand3_Yehyang/Brand3Yehyang";
import Brand4Market from "../../components/specialBrand/brand4_Market/Brand4Market";

import BrandList from "../../components/specialBrand/BrandList";
import { SpecialBrandWrap } from "./style";

const SpecialBrand = () => {
  return (
    <SpecialBrandWrap>
      <div className="inner">
        <div className="top">
          <p>가치 있는 먹거리를 향한 현대식품관의 큐레이션</p>
          <h2>현대백화점 특화브랜드관</h2>
          <div className="brand">
            <p>명인명촌</p>
            <p>1TABLE</p>
            <p>예향</p>
            <p>동행마켓</p>
          </div>
        </div>
        <Brand1Myeong />
        <Brand2Table />
        <Brand3Yehyang />
        <Brand4Market />
        <BrandList />
      </div>
    </SpecialBrandWrap>
  );
};

export default SpecialBrand;
