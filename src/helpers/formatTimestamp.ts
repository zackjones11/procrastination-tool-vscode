function formatTimestamp(timestamp: number) {
  const date = new Date(timestamp * 1000);
  const day = date.getDate();
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ][date.getMonth()];

  const suffix = (day: number) => {
    if (day > 3 && day < 21) {
      return 'th';
    }

    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  return `${day}${suffix(day)} ${month}`;
}

export default formatTimestamp;
