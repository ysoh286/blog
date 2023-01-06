/**
 * @description convert month number into a month as a string
 * 
 * @param {number} monthNumber - month as a number
 * @returns {string} month as a string
 */
const getMonthAsString = (monthNumber: number) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthNumber];
};


/**
 * @description Format date
 * @param {string} date blog post date as a string in the current format 2017-09-02 13:14:08 +1300 (see md files)
 * 
 * @returns {string} date as day month, year - 2 September, 2017
 */
export const formatDate = (date: string) => {
    const dateInJS = new Date(date);
    const year =  dateInJS.getFullYear();
    const monthNumber = getMonthAsString(dateInJS.getMonth());
    const day = dateInJS.getDate();

    return `${day} ${monthNumber}, ${year}`;
};

