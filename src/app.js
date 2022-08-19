import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import PostPage from './pages/PostPage';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';

function App() {
     const text = 'Feedback UI';

     const [feedback, setFeedback] = useState(FeedbackData);

     const addFeedback = (newFeedback) => {
          newFeedback.id = uuidv4();
          console.log(newFeedback);
          setFeedback([newFeedback, ...feedback]);
     };

     const deleteFeedback = (id) => {
          if (window.confirm('Are You Certain You Want To Delete???')) {
               setFeedback(feedback.filter((item) => item.id !== id));
          }
     };

     return (
          <FeedbackProvider>
               <Router>
                    <Header text={text} />
                    <div className='container'>
                         <Routes>
                              <Route
                                   exact
                                   path='/'
                                   element={
                                        <>
                                             <FeedbackForm
                                                  handleAdd={addFeedback}
                                             />
                                             <FeedbackStats />
                                             <FeedbackList
                                                  handleDelete={deleteFeedback}
                                             />
                                        </>
                                   }></Route>
                              <Route path='/about' element={<AboutPage />} />
                              <Route path='/post/*' element={<PostPage />} />
                         </Routes>
                         <AboutIconLink />
                    </div>
               </Router>
          </FeedbackProvider>
     );
}

export default App;
