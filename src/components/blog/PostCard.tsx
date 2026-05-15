import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { type BlogPost, formatDate, readingTime } from '../../data/blog'

const CARD_CLASS =
  'group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden no-underline flex flex-col'

const PlaceholderIcon = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    />
  </svg>
)

type PostCardProps = {
  post: BlogPost
  variant?: 'full' | 'related'
}

export const PostCard = ({ post, variant = 'full' }: PostCardProps) => {
  const full = variant === 'full'

  return (
    <Link to={`/blog/${post.slug}`} className={CARD_CLASS}>
      {post.coverImage ? (
        <div className={full ? 'h-48 overflow-hidden' : 'h-40 overflow-hidden'}>
          <img
            src={post.coverImage}
            alt={post.title}
            loading="lazy"
            sizes={
              full
                ? '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                : undefined
            }
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div
          className={`bg-teal/10 flex items-center justify-center ${full ? 'h-48' : 'h-40'}`}
        >
          <PlaceholderIcon
            className={`text-teal/40 ${full ? 'w-16 h-16' : 'w-12 h-12'}`}
          />
        </div>
      )}

      <div className={`flex flex-col flex-1 ${full ? 'p-6' : 'p-5'}`}>
        {full && (
          <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <time>{formatDate(post.date)}</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{readingTime(post.content)} хв</span>
            </div>
          </div>
        )}

        {full ? (
          <h2 className="text-xl font-bold text-dark-green group-hover:text-teal transition-colors duration-200">
            {post.title}
          </h2>
        ) : (
          <h3 className="text-lg font-bold text-dark-green group-hover:text-teal transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
        )}

        {full && (
          <p className="text-gray-600 mt-3 flex-1 leading-relaxed">
            {post.excerpt}
          </p>
        )}

        <div
          className={`flex items-center gap-2 text-teal font-medium group-hover:gap-3 transition-all duration-200 ${full ? 'mt-4' : 'mt-3 text-sm'}`}
        >
          <span>{full ? 'Читати далі' : 'Читати'}</span>
          <ArrowRight size={full ? 16 : 14} />
        </div>
      </div>
    </Link>
  )
}
