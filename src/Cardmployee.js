import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardmployee({myEmp}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/Images/Facepooja.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         {myEmp.id}
         </Card.Text>
         <Card.Text>
         {myEmp.name}
         </Card.Text>
         <Card.Text>
         {myEmp.email}
         </Card.Text>
         <Card.Text>
         {myEmp.department}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardmployee;