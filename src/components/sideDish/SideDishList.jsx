import SideDishItem from './SideDishItem';
import { SideDishListStyle } from './style';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const arr = [
    { id: 1, img: '이미지주소', title: '' },
    { id: 2, img: '이미지주소', title: '' },
    { id: 3, img: '이미지주소', title: '' },
    { id: 4, img: '이미지주소', title: '' },
];

const SideDishList = () => {
    return (
        <SideDishListStyle>
            <div className="title">
                <h2>8월 반찬 안내</h2>
            </div>
            <div className="items">
                <SideDishItem />
                <SideDishItem />
                <SideDishItem />
                <SideDishItem />
                <SideDishItem />
                <SideDishItem />
                <SideDishItem />
                <SideDishItem />
                <SideDishItem />

                <SideDishItem />
                <SideDishItem />
                <SideDishItem />
                <SideDishItem />
                <SideDishItem />
                <SideDishItem />
                <SideDishItem />
                <SideDishItem />
                <SideDishItem />
            </div>

            <div className="arrow">
                <i>
                    <FaAngleLeft />
                </i>
                <i>
                    <FaAngleRight />
                </i>
            </div>

            {/* {arr.map((item) => (
                <SideDishItem key={item.id} item={item} />
            ))} */}
        </SideDishListStyle>
    );
};

export default SideDishList;
