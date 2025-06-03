import remarkFrontMatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import withFrontMatter from './withFrontMatter.mjs';
import withLayout from './withLayout.mjs';
import withStrict from './withStrict.mjs';

const plugins = [
  remarkFrontMatter,
  remarkGfm,
  withFrontMatter,
  withStrict,
  withLayout,
];

export default plugins;
