import rehypePrismPlus from 'rehype-prism-plus';
import withCodeAttributes from './withCodeAttributes.mjs';
import withInlineHighlights from './withInlineHighlights.mjs';

const plugins = [rehypePrismPlus, withInlineHighlights, withCodeAttributes];

export default plugins;
