import { Button } from 'react-bootstrap';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent} from '@ionic/react';

const Book = ({
  id,
  bookname,
  author,
  price,
  quantity,
  date,
  handleRemoveBook
}) => {
  return (
    <IonCard style={{ width: '18rem' }} className="book">

      <IonCardHeader>
        <IonCardTitle className="book-title"> {bookname} </IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <div className="book-details">
          <div>Author: {author}</div>
          <div>Quantity: {quantity} </div>
          <div>Price: {price} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary">Edit</Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveBook(id)}>
          Delete
        </Button>
      </IonCardContent>
    </IonCard>
  );
};

export default Book;