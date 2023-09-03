import Link from 'next/link'

const hoverLink: React.FC<{ linkText: string; href: string; onClick?: () => void }> = ({
   linkText,
   href,
   onClick,
}) => {
   return (
      <Link onClick={onClick} className='transition-colors  hover:text-amber-400' href={href}>
         {linkText}
      </Link>
   )
}

export default hoverLink
