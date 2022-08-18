import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';

function App() {
     const text = 'Feedback UI';

     const [feedback, setFeedback] = useState(FeedbackData);

     return (
          <>
               <Header text={text} />
               <div className='container'>
                    <FeedbackList feedback={feedback} />
               </div>
          </>
     );
}

export default App;
