import classNames from 'classnames/bind'
import styles from './button.module.scss'
import Link from 'next/link'

let cx = classNames.bind(styles);



// deconstruct props within the paren/brackets 
export default function Button({ label, variant, path }) {
    let buttonClasses = cx({
        btn : true, 
        primary : variant === "primary",
        secondary : variant === "secondary",

    });

    return <button className={buttonClasses}>
        <Link href={path}>
        <a>
            {label}
        </a>
        </Link>
        </button>
  }