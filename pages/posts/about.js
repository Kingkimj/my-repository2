import Link from 'next/link'

export default function about() {
    return (
      <>
        <h1>About</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </>
    )
  }