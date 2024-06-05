"use client";

import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Post({ params }) {
  const { id } = params;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/posts.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const foundPost = data.find((post) => post.id.toString() === id);
        setPost(foundPost);
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
        <p className="mt-2 text-gray-600">{new Date(post.date).toLocaleDateString()}</p>
        <p className="mt-4">{post.description}</p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">{post.content}</p>
      </div>
    </>
  );
}
