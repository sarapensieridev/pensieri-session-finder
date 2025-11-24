    // Changing date format from ISO to a human readable format

    export const formatSessionDate = (isoDate) => {
      const date = new Date(isoDate)
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC",
        hour12: true
      }
      return date.toLocaleString("en-US", options)
    }