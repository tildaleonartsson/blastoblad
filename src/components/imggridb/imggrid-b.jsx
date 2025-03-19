import "./imggrid-b.css";

const ImgGridB = ({imgBUrl1, imgBUrl2, imgBUrl3, imgBAlt1, imgBAlt2, imgBAlt3} ) => {
    return (
        <div className="img-grid-b">
            <div className="img-grid-b-item-1">
            <img src={imgBUrl1} alt={imgBAlt1}/>
            </div>
            <div className="img-grid-b-item-2">
            <img src={imgBUrl2} alt={imgBAlt2} />
            </div>
            <div className="img-grid-b-item-3">
            <img src={imgBUrl3} alt={imgBAlt3} />
            </div>
        </div>
    );
};

export default ImgGridB;