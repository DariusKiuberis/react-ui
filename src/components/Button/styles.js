const styles = (props) => {

    return (
        {
            root(prop) {
                console.log('"root prop :"',    {
                    border: "solid 1px grey",
                    borderRadius: 3,
                    cursor: "pointer",
                    minWidth: 200,
                    minHeight: 50,
                    backgroundColor: "white",
                    ...prop


                } )
                return (
                    {
                        border: "solid 1px grey",
                        borderRadius: 3,
                        cursor: "pointer",
                        minWidth: 200,
                        minHeight: 50,
                        backgroundColor: "white",
                        ...prop


                    }
                )

            },
            wrap(prop) {
                // console.log("styles props : ", prop)
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