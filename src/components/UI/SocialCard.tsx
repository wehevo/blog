interface SocialCardProps {
  index?: number;
}
export default function SocialCard({index}: SocialCardProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute group w-full h-full flex items-center hover:bg-[#00000099]">
        <p className="invisible group-hover:visible text-lg text-white text-center">@wehevo #test #blog</p>
      </div>
      <img
        src={`https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Personal%20Blog/0${index}.jpg`}
        alt="follow-image"
      />
    </div>
  );
}