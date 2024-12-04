import React, { useState } from 'react';
import './AddProductForm.css';

interface AddProductFormProps {
    onSubmit: (product: any) => void;
    onClose: () => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onSubmit, onClose }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('Văn phòng phẩm');
    const [error, setError] = useState(''); // Lưu lỗi khi cần

    const handleSubmit = () => {
        if (!name || !price || !category) {
            setError('Vui lòng nhập đầy đủ thông tin!');
            return;
        }

        setError(''); // Xóa lỗi khi thông tin hợp lệ
        onSubmit({
            id: Date.now(),
            name,
            price: Number(price),
            category,
        });
    };

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
        setter(value);
        setError(''); // Xóa lỗi khi người dùng nhập
    };

    return (
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="add-product-form">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>Thêm Hàng Hoá</h2>
                {error && <p className="error-message">{error}</p>}
                <input
                    type="text"
                    placeholder="Tên hàng hoá"
                    value={name}
                    onChange={(e) => handleInputChange(setName, e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Giá hàng hoá"
                    value={price}
                    onChange={(e) => handleInputChange(setPrice, e.target.value)}
                />
                <select
                    value={category}
                    onChange={(e) => handleInputChange(setCategory, e.target.value)}
                >
                    <option value="Văn phòng phẩm">Văn phòng phẩm</option>
                    <option value="Thực phẩm">Thực phẩm</option>
                    <option value="Khác">Khác</option>
                </select>
                <button className="add-button" onClick={handleSubmit}>Thêm hàng hoá</button>
                <button className="close-button-secondary" onClick={onClose}>Đóng</button>
            </div>
        </>
    );
};

export default AddProductForm;
