
import React, { useState } from 'react';
import CommentForm from './CommentForm';
import './PostDetail.css';

const PostDetail = ({ post, addComment }) => {
  const [showComments, setShowComments] = useState(true);

  return (
    <div className="post-detail">
      <button onClick={() => window.location.reload()}>Zpět na přehled</button>
      <h2>{post.title}</h2>
      <p><strong>Autor:</strong> {post.author}</p>
      <p>{post.content}</p>
      <p><small>{new Date(post.date).toLocaleString()}</small></p>

      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? 'Skrýt komentáře' : 'Zobrazit komentáře'}
      </button>

      {showComments && (
        <div className="comments-section">
          {post.comments.length === 0 ? (
            <p>Žádné komentáře.</p>
          ) : (
            <ul>
              {post.comments.map((comment, index) => (
                <li key={index}>
                  <p><strong>{comment.author}:</strong> {comment.text}</p>
                  <p><small>{new Date(comment.date).toLocaleString()}</small></p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <CommentForm postId={post.id} addComment={addComment} />
    </div>
  );
};

export default PostDetail;
