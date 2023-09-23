module.exports = {
    // Format a date into "dd/mm/yyyy" format
    format_date: (date) => {
      // Create a Date object from the provided date
      const formattedDate = new Date(date);
      // Extract the day, month, and year components
      const day = formattedDate.getDate();
      const month = formattedDate.getMonth() + 1; // Month is zero-based
      const year = formattedDate.getFullYear();
  
      // Return the formatted date as a string
      return `${day}/${month}/${year}`;
    },
  };
  