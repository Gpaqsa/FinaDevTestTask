import React from 'react';

const products = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing', parent: 1 },
    { id: 3, name: 'Phones', parent: 1 },
    { id: 4, name: 'T-Shirts', parent: 2 },
    { id: 5, name: 'Jeans', parent: 2 },
    { id: 6, name: 'Android', parent: 3 },
    { id: 7, name: 'iPhone', parent: 3 },
];
function Sidebar() {


    return (
        <aside>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>

                        <span>{product.name}</span>

                    </li>
                ))}
            </ul>

            {/* Add more content sections as needed */}



        </aside>
    );
}

export default Sidebar;

