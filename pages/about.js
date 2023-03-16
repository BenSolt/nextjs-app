import Link from 'next/link'

export default function About() {

    return (
        <div>
            <h1>ABOUT</h1>
            <Link href="/" className='navItem'>Home</Link>
            <p>about paragraph</p>
        </div>
    )
  }