'use client';
import React, { useEffect } from 'react';

const Post = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Post page
    </div>
  );
};

export default Post;
