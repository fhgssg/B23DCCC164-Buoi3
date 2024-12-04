import React, { useState } from 'react';
import './ProductTable.css';

interface Product {
    id: number;
    name: string;
    price: number;
}

interface ProductTableProps {
    products: Product[];
    onEdit: (product: Product) => void;
    onDelete: (id: number) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onEdit, onDelete }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Thao Tác</th>
                    </tr>
                </thead>
                <tbody>
                    {currentProducts.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <button className="edit-btn" onClick={() => onEdit(product)}>
                                    Chỉnh sửa
                                </button>
                                <button className="delete-btn" onClick={() => onDelete(product.id)}>
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                    {products.length > 0 && (
                        <tr>
                            <td><b>Tổng số</b></td>
                            <td><b>{products.reduce((sum, product) => sum + product.price, 0)}</b></td>
                            <td></td>
                        </tr>
                    )}
                </tbody>
            </table>


            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Trước
                </button>
                <span>
                    Trang {currentPage}/{totalPages}
                </span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Sau
                </button>
            </div>
        </div>
    );
};

export default ProductTable;
