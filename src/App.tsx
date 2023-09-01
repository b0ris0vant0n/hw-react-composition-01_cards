import Card from './components/Card';

function App() {
  return (
    <div>
      <Card
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        link="#"
      > 
      <img src='src/img/image.jpg' className='card-img-top' alt='#'/>
      </Card>
      <Card
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        link="#"
      > 
      </Card>
    </div>
  );
}

export default App;
