/**
 * Handle button click
 *
 * @param {*} event
 * @param {*} disabl
 * @param {*} disabled
 * @return {*}
 */
const handleButtonClick = (event, disabled, onClick) => {
    // console.log("BUTTON CLICKED", event)

    if (disabled) return;
    onClick && onClick({ event });
};

export default handleButtonClick