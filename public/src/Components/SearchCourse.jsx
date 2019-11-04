import React from 'react';

const SearchCourse = props => (
  <div className='search-course'>
    <input
      type='text'
      name='searchCourse'
      onChange={event => props.inputHandler(event)}
      placeholder='find course'
    />
    <button onClick={() => props.searchCourse()}>search</button>
  </div>
);

export default SearchCourse;
