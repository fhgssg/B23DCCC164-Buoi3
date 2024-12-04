.pagination {
  display: flex;
  justify-content: center; /* Căn giữa các phần tử */
  align-items: center; /* Căn các phần tử theo chiều dọc */
  margin-top: 10px;
}

.pagination button {
  padding: 5px 10px;
  margin: 0 5px;
  border: 1px solid #ddd;
  cursor: pointer;
  background-color: #f4f4f4;
}

/* Căn giữa chữ "Trang x/y" giữa hai nút */
.pagination span {
  display: block; /* Đưa chữ "Trang 1/0" xuống dưới */
  text-align: center; /* Căn giữa chữ */
  margin-top: 5px; /* Tạo khoảng cách với các nút */
}

.pagination button:disabled {
  background-color: #e0e0e0;
  cursor: not-allowed;
}

