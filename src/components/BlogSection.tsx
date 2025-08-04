 


import React, { useEffect, useState } from 'react';
import {
  collection,
  orderBy,
  getDocs,
  query,
} from 'firebase/firestore';
import { db } from '../firebase';
import { Calendar, Clock, Eye, Tag, User } from 'lucide-react';

interface Blog {
//   id: string;
//   title: string;
//   imageUrl: string;
//   content: string;
//   createdAt: any;
//   author: string;
//   category: string;
//   status: string;
  id: string;
  title: string;
  imageUrl: string;
  content: string;
  createdAt: any;
  updatedAt?: any;
  author: string;
  category: string;
  status: string;
  tags?: string[];
  excerpt?: string;
}

interface BlogSectionProps {
  category?: string;
  status?: string;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ category, status }) => {
  const [allBlogs, setAllBlogs] = useState<Blog[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const blogsQuery = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(blogsQuery);
        const fetchedBlogs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Blog[];

        setAllBlogs(fetchedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);


console.log(allBlogs);

  // Apply filters after data is fetched
  useEffect(() => {
    let filtered = [...allBlogs];

    if (category) {
      filtered = filtered.filter(blog => blog.category === category);
    }

    if (status) {
      filtered = filtered.filter(blog => blog.status === status);
    }

    setBlogs(filtered);
  }, [allBlogs, category, status]);

  const handleReadMore = (blog: Blog) => {
    setSelectedBlog(blog);
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedBlog(null);
  };

  

 
const wordCount = selectedBlog?.content
  ? selectedBlog.content.split(/\s+/).filter(word => word.length > 0).length
  : 0;

const readingTime = wordCount > 0 ? Math.ceil(wordCount / 200) : 0;


  if (loading) {
    return <p className="p-6 text-gray-600 dark:text-gray-300">Loading blogs...</p>;
  }

  if (selectedBlog) {
    return (
    //   <div className="py-20  bg-gradient-to-b from-primary-medium via-primary-950 to-primary-dark  mx-auto">
    //     <div className='max-w-4xl mx-auto'>
    //     <button
    //       onClick={handleBack}
    //       className="text-sm text-blue-500 hover:underline mb-4"
    //     >
    //       ← Back to Blogs
    //     </button>

    //     {selectedBlog.imageUrl && (
    //       <img
    //         src={selectedBlog.imageUrl}
    //         alt={selectedBlog.title}
    //         className="w-full h-64 object-cover rounded-lg mb-6"
    //       />
    //     )}

    //     <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
    //       {selectedBlog.title}
    //     </h1>
    //     <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
    //       By {selectedBlog.author} •{' '}
    //       {new Date(selectedBlog.createdAt?.toDate?.()).toLocaleDateString()}
    //     </div>
    //     <div className="prose prose-gray dark:prose-invert max-w-none">
    //       {selectedBlog.content}
    //     </div>
    //     </div>
    //   </div>
    
  <div className="py-20  bg-gradient-to-b from-primary-medium via-primary-950 to-primary-dark  mx-auto">
    {/* Featured Image */}
    <div className='max-w-4xl mx-auto bg-slate-800 text-white'>
         <div className="mt-6">
        <button onClick={handleBack} className="text-sm py-6 text-blue-500 hover:underline">
          ← Back to Blogs
        </button>
      </div>
    {selectedBlog.imageUrl && (
      <div className="relative h-64 md:h-80">
        <img
          src={selectedBlog.imageUrl}
          alt={selectedBlog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center space-x-3 mb-4">
           
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {selectedBlog.title}
          </h1>
        </div>
      </div>
    )}

    <div className="p-6 md:p-8">
      {/* Meta Info */}
      <div className="flex flex-wrap items-center gap-6 text-sm text-white mb-6 pb-6 border-b border-gray-200">
        <div className="flex items-center">
          <User className="w-4 h-4 mr-2" />
          <span>By {selectedBlog.author}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{new Date(selectedBlog.createdAt?.toDate?.()).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          <span>{readingTime } min read</span>
        </div>
        <div className="flex items-center">
          <span>{wordCount } words</span>
        </div>
      </div>

      {/* Excerpt (optional) */}
      {selectedBlog?.excerpt && (
        <div className="mb-8">
          <p className="text-lg text-white leading-relaxed italic border-l-4 border-blue-500 pl-4 bg-slate-700 p-4 rounded-r-lg">
            {selectedBlog?.excerpt}
          </p>
        </div>
      )}

      {/* Blog Content */}
      <div className="prose prose-lg max-w-none mb-8 text-white">
        <div dangerouslySetInnerHTML={{ __html: selectedBlog.content.replace(/\n/g, '<br />') }} />
      </div>

      

      {Array.isArray(selectedBlog.tags) && selectedBlog.tags.length > 0 && (
  <div className="border-t border-gray-700 pt-6">
    <h3 className="text-sm font-medium text-gray-100 mb-3 flex items-center">
      <Tag className="w-4 h-4 mr-2" /> Tags
    </h3>
    <div className="flex flex-wrap gap-2">
      {selectedBlog.tags.map((tag, i) => (
        <span
          key={i}
          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
)}


      {/* Last Updated */}
      <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-500">
     
          Last updated: {new Date(selectedBlog.updatedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
      </div>

      {/* Back button */}
      <div className="mt-6">
        <button onClick={handleBack} className="text-sm text-blue-500 hover:underline">
          ← Back to Blogs
        </button>
      </div>
    </div>
  </div>
 </div>

    );
  }

  return (
    <section className="py-20 px-36 bg-gradient-to-b from-primary-medium via-primary-950 to-primary-dark dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        {/* {category ? `Blogs - ${category.replace('opho-', '').toUpperCase()}` : 'All Blogs'} */}
        Blogs
      </h2>

      {blogs.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No blogs found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map(blog => (
            <div
              key={blog.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow"
            >
              {blog.imageUrl && (
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
                  {blog.content}
                </p>
                <button
                  onClick={() => handleReadMore(blog)}
                  className="mt-3 text-sm text-blue-500 hover:underline"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
