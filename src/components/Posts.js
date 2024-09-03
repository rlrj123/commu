import React from 'react';
import './Posts.css';

function Posts({ posts }) {
  return (
    <section className="posts">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <span className="post-title">{post.title}</span> - 작성일: {post.date}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Posts;
