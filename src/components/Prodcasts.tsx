import React from 'react';
import { MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardImage,} from 'mdb-react-ui-kit';

export default function Prodcasts() {
  return (
    <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}



