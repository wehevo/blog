import React from 'react';

interface Props {
  text: string;
  url: string;
}

const ShareButtons = ({ text, url }: Props) => {
  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}%20${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  };

  const shareOnTelegram = () => {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(telegramUrl, '_blank');
  };

  const shareOnWhatsapp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}%20${encodeURIComponent(url)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <button onClick={shareOnTwitter}>Share on Twitter</button>
      <button onClick={shareOnTelegram}>Share on Telegram</button>
      <button onClick={shareOnWhatsapp}>Share on Whatsapp</button>
    </div>
  );
};

export default ShareButtons;