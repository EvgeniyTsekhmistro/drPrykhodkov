import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import { Layout } from './components/layout/Layout'
import { Home } from './components/pages/Home'

const Blog = lazy(() =>
  import('./components/pages/Blog').then((m) => ({ default: m.Blog })),
)
const BlogPost = lazy(() =>
  import('./components/pages/BlogPost').then((m) => ({ default: m.BlogPost })),
)
const NotFound = lazy(() =>
  import('./components/pages/NotFound').then((m) => ({ default: m.NotFound })),
)

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
