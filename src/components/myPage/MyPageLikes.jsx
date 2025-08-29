import { MyPageLikesStyle } from './style';

const MyPageLikes = () => {
    return (
        <MyPageLikesStyle>
            <div className="like">
                <div className="text">
                    <h2>좋아요</h2>
                    <button>
                        <span>자세히보기</span>
                        <img src="images/icon/icon_all.png" alt=""></img>
                    </button>
                </div>
                <div className="list"></div>
            </div>
        </MyPageLikesStyle>
    );
};

export default MyPageLikes;
