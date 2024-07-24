import AddTask from "../components/AddTask";


export default function Home() {
    return(
        <div>
            <AddTask onTaskAdded={() => {}} />
            <h1>Home</h1>
            
        </div>

    )
}