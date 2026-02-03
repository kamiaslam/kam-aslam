"use client";

import PageHeader from "@/components/ui/PageHeader";
import Blog from "@/components/home/Blog";
import Container from "@/components/ui/Container";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <PageHeader
        title="Insights."
        subtitle="Blog"
        description="Thoughts on design, technology, and the creative process."
      />

      <div className="pb-24">
        <Blog />
      </div>

      <Container className="pb-24">
        <div className="mb-24">
          <h3 className="text-2xl font-serif mb-6">Explore Topics</h3>
          <div className="flex flex-wrap gap-4">
            {[
              "Design Systems",
              "User Research",
              "Typography",
              "Career Growth",
              "Tutorials",
              "Case Studies",
              "Industry Trends",
            ].map((topic, i) => (
              <button
                key={i}
                className="px-6 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16">
          <div className="px-4 xs:px-12 md:max-w-xl mx-auto text-center">
            <h3 className="text-3xl font-serif mb-4">
              Subscribe to the newsletter
            </h3>
            <p className="text-gray-500 mb-8">
              Get the latest insights and resources delivered straight to your
              inbox. No spam, ever.
            </p>
            <form className="flex flex-wrap md:!flex-nowrap gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:border-black transition-colors"
              />
              <button className="w-full ss:!w-auto flex-shrink-0 px-6 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
