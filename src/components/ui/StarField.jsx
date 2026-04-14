import { useMemo } from 'react'

export default function StarField({ count = 120 }) {
  const stars = useMemo(() => Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    delay: Math.random() * 6,
    duration: Math.random() * 4 + 3,
  })), [count])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map(s => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            opacity: Math.random() * 0.7 + 0.1,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
      {/* Nebula glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(circle, #5ee7ff 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)' }} />
    </div>
  )
}
