// src/components/RichTextEditor.jsx
import React, { useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ align: [] }],
    ['link', 'image', 'video'],
    ['clean']
  ]
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'color',
  'background',
  'list',
  'bullet',
  'align',
  'link',
  'image',
  'video'
];

const RichTextEditor = ({ value, onChange, placeholder }) => {
  const quillRef = useRef(null);

  return (
    <div className="w-full">
      {/* Add custom styles for Quill editor */}
      <style jsx global>{`
        .ql-editor {
          min-height: 200px;
        }
        .ql-toolbar.ql-snow {
          border-radius: 0.375rem 0.375rem 0 0;
        }
        .ql-container.ql-snow {
          border-radius: 0 0 0.375rem 0.375rem;
        }
      `}</style>
      
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        className="bg-white"
      />
    </div>
  );
};

export default RichTextEditor;