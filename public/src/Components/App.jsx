import React from 'react';
import SearchCourse from './SearchCourse.jsx';
import AddCourse from './AddCourse.jsx';
import CourseList from './CourseList.jsx';
import AddTest from './AddTest.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchCourse: '',
      addCourseName: '',
      addCourseDomain: '',
      addCourseDescription: '',
      addTestModel: false,
      addTestName: '',
      testQuestions: 0,
      testDuration: 0,
      courses: []
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.searchCourse = this.searchCourse.bind(this);
    this.testModelVisible = this.testModelVisible.bind(this);
  }

  inputHandler(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  }

  searchCourse() {
    const term = this.state.searchCourse;
    Axios.post('/course/searchCourse', { term })
      .then(res => this.setState({ courses: res.data }))
      .catch(err => console.log(err));
  }

  // HANDLES CLICK EVENT FOR ADDING COURSES
  clickHandler(e) {
    // e.preventDefault();
    const newCourse = {
      name: this.state.addCourseName,
      domain: this.state.addCourseDomain,
      description: this.state.addCourseDescription
    };

    Axios.post('/course/addCourse', { newCourse })
      .then(res => this.setState({ courses: res.data }))
      .catch(err => console.log('failure'));
  }

  fetchData() {
    Axios.get('/course/displayCourses')
      .then(res => this.setState({ courses: res.data }))
      .catch(err => console.log(err));
  }

  // ON PAGE LOAD, GET ALL COURSES FROM DB AND DISPLAY THEM
  componentDidMount() {
    this.fetchData();
  }

  testModelVisible() {
    this.setState({ addTestModel: !this.state.addTestModel });
  }

  render() {
    return (
      <div className='course-main'>
        <div className='search-add-course'>
          <SearchCourse
            inputHandler={this.inputHandler}
            searchCourse={this.searchCourse}
          />
          <AddCourse
            inputHandler={this.inputHandler}
            clickHandler={this.clickHandler}
          />
        </div>
        <CourseList
          courses={this.state.courses}
          testModelVisible={this.testModelVisible}
        />
        <AddTest
          inputHandler={this.inputHandler}
          addTestModel={this.state.addTestModel}
          testModelVisible={this.testModelVisible}
        />
      </div>
    );
  }
}

export default App;
