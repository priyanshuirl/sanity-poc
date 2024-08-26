import { Link } from "react-router-dom"

export default function Homepage() {
  return (
    <div>
      <section className="flex flex-col items-center text-center h-screen" style={{marginTop:"250px"}}>
        <h1 className="uppercase font-bold text-4xl tracking-wide md:text-6xl lg:text-8xl">
         Calyx Sanity Blogs POC
        </h1>
        <div className='flex gap-10 mt-5'>
        <button>
          <a
          target="_blank"
          rel="noreferrer"
            href="https://calyx-blogs-poc.sanity.studio/structure/post"
            className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent  transition-all duration-500 hover:text-black font-bold"
            style={{background:'#056b0a'}}
          >
            Open Blog Studio
          </a>
        </button>
        <button>
          <Link
            to="/blog"
            className="mt-10 py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent  transition-all duration-500 hover:text-black font-bold"
            style={{background:'#056b0a'}}
          >
         View Blogs List
          </Link>
        </button>
        </div>
      </section>
    </div>
  )
}
