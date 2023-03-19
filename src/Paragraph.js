// 76. useContext

import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'


function Paragraph() {

    const context = useContext(ThemeContext)
    console.log('context', context)
    // ở ThemeContext.Provider có props là {value}

    console.log('theme: ', context.theme)

    return (
        <p className={context.theme}>
            Đặng Thị Thu Hà
        </p>
    )
}

export default Paragraph