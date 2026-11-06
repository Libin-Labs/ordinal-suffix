export function ordinal(value: number): string {
  if (!Number.isSafeInteger(value)) throw new RangeError('Expected a safe integer');
  const n = Math.abs(value),
    lastTwo = n % 100,
    suffix =
      lastTwo >= 11 && lastTwo <= 13
        ? 'th'
        : n % 10 === 1
          ? 'st'
          : n % 10 === 2
            ? 'nd'
            : n % 10 === 3
              ? 'rd'
              : 'th';
  return String(value) + suffix;
}
