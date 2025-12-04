import fs from 'fs'
import path from 'path'
import Link from 'next/link'

export default function Blog({ posts }) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {posts.map(p=> (
          <div key={p.slug} className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2">{p.excerpt}</p>
            <Link href={`/blog/${p.slug}`}><a className="text-primary">Read more</a></Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'content', 'blog')
  const files = fs.readdirSync(dir)
  const posts = files.map(fn => {
    const raw = fs.readFileSync(path.join(dir, fn), 'utf8')
    const match = raw.match(/---\n([\s\S]*?)\n---/)
    const front = match ? match[1] : ''
    const obj = {}
    front.split('\n').forEach(line => {
      const idx = line.indexOf(':')
      if (idx>0) {
        const k = line.slice(0, idx).trim()
        const v = line.slice(idx+1).trim().replace(/^"|"$/g, '')
        obj[k]=v
      }
    })
    return { title: obj.title || fn, slug: fn.replace('.md',''), excerpt: obj.excerpt || '' }
  })
  return { props: { posts } }
}
