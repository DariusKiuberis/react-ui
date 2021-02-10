
/**
 * Render styles
 *
 * @param {*} style
 * @param {*} s
 * @return {*}
 */
const renderStyles = (style, s) => {
    if (style) {
        return s.root(style)
    }
    return
}

export default renderStyles