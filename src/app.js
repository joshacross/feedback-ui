import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import PostPage from './pages/PostPage';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';

function App() {
     const text = 'Feedback UI';

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
                                             <FeedbackForm />
                                             <FeedbackStats />
                                             <FeedbackList />
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
