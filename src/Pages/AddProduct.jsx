import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useHistory

const AddProduct = () => {
    const [products, setProducts] = useState([]);
    const [productImg, setProductImg] = useState('');
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    const handleAddProduct = async (event) => {
        event.preventDefault();

        const productData = {
            "productImg": productImg,
            "productName": productName,
            "description": description,
            "price": price,
        }

        try {
            const res = await axios.post("http://localhost:8080/addProduct", productData);

            if (res.data.code === 1) {
                alert(res.data.message);
            } else {
                alert(`Error: ${res.data.message}`);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred during the request.");
        }

    };

    const getAllProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/getAllProductList');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching pet data:', error);
        }
    };

    // Effect to fetch user data when the component mounts
    useEffect(() => {
        // Call the function to fetch user data
        getAllProducts();
    }, []);

    const handleDeleteProduct = async (productId) => {
        try {
            const response = await axios.delete(`http://localhost:8080/deleteProduct/${productId}`);

            if (response.status === 200) {
                // If the deletion is successful, fetch the updated product list
                getAllProducts();
                alert('Product deleted successfully');
            } else {
                alert(`Error deleting product: ${response.statusText}`);
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    const handleUpdateProduct = async () => {
        if (!selectedProductId) {
            alert('Please select a product to update.');
            return;
        }

        const updatedProductData = {
            "productImg": productImg,
            "productName": productName,
            "description": description,
            "price": price,
        };

        try {
            const res = await axios.put(`http://localhost:8080/updateProduct/${selectedProductId}`, updatedProductData);

            if (res.data.code === 1) {
                alert(res.data.message);
                setProductName('');
                setDescription('');
                setPrice('');
                setProductImg('');
                setSelectedProductId('');
                getAllProducts();
                // Disable update mode after successful update
                setIsUpdateMode(false);
            } else {
                alert(`Error: ${res.data.message}`);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred during the request.");
        }
    };

    const handleSelectProductForUpdate = (productId) => {
        const selectedProduct = products.find(product => product.productId === productId);
        setSelectedProductId(selectedProduct.productId);
        setProductName(selectedProduct.productName);
        setDescription(selectedProduct.description);
        setPrice(selectedProduct.price);
        setProductImg(selectedProduct.productImg);
        // Enable update mode when selecting a product for update
        setIsUpdateMode(true);
    };

    let navigate = useNavigate()

    const handleBackButtonClick = () => {
        // Use useHistory to navigate back to the adminDashboard page
        navigate("/admindashboard");
    };

    return (
        <div className="bg-backgroundColor min-h-screen flex mr-1">
            <div className="container bg-backgroundColor flex-1">
                <div className="flex justify-center">
                    <form className="max-w-md w-full mt-16 border border-textYellowColor rounded-3xl bg-sidebarColor px-8 py-8">
                        <div className="flex justify-between mb-4">
                            <h2 className="text-xl text-textDarkBrown font-medium text-center">
                                {isUpdateMode ? 'Update Product' : 'Add a new product'}
                            </h2>
                            <button
                                type="button"
                                onClick={handleBackButtonClick}
                                className="bg-textYellowColor text-black px-4 py-2 rounded-3xl font-medium hover:bg-black hover:text-white"
                            >
                                Back
                            </button>
                        </div>
                        <div className="mb-4 mt-3">
                            <label className="block text-sm font-medium text-gray-600">Product Name</label>
                            <input
                                type="text"
                                name="productName"
                                value={productName}
                                onChange={(event) => setProductName(event.target.value)}
                                className="mt-1 p-2 w-full rounded-3xl border border-textYellowColor"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Product Price</label>
                            <input
                                type="text"
                                name="price"
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                                className="mt-1 p-2 w-full  rounded-3xl border border-textYellowColor"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Product Description</label>
                            <textarea
                                name="description"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                                className="mt-1 p-2 w-full rounded-3xl border border-textYellowColor"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Product Image</label>
                            <input
                                type="text"
                                name="productImg"
                                value={productImg}
                                onChange={(event) => setProductImg(event.target.value)}
                                className="mt-1 p-2 w-full rounded-3xl border border-textYellowColor"
                            />
                        </div>
                        <button
                            type="submit"
                            onClick={isUpdateMode ? handleUpdateProduct : handleAddProduct}
                            className="flex justify-center bg-textYellowColor text-black mx-auto px-6 py-2 rounded-3xl mt-10 font-medium hover:bg-black hover:text-white text-sm"
                        >
                            {isUpdateMode ? 'Update Product' : 'Add Product'}
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
                            {products.map(product => (
                                <tr key={product.productId}>
                                    <td className="py-2 px-4 border-b-2  border-textYellowColor text-center">{product.productImg}</td>
                                    <td className="py-2 px-4 border-b-2  border-textYellowColor text-center">{product.productName}</td>
                                    <td className="py-2 px-4 border-b-2  border-textYellowColor text-center">{product.description}</td>
                                    <td className="py-2 px-4 border-b-2  border-textYellowColor text-center">{product.price}</td>
                                    <td className="py-2 px-4 border-b-2  border-textYellowColor text-center">
                                        <button
                                            onClick={() => handleDeleteProduct(product.productId)}
                                            className="flex justify-center bg-red-500 text-white hover:bg-black px-3 py-1 mb-2 rounded-3xl mr-2"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => handleSelectProductForUpdate(product.productId)}
                                            className="flex justify-center bg-green-400 hover:bg-blue-700 text-white px-3 py-1 rounded-3xl">Update</button>
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
