"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/posts.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const backgroundColors = ['bg-blue-50', 'bg-green-50', 'bg-yellow-50', 'bg-red-50', 'bg-brown-50'];

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          {posts.map((post, index) => (
            <div key={post.id} className={`p-12 md:w-1/2 flex flex-col items-start shadow-lg ${backgroundColors[index % backgroundColors.length]}`}>

              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                {post.title}
              </h2>
              <p className="leading-relaxed mb-8">
                {post.description}
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <Link href={`/posts/${post.id}`} legacyBehavior>
                  <a className="text-indigo-500 inline-flex items-center text-sm">
                    Learn More
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
              <a className="inline-flex items-center">
                
                <span className="flex-grow flex flex-col">
                  <span className="title-font font-medium text-gray-900">{post.author}</span>
                  <span className="text-gray-400 text-xs tracking-widest mt-0.5">{new Date(post.date).toLocaleDateString()}</span>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
