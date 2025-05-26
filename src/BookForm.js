import React, { useState, useEffect } from 'react';

function BookForm({ bookToEdit, onAdd, onUpdate }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  // Khi chọn "Sửa" → cập nhật form với dữ liệu cần sửa
  useEffect(() => {
    if (bookToEdit) {
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
    } else {
      setTitle('');
      setAuthor('');
    }
  }, [bookToEdit]);
//  Đưa ra thông báo 
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedAuthor = author.trim();
    if (!trimmedTitle || !trimmedAuthor) {
      alert('Vui lòng nhập đầy đủ tiêu đề và tác giả!');
      return;
    }

    const book = { title: trimmedTitle, author: trimmedAuthor };

    if (bookToEdit) {
      onUpdate({ ...bookToEdit, ...book });
    } else {
      onAdd(book);
    }

    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>{bookToEdit ? '🛠️ Sửa sách' : '➕ Thêm sách mới'}</h2>
      <input
        type="text"
        placeholder="Tiêu đề sách"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        placeholder="Tác giả"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button type="submit">{bookToEdit ? 'Cập nhật' : 'Thêm'}</button>
    </form>
  );
}

export default BookForm;
