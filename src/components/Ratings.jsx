//## Import Pictures ##//
import starColor from "../assets/Rating-color.png";
import starGrey from "../assets/Rating.png";

//#####################//

function Ratings({rating}) {

  //## Numbers of stars for ratings ##//
  const stars = [1, 2, 3, 4, 5];
  //#################################//
  
  return (
    <div className="ratings">
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="container__accommodation__ratings-color"
            src={starColor}
            alt=""
          />
        ) : (
          <img
            key={star.toString()}
            className="container__accommodation__ratings"
            src={starGrey}
            alt=""
          />
        )
      )}
    </div>
  );
}

export default Ratings;