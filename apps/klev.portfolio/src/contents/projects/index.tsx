// import SectionTitle from '@/components/sections/SectionTitle';
import clsx from 'clsx';
import { useState } from 'react';

import { GitHubIcon } from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';

interface Project {
  title: string;
  description: string;
  githubUrl: string;
  tech: string[];
  lastUpdate: string;
}

const projects: Project[] = [
  {
    title: 'gjej-makine-al',
    description: 'Gjej Makine Albania - Inovative App for finding cars in Albania',
    githubUrl: 'https://github.com/kleviss/gjej-makine-al',
    tech: ['React Native', 'Expo', 'TypeScript'],
    lastUpdate: '1 day ago'
  },
  {
    title: 'next-swr-boilerplate',
    description: 'Simple Next.js Structure Boilerplate for fetching data with SWR hook.',
    githubUrl: 'https://github.com/kleviss/next-swr-boilerplate',
    tech: ['Next.js', 'SWR', 'TypeScript'],
    lastUpdate: 'Nov 1, 2022'
  },
  {
    title: 'klebet-sports-betting',
    description: 'Simple Betting App Dashboard with RapidAPI and Supabase',
    githubUrl: 'https://github.com/kleviss/klebet-sports-betting',
    tech: ['React', 'JavaScript', 'RapidAPI', 'Supabase'],
    lastUpdate: '7 days ago'
  },
  {
    title: 'leben-de-RN-app',
    description: 'React Native mobile application for Questions related to the Einburgerungstest in Germany',
    githubUrl: 'https://github.com/kleviss/leben-de-RN-app',
    tech: ['React Native', 'TypeScript', 'Expo'],
    lastUpdate: '3 weeks ago'
  },
  {
    title: 'leben-de-dashbaord',
    description: 'Dashboard application for the Leben-De project where admin can manage categories, questions and answers',
    githubUrl: 'https://github.com/kleviss/leben-de-dashbaord',
    tech: ['React', 'JavaScript'],
    lastUpdate: 'last month'
  },
  {
    title: 'leben-de-backend',
    description: 'Backend service supporting the dashboard and the mobile app with API endpoints',
    githubUrl: 'https://github.com/kleviss/leben-de-backend',
    tech: ['Node.js', 'Express'],
    lastUpdate: 'recently'
  },

  {
    title: 'traders-championship-components-library',
    description: 'Components for TradersChampionship Webflow website (https://traderschampionship.com)',
    githubUrl: 'https://github.com/kleviss/traders-championship-components-library',
    tech: ['HTML', 'CSS', 'JavaScript', 'Webflow'],
    lastUpdate: '5 days ago'
  }
];

interface ProjectCardProps {
  key: string;
  project: Project;
  isActive: boolean;
  onClick: () => void;
}

function ProjectCard({ key, project, isActive, onClick }: ProjectCardProps) {
  return (
    <div className="group relative" key={key}>
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
            className="w-full rounded-lg border border-gray-300 bg-white p-2"
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
