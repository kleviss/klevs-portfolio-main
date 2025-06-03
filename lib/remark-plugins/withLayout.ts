import { addContent, addImport, getTableOfContents } from './utils';

const withLayout = () => (tree: any, file: any) => {
  const data = file.data['front-matter'] || {};

  // skip adding layout
  if (Object.keys(data).length === 0) return;

  const { layout, ...frontMatter } = file.data['front-matter'];
  const tableOfContents = getTableOfContents(tree);

  // import front-matter specified layout
  addImport(tree, layout, `@/contents-layouts/${layout}`);

  // export layout
  addContent(
    tree,
    `export default ({ children }) => (
      <${layout}
        frontMatter={${JSON.stringify(frontMatter)}}
        tableOfContents={${JSON.stringify(tableOfContents)}}
      >
        {children}
      </${layout}>
     )`
  );

  const { path } = file;

  if (path.includes('/blog/')) {
    addImport(tree, 'Post', '../../../contents-layouts/Post');
    addImport(tree, 'Post as _Post', '../../../contents-layouts/Post');
  }

  if (path.includes('/projects/')) {
    addImport(tree, 'Project', '../../../contents-layouts/Project');
    addImport(tree, 'Project as _Project', '../../../contents-layouts/Project');
  }
};

export default withLayout;
