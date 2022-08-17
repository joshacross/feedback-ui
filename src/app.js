import Header from './components/Header';

function App() {
     const text = 'Feedback UI';

     return (
          <>
               <Header text={text} />
               <div className='container'></div>
          </>
     );
}

export default App;
