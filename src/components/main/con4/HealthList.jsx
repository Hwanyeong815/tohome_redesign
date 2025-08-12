const HelathArr = [
    {
        title: '암케어식단',
        img: 'images/main/healthFood1.png',
    },
    {
        title: '신장케어식단',
        img: 'images/main/healthFood2.png',
    },
    {
        title: '당뇨케어식단',
        img: 'images/main/healthFood3.png',
    },
    {
        title: '저당관리식단',
        img: 'images/main/healthFood4.png',
    },
];

const HealthList = () => {
    return (
        <div>
            <h2 className="main-title">투홈 건강식품구독</h2>
            <div className="logo_sub" style={{ width: '400px' }}>
                <img src="images/main/logo_medisola.png" alt="" />
            </div>
            <h3 className="sub-title">
                건강할 때부터, 건강이 걱정될 때까지. 나를 위한 똑똑한 영양 맞춤 푸드케어 브랜드
            </h3>
            <ul className="foodtype-wrap">
                {HelathArr.map((health) => {
                    return (
                        <li key={health.index}>
                            <p>{health.title}</p>
                            <img src={health.img} alt={health.title} className="back" />
                        </li>
                    );
                })}
                {/* <li>
                    <p>암케어식단</p>
                    <img src="images/main/healthFood1.png" alt="healthFood1.png" className="back" />
                </li>
                <li>
                    <p>암케어식단</p>
                    <img src="images/main/healthFood1.png" alt="healthFood1.png" className="back" />
                </li>
                <li>
                    <p>암케어식단</p>
                    <img src="images/main/healthFood1.png" alt="healthFood1.png" className="back" />
                </li>
                <li>
                    <p>암케어식단</p>
                    <img src="images/main/healthFood1.png" alt="healthFood1.png" className="back" />
                </li> */}
            </ul>
        </div>
    );
};

export default HealthList;
