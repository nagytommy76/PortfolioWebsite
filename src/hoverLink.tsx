import Link from 'next/link'

const hoverLink: React.FC<{ linkText: string; href: string; onClick?: () => void }> = ({
   linkText,
   href,
   onClick,
}) => {
   return (
      <Link onClick={onClick} className='transition-colors  hover:text-main-text' href={href}>
         {linkText}
      </Link>
   )
}

export default hoverLink
