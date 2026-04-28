import React, { useState } from 'react';

function PostCard({ id, userId, title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="
      bg-white p-5 rounded-lg shadow flex flex-col gap-3
      transition-all duration-200 cursor-pointer
      hover:scale-105 hover:border hover:border-black hover:bg-pink-50
    ">
      {/* Judul Post */}
      <h2 className="text-center font-bold text-black capitalize text-sm">
        {title}
      </h2>

      {/* Isi Post */}
      <p className="text-gray-600 text-xs text-center flex-1">
        {body}
      </p>

      {/* Tombol */}
      <button
        onClick={() => setClicked(true)}
        className={`
          px-4 py-2 rounded-md text-white text-sm font-medium transition-all duration-200
          ${clicked
            ? 'bg-special-Red2 hover:brightness-125'
            : 'bg-gray-500 hover:brightness-125'
          }
        `}
      >
        {clicked ? 'Tombol sudah diklik' : 'Silakan Klik'}
      </button>
    </div>
  );
}

export default PostCard;
