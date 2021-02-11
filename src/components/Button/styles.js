const styles = (props) => {
console.log("file: styles.js -> line 2 -> props", props);

    return (
        {
            root(prop) {
            console.log("file: styles.js -> line 6 -> prop", prop);

                return (
                    {
                        border: "solid 1px grey",
                        borderRadius: 3,
                        cursor: "pointer",
                        // minWidth: 600,
                        // minHeight: 50,
                        backgroundColor: "white",
                        ...prop
                    }
                )

            },
            wrap(prop) {

                if (prop === "IBM") {

                    return (
                        {
                            border: "solid 1px red",
                            backgroundColor: "pink"
                        }
                    )
                }

                return (
                    {
                        border: "solid 5px blue",
                        backgroundColor: "tomato"
                    }
                )

            }
        }
    )
}

export default styles