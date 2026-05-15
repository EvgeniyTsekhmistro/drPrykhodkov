import { type ReactNode, createElement, useMemo } from 'react'
import { CTA_PHRASES } from '../../data/blog'

function renderInline(text: string, onCta: () => void): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, idx) => {
    if (!part.startsWith('**') || !part.endsWith('**')) return part

    const inner = part.slice(2, -2)
    const isCta = CTA_PHRASES.some((phrase) => inner.includes(phrase))

    return isCta ? (
      <strong
        key={idx}
        className="font-semibold text-teal underline cursor-pointer hover:text-dark-green transition-colors duration-200"
        onClick={onCta}
        role="button"
      >
        {inner}
      </strong>
    ) : (
      <strong key={idx} className="font-semibold text-dark-green">
        {inner}
      </strong>
    )
  })
}

function parse(content: string, onCta: () => void): ReactNode[] {
  const lines = content.split('\n')
  const nodes: ReactNode[] = []
  let buffer: string[] = []
  let ordered = false
  let key = 0

  const flush = () => {
    if (buffer.length === 0) return
    const items = buffer
    buffer = []
    const listClass = ordered ? 'list-decimal' : 'list-disc'
    nodes.push(
      createElement(
        ordered ? 'ol' : 'ul',
        {
          key: key++,
          className: `${listClass} pl-6 my-4 space-y-2 text-gray-700`,
        },
        items.map((item, i) => <li key={i}>{renderInline(item, onCta)}</li>),
      ),
    )
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (line === '') {
      flush()
      continue
    }

    const imgMatch = line.match(/^\[IMG:([^\]|]+)\|?([^\]]*)\]$/)
    if (imgMatch) {
      flush()
      nodes.push(
        <figure key={key++} className="my-6">
          <img
            src={imgMatch[1]}
            alt={imgMatch[2] || ''}
            loading="lazy"
            sizes="(min-width: 780px) 780px, 100vw"
            className="w-full rounded-xl shadow-md"
          />
          {imgMatch[2] && (
            <figcaption className="text-sm text-gray-500 mt-2 text-center italic">
              {imgMatch[2]}
            </figcaption>
          )}
        </figure>,
      )
      continue
    }

    if (line.startsWith('### ')) {
      flush()
      nodes.push(
        <h3
          key={key++}
          className="text-xl font-bold text-dark-green mt-8 mb-3"
        >
          {line.slice(4)}
        </h3>,
      )
      continue
    }

    if (line.startsWith('## ')) {
      flush()
      nodes.push(
        <h2
          key={key++}
          className="text-2xl font-bold text-dark-green mt-10 mb-4"
        >
          {line.slice(3)}
        </h2>,
      )
      continue
    }

    if (line.startsWith('- ')) {
      if (buffer.length > 0 && ordered) flush()
      ordered = false
      buffer.push(line.slice(2))
      continue
    }

    if (/^\d+\.\s/.test(line)) {
      if (buffer.length > 0 && !ordered) flush()
      ordered = true
      buffer.push(line.replace(/^\d+\.\s/, ''))
      continue
    }

    flush()
    nodes.push(
      <p key={key++} className="text-gray-700 leading-relaxed my-4">
        {renderInline(line, onCta)}
      </p>,
    )
  }

  flush()
  return nodes
}

type MarkdownContentProps = {
  content: string
  onCta: () => void
}

export const MarkdownContent = ({ content, onCta }: MarkdownContentProps) => {
  const nodes = useMemo(() => parse(content, onCta), [content, onCta])
  return <article className="prose">{nodes}</article>
}
