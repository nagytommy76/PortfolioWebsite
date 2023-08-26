import React from 'react'
import Link from 'next/link'
import Styles from './default.module.css'

const ResumeButton: React.FC<{ text: string; href: string; isBlank?: boolean }> = ({
   href,
   text,
   isBlank = false,
}) => {
   return (
      <Link href={href} target={isBlank ? '_blank' : ''}>
         <div className={Styles.btn}>
            <span className={`${Styles.linkElement}`}>{text}</span>
            <i className={Styles.iElement}></i>
         </div>
      </Link>
   )
}

export default ResumeButton
