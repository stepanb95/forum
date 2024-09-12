
import React, { useState } from 'react';
import './CommentForm.css';

const CommentForm = ({ postId, addComment }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      author,
      text,
      date: new Date().toISOString(),
    };
    addComment(postId, newComment);
    setAuthor('');
    setText('');
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Jméno autora" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Komentář" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        required 
      />
      <button type="submit">Přidat komentář</button>
    </form>
  );
};

export default CommentForm;
