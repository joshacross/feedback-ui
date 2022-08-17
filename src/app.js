import Header from './components/Header';

function App() {
     const title = 'Blog Post';
     const body = 'This is my blog post';
     const comments = [
          { id: 1, text: 'Comment One' },
          { id: 2, text: 'Comment Two' },
          { id: 3, text: 'Comment Three' },
     ];

     const loading = false;

     if (loading) return <h1>Loading ...</h1>;

     return (
          <div className='container'>
               <Header />
               <h3>Comments ({comments.length}) </h3>
               <ul>
                    {comments.map((comment, index) => (
                         <li key={index}>{comment.text}</li>
                    ))}
               </ul>
          </div>
     );
}

export default App;
