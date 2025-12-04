import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function Listing({ data, content }) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="mt-2">Price: PKR {data.price}</p>
      <div className="mt-4 bg-white p-4 rounded shadow">
        <div dangerouslySetInnerHTML={{__html: content}} />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), 'content', 'listings')
  const files = fs.readdirSync(dir)
  const paths = files.map(fn => ({ params: { slug: fn.replace('.md','') } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const md = fs.readFileSync(path.join(process.cwd(), 'content', 'listings', params.slug + '.md'), 'utf8')
  const match = md.match(/---\n([\s\S]*?)\n---\n([\s\S]*)/)
  const front = match ? match[1] : ''
  const content = match ? match[2] : ''
  const obj = {}
  front.split('\n').forEach(line => {
    const idx = line.indexOf(':')
    if (idx>0) {
      const k = line.slice(0, idx).trim()
      let v = line.slice(idx+1).trim()
      v = v.replace(/"/g, '')
      obj[k] = v
    }
  })
  return { props: { data: obj, content } }
}
