// a function that returns the current year 
export const getCurrentYear = () => {
    return new Date().getFullYear();
}

export const timestampToDateDDMMYYYY = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}
