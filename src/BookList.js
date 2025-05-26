import React from 'react';

function BookList({ books, onEdit, onDelete }) {
  if (books.length === 0) {
    return <p>📭 Không có sách nào trong danh sách.</p>;
  }

  return (
    <div>
      <h2>📘 Danh sách sách:</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id} style={{ marginBottom: '8px' }}>
            <strong>{book.title}</strong> - {book.author}
            {' '}
            <button onClick={() => onEdit(book)} style={{ marginLeft: '10px' }}>
              Sửa
            </button>
            <button
              onClick={() => {
                if (window.confirm(`Bạn có chắc muốn xóa sách "${book.title}"?`)) {
                  onDelete(book.id);
                }
              }}
              style={{ marginLeft: '5px' }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
