import React from 'react';
import Card from 'react-bootstrap/card'
import CardGroup from 'react-bootstrap/cardgroup'
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
<CardGroup>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/7539724/pexels-photo-7539724.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
  <Card.Body>
    <Card.Title>Skewed News</Card.Title>
    <Card.Text>
      Skewed News was a group project aimed to bring the concepts of front end development together. This project also included connecting to APIs.
    </Card.Text>
    <Card.Link href="https://github.com/Weird-but-Doable/SkewedNews">Link to this application</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
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


<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
  <Card.Body>
    <Card.Title>Progressive Web App Budget Tracker</Card.Title>
    <Card.Text>
      The progressive budget is a progressive web application that takes in values, on or offline and updates the database when the application is back online.
    </Card.Text>
    <Card.Link href="https://github.com/AliciaJK/ProgressiveBudget">Link to the GitHub Repository</Card.Link>
  </Card.Body>
</Card> 

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
  <Card.Body>
    <Card.Title>Employee Tracker</Card.Title>
    <Card.Text>
    This tool is an employee management system that allows a user to add employees, add roles, add departments, edit an employees role, view employees, view departments and view roles.
    </Card.Text>
    <Card.Link href="https://github.com/AliciaJK/EmployeeTracker">Link to the GitHub Repository</Card.Link>
  </Card.Body>
</Card> 

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
  <Card.Body>
    <Card.Title>Team Profile Generator</Card.Title>
    <Card.Text>
    This tool generates an HTML page for input of a team profile.
    </Card.Text>
    <Card.Link href="https://github.com/AliciaJK/TeamProfileGenerator">Link to the GitHub Repository</Card.Link>
  </Card.Body>
</Card> 

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/419635/notebook-empty-design-paper-419635.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
  <Card.Body>
    <Card.Title>Code Quiz</Card.Title>
    <Card.Text>
    A front end JavaScript application. 
    </Card.Text>
    <Card.Link href="https://github.com/AliciaJK/CodeQuiz">Link to the GitHub Repository</Card.Link>
  </Card.Body>
</Card> 
</CardGroup>
</div>
  
  ); 
}
