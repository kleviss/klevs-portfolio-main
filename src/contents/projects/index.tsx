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
  githubUrl?: string;
  tech: string[];
  lastUpdate: string;
  isPrivate?: boolean;
}

const projects: Project[] = [
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
    title: 'next-swr-boilerplate',
    description: 'Simple Next.js Structure Boilerplate for fetching data with SWR hook',
    githubUrl: 'https://github.com/kleviss/next-swr-boilerplate',
    tech: ['TypeScript', 'Next.js', 'SWR'],
    lastUpdate: '10 months ago'
  },
  // Private projects
  {
    title: 'xpips-dashboard',
    description: 'XPIPS - Traders Dashboard',
    tech: ['TypeScript'],
    lastUpdate: '1 month ago',
    isPrivate: true
  },
  {
    title: 'xpips-propfirm',
    description: 'XPIPS Prop Firm Platform',
    tech: ['TypeScript'],
    lastUpdate: '1 month ago',
    isPrivate: true
  },
  {
    title: 'xpips-blog-cms',
    description: 'XPIPS Blog Content Management System',
    tech: ['TypeScript'],
    lastUpdate: '8 months ago',
    isPrivate: true
  },
  {
    title: 'digital-marketing-aura',
    description: 'Digital Marketing Platform for Aura',
    tech: ['TypeScript'],
    lastUpdate: '8 months ago',
    isPrivate: true
  },
  {
    title: 'xpips-web',
    description: 'XPips empowers traders worldwide with next-generation prop trading solutions.',
    tech: ['TypeScript'],
    lastUpdate: '1 month ago',
    isPrivate: true
  }
];

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onClick: () => void;
  isMobile?: boolean;
}

function ProjectCard({ project, isActive, onClick, isMobile = false }: ProjectCardProps) {
  const handleClick = () => {
    if (isMobile && project.githubUrl) {
      // On mobile, open GitHub directly if URL exists
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    } else if (!isMobile) {
      // On desktop, use the normal onClick behavior
      onClick();
    }
    // For private projects, don't do anything on mobile
  };

  return (
    <div className="group relative">
      <div className="relative">
        <SectionButton
          title={project.title}
          icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
          description={project.description}
          active={isActive}
          onClick={handleClick}
          tech={project.tech}
          githubUrl={project.isPrivate ? undefined : project.githubUrl}
        />
        {project.isPrivate && (
          <div className={clsx(
            'absolute top-2 right-2 rounded-full bg-slate-100 px-2 py-1 text-xs',
            'dark:bg-slate-800',
            'text-slate-600 dark:text-slate-400'
          )}>
            Private
          </div>
        )}
      </div>
    </div>
  );
}

interface MobileProjectCardProps {
  project: Project;
  onClick: () => void;
}

function MobileProjectCard({ project, onClick }: MobileProjectCardProps) {
  const handleClick = () => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    }
    // For private projects, just show them but don't navigate
  };

  return (
    <div
      className={clsx(
        'group relative',
        project.githubUrl ? 'cursor-pointer' : 'cursor-default'
      )}
      onClick={handleClick}
    >
      <div className={clsx(
        'flex items-center gap-4 rounded-2xl border-2 bg-white p-4',
        'dark:bg-slate-900',
        'border-divider-light dark:border-divider-dark',
        project.githubUrl && 'hover:border-accent-400 dark:hover:border-accent-400',
        'transition-colors duration-200'
      )}>
        <div className="flex h-12 w-12 items-center justify-center">
          <GitHubIcon className="h-8 w-8 text-slate-600 dark:text-slate-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-slate-900 dark:text-white truncate">
              {project.title}
            </h3>
            {project.isPrivate && (
              <span className={clsx(
                'inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs',
                'dark:bg-slate-800',
                'text-slate-600 dark:text-slate-400'
              )}>
                Private
              </span>
            )}
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
            {project.description}
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className={clsx(
                  'inline-block rounded-full border px-2 py-0.5 text-xs',
                  'border-divider-light dark:border-divider-dark',
                  'text-slate-600 dark:text-slate-400'
                )}
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-xs text-slate-500 dark:text-slate-500">
                +{project.tech.length - 3} more
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center">
          {project.githubUrl ? (
            <svg
              className="h-5 w-5 text-slate-400 group-hover:text-accent-500 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5 text-slate-300 dark:text-slate-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectsContents() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(projects[0]);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [showAllDesktop, setShowAllDesktop] = useState(false);

  return (
    <SectionContent>
      <div className={clsx('flex flex-col', 'lg:flex-row', 'lg:gap-12')}>
        {/* Mobile Project Interface */}
        <div className={clsx('mb-8', 'lg:hidden')}>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              My Projects
            </h3>

            {/* Show first 3 projects initially */}
            <div className="space-y-3">
              {projects.slice(0, showAllMobile ? projects.length : 3).map((project) => (
                <MobileProjectCard
                  key={project.title}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>

            {/* Show More/Less Button */}
            {projects.length > 3 && (
              <button
                onClick={() => setShowAllMobile(!showAllMobile)}
                className={clsx(
                  'mt-4 w-full rounded-xl border-2 border-dashed p-4 text-center',
                  'border-divider-light dark:border-divider-dark',
                  'text-slate-600 dark:text-slate-400',
                  'hover:border-accent-400 hover:text-accent-600',
                  'dark:hover:border-accent-400 dark:hover:text-accent-400',
                  'transition-colors duration-200'
                )}
              >
                {showAllMobile ? (
                  <>
                    <span>Show Less</span>
                    <svg className="inline-block ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Show All {projects.length} Projects</span>
                    <svg className="inline-block ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Desktop Project List */}
        <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
          <div className={clsx('flex flex-col gap-3')}>
            {projects.slice(0, showAllDesktop ? projects.length : 4).map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                isActive={selectedProject?.title === project.title}
                onClick={() => setSelectedProject(project)}
                isMobile={false}
              />
            ))}

            {/* Desktop Show More/Less Button */}
            {projects.length > 4 && (
              <button
                onClick={() => setShowAllDesktop(!showAllDesktop)}
                className={clsx(
                  'mt-2 w-full rounded-xl border-2 border-dashed p-4 text-center',
                  'border-divider-light dark:border-divider-dark',
                  'text-slate-600 dark:text-slate-400',
                  'hover:border-accent-400 hover:text-accent-600',
                  'dark:hover:border-accent-400 dark:hover:text-accent-400',
                  'transition-colors duration-200'
                )}
              >
                {showAllDesktop ? (
                  <>
                    <span>Show Less</span>
                    <svg className="inline-block ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Show All {projects.length} Projects</span>
                    <svg className="inline-block ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Project Preview - Hidden on Mobile */}
        <div className={clsx('hidden w-full', 'lg:block lg:w-auto')}>
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
