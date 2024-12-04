import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddProductForm from '../components/AddProductForm';
import EditProductForm from '../components/EditProductForm';
import ProductTable from '../components/ProductTable';
import { addProduct, deleteProduct, editProduct } from '../redux/productSlice';
import { RootState } from '../redux/store';
import './ProductPage.css';

const ProductPage: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [editProductData, setEditProductData] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState<string>(''); // Thêm trạng thái tìm kiếm

  const handleAddProduct = (product: any) => {
    dispatch(addProduct(product));
    setIsAddVisible(false);
  };

  const handleEditProduct = (product: any) => {
    dispatch(editProduct(product));
    setEditProductData(null);
  };

  const handleDeleteProduct = (id: number) => {
    dispatch(deleteProduct(id));
  };

  // Lọc sản phẩm theo tìm kiếm
  const filteredProducts = products.products.filter((product: any) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-page">
      <h1>Bảng Thông Tin</h1>

      {/* Nút Thêm Hàng Hóa */}
      <button onClick={() => setIsAddVisible(true)}>Thêm Hàng Hóa</button>

      {/* Thanh tìm kiếm */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Tìm kiếm hàng hóa..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Form Thêm Hàng Hóa */}
      {isAddVisible && (
        <AddProductForm onSubmit={handleAddProduct} onClose={() => setIsAddVisible(false)} />
      )}
      {/* Form Chỉnh sửa Hàng Hóa */}
      {editProductData && (
        <EditProductForm
          product={editProductData}
          onSubmit={handleEditProduct}
          onClose={() => setEditProductData(null)}
        />
      )}

      {/* Bảng Sản phẩm */}
      <ProductTable
        products={filteredProducts} // Truyền danh sách sản phẩm đã lọc
        onEdit={(product) => setEditProductData(product)}
        onDelete={handleDeleteProduct}
      />
    </div>
  );
};

export default ProductPage;
