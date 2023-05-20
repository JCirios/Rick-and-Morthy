import "./Card.css";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { addFav, removeFav } from "../redux/actions/actions";
import { useState } from "react";
import { useEffect } from "react";

function Card(props) {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites
  } = props;

  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  }
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (

    <div className="card">
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={() => onClose(id)}>X</button>
      <Link className="link" to={`/detail/${id}`}>
        <h2>{name}</h2>
        <h2>{origin}</h2>
        <h2>{species}</h2>
        {/* <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2> */}
    
        <img src={image} alt={name} />
      </Link>
    </div>
  );
}

function mapStateToProp(state) {
  return {
    myFavorites: state.myFavorites
  };
}

function mapDispatchToProp(dispatch) {
  return {
    addFav: (ch) => dispatch(addFav(ch)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

export default connect(mapStateToProp, mapDispatchToProp)(Card);
