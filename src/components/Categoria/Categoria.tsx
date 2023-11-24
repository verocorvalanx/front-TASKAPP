import { useState } from "react"
import { Task } from "../../types/task"
import CategoriasSelector from "../CategoriasSelector/CategoriasSelector";
import CategoriasTareas from "../CategoriasTareas/CategoriasTareas";

const Categoria = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await TaskService.getAllTasks();
      setTasks(tasksData);
    };

    fetchTasks();
  }, []);

  const filteredTasks = selectedCategory
    ? tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toUpperCase())
    : tasks;

  return (
    <div className="container mt-5">
      <CategoriasSelector onSelectedCategory={setSelectedCategory} /> {/*Pasa la función para manejar la selección de categorías */}
      <CategoriasTareas tasks={filteredTasks} /> {/*Pasa las tareas filtradas al componente CategoriasTareas */}

    </div>
  )
}

export default Categoria