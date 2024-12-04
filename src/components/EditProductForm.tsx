import React, { useState } from 'react';
import './EditProductForm.css';

interface EditProductFormProps {
    product: any;
    onSubmit: (product: any) => void;
    onClose: () => void;
}

const EditProductForm: React.FC<EditProductFormProps> = ({ product, onSubmit, onClose }) => {
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price.toString());
    const [category, setCategory] = useState(product.category);
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if (!name || !price || !category) {
            setError('Vui lòng nhập đầy đủ thông tin!');
            return;
        }

        setError('');
        onSubmit({
            id: product.id,
            name,
            price: Number(price),
            category,
        });
    };

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
        setter(value);
        setError('');
    };

    return (
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="edit-product-form">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>Chỉnh Sửa Hàng Hoá</h2>
                {error && <p className="error-message">{error}</p>}
                <input
                    type="text"
                    placeholder="Tên sản phẩm"
                    value={name}
                    onChange={(e) => handleInputChange(setName, e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Giá sản phẩm"
                    value={price}
                    onChange={(e) => handleInputChange(setPrice, e.target.value)}
                />

                <button className="save-button" onClick={handleSubmit}>Lưu thay đổi</button>
                <button className="close-button-secondary" onClick={onClose}>Quay lại</button>
            </div>
        </>
    );
};

export default EditProductForm;
