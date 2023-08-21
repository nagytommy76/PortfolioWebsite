import Link from 'next/link'

const hoverLink: React.FC<{ linkText: string; href: string }> = ({ linkText, href }) => {
   return (
      <Link className='transition-colors  hover:text-amber-400' href={href}>
         {linkText}
      </Link>
   )
}

export default hoverLink
