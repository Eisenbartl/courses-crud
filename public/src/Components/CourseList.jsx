import React from 'react';

const CourseList = props => (
  <div className='course-list'>
    {props.courses.map(course => (
      <ul>
        <li>
          <div className='course-name-domain'>
            <p>Name: {course.name}</p>
            <p>Domain: {course.domain}</p>
          </div>
          <p>Description: {course.description}</p>
          <button onClick={() => props.testModelVisible()}>+ test</button>
        </li>
      </ul>
    ))}
  </div>
);
export default CourseList;
