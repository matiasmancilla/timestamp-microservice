exports.getTimestamp = (dateString) => {
    const date = !isNaN(dateString) ? new Date(parseInt(dateString)) : new Date(dateString);

    return {
        unix: date.getTime(),
        utc: date.toUTCString(),
    };
};
