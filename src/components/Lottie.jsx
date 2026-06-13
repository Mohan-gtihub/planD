import { DotLottieReact } from '@lottiefiles/dotlottie-react'

// Thin wrapper so every Lottie on the site shares defaults (loop, autoplay,
// no layout shift). `src` is a hosted .lottie URL from lottie.host.
export default function Lottie({ src, className = '', loop = true, autoplay = true, speed = 1 }) {
  return (
    <DotLottieReact
      src={src}
      loop={loop}
      autoplay={autoplay}
      speed={speed}
      className={className}
    />
  )
}
