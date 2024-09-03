import React, { useState } from 'react';
import './PostForm.css';

function PostForm({ onClose, addPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleAddTag = (tag) => {
    if (tags.length < 5) {
      setTags([...tags, tag]);
    }
  };

  const handleSave = () => {
    const newPost = {
      id: Date.now(),
      title,
      content,
      date: new Date().toISOString().split('T')[0],
      tags,
    };
    addPost(newPost);
    onClose(); // 폼 닫기
  };

  return (
    <div className="post-form-overlay">
      <div className="post-form">
        <div className="post-form-header">
          <span>제목 :</span>
          <input type="text" value={title} onChange={handleTitleChange} />
          <span>게시판 :</span>
          <select>
            <option value="일상">일상</option>
            <option value="공지사항">공지사항</option>
            <option value="취미">취미</option>
            <option value="기타">기타</option>
          </select>
        </div>
        <textarea
          placeholder="내용"
          value={content}
          onChange={handleContentChange}
        />
        <div className="tag-section">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              #{tag}
            </span>
          ))}
          <input
            type="text"
            placeholder="태그 추가"
            onKeyPress={(e) => e.key === 'Enter' && handleAddTag(e.target.value)}
          />
        </div>
        <div className="form-buttons">
          <button onClick={onClose}>취소</button>
          <button onClick={handleSave}>등록</button>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
