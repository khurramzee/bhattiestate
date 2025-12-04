import fs from 'fs'
import path from 'path'
import Link from 'next/link'

export default function Listings({ listings }) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {listings.map(l => (
          <div key={l.slug} className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">{l.title}</h3>
            <p className="mt-2">Price: PKR {l.price.toLocaleString()}</p>
            <Link href={`/listings/${l.slug}`}><a className="text-primary">View Listing</a></Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'content', 'listings')
  const files = fs.readdirSync(dir)
  const listings = files.map(fn => {
    const raw = fs.readFileSync(path.join(dir, fn), 'utf8')
    const match = raw.match(/---\n([\s\S]*?)\n---/)
    const front = match ? match[1] : ''
    const obj = {}
    front.split('\n').forEach(line => {
      const idx = line.indexOf(':')
      if (idx>0) {
        const k = line.slice(0, idx).trim()
        const v = line.slice(idx+1).trim()
        obj[k]=v.replace(/^"|"$/g, '')
      }
    })
    return { title: obj.title || fn, slug: obj.slug || fn.replace('.md',''), price: Number(obj.price || 0) }
  })
  return { props: { listings } }
}
