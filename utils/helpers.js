module.exports = {
  // Custom helper function 'format_date' that takes a 'date' parameter
  format_date: (date) => {
      // Inside the function, a new Date object is created using the provided 'date' timestamp.
      // The `getMonth() + 1` method returns the month (adding 1 because months are zero-based), 
      // `getDate()` returns the day of the month, and `getFullYear()` returns the year.
      // These values are concatenated to create a formatted date string in the format: "MM/DD/YYYY".
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
  },
};
