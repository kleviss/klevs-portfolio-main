import Head from '@/components/meta/Head';

import ProjectsContents from '@/contents/projects';
import HeaderImage from '@/contents/projects/HeaderImage';
import Page from '@/contents-layouts/Page';

function Projects() {
  return (
    <>
      <Head
        title="Projects"
        description="Showcase of my front-end related work. A collection of my recent projects and contributions."
        ogImage="/og/projects.png"
      />
      <Page
        frontMatter={{
          title: 'Projects',
          description: 'Showcase of my front-end related work. A collection of my recent projects and contributions.',
          caption: 'Portfolio',
        }}
        removeBottomPaddingMobile
        headerImage={<HeaderImage />}
      >
        <ProjectsContents />
      </Page>
    </>
  );
}


export default Projects;
