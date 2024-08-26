import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import client from "../client"

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => {setPosts(data)
      })
      .catch(console.error,'err')
  }, [])

  return (
    <>
      <section className="px-5 2xl:max-w-7xl 2xl:mx-auto">
        <h1 className="font-bold text-4xl mt-5 mb-10 tracking-widest text-center md:text-6xl lg:text-8xl"  style={{color:'#056b0a'}}>
          Blog page
        </h1>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts?.map((post) => (
            <article key={post.slug.current} className="shadow-xl rounded-lg p-5" style={{background:"#000"}}>
              <img src={post?.mainImage?.asset?.url} alt={post.title} style={{height:'200px'}} />
              <h4 className="text-xl mt-2 text-white">{post.title}</h4>
              <button className="mt-5">
                <Link
                  to={`/blog/${post.slug.current}`}
                  className="py-2 px-6 rounded shadow text-white hover:bg-transparent flex items-center justify-center transition-all duration-500 hover:text-black font-bold"
                  style={{background:'#056b0a'}}
                >
                  Read Full Article
                </Link>
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
