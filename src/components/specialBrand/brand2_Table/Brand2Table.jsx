import Brand2List from "../BrandList";
import { Brand2Style } from "./style";

const Brand2Table = () => {
  return (
    <Brand2Style>
      <div className="brand2">
        <div className="title">
          <h2>1TABLE</h2>
          <i className="line"></i>
        </div>
        <table>
          <tr>
            <th>1TABLE 이야기</th>
            <td>
              가장 맛있는 식사는, 매일의 식탁 위에서 만들어진다고 믿습니다.
              <br />
              1TABLE은 엄선한 식재료와 검증된 맛집 레시피, 양보없는 철학으로
              간편함을 넘어
              <br />
              맛있고 건강한 식탁을 지향합니다.
            </td>
          </tr>
          <tr>
            <th>한 끼의 품격을 지키는 간편함</th>
            <td>
              1 TABLE은 현대백화점이 선보이는 프리미엄 HMR 브랜드입니다.
              <br />
              전문 셰프의 손길과 유명 맛집의 노하우를 담아,
              <br />
              간편하지만 정갈한 식사를 원하는 고객을 위해 만들어졌습니다.
              <br />
              화식한우 곰탕, 봉우리 떡갈비 등 검증된 메뉴로 바쁜 일상 속에도
              품격 있는 식사를 가능하게 합니다.
            </td>
          </tr>
        </table>
        <img src="images/specialbrand/brand2.jpg" alt="1TABLE" />
      </div>
      <Brand2List />
    </Brand2Style>
  );
};

export default Brand2Table;
