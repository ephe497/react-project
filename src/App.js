import React, { useState } from 'react';
import './App.css';
import Categories from "./categories";
import Menu from './menu';
import items from "./data"

const allCategory = ["all", ... new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategory);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items)
      return;
    }
    const newItem = items.filter((item) => item.category === category)
    setMenuItems(newItem)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
