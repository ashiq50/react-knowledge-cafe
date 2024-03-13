import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4">
            <div className='mb-3'>
                <h3 className="text-4xl text-center">Reading Time: {readingTime} min</h3>
            </div>
            <h2 className="text-3xl text-center">BookMarked Blog: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark =><Bookmark key ={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;