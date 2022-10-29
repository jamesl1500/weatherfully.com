import Link from 'next/link'

export default function Header()
{
  return (
    <div className='header'>
        <div className="innerHeader row">
            <div className="col-lg-3 branding">
                <Link href="/index">Weatherfully</Link>
            </div>
            <div className="col-lg-9 leftWebsiteNavigation">
                <div className="leftNavigation">
                    <ul>
                        <li className="active"><Link href="">Today</Link></li>
                        <li><Link href="">Week</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}