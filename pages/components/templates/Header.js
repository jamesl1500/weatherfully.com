import Link from 'next/link'

export default function Header()
{
  return (
    <div className='header'>
      <div className="innerHeader container">
        <div className="col-lg-3 branding">
          <Link href="/index"><h1>Weatherfully</h1></Link>
        </div>
        <div className="col-lg-9">
          <Link href="/auth/login">Login</Link>
        </div>
      </div>
    </div>
  )
}