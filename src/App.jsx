import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Study JavaScript",
      description: "Review the concepts of variables, functions, and objects.",
      done: false,
    },
    {
      id: 2,
      title: "Implement card gallery",
      description:
        "Create card elements with image and like/remove buttons using the Card class.",
      done: true,
    },
    {
      id: 3,
      title: "Set up Tailwind in the project",
      description:
        "Install Tailwind, configure the files, and apply basic utility styles.",
      done: false,
    },
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
      </div>
      <Tasks tasks={tasks} />
      <AddTasks />
    </div>
  );
}
export default App;
