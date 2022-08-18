import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';

function App() {
     const text = 'Feedback UI';

     return (
          <>
               <Header text={text} />
               <div className='container'>
                    <FeedbackItem />
               </div>
          </>
     );
}

export default App;
