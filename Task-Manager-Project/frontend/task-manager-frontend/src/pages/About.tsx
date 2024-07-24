import TaskList from "../components/TaskList";
import AddTask from "../components/TaskList";


export default function About() {
    return(
        <div>
            <TaskList refresh={true} />
            <h1>About</h1>
            
        </div>

    )
}