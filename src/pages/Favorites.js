import { useContext } from "react";

import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  let content;
  const favoritesCtx = useContext(FavouritesContext);
  const meetups = [];

  for (const key in favoritesCtx.favourites) {
    const meetup = {
      id: key,
      ...favoritesCtx.favourites[key],
    };

    meetups.push(meetup);
  }

  if (favoritesCtx.totalFavourites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={meetups} />;
  }
  return (
    <section>
      <h1>Favorites Page</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
