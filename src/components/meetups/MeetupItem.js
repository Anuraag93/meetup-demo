import { useContext } from "react";

import Card from "../ui/Card";
import FavouritesContext from "../../store/favourites-context";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavouritesContext);

  const itemIsFavourite = favoritesCtx.itemIsFavourite(props.id);

  function toggleFavouriteStatusHandler() {
    if (itemIsFavourite) {
      favoritesCtx.removeFavourite(props.id);
    } else {
      favoritesCtx.addFavourite({
        key: props.id,
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {" "}
            {itemIsFavourite ? "Remove from Favorites" : "To Favorites"}{" "}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
