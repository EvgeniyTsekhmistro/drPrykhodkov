import { Link } from 'react-router-dom'

export const NotFound = () => (
  <main className="min-h-screen bg-gray-50 flex items-center justify-center px-8">
    <title>Сторінку не знайдено — Prykhodkov Dental Clinic</title>
    <div className="text-center">
      <h1 className="text-8xl font-bold text-teal">404</h1>
      <p className="text-2xl font-bold text-dark-green mt-4">
        Сторінку не знайдено
      </p>
      <p className="text-gray-600 mt-2">
        Можливо, ця сторінка була переміщена або видалена.
      </p>
      <div className="flex gap-4 justify-center mt-8">
        <Link
          to="/"
          className="inline-block bg-dark-green text-white px-6 py-3 rounded-lg font-medium hover:opacity-80 transition-opacity no-underline"
        >
          На головну
        </Link>
        <Link
          to="/blog"
          className="inline-block bg-teal text-white px-6 py-3 rounded-lg font-medium hover:opacity-80 transition-opacity no-underline"
        >
          Блог
        </Link>
      </div>
    </div>
  </main>
)
