export function useDateParser() {
  function parseDate(date: string) {
    const d = new Date(date);
    const parsed = {
      day: d.getDate(),
      month: d.getMonth() + 1,
      year: d.getFullYear(),
      hours:
        d.getUTCHours() < 10
          ? `0${d.getUTCHours() + (d.getTimezoneOffset() / 60) * -1}`
          : d.getUTCHours() + (d.getTimezoneOffset() / 60) * -1,
      minutes:
        d.getUTCMinutes() < 10 ? `0${d.getUTCMinutes()}` : d.getUTCMinutes(),
    };
    const formatted = `${parsed.day}.${parsed.month}.${parsed.year}.${parsed.hours}:${parsed.minutes}`;
    return formatted;
  }
  return [parseDate] as const;
}
