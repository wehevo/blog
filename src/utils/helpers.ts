export function getEnumValueByIndex<T>(enumObject: T, index: number): T[keyof T] | "Unknown" {
  const values = Object.values(enumObject as ArrayLike<T[keyof T]>);
  return values[index] !== undefined ? values[index] : "Unknown";
}