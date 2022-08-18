import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';

function App() {
     const text = 'Feedback UI';

     const [feedback, setFeedback] = useState(FeedbackData);

     const deleteFeedback = (id) => {
          if (window.confirm('Are You Certain You Want To Delete???')) {
               setFeedback(feedback.filter((item) => item.id !== id));
          }
     };

     return (
          <>
               <Header text={text} />
               <div className='container'>
                    <FeedbackList
                         feedback={feedback}
                         handleDelete={deleteFeedback}
                    />
               </div>
          </>
     );
}

export default App;
