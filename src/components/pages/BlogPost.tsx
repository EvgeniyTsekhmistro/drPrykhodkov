import { useMemo } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { posts, formatDate, readingTime, getRelatedPosts } from '../../data/blog'
import { useContacts } from '../../context/ContactsContext'
import { MarkdownContent } from '../blog/MarkdownContent'
import { PostCard } from '../blog/PostCard'

export const BlogPost = () => {
  const { slug } = useParams()
  const { openContacts } = useContacts()

  const post = posts.find((p) => p.slug === slug)

  const jsonLd = useMemo(() => {
    if (!post) return null
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: {
        '@type': 'Organization',
        name: 'Prykhodkov Dental Clinic',
        url: 'https://prykhodkovdentalclinic.com',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Prykhodkov Dental Clinic',
        url: 'https://prykhodkovdentalclinic.com',
      },
      ...(post.coverImage && {
        image: `https://prykhodkovdentalclinic.com${post.coverImage}`,
      }),
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://prykhodkovdentalclinic.com/blog/${post.slug}`,
      },
    }
  }, [post])

  if (!post) return <Navigate to="/blog" replace />

  const related = getRelatedPosts(post.slug)

  return (
    <main className="min-h-screen bg-gray-50">
      <title>{`${post.title} — Prykhodkov Dental Clinic`}</title>
      <meta name="description" content={post.excerpt} />
      {post.coverImage && (
        <meta
          property="og:image"
          content={`https://prykhodkovdentalclinic.com${post.coverImage}`}
        />
      )}
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content={`https://prykhodkovdentalclinic.com/blog/${post.slug}`}
      />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <section
        className="relative bg-dark-green py-16 md:py-24 bg-cover bg-center"
        style={
          post.coverImage
            ? { backgroundImage: `url(${post.coverImage})` }
            : undefined
        }
      >
        {post.coverImage && (
          <div
            className="absolute inset-0"
            style={{
              backgroundColor:
                'color-mix(in oklab, rgb(0 0 0 / 64%) 80%, transparent)',
            }}
          />
        )}
        <div className="relative max-w-[780px] mx-auto px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white hover:text-white transition-colors duration-200 no-underline mb-6"
          >
            <ArrowLeft size={16} />
            <span>Усі статті</span>
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-300 mt-4">
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <time>{formatDate(post.date)}</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{readingTime(post.content)} хв читання</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[780px] mx-auto px-8 py-16">
        <MarkdownContent content={post.content} onCta={openContacts} />
      </section>

      {related.length > 0 && (
        <section className="max-w-[1080px] mx-auto px-8 pb-16">
          <h2 className="text-2xl font-bold text-dark-green mb-8">
            Читайте також
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} variant="related" />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
