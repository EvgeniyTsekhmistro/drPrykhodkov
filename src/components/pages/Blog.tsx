import { getVisiblePosts } from '../../data/blog'
import { PostCard } from '../blog/PostCard'

export const Blog = () => (
  <main className="min-h-screen bg-gray-50">
    <title>Блог — Prykhodkov Dental Clinic</title>
    <meta
      name="description"
      content="Корисні статті про стоматологію, імплантацію, протезування та здоров'я порожнини рота від Prykhodkov Dental Clinic."
    />

    <section className="bg-dark-green py-16 md:py-24">
      <div className="max-w-[1080px] mx-auto px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Блог</h1>
        <p className="text-gray-300 mt-4 text-lg">
          Корисні статті про стоматологію та здоров'я порожнини рота
        </p>
      </div>
    </section>

    <section className="max-w-[1080px] mx-auto px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {getVisiblePosts().map((post) => (
          <PostCard key={post.slug} post={post} variant="full" />
        ))}
      </div>
    </section>
  </main>
)
