import { useState } from 'react'

// Renders a brand logo from the Simple Icons CDN, falling back to a clean
// text chip when there's no slug or the image fails to load.
export default function TechLogo({ name, slug, size = 18 }) {
  const [broken, setBroken] = useState(false)

  if (slug && !broken) {
    return (
      <span className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-2.5 py-1.5 text-xs font-medium text-ink-700">
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt=""
          width={size}
          height={size}
          loading="lazy"
          onError={() => setBroken(true)}
          className="h-[18px] w-[18px] object-contain"
        />
        {name}
      </span>
    )
  }

  return (
    <span className="rounded-lg border border-ink-200 bg-white px-2.5 py-1.5 text-xs font-medium text-ink-600">
      {name}
    </span>
  )
}
