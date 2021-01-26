/**
 * Handle button click
 *
 * @param {*} event
 * @param {*} disabled
 * @return {*}
 */
export const handleButtonClick = (event, disabled, onClick) => {
    console.log("BUTTON CLICKED", event)
    if (disabled) return;
    onClick && onClick({ event });
};