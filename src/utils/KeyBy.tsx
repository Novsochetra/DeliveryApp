export function keyByMap<T, R>(
  input: T[],
  key: (t: T) => string | number | null,
  transform: (t: T) => R | null
): { [key: string]: R } {
  const obj: { [key: string]: R } = {}
  for (const t of input) {
    const k = key(t)
    if (k != null) {
      obj[k] = transform(t) as any
    }
  }
  return obj
}
