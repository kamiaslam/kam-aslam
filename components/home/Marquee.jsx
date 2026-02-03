export default function Marquee() {
  const items = [
    "User Experience",
    "Product Design", 
    "Design Systems",
    "Service Design",
    "UX Research",
    "Conversational AI",
    "Fintech",
    "Healthcare",
    "Enterprise",
    "Design Leadership"
  ]

  return (
    <div className="bg-white text-black py-12 overflow-hidden border-y border-gray-100">
      <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-16 items-center text-4xl md:text-5xl font-light">
            {items.map((item, index) => (
              <span 
                key={index} 
                className={index % 2 === 0 ? "font-serif italic" : "font-sans tracking-tight"}
              >
                #{item.replace(/\s+/g, '')}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
