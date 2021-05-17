import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
class CourseList extends Component {
  state = {
    isEdit : false
  }
  render_course = () => {
    return (
      <ListGroup.Item>
        <h3 style={{fontSize: 30,}}>{this.props.details.name}</h3>
        <Button
          onClick={() => {
            this.toggleState();
          }}
          variant="success"
        >
          Edit Course
        </Button>
        <Button
          onClick={() => this.props.deletecourse(this.props.index)}
          variant="danger"
        >
          Delete Course
        </Button>
      </ListGroup.Item>
    );
  }
  toggleState = () => {
    let isEdit = this.state.isEdit;
    this.setState({
      isEdit : !isEdit
    })
    console.log(this.state.isEdit);
  }
  //updatecourseitem
  updatecourseitem = (e) => {
    e.preventDefault();
    this.props.editform(this.props.index,this.input.value);
    this.toggleState();
  }
  //update form 
  updateform = () => {
    return (
      <form onSubmit={this.updatecourseitem}>
        <Form.Group>
          <Form.Control
            style={{ width: 200}}
            type="text"
            defaultValue={this.props.details.name}
            ref={(v) => {
              this.input = v;
            }}
            placeholder="Enter your name"
          />
        </Form.Group>
        <Button type="submit" variant="success">
          Update Course
        </Button>
      </form>
    );
  }
  render() {
    let isEdit = this.state.isEdit;
    return (
      <React.Fragment>
       {isEdit ? this.updateform():this.render_course()}
      </React.Fragment>
    );
  }
}
export default CourseList;