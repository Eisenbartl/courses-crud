import React from 'react';

const AddTest = props => (
  <div>
    {props.addTestModel ? (
      <div className='add-test'>
        <button
          className='exit-test-model'
          onClick={() => props.testModelVisible()}
        >
          x
        </button>
        <div className='test-info'>
          <h3>test name</h3>
          <input
            type='text'
            name='addTestName'
            onChange={event => props.inputHandler(event)}
            placeholder='test name'
          />
          <h3>number of questions</h3>
          <input
            type='number'
            name='testQuestions'
            onChange={event => props.inputHandler(event)}
            min='1'
            maxLength='2'
            className='test-questions'
          />
          <h3>test duration</h3>
          <input
            type='number'
            name='testDuration'
            onChange={event => props.inputHandler(event)}
            min='1'
            className='test-duration'
            readonly
          />
        </div>
        <button>add test</button>
      </div>
    ) : null}
  </div>
);

export default AddTest;
