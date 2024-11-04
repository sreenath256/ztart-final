import React from 'react';

const RichTextContent = ({ content }) => {
  return (
    <div 
      className="rich-text-content prose max-w-none
        prose-headings:font-PoppinsBold
        prose-h1:text-2xl prose-h1:mb-4 prose-h1:mt-6
        prose-h2:text-xl prose-h2:mb-3 prose-h2:mt-5
        prose-h3:text-lg prose-h3:mb-3 prose-h3:mt-4
        prose-p:text-base prose-p:mb-4 prose-p:leading-relaxed
        prose-ul:ml-4 prose-ul:mt-2 prose-ul:mb-4
        prose-li:mt-1 prose-li:mb-1
        prose-strong:font-PoppinsSemibold
        prose-a:text-visaclr prose-a:font-PoppinsMedium hover:prose-a:text-visaclrhvr
        prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic
        prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded
        prose-pre:bg-gray-800 prose-pre:text-white prose-pre:p-4 prose-pre:rounded
        prose-img:rounded-lg prose-img:my-4"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default RichTextContent;