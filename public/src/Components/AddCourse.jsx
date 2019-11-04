import React from 'react';

const AddCourse = props => (
  <div className='add-course'>
    <form action=''>
      <input
        type='text'
        name='addCourseName'
        placeholder='course name'
        onChange={event => props.inputHandler(event)}
      />
      <input
        type='text'
        name='addCourseDomain'
        placeholder='domain'
        onChange={event => props.inputHandler(event)}
      />
      <textarea
        name=''
        name='addCourseDescription'
        placeholder='course description'
        onChange={event => props.inputHandler(event)}
      ></textarea>
      <button onClick={e => props.clickHandler(e)}>add course</button>
    </form>
  </div>
);

export default AddCourse;
