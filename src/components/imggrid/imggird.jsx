import "./imggrid.css";

const ImgGrid = ({ imgUrl1, imgUrl2, imgUrl3, imgAlt1, imgAlt2, imgAlt3}) => {
    return (
        <div className="img-grid">
            <div className="img-grid-item-1">
                <img src={imgUrl1} alt={imgAlt1} />
            </div>
            <div className="img-grid-item-2">
                <img src={imgUrl2} alt={imgAlt2} />
            </div>
            <div className="img-grid-item-3">
                <img src={imgUrl3} alt={imgAlt3} />
            </div>
            </div>
    );
};

export default ImgGrid;