const RecommendLi = ({ product }) => {
    const { id, name, price, thumbnailImage } = product;
    return (
        <li>
            <img src={thumbnailImage} alt="" />
            <h2>{name}</h2>
            {/* {info && <p>{info}</p>}*/}
        </li>
    );
};

export default RecommendLi;
