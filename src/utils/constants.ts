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

export const defaultImage = "https://static.wixstatic.com/media/c22c23_89024a2cd2e943a6b89d99404958e3bb~mv2.jpg/v1/fill/w_940,h_529,fp_0.50_0.50,q_90,enc_auto/c22c23_89024a2cd2e943a6b89d99404958e3bb~mv2.jpg";