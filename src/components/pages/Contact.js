import React from 'react';
import Card from 'react-bootstrap/card'
import CardGroup from 'react-bootstrap/cardgroup'

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
 <CardGroup>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" />
  <Card.Body>
    <Card.Title>My LinkedIn</Card.Title>
    <Card.Link href="https://www.linkedin.com/in/aliciakrolak/">Click to view</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://image.flaticon.com/icons/png/512/25/25231.png" />
  <Card.Body>
    <Card.Title>My GitHub</Card.Title>
    <Card.Link href="http://www.github.com/aliciajk">Click to view</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.pngitem.com/pimgs/m/386-3860252_welcome-email-icon-transparent-hd-png-download.png" />
  <Card.Body>
    <Card.Title>Email Alicia</Card.Title>
    <Card.Link href="mailto:aliciajkrolak@gmail.com">Click to email</Card.Link>
  </Card.Body>
</Card>
</CardGroup>
    </div>
  );
}
