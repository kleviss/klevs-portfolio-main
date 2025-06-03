import { getFrontMatter } from './utils';

interface Schema {
  [key: string]: any;
}

interface Data {
  [key: string]: any;
}

const frontMatterSchemas: Schema = {
  Post: {
    title: 'string',
    description: 'string',
    caption: 'string',
    category: 'string',
    date: 'string',
    lang: 'string',
  },
  Project: {
    title: 'string',
    description: 'string',
    caption: 'string',
    category: 'string',
    date: 'string',
    lang: 'string',
    githubUrl: 'string',
    npmUrl: 'string',
    demoUrl: 'string',
    writeupUrl: 'string',
  },
};

const validate = (schema: Schema, data: Data) => {
  const keys = Object.keys(schema);
  const errors: string[] = [];

  keys.forEach((key) => {
    if (!data[key]) {
      errors.push(`Missing property: ${key}`);
    }
  });

  return errors;
};

const withFrontMatter = () => (_tree: any, file: any) => {
  const { path } = file;
  const data = getFrontMatter(file.value) as Data;

  if (Object.keys(data || {}).length === 0) return;

  const folderName = path.replace(/.+\/(.+)\/.+/, '$1');
  const isContentWithSchema = ['blog', 'projects'].includes(folderName);

  if (isContentWithSchema) {
    const contentType = folderName === 'blog' ? 'Post' : 'Project';
    const schema = frontMatterSchemas[contentType];
    const errors = validate(schema, data);

    if (errors.length > 0) {
      throw new Error(`Missing required frontmatter fields in ${path}:\n\n${errors.join('\n')}`);
    }
  }
};

export default withFrontMatter;
