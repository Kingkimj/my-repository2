import classNames from 'classnames/bind'

import styles from './tabs.module.scss'

let cx = classNames.bind(styles)

export default function Tabs({ items, activeItem, clickHandler }) {
    return <ul className={styles.tabs}>
        {items.map((item, index) => {
            // "tabitem active" a string of conditional classes/ouput
            let tabItemClasses = cx({
                tabItem : true,
                active : activeItem === item 
            })
            return <li  
            key={index}
            className={tabItemClasses}
            onClick={() => {
                clickHandler(item)
            }}
            >{item}</li>
        })}
    </ul>
}