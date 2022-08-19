import { useState } from 'react';

function RatingSelect({ select }) {
     const [selected, setSelected] = useState(10);

     const handleChange = (e) => {
          setSelected(e.currentTarget.value);
          select(e.currentTarget.value);
     };

     return (
          <ul className='rating'>
               <li>
                    <input
                         type='radio'
                         id='num1'
                         name='rating'
                         value='1'
                         onChange={handleChange}
                         checked={selected === 1}
                    />
                    <label htmlFor='num1'>1</label>
               </li>
               <li>
                    <input
                         type='radio'
                         id='num1'
                         name='rating'
                         value='1'
                         onChange={handleChange}
                         checked={selected === 1}
                    />
               </li>
               <li>
                    <input
                         type='radio'
                         id='num1'
                         name='rating'
                         value='1'
                         onChange={handleChange}
                         checked={selected === 1}
                    />
               </li>
               <li>
                    <input
                         type='radio'
                         id='num1'
                         name='rating'
                         value='1'
                         onChange={handleChange}
                         checked={selected === 1}
                    />
               </li>
               <li>
                    <input
                         type='radio'
                         id='num1'
                         name='rating'
                         value='1'
                         onChange={handleChange}
                         checked={selected === 1}
                    />
               </li>
               <li>
                    <input
                         type='radio'
                         id='num1'
                         name='rating'
                         value='1'
                         onChange={handleChange}
                         checked={selected === 1}
                    />
               </li>
               <li>
                    <input
                         type='radio'
                         id='num1'
                         name='rating'
                         value='1'
                         onChange={handleChange}
                         checked={selected === 1}
                    />
               </li>
               <li>
                    <input
                         type='radio'
                         id='num1'
                         name='rating'
                         value='1'
                         onChange={handleChange}
                         checked={selected === 1}
                    />
               </li>
               <li>
                    <input
                         type='radio'
                         id='num1'
                         name='rating'
                         value='1'
                         onChange={handleChange}
                         checked={selected === 1}
                    />
               </li>
               <li>
                    <input
                         type='radio'
                         id='num1'
                         name='rating'
                         value='1'
                         onChange={handleChange}
                         checked={selected === 1}
                    />
               </li>
          </ul>
     );
}

export default RatingSelect;
