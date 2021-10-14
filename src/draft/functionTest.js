const User = function(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Gender: {props.sex}</p>
        </div>
    );
};

User.defaultProps = {
    sex: "male"
}
export default User;