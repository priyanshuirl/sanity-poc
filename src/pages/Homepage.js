import { Link } from "react-router-dom"

export default function Homepage() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center text-center h-screen">
        <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl">
         Calyx Sanity Blogs POC
        </h1>
        <button>
          <Link
            to="/blog"
            className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent  transition-all duration-500 hover:text-black font-bold"
            style={{background:'#056b0a'}}
          >
            Read my blog posts
          </Link>
        </button>
      </section>
    </div>
  )
}
