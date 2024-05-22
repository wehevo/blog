export type blogOptionType = {
  value: string;
  label: string;
}
export const blogOptions: blogOptionType[] = [
  { value: 'all-posts', label: 'All Posts' },
  { value: 'travel', label: 'Travel' },
  { value: 'my-top', label: 'My Top 5' },
  { value: 'art-calture', label: 'Art & Calture' }
]