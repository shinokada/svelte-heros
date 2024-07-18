import type { MetaProps } from 'runes-meta-tags';

const title = 'Solid Icons - Svelte Heros';
const description = 'Easily Find & Copy SVG Icon name for Your Project';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-heros';

export const load = ({ url }) => {
  const ogUrl = url.href;
  const pageMetaTags: MetaProps = {
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl,
      url: ogUrl
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  };
  return { pageMetaTags };
};
