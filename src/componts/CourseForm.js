import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
const CourseForm = (props) =>{
    return (
      <div>
        <form onSubmit={props.addcourse}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter Course Name"
              value={props.current}
              onChange={props.upadteval}
              size="sm"
            />
          </Form.Group>
          <Button style={{textAlign:"center"}} type='submit' variant="success">Add Course</Button>
        </form>
      </div>
    );
}
export default CourseForm;