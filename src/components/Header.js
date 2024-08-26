import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between bg-black text-white p-5 mb-10">
        <div className="logo">
          <Link to="/">
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Calyx Sanity Blogs POC
            </h2>
          </Link>
        </div>
      </header>
    </>
  )
}
