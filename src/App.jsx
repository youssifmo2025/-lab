import { useState } from "react";
import ProductCard from "./components/ProductCard";
import InventoryTask from "./components/InventoryTask";
import { Plus } from "lucide-react";

function App() {
  // Category Filter State
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Task 1: Hardcoded products data array
  const products = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 89.99,
      description: "Noise cancelling earbuds with wireless charging case.",
      category: "Electronics",
      status: "In Stock",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80"
    },
    {
      id: 2,
      name: "Casual Bomber Jacket",
      price: 65.00,
      description: "Lightweight zip-up jacket perfect for spring weather.",
      category: "Clothing",
      status: "Low Stock",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80"
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 49.99,
      description: "Ergonomic RGB gaming mouse with programmable side buttons.",
      category: "Electronics",
      status: "In Stock",
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80"
    },
    {
      id: 4,
      name: "Travel Backpack",
      price: 75.00,
      description: "Durable water-resistant backpack with laptop compartment.",
      category: "Accessories",
      status: "Out of Stock",
      image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500&q=80"
    },
    {
      id: 5,
      name: "Smart Watch Band",
      price: 29.99,
      description: "Breathable silicone sports strap for smartwatch.",
      category: "Accessories",
      status: "Low Stock",
      image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=500&q=80"
    }
  ];

  // Task 2: Inventory tasks array state
  const [tasks, setTasks] = useState([
    { id: 1, name: "Label 50 MacBooks" },
    { id: 2, name: "Inspect 20 Headphones" },
    { id: 3, name: "Restock Bomber Jackets in Section B" },
    { id: 4, name: "Check damaged stock in Aisle 4" }
  ]);

  // Form input state for new task
  const [newTaskName, setNewTaskName] = useState("");

  // Handler to add new task immutably
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskName.trim()) return;

    const newTask = {
      id: Date.now(),
      name: newTaskName.trim()
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskName("");
  };

  // Filter products list based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const categories = ["All", "Electronics", "Clothing", "Accessories"];

  return (
    <div className="min-h-screen bg-blue-700 p-6 md:p-10 font-sans text-white">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Header */}
        <header className="border-b border-blue-500/60 pb-5">
          <h1 className="text-2xl md:text-3xl font-black text-white">
            React Practice Tasks
          </h1>
          <p className="text-sm text-blue-100 mt-1">
            Task 1: Product Catalog & Task 2: Inventory Board
          </p>
        </header>

        {/* TASK 1: Product Catalog Display */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-white">
                Task 1: Product Catalog Display
              </h2>
              <p className="text-xs text-blue-100">
                Reusable Card component rendered using .map() in a responsive grid.
              </p>
            </div>

            {/* Simple Category Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                    selectedCategory === category
                      ? "bg-white text-blue-700 border-white shadow-md"
                      : "bg-blue-800/80 text-blue-100 border-blue-500/50 hover:bg-blue-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout: Mobile 1 col, Tablet 2 col, Desktop 3-4 col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
                category={product.category}
                status={product.status}
              />
            ))}
          </div>
        </section>

        {/* TASK 2: Inventory Management Board */}
        <section className="space-y-4 max-w-xl">
          <div>
            <h2 className="text-xl font-bold text-white">
              Task 2: Inventory Management Board
            </h2>
            <p className="text-xs text-blue-100">
              Interactive task list with useState for completion and visibility.
            </p>
          </div>

          {/* Card Container for Sidebar / Dashboard */}
          <div className="bg-white rounded-xl border border-blue-200 p-5 shadow-lg space-y-4 text-slate-800">
            
            {/* Add Task Form */}
            <form onSubmit={handleAddTask} className="flex gap-2">
              <input
                type="text"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                placeholder="Add new task..."
                className="flex-1 px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800"
              />
              <button
                type="submit"
                className="flex items-center gap-1 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </form>

            {/* Rendered Inventory Tasks */}
            <div className="space-y-2.5 max-h-80 overflow-y-auto">
              {tasks.map((task) => (
                <InventoryTask key={task.id} taskName={task.name} />
              ))}

              {tasks.length === 0 && (
                <p className="text-xs text-slate-400 text-center py-4">
                  No inventory tasks left.
                </p>
              )}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default App;




