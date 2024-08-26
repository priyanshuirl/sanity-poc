import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import client from "../client"
import BlockContent from "@sanity/block-content-to-react"

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { slug } = useParams()

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        body,
        "name": author->name,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setSinglePost(data[0]))
    setIsLoading(false)
  }, [slug])


  return (
    <>
      {isLoading ? (
        <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl flex items-center justify-center h-screen">
          Loading...
        </h1>
      ) : (
        <section className="px-5 xl:max-w-6xl xl:mx-auto pb-20">
          <h1 className="uppercase font-bold text-4xl tracking-wide mb-10 md:text-6xl lg:text-8xl text-center mt-5">
            {singlePost.title}
          </h1>
          <p className='text-[18px] font-bold text-center' style={{fontSize:'36px',marginBottom:'36px',color:'#056b0a'}}>By {singlePost.name}</p>

          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
              className="blog__image rounded-t my-10"
            />
          )}

          <div className="block__content">
            <BlockContent
              blocks={singlePost.body}
              projectId="2hp9gld0"
              dataset="production"
            />
          </div>

          <button style={{marginTop:'24px'}}>
            <Link
              to="/blog"
              className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent  transition-all duration-500 hover:text-black font-bold"
              style={{background:'#056b0a'}}
            >
              Read more articles
            </Link>
          </button>
        </section>
      )}
    </>
  )
}
