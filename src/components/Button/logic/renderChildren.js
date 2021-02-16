/**
 * Render children, label or default text
 *
 * @param {string | number} label (optional)
 * @param {Node=} children html element, svg and etc (optional)
 * @return {string | number | Node}
 */
const renderChildren = (label, children) => {
    if (label) {
        return label;
    }
    if (children) {
        return children;
    }
    return "Click";
};

export default renderChildren