import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
     const [feedback, setFeedback] = useState({
          id: 1,
          text: 'this is from context',
          rating: 10,
     });

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
          <FeedbackContext.Provider
               value={{ feedback, deleteFeedback, addFeedback }}>
               {children}
          </FeedbackContext.Provider>
     );
};

export default FeedbackContext;
