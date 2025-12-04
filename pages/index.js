import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bhatti Estate & Builders — Malir Cantt & Askari</title>
        <meta name="description" content="Find properties in Malir Cantt and Askari sectors. Bhatti Estate & Builders." />
        <link rel="icon" href="/assets/BhattiEstate.png" />
      </Head>

      <header className="p-6 bg-white shadow">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src="/assets/BhattiEstate.png" alt="Bhatti Estate" style={{height:48}} />
            <h1 className="ml-4 text-2xl font-semibold text-secondary">Bhatti Estate & Builders</h1>
          </div>
          <nav>
            <Link href="/listings"><a className="mr-4">Listings</a></Link>
            <Link href="/blog"><a className="mr-4">Blog</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <section className="bg-gradient-to-r from-white to-white p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-primary">Find Your Next Property in Malir Cantt & Askari</h2>
          <p className="mt-4">Search listings, read local guides and contact our team to schedule viewings.</p>
          <div className="mt-6">
            <Link href="/listings"><a className="px-4 py-2 bg-primary text-white rounded">Browse Listings</a></Link>
            <Link href="/contact"><a className="ml-4 px-4 py-2 border rounded">Contact Us</a></Link>
          </div>
        </section>

        <section className="mt-8">
          <h3 className="text-xl font-semibold">Featured Listings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-white rounded shadow">
              <h4 className="font-semibold">3-Bed Family Home — Malir Cantt</h4>
              <p className="mt-2">Price: PKR 9,500,000</p>
              <Link href="/listings/3-bed-family-home-malir-cantt"><a className="text-primary">View Listing</a></Link>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h4 className="font-semibold">2-Bed Apartment — Askari IV</h4>
              <p className="mt-2">Price: PKR 6,500,000</p>
              <Link href="/listings/2-bed-apartment-askari-iv"><a className="text-primary">View Listing</a></Link>
            </div>
          </div>
        </section>

      </main>

      <footer className="p-6 bg-white mt-8">
        <div className="container mx-auto text-center">
          <img src="/assets/BhattiEstate.png" alt="logo" style={{height:36}} />
          <p className="mt-2">Contact: info@bhattiestate.com | 03002334448</p>
          <p className="text-sm mt-2">© {new Date().getFullYear()} Bhatti Estate & Builders</p>
        </div>
      </footer>
    </div>
  )
}
