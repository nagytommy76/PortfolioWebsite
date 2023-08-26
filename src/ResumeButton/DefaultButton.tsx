import React from 'react'
import Link from 'next/link'
import Styles from './default.module.css'

const ResumeButton: React.FC<{ text: string; href: string; isBlank?: boolean }> = ({
   href,
   text,
   isBlank = false,
}) => {
   return (
      <button className={`${Styles.btn}`}>
         <Link className={Styles.linkElement} href={href} target={isBlank ? '_blank' : ''}>
            {text}
         </Link>
         <i className={Styles.iElement}></i>
      </button>
   )
}

export default ResumeButton
