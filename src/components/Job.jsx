/* eslint-disable react/prop-types */
import { Button } from 'react-bootstrap';

const Job = ({ data, onAddToFavorites, onRemoveFromFavorites, isFavourite }) => {
  const handleFavouriteClick = () => {
    if (isFavourite) {
      onRemoveFromFavorites(data._id); 
    } else {
      onAddToFavorites(data);  
    }
  };

  return (
    <div className="job-card">
      <h3>{data.title}</h3>
      <p>{data.company_name}</p>
      <Button
        variant={isFavourite ? 'danger' : 'success'}
        onClick={handleFavouriteClick}
      >
        {isFavourite ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
      </Button>
    </div>
  );
};

export default Job;
