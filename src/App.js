import React,{Component} from 'react';
import CourseForm from './componts/CourseForm';
import CourseList from './componts/CourseList';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
   state = {
     courses:[
       {name : "Html"},
       {name : "Css"}
      ],
      current:""
    }
   //update
   upadteval = (e)=>{
     // this.value == e.target.value 
     this.setState({
       current:e.target.value
     })
  }
  //edit form 
  editform = (index,value) =>{
    let courses = this.state.courses;//get all
    let curr_courses = courses[index];// get that index is equal
    curr_courses['name'] = value//get name;
    this.setState({
      courses
    })
  }
  //addcourse
  addcourse = (e)=>{
    e.preventDefault();
    let current = this.state.current;//current=c++
    let newcourses = this.state.courses;
    newcourses.push({name:current})//add new key:value name:c++
    this.setState({
      courses:newcourses,
      current:""
    })
  }
  //deletecours
  deletecourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index,1);//remove according index
    this.setState({
      courses,
      current:''
    })
  }
  render(){
    const courseslist = this.state.courses.map((item,index)=>{
      return  <CourseList details={item} key={index} index={index} deletecourse={this.deletecourse} editform={this.editform}/>
    });
    return (
      <section style={{textAlign:"center",width:"max-content"}}>
      <h2 style={{textAlign:"center"}}>Add Course</h2>
      <CourseForm current={this.state.current} addcourse={this.addcourse} upadteval={this.upadteval}/>
      <hr/>
      <h1 style={{textAlign:"left"}}>List of Courses</h1>
      <ListGroup>{courseslist}</ListGroup>
    </section>
    )
  }
}
export default App;