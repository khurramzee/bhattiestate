export default function Contact() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">Contact Bhatti Estate</h1>
      <p className="mt-2">Email: info@bhattiestate.com | Phone: 03002334448</p>
      <form name="contact" method="POST" data-netlify="true" className="mt-4 bg-white p-4 rounded shadow">
        <input type="hidden" name="form-name" value="contact" />
        <p><label>Name: <input type="text" name="name" className="border p-2 w-full" required /></label></p>
        <p><label>Email: <input type="email" name="email" className="border p-2 w-full" required /></label></p>
        <p><label>Message: <textarea name="message" className="border p-2 w-full" required /></label></p>
        <p><button type="submit" className="px-4 py-2 bg-primary text-white rounded">Send Message</button></p>
      </form>
    </div>
  )
}
