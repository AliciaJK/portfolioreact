import React from 'react';
import Card from 'react-bootstrap/card'
// import Card from 'react-bootstrap/card'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

export default function Projects() {
  return (
    <div>
      <h1>Projects Page</h1>
      <p>
        Here are some of my latest projects: 
</p>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/7539724/pexels-photo-7539724.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
  <Card.Body>
    <Card.Title>Skewed News</Card.Title>
    <Card.Text>
      Skewed News was a group project aimed to bring the concepts of front end development together. This project also included connecting to APIs.
    </Card.Text>
    <Card.Link href="https://github.com/Weird-but-Doable/SkewedNews">Link to this application</Card.Link>
  </Card.Body>


</Card><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/158771/notebook-pen-table-blank-158771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
  <Card.Body>
    <Card.Title>Note Taker</Card.Title>
    <Card.Text>
      The Note Taker application was built to connect the front end to back end by creating routes.
    </Card.Text>
    <Card.Link href="https://sheltered-anchorage-83661.herokuapp.com/">Link to the application</Card.Link>
    <Card.Link href="https://github.com/AliciaJK/NoteTaker">Link to the GitHub Repository</Card.Link>
  </Card.Body>
</Card> 


</div>
  
  ); 
}
