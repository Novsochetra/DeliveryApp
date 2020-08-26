export const titlize = (str: string = ''): string =>
  str.toLowerCase().replace(/\b[a-z]/gi, (x) => x.toUpperCase())
