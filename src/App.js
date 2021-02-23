
import './App.css';

function App() {
  // name and store variables before return statement
  const name = 'Jessica';
  const post = {
    title: 'Dinosaurs are awesome',
    author: 'Sealthy Stegosaurus',
    body: 'Check out this body property!',
    comments: ['First!', 'Great post', 'Hire this author now!']
  }
  
  return (

    <div className="App">
    {/* can use variables with curly brackets */}
    <p>{name}</p>
    <p>{post.title}</p>
    <p>{post.author}</p>
    <p>{post.body}</p>
    <p>{post.comments}</p>
    </div>
  );
}

export default App;
