import AppWindow from '@/components/wireframes/AppWindow';
import { GitHubIcon } from '@/components/Icons';
import GitHubWireframe from '@/components/wireframes/GitHub';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
// import SectionTitle from '@/components/sections/SectionTitle';
import clsx from 'clsx';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  githubUrl: string;
  tech: string[];
  lastUpdate: string;
}

const projects: Project[] = [
  {
    title: 'klevs-portfolio-main',
    description: 'Personal portfolio website built with Next.js and TypeScript',
    githubUrl: 'https://github.com/kleviss/klevs-portfolio-main',
    tech: ['TypeScript', 'Next.js', 'MDX', 'CSS'],
    lastUpdate: '1 hours ago'
  },
  {
    title: 'restaurant-vibes',
    description: 'Deals in Restaurants with a Vibe - Full-stack application for restaurant discovery',
    githubUrl: 'https://github.com/kleviss/restaurant-vibes',
    tech: ['TypeScript', 'PostgreSQL', 'JavaScript'],
    lastUpdate: '1 week ago'
  },
  {
    title: 'alba-taste',
    description: 'AlbTaste - Mobile app promoting food spots and tourism in Albania, inspired by NeoTaste',
    githubUrl: 'https://github.com/kleviss/alba-taste',
    tech: ['TypeScript', 'React Native', 'Mobile'],
    lastUpdate: '2 months ago'
  },
  {
    title: 'rn-supabase-react-query-emotion-native-boilerplate',
    description: 'Modern React Native boilerplate with Supabase, React Query, and Emotion Native styling',
    githubUrl: 'https://github.com/kleviss/rn-supabase-react-query-emotion-native-boilerplate',
    tech: ['TypeScript', 'React Native', 'Supabase', 'Expo'],
    lastUpdate: '3 months ago'
  },
  {
    title: 'gjej-makine-al',
    description: 'Gjej Makine Albania - Innovative mobile app for finding cars in Albania',
    githubUrl: 'https://github.com/kleviss/gjej-makine-al',
    tech: ['TypeScript', 'React Native', 'Expo'],
    lastUpdate: '3 months ago'
  },
  {
    title: 'leben-de-RN-app',
    description: 'React Native mobile application for Questions related to the Einbürgerungstest in Germany',
    githubUrl: 'https://github.com/kleviss/leben-de-RN-app',
    tech: ['TypeScript', 'React Native', 'Expo'],
    lastUpdate: '6 months ago'
  },
  {
    title: 'leben-de-dashbaord',
    description: 'Dashboard application for the Leben-De project where admin can manage categories, questions and answers',
    githubUrl: 'https://github.com/kleviss/leben-de-dashbaord',
    tech: ['JavaScript', 'React', 'CSS'],
    lastUpdate: '6 months ago'
  },
  {
    title: 'leben-de-backend',
    description: 'Backend service supporting the dashboard and the mobile app with API endpoints',
    githubUrl: 'https://github.com/kleviss/leben-de-backend',
    tech: ['JavaScript', 'Node.js', 'Express'],
    lastUpdate: '6 months ago'
  },
  {
    title: 'next-swr-boilerplate',
    description: 'Simple Next.js Structure Boilerplate for fetching data with SWR hook',
    githubUrl: 'https://github.com/kleviss/next-swr-boilerplate',
    tech: ['TypeScript', 'Next.js', 'SWR'],
    lastUpdate: '10 months ago'
  }
];

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onClick: () => void;
}

function ProjectCard({ project, isActive, onClick }: ProjectCardProps) {
  return (
    <div className="group relative">
      <div className="relative">
        <SectionButton
          title={project.title}
          icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
          description={project.description}
          active={isActive}
          onClick={onClick}
          tech={project.tech}
          githubUrl={project.githubUrl}
        />
      </div>
    </div>
  );
}

function ProjectsContents() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(projects[0]);

  return (
    <SectionContent>
      <div className={clsx('flex flex-col', 'lg:flex-row', 'lg:gap-12')}>
        {/* Mobile Project Selector */}
        <div className={clsx('-mt-8 mb-12', 'lg:hidden')}>
          <select
            className="w-full rounded-lg border border-gray-300 bg-white p-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            value={selectedProject?.title}
            onChange={(e) => setSelectedProject(projects.find(p => p.title === e.target.value) || null)}
          >
            {projects.map((project) => (
              <option key={project.title} value={project.title}>
                {project.title}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Project List */}
        <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
          <div className={clsx('flex flex-col gap-3')}>
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                isActive={selectedProject?.title === project.title}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>

        {/* Project Preview */}
        <div className={clsx('w-full', 'lg:w-auto')}>
          <div className={clsx('-mt-[41px]')}>
            <div className={clsx('w-full overflow-x-auto', 'lg:h-[400px] lg:w-[600px]')}>
              {selectedProject && (
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <GitHubIcon className="h-4 w-4" />,
                      title: `${selectedProject.title} - GitHub`,
                      isActive: true,
                    }
                  ]}
                >
                  <GitHubWireframe
                    author="kleviss"
                    repository={selectedProject.title}
                    description={selectedProject.description}
                  />
                </AppWindow>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionContent>
  );
}

export default ProjectsContents;
