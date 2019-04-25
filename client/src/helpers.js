export const timeValue = millisecond => {
  const value = Date.now() - millisecond;
  return value > 31540000000
    ? `${parseInt(value / 31540000000)} year(s) ago`
    : value > 2628000000
    ? `${parseInt(value / 2628000000)} month(s) ago`
    : value > 604800000
    ? `${parseInt(value / 604800000)} week(s) ago`
    : value > 86400000
    ? `${parseInt(value / 86400000)} day(s) ago`
    : value > 3600000
    ? `${parseInt(value / 3600000)} hour(s) ago`
    : value > 60000
    ? `${parseInt(value / 60000)} minute(s) ago`
    : 'just now';
};
