import type { MetaProps } from 'runes-meta-tags';

const title = 'Props - Svelte Heros v8';
const description = 'How to use Svelte Heros v8 props';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-heros';

export const load = () => {
  const pageMetaTags: MetaProps = {
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  };
  return { pageMetaTags };
};
