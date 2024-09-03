import React, { useState } from 'react';
import './MyPosts.css';
import PostForm from './PostForm'; // 새로운 글 작성 폼

function MyPosts({ posts, addPost }) {
  const [showPostForm, setShowPostForm] = useState(false);

  const handleShowPostForm = () => {
    setShowPostForm(true);
  };

  const handleHidePostForm = () => {
    setShowPostForm(false);
  };

  return (
    <section className="my-posts">
      <h2>내 글</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <span className="post-title">{post.title}</span>
            <span className="post-date">- 작성일: {post.date}</span>
          </li>
        ))}
      </ul>
      <div className="buttons">
        <button className="save-button" onClick={handleShowPostForm}>
          등록
        </button>
        <button className="delete-button">삭제</button>
      </div>
      {showPostForm && <PostForm onClose={handleHidePostForm} addPost={addPost} />}
    </section>
  );
}

export default MyPosts;
