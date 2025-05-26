import React, { useState, useEffect } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

function App() {
  // Khởi tạo danh sách sách từ localStorage hoặc dữ liệu mặc định
  const [books, setBooks] = useState(() => {
    const stored = localStorage.getItem('books');
    return stored ? JSON.parse(stored) : [
      { id: 1, title: 'Lập trình C++', author: 'Nguyễn Văn A' },
      { id: 2, title: 'React cơ bản', author: 'Trần Thị B' },
      { id: 3, title: 'Thuật toán', author: 'Lê Văn C' },
    ];
  });

  const [editingBook, setEditingBook] = useState(null);

  // Tự động lưu lại vào localStorage khi books thay đổi
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  // Thêm sách mới
  const handleAddBook = (book) => {
    const newBook = { ...book, id: Date.now() };
    setBooks([...books, newBook]);
  };

  // Bắt đầu sửa sách
  const handleEditClick = (book) => {
    setEditingBook(book);
  };

  // Cập nhật sách sau khi sửa
  const handleUpdateBook = (updatedBook) => {
    const updatedList = books.map(b =>
      b.id === updatedBook.id ? updatedBook : b
    );
    setBooks(updatedList);
    setEditingBook(null);
  };

  // Xóa sách
  const handleDeleteBook = (id) => {
    const newList = books.filter(b => b.id !== id);
    setBooks(newList);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>📚 Quản lý sách</h1>
      <BookForm
        bookToEdit={editingBook}
        onAdd={handleAddBook}
        onUpdate={handleUpdateBook}
      />
      <BookList
        books={books}
        onEdit={handleEditClick}
        onDelete={handleDeleteBook}
      />
    </div>
  );
}

export default App;
