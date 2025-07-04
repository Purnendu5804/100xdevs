const Todo = (props) => {
    const toggleCompletion = () => {
        props.setCompleted(!props.completed)
    };

    return (
        <div className= {`todo ${props.completed ? "completed" : ""}`} >
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <button onClick={toggleCompletion}>
                {props.completed ? "Completed" : "Mark as Complete"}
            </button>
        </div>
    )
}

export default Todo;