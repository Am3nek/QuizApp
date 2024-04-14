//props are read-only properties that are shared between components. A parent component can send data to a child component.
// <Component key = value>

//proptypes - it ensures that passed value is of correct datatype. age: propTypes.number
import PropTypes from 'prop-types'


function Student(props){
    return(
        
        <div className="student">
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>Profession: {props.isStudent ? "Student" : "Faculty"}</p>
        </div>
    )

}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "Name",
    age: 0,
    isStudent: false,
}

export default Student;