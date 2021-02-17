/**
 * Better console.log()
 *
 * @param {*} content
 */
const log = (...content) => {
    if (process.env.NODE_ENV === "development") {
        console.log(...content)
    }


}

export default log