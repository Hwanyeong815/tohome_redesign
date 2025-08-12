const BannerLi = ({ banner }) => {
    const { img1, img2, p } = banner;
    return (
        <div className="img-box">
            <img src={img1} alt="img1" />
            <img src={img2} alt="img2" />
            <p>{p}</p>
            <button>
                자세히보기 <img src="images/icon/icon_all_w.png" alt="" />
            </button>
        </div>
    );
};

export default BannerLi;
