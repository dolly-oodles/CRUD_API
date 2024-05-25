import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { handleUpdateAPI } from '../Redux/CRUD_API.reducers';

const EditProduct = ({ product, onClose }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: product
  });

  useEffect(() => {
    reset(product);
  }, [product, reset]);

  const onSubmit = (data) => {
    dispatch(handleUpdateAPI(data));
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[1000px] m-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Edit Product</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="id" className="block text-gray-700">Id</label>
            <input
              id="id"
              type="text"
              {...register('id', { required: 'Id is required' })}
              className="w-full h-12 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              readOnly
            />
            {errors.id && <span className="text-red-500">{errors.id.message}</span>}
          </div>
          <div>
            <label htmlFor="title" className="block text-gray-700">Title</label>
            <input
              id="title"
              placeholder="Enter Title"
              type="text"
              {...register('title', { required: 'Title is required' ,   minLength: {
                      value: 20,
                      message: "Title must be at least 20 characters"}}
                      )}
              className="w-full h-12 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.title && <span className="text-red-500">{errors.title.message}</span>}
          </div>
          <div>
            <label htmlFor="description" className="block text-gray-700">Description</label>
            <input
              id="description"
              placeholder="Enter Description"
              type="text"
              {...register('description', { required: 'Description is required' ,  minLength: {
                      value: 80,
                      message: "Title must be at least 80 characters"}})}
              className="w-full h-12 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.description && <span className="text-red-500">{errors.description.message}</span>}
          </div>
          <div>
            <label htmlFor="price" className="block text-gray-700">Price</label>
            <input
              id="price"
              placeholder="Enter price"
              type="text"
              {...register('price', { required: 'Price is required' ,  pattern: {
        value: /^[1-9]\d*(\.\d+)?$/,
        message: 'Price must be a positive number'
      }})}
              className="w-full h-12 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.price && <span className="text-red-500">{errors.price.message}</span>}
          </div>
          <div>
            <label htmlFor="brand" className="block text-gray-700">Brand</label>
            <input
              id="brand"
              placeholder="Enter Brand"
              type="text"
              {...register('brand', { required: 'Brand is required' })}
              className="w-full h-12 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.brand && <span className="text-red-500">{errors.brand.message}</span>}
          </div>
          <div>
            <label htmlFor="category" className="block text-gray-700">Category</label>
            <input
              id="category"
              placeholder="Enter Category"
              type="text"
              {...register('category', { required: 'Category is required' })}
              className="w-full h-12 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.category && <span className="text-red-500">{errors.category.message}</span>}
          </div>
          <div className="flex justify-end">
            <button
              type="submit" 
              className="bg-blue-700 hover:bg-blue-900 text-white py-2 px-4 rounded-md mr-2"
            >
              Update
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 hover:bg-red-500 hover:text-white text-gray-800 py-2 px-4 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
