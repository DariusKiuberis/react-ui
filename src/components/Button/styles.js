const styles = (props) => {

    return (
        {
            root: {
                border: "solid red"
            },
            wrap(prop) {
                console.log("styles props : ", prop)
                if (prop === "IBM") {

                    return (
                        {
                            border: "solid 5px green",
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