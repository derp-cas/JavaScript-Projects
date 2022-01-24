import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
    const [menuItems, setMenuItems] = useState(items);

    const filterItems = (category) => {
        if (category === "all") {
            setMenuItems(items);
            return;
        }

        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    return (
        <main>
            <section className="menu">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories filterItems={filterItems} items={items} />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}

export default App;
