import React, { useState } from 'react';

const AddProduct = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        description: '',
        image: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    };

    const handleAddProduct = () => {
        setProducts((prevProducts) => [...prevProducts, newProduct]);
        setNewProduct({
            name: '',
            price: '',
            description: '',
            image: '',
        });
    };

    const handleDeleteProduct = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
    };

    return (
        <div className="bg-backgroundColor min-h-screen flex mr-1">
            <div className="container bg-backgroundColor flex-1">
                <div className="flex justify-center">
                    <form className="max-w-md w-full mt-16 border border-textYellowColor rounded-3xl bg-sidebarColor px-8 py-8">
                        <h2 className="text-xl text-textDarkBrown font-medium mb-4 text-center">Add a new product</h2>
                        <div className="mb-4 mt-3">
                            <label className="block text-sm font-medium text-gray-600">Product Name</label>
                            <input
                                type="text"
                                name="name"
                                value={newProduct.name}
                                onChange={handleInputChange}
                                className="mt-1 p-2 w-full rounded-3xl border border-textYellowColor"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Product Price</label>
                            <input
                                type="text"
                                name="price"
                                value={newProduct.price}
                                onChange={handleInputChange}
                                className="mt-1 p-2 w-full  rounded-3xl border border-textYellowColor"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Product Description</label>
                            <textarea
                                name="description"
                                value={newProduct.description}
                                onChange={handleInputChange}
                                className="mt-1 p-2 w-full rounded-3xl border border-textYellowColor"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Product Image</label>
                            <input
                                type="text"
                                name="image"
                                value={newProduct.image}
                                onChange={handleInputChange}
                                className="mt-1 p-2 w-full rounded-3xl border border-textYellowColor"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleAddProduct}
                            className="flex justify-center bg-textYellowColor text-black mx-auto px-6 py-2 rounded-3xl mt-10 font-medium hover:bg-black hover:text-white text-sm"
                        >
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
            <div className=" container mr-20 flex-1">
                <div className="mt-12">
                    <h2 className="text-2xl font-medium mb-4 text-center text-textDarkBrown">Product List</h2>
                    <table className="w-full bg-sidebarColor rounded-2xl border-b-2 border-textYellowColor">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b-2 border-textYellowColor font-medium">Product Image</th>
                                <th className="py-2 px-4 border-b-2 border-textYellowColor font-medium">Product Name</th>
                                <th className="py-2 px-4 border-b-2 border-textYellowColor font-medium">Product Description</th>
                                <th className="py-2 px-4 border-b-2 border-textYellowColor font-medium">Product Price</th>
                                <th className="py-2 px-4 border-b-2 border-textYellowColor font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border-b-2  border-textYellowColor text-center">{product.image}</td>
                                    <td className="py-2 px-4 border-b-2  border-textYellowColor text-center">{product.name}</td>
                                    <td className="py-2 px-4 border-b-2  border-textYellowColor text-center">{product.description}</td>
                                    <td className="py-2 px-4 border-b-2  border-textYellowColor text-center">{product.price}</td>
                                    <td className="py-2 px-4 border-b-2  border-textYellowColor text-center">
                                        <button
                                            onClick={() => handleDeleteProduct(index)}
                                            className="flex justify-center bg-red-500 text-white px-2 py-1 mb-2 rounded-3xl mr-2"
                                        >
                                            Delete
                                        </button>
                                        <button className="flex justify-center bg-blue-400 text-white px-2 py-1 rounded-3xl">Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default AddProduct;
