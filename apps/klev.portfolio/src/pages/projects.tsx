import HeaderImage from '@/contents/projects/HeaderImage';
import Page from '@/contents-layouts/Page';
import ProjectsContents from '@/contents/projects';

function Projects() {
  return (
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
  );
}


export default Projects;
