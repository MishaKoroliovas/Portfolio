import SectionReveal from "@/components/SectionReveal";
import { blogPosts } from "@/data/site";

export default function Blog() {
  return (
    <section id="blog" className="section-shell">
      <SectionReveal>
        <div className="section-heading">
          <p className="section-kicker">Write-ups</p>
          <h2>Blog</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="rounded border border-zinc-800 bg-zinc-950/70 p-5 transition hover:-translate-y-1 hover:border-[#00FF9C]/50"
            >
              <p className="font-mono text-xs text-[#00FF9C]">{post.date}</p>
              <h3 className="mt-4 font-mono text-xl font-semibold text-white">
                {post.title}
              </h3>
              <p className="mt-3 leading-7 text-zinc-400">{post.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-zinc-800 px-2.5 py-1 text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
