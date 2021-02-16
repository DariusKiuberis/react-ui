/**
 * Handle button click
 *
 * @param {*} event
 * @param {*} disabl
 * @param {*} disabled
 * @return {*}
 */
const handleButtonClick = (event, disabled, onClick) => {

    if (disabled) return;
    onClick && onClick({ event });
};

export default handleButtonClick