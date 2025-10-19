import { FaStar, FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    image_url,
    details,
    tags,
  } = news;

  // Format published date
  const date = new Date(author.published_date).toLocaleDateString("en-CA");

  return (
    <div className="card bg-base-100 shadow-xl rounded-xl border border-base-300">
      {/* Author & Top Icons */}
      <div className="flex bg-base-200 items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <div className="flex gap-3 text-xl text-gray-500">
          <FaBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <h3 className="px-4 text-lg md:text-xl font-bold leading-snug">
        {title}
      </h3>

      {/* Thumbnail */}
      <figure className="px-4 mt-3">
        <img
          src={thumbnail_url || image_url}
          alt="news"
          className="rounded-lg w-full object-cover"
        />
      </figure>

      {/* Description */}
      <div className="px-4 py-3">
        <p className="text-gray-600 text-sm md:text-base">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
        </p>
        <button className="text-orange-500 font-semibold mt-2 hover:underline">
          Read More
        </button>
      </div>

      {/* Tags */}
      <div className="px-4 flex flex-wrap gap-2 mb-3">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="badge badge-outline badge-sm text-gray-600 capitalize"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer: Rating + Views */}
      <div className="border-t border-base-300 flex items-center justify-between px-4 py-3 text-gray-600">
        <div className="flex items-center gap-1">
          <FaStar className="text-warning" />
          <span className="font-medium">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
