import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { removeFav } from "../redux/actions/actions";
import './Cards.css'
function Favorites({ myFavorites, onClose, removeFav }) {
  function closeFavorite(id) {
    onClose(id);
    removeFav(id);
  }
  return (
    <div className="cards_container">
      {myFavorites &&
        myFavorites.map((element, index) => {
          return (
            <div>
            <Card
              key={index}
              id={element.id}
              name={element.name}
              status={element.status}
              species={element.species}
              gender={element.gender}
              origin={element.origin.name}
              image={element.image}
              onClose={() => closeFavorite(element.id)}
            ></Card>
            </div>
          );
        })}
    </div>
  );
}
function mapState(st) {
  return {
    myFavorites: st.myFavorites,
  };
}
function mapDispatch(d) {
  return {
    removeFav: (id) => d(removeFav(id)),
  };
}

export default connect(mapState, mapDispatch)(Favorites);
