/**
 * Little helper to create some date
 * @param {*} timestamp integer timestamp
 * @returns coverted local date
 */
export function createLocalDate(timestamp) {

    const convertedDate = new Date(timestamp * 1000);

    // Get local date components
    const year = convertedDate.getFullYear();
    const month = convertedDate.getMonth() + 1; // Months are zero-indexed, so add 1
    const day = convertedDate.getDate();
    const hours = convertedDate.getHours();
    const minutes = convertedDate.getMinutes();
    const seconds = convertedDate.getSeconds();

    // Format the date as a string
    const localDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hours}:${minutes}:${seconds}`; 
    return localDate;
  }