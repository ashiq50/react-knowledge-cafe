import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const Blog = ({ blog, handleAddToBookMarks, handleMarkAsRead }) => {
    // eslint-disable-next-line react/prop-types
    const {title, cover, author, author_image, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full rounded-md mb-4' src={cover} alt="" />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex'>
                    <img className='w-14 h-14 rounded-full' src={author_image} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button className='ml-2'><FaBookmark onClick={()=>handleAddToBookMarks(blog)}></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-3xl mb-4">{title}</h2>
            <p>
                {
                    // eslint-disable-next-line react/prop-types
                    hashtags.map((hash, idx) => <span key ={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;