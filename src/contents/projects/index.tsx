import AppWindow from "@/components/wireframes/AppWindow";
import { GitHubIcon } from "@/components/Icons";
import GitHubWireframe from "@/components/wireframes/GitHub";
import MobileAppWireframe from "@/components/wireframes/MobileApp";
import WebAppWireframe from "@/components/wireframes/WebApp";
import { SectionButton } from "@/components/sections/SectionButton";
import SectionContent from "@/components/sections/SectionContent";
// import SectionTitle from '@/components/sections/SectionTitle';
import clsx from "clsx";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  githubUrl?: string;
  appStoreUrl?: string;
  tech: string[];
  techStack: "React" | "React Native" | "Flutter" | "Other";
  lastUpdate: string;
  isPrivate?: boolean;
  lessonsLearned?: string;
  // UI Preview Configuration
  previewType?: "github" | "mobile" | "webapp" | "architecture";
  screenshotUrl?: string;
  screenshots?: string[]; // Array of screenshot URLs for gallery
  mobileConfig?: {
    primaryColor?: string;
    screenType?: "list" | "detail" | "form" | "dashboard";
    hasBottomNav?: boolean;
  };
  webAppConfig?: {
    appType?: "dashboard" | "ecommerce" | "blog" | "portfolio" | "saas";
    primaryColor?: string;
    hasNavbar?: boolean;
    hasSidebar?: boolean;
  };
  architectureConfig?: {
    architecture?: "fullstack" | "mobile" | "microservices" | "serverless" | "monolith";
  };
}

const projects: Project[] = [
  {
    title: "Enterprise Mobile App (Current Role)",
    description:
      "Leading mobile app development as App Lead - React Native application with advanced features including push notifications with rich media, real-time updates via WebSockets, and cross-platform deployment automation",
    tech: ["TypeScript", "React Native", "React Query", "Redux", "Emotion Native", "Day.js", "WebSockets", "Codemagic", "Xcode"],
    techStack: "React Native",
    lastUpdate: "Active",
    isPrivate: true,
    appStoreUrl: "https://apps.apple.com/de/app/siyte/id6450710775",
    previewType: "mobile",
    screenshots: [
      "/assets/images/projects/enterprise-mobile-screenshot-2.png",
      "/assets/images/projects/enterprise-mobile-screenshot-1.png",
      "/assets/images/projects/enterprise-mobile-screenshot-3.png",
    ],
    lessonsLearned: `• Stepping into an App Lead role taught me the importance of architectural consistency between web and native
• Implementing React Query on native significantly improved data fetching patterns compared to traditional Redux-only approaches
• Separating TEST and PROD environments through Xcode schemes and Codemagic workflows prevented deployment errors and streamlined QA processes
• Timezone handling with Day.js unified the codebase with web, reducing maintenance overhead
• Rich push notifications with images required deep understanding of native iOS/Android capabilities
• Emotion Native bridged the styling gap between web and mobile, enabling component reusability
• Infinite scroll with WebSocket integration for real-time notifications posed interesting performance challenges that required careful optimization
• Taking over Codemagic deployment automation revealed the value of CI/CD best practices in mobile development`,
    mobileConfig: {
      primaryColor: "indigo",
      screenType: "dashboard",
      hasBottomNav: true,
    },
  },
  {
    title: "SBC Hackathon 2025 (Winner 3rd. Place)",
    description:
      "SBC Hackathon 2025 - A hackathon project for the SBC Hackathon 2025. Project published under web.bonkilingua.com and won a price of 10.000 EURC",
    githubUrl: "https://github.com/kleviss/bonkilingua",
    tech: ["Blockchain", "Web3", "GenAI", "Supabase", "Auth", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    techStack: "React",
    lastUpdate: "1 month ago",
    previewType: "webapp",
    screenshotUrl: "https://pub-0ea3b6778a9a4fda8ee4bc55e5e2abf5.r2.dev/projects-images/bonkilingua-screenshot.png",
    lessonsLearned: `• Building under time pressure taught me to prioritize MVP features
• Integrating blockchain with traditional web tech requires careful state management
• GenAI integration needs robust error handling and fallbacks`,
    webAppConfig: {
      appType: "saas",
      primaryColor: "purple",
      hasNavbar: true,
      hasSidebar: false,
    },
  },

  {
    title: "SPITCH Mobile",
    description:
      "Bundesliga Fantasy Manager mobile app - Build your dream team, compete in leagues, and win real prizes. Features live match statistics, player performance tracking, news feed, video highlights, and real-time scoring system. Developed for iOS and Android with Flutter.",
    tech: ["Flutter", "Dart", "iOS", "Android", "REST API", "Real-time Data"],
    techStack: "Flutter",
    lastUpdate: "2 years ago",
    previewType: "mobile",
    screenshots: [
      "/assets/images/projects/spitch-mobile-screenshot.png",
      "/assets/images/projects/spitch-mobile-screenshot-1.png",
      "/assets/images/projects/spitch-mobile-screenshot-2.png",
      "/assets/images/projects/spitch-mobile-screenshot-3.png",
      "/assets/images/projects/spitch-mobile-screenshot-4.png",
      "/assets/images/projects/spitch-mobile-screenshot-0.png",
    ],
    lessonsLearned: `• Building a fantasy sports app requires real-time data synchronization and efficient state management
• Maintaining legacy code while building new features requires careful architectural planning
• Modular architecture in Flutter enables better code reusability and testing
• GoRouter navigation simplified deep linking and route management for complex flows (News, Videos, Leagues, Match Stats)
• Implementing authentication flows with token refresh and secure storage taught me mobile security best practices
• Unit testing in Flutter with mockito and integration tests improved code reliability
• Performance optimization through widget rebuilds profiling and lazy loading reduced app lag significantly
• Scoping dependencies with Provider and proper state management prevented memory leaks
• Localization with intl package for multi-language support required careful planning of text resources
• Integrating video streaming and live match data posed interesting performance and caching challenges`,
    mobileConfig: {
      primaryColor: "blue",
      screenType: "dashboard",
      hasBottomNav: true,
    },
  },
  {
    title: "Integriteti Zgjedhor",
    description:
      "Electoral Integrity Platform - Mobile app to engage Albanian citizens in preventing and reporting electoral code violations. Published by Qëndresa Qytetare in collaboration with Albanian Helsinki Committee.",
    githubUrl: "https://github.com/kleviss/integriteti-2024",
    appStoreUrl: "https://apps.apple.com/de/app/integriteti-zgjedhor/id6446845472",
    tech: ["Flutter", "Dart", "iOS", "Android"],
    techStack: "Flutter",
    lastUpdate: "1 year ago",
    previewType: "mobile",
    screenshots: [
      "/assets/images/projects/integriteti-zgjedhor-screenshot.png",
      "/assets/images/projects/integriteti-zgjedhor-screenshot-1.png",
      "/assets/images/projects/integriteti-zgjedhor-screenshot-2.png",
      "/assets/images/projects/integriteti-zgjedhor-screenshot-4.png",
      "/assets/images/projects/integriteti-zgjedhor-screenshot-6.png",
    ],
    lessonsLearned: `• Building civic engagement apps requires careful UX design for diverse user groups
• Real-time violation reporting needs robust backend infrastructure
• Working with NGOs taught me the importance of social impact in tech
• Flutter's cross-platform capabilities significantly reduced development time for both iOS and Android`,
    mobileConfig: {
      primaryColor: "red",
      screenType: "form",
      hasBottomNav: true,
    },
  },
  {
    title: "klevs-portfolio-main",
    description: "Personal portfolio website built with Next.js and TypeScript",
    githubUrl: "https://github.com/kleviss/klevs-portfolio-main",
    tech: ["TypeScript", "Next.js", "MDX", "CSS"],
    techStack: "React",
    lastUpdate: "1 hours ago",
    previewType: "webapp",
    screenshotUrl: "https://pub-0ea3b6778a9a4fda8ee4bc55e5e2abf5.r2.dev/projects-images/klx-portofolio.png",
    lessonsLearned: `• MDX is powerful for content-rich sites
• Custom rehype/remark plugins enable unique content experiences
• Performance optimization matters even for static sites`,
    webAppConfig: {
      appType: "portfolio",
      primaryColor: "indigo",
      hasNavbar: true,
      hasSidebar: false,
    },
  },
  {
    title: "leben-de-RN-app",
    description: "React Native mobile application for Questions related to the Einbürgerungstest in Germany",
    githubUrl: "https://github.com/kleviss/leben-de-RN-app",
    tech: ["TypeScript", "React Native", "Expo"],
    techStack: "React Native",
    lastUpdate: "6 months ago",
    previewType: "mobile",
    lessonsLearned: `• Expo simplifies deployment but adds constraints
• Offline-first architecture is crucial for mobile apps
• User testing revealed the importance of progress tracking features`,
    mobileConfig: {
      primaryColor: "red",
      screenType: "form",
      hasBottomNav: true,
    },
  },
  {
    title: "leben-de-dashbaord",
    description: "Dashboard application for the Leben-De project where admin can manage categories, questions and answers",
    githubUrl: "https://github.com/kleviss/leben-de-dashbaord",
    tech: ["JavaScript", "React", "CSS"],
    techStack: "React",
    lastUpdate: "6 months ago",
    previewType: "webapp",
    lessonsLearned: `• Admin dashboards need robust validation and error handling
• Bulk operations significantly improve admin efficiency
• TypeScript would have prevented many runtime errors`,
    webAppConfig: {
      appType: "dashboard",
      primaryColor: "blue",
      hasNavbar: true,
      hasSidebar: true,
    },
  },
  {
    title: "leben-de-backend",
    description: "Backend service supporting the dashboard and the mobile app with API endpoints",
    githubUrl: "https://github.com/kleviss/leben-de-backend",
    tech: ["JavaScript", "Node.js", "Express"],
    techStack: "Other",
    lastUpdate: "6 months ago",
    previewType: "architecture",
    lessonsLearned: `• API versioning is essential from day one
• Proper error handling and logging save debugging time
• Rate limiting and authentication should be implemented early`,
    architectureConfig: {
      architecture: "fullstack",
    },
  },
  {
    title: "restaurant-vibes",
    description: "Deals in Restaurants with a Vibe - Full-stack application for restaurant discovery",
    githubUrl: "https://github.com/kleviss/restaurant-vibes",
    tech: ["TypeScript", "PostgreSQL", "JavaScript"],
    techStack: "Other",
    lastUpdate: "1 week ago",
    previewType: "webapp",
    lessonsLearned: `• Location-based features require careful database indexing
• User-generated content needs moderation systems
• Real-time updates enhance user engagement significantly`,
    webAppConfig: {
      appType: "ecommerce",
      primaryColor: "orange",
      hasNavbar: true,
      hasSidebar: false,
    },
  },
  {
    title: "alba-taste",
    description: "AlbTaste - Mobile app promoting food spots and tourism in Albania, inspired by NeoTaste",
    githubUrl: "https://github.com/kleviss/alba-taste",
    tech: ["TypeScript", "React Native", "Mobile"],
    techStack: "React Native",
    lastUpdate: "2 months ago",
    previewType: "mobile",
    lessonsLearned: `• Image optimization is critical for mobile performance
• Caching strategies reduce data usage
• Localization should be planned from the start, not added later`,
    mobileConfig: {
      primaryColor: "green",
      screenType: "list",
      hasBottomNav: true,
    },
  },

  {
    title: "rn-emotion-native-boilerplate",
    description: "Modern React Native boilerplate with Supabase, React Query, and Emotion Native styling",
    githubUrl: "https://github.com/kleviss/rn-supabase-react-query-emotion-native-boilerplate",
    tech: ["TypeScript", "React Native", "Emotion Native", "Expo", "Supabase", "React Query"],
    techStack: "React Native",
    lastUpdate: "3 months ago",
    previewType: "architecture",
    lessonsLearned: `• Boilerplates save time but need regular maintenance
• Combining Supabase with React Query creates powerful data patterns
• Emotion Native provides better theming than StyleSheet`,
    architectureConfig: {
      architecture: "mobile",
    },
  },
  {
    title: "gjej-makine-al",
    description: "Gjej Makine Albania - Innovative mobile app for finding cars in Albania",
    githubUrl: "https://github.com/kleviss/gjej-makine-al",
    tech: ["TypeScript", "React Native", "Expo"],
    techStack: "React Native",
    lastUpdate: "3 months ago",
    previewType: "mobile",
    lessonsLearned: `• Search functionality needs to be fast and intuitive
• Filter combinations can explode in complexity
• Push notifications significantly increase user retention`,
    mobileConfig: {
      primaryColor: "blue",
      screenType: "list",
      hasBottomNav: true,
    },
  },
  {
    title: "next-swr-boilerplate",
    description: "Simple Next.js Structure Boilerplate for fetching data with SWR hook",
    githubUrl: "https://github.com/kleviss/next-swr-boilerplate",
    tech: ["TypeScript", "Next.js", "SWR"],
    techStack: "React",
    lastUpdate: "10 months ago",
    previewType: "github",
    lessonsLearned: `• SWR's automatic revalidation improves UX without extra code
• Proper TypeScript types for API responses prevent bugs
• Simple folder structure scales better than over-engineered ones`,
  },

  {
    title: "digital-marketing-aura",
    description: "Digital Marketing Platform for Aura",
    tech: ["TypeScript"],
    techStack: "Other",
    lastUpdate: "8 months ago",
    isPrivate: true,
  },
];

interface ImageGalleryProps {
  images: string[];
  projectTitle: string;
}

function ImageGallery({ images, projectTitle }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (images.length === 1) {
    // Single image - simple display
    return (
      <div className='flex h-full items-center justify-center overflow-hidden rounded-2xl border-2 border-divider-light bg-slate-50 dark:border-divider-dark dark:bg-slate-900'>
        <img src={images[0]} alt={`${projectTitle} screenshot`} className='h-full w-full object-contain' />
      </div>
    );
  }

  // Multiple images - gallery with navigation
  return (
    <div className='flex h-full flex-col gap-4'>
      {/* Main Image Display */}
      <div className='relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl border-2 border-divider-light bg-slate-50 dark:border-divider-dark dark:bg-slate-900'>
        <img
          src={images[currentImageIndex]}
          alt={`${projectTitle} screenshot ${currentImageIndex + 1}`}
          className='h-full w-full object-contain'
        />

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
          className={clsx(
            "absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all",
            "hover:scale-110 hover:bg-white",
            "dark:bg-slate-800/90 dark:hover:bg-slate-800"
          )}
          aria-label='Previous image'
        >
          <svg className='h-6 w-6 text-slate-700 dark:text-slate-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
          </svg>
        </button>
        <button
          onClick={() => setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
          className={clsx(
            "absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all",
            "hover:scale-110 hover:bg-white",
            "dark:bg-slate-800/90 dark:hover:bg-slate-800"
          )}
          aria-label='Next image'
        >
          <svg className='h-6 w-6 text-slate-700 dark:text-slate-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </button>

        {/* Image Counter Overlay */}
        <div className='absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-sm text-white'>
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className='flex justify-center gap-2 overflow-x-auto pb-2'>
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={clsx(
              "flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all",
              currentImageIndex === index
                ? "border-accent-500 ring-2 ring-accent-500/50"
                : "border-divider-light hover:border-accent-300 dark:border-divider-dark dark:hover:border-accent-700"
            )}
          >
            <img src={img} alt={`${projectTitle} thumbnail ${index + 1}`} className='h-16 w-16 object-cover' />
          </button>
        ))}
      </div>
    </div>
  );
}

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
      window.open(project.githubUrl, "_blank", "noopener,noreferrer");
    } else if (!isMobile) {
      // On desktop, use the normal onClick behavior
      onClick();
    }
    // For private projects, don't do anything on mobile
  };

  return (
    <div className='group relative'>
      <div className='relative'>
        <SectionButton
          title={project.title}
          icon={<GitHubIcon className={clsx("my-2 h-16 w-16")} />}
          description={project.description}
          active={isActive}
          onClick={handleClick}
          tech={project.tech}
          githubUrl={project.isPrivate ? undefined : project.githubUrl}
          appStoreUrl={project.appStoreUrl}
        />
        {project.isPrivate && (
          <div
            className={clsx(
              "absolute right-2 top-2 rounded-full bg-slate-100 px-2 py-1 text-xs",
              "dark:bg-slate-800",
              "text-slate-600 dark:text-slate-400"
            )}
          >
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
      window.open(project.githubUrl, "_blank", "noopener,noreferrer");
    }
    // For private projects, just show them but don't navigate
  };

  return (
    <div className={clsx("group relative", project.githubUrl ? "cursor-pointer" : "cursor-default")} onClick={handleClick}>
      <div
        className={clsx(
          "flex items-center gap-4 rounded-2xl border-2 bg-white p-4",
          "dark:bg-slate-900",
          "border-divider-light dark:border-divider-dark",
          project.githubUrl && "hover:border-accent-400 dark:hover:border-accent-400",
          "transition-colors duration-200"
        )}
      >
        <div className='flex h-12 w-12 items-center justify-center'>
          <GitHubIcon className='h-8 w-8 text-slate-600 dark:text-slate-400' />
        </div>
        <div className='min-w-0 flex-1'>
          <div className='flex items-center gap-2'>
            <h3 className='truncate font-semibold text-slate-900 dark:text-white'>{project.title}</h3>
            {project.isPrivate && (
              <span
                className={clsx(
                  "inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs",
                  "dark:bg-slate-800",
                  "text-slate-600 dark:text-slate-400"
                )}
              >
                Private
              </span>
            )}
          </div>
          <p className='line-clamp-2 text-sm text-slate-600 dark:text-slate-400'>{project.description}</p>
          <div className='mt-2 flex flex-wrap gap-1'>
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className={clsx(
                  "inline-block rounded-full border px-2 py-0.5 text-xs",
                  "border-divider-light dark:border-divider-dark",
                  "text-slate-600 dark:text-slate-400"
                )}
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && <span className='text-xs text-slate-500 dark:text-slate-500'>+{project.tech.length - 3} more</span>}
          </div>
        </div>
        <div className='flex items-center'>
          {project.githubUrl ? (
            <svg
              className='h-5 w-5 text-slate-400 transition-colors group-hover:text-accent-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              />
            </svg>
          ) : (
            <svg className='h-5 w-5 text-slate-300 dark:text-slate-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
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
  const [previewMode, setPreviewMode] = useState<"ui" | "github" | "lessons">("github");
  const [techFilter, setTechFilter] = useState<"All" | "React" | "React Native" | "Flutter">("All");

  // Filter projects based on selected tech stack
  const filteredProjects = techFilter === "All" ? projects : projects.filter((project) => project.techStack === techFilter);

  const renderProjectPreview = (project: Project) => {
    // Handle Lessons Learned mode - only show text, no UI preview
    if (previewMode === "lessons") {
      return (
        <div
          className={clsx(
            "flex h-full items-start overflow-y-auto rounded-2xl border-2 bg-white p-8",
            "dark:bg-slate-900",
            "border-divider-light dark:border-divider-dark"
          )}
        >
          <div className='w-full'>
            <h3 className='mb-6 text-2xl font-bold text-slate-900 dark:text-white'>Lessons Learned</h3>
            {project.lessonsLearned ? (
              <div className='prose prose-lg max-w-none text-slate-700 dark:text-slate-300'>
                {project.lessonsLearned.split("\n").map((line, index) => {
                  const trimmedLine = line.trim();
                  if (trimmedLine.startsWith("•") || trimmedLine.startsWith("-") || trimmedLine.startsWith("*")) {
                    return (
                      <div key={index} className='mb-3 flex items-start'>
                        <span className='mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500'></span>
                        <span className='leading-relaxed'>{trimmedLine.substring(1).trim()}</span>
                      </div>
                    );
                  } else if (trimmedLine) {
                    return (
                      <p key={index} className='mb-4 leading-relaxed'>
                        {trimmedLine}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            ) : (
              <p className='italic text-slate-500 dark:text-slate-400'>No lessons documented for this project yet.</p>
            )}
          </div>
        </div>
      );
    }

    // Determine the preview type based on mode and project configuration
    let effectivePreviewType = project.previewType || "github";

    if (previewMode === "github") {
      effectivePreviewType = "github";
    }

    // If UI Preview mode and project has screenshots, show gallery or single image
    if (previewMode === "ui" && (project.screenshots || project.screenshotUrl)) {
      const images = project.screenshots || (project.screenshotUrl ? [project.screenshotUrl] : []);

      if (images.length === 0) {
        // Fallback to wireframe if no images
        return null;
      }

      // Use a separate component to handle state
      return <ImageGallery images={images} projectTitle={project.title} />;
    }

    switch (effectivePreviewType) {
      case "mobile":
        return (
          <MobileAppWireframe
            appName={project.title}
            description={project.description}
            primaryColor={project.mobileConfig?.primaryColor || "blue"}
            screenType={project.mobileConfig?.screenType || "list"}
            hasBottomNav={project.mobileConfig?.hasBottomNav ?? true}
            screenshotUrl={project.screenshotUrl}
          />
        );

      case "webapp":
        return (
          <WebAppWireframe
            appName={project.title}
            description={project.description}
            appType={project.webAppConfig?.appType || "dashboard"}
            primaryColor={project.webAppConfig?.primaryColor || "blue"}
            hasNavbar={project.webAppConfig?.hasNavbar ?? true}
            hasSidebar={project.webAppConfig?.hasSidebar ?? false}
            screenshotUrl={project.screenshotUrl}
          />
        );

      default:
        return (
          <AppWindow
            type='browser'
            browserTabs={[
              {
                icon: <GitHubIcon className='h-4 w-4' />,
                title: `${project.title} - GitHub`,
                isActive: true,
              },
            ]}
          >
            <GitHubWireframe author='kleviss' repository={project.title} description={project.description} />
          </AppWindow>
        );
    }
  };

  return (
    <SectionContent>
      <div className={clsx("flex flex-col", "lg:flex-row", "lg:gap-12")}>
        {/* Mobile Project Interface */}
        <div className={clsx("mb-8", "lg:hidden")}>
          <div className='mb-4'>
            <h3 className='mb-4 text-lg font-semibold text-slate-900 dark:text-white'>My Projects</h3>

            {/* Tech Stack Filter - Mobile */}
            <div className='mb-4 flex gap-2 overflow-x-auto pb-2'>
              {(["All", "React", "React Native", "Flutter"] as const).map((tech) => (
                <button
                  key={tech}
                  onClick={() => setTechFilter(tech)}
                  className={clsx(
                    "whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                    techFilter === tech
                      ? "bg-accent-500 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-accent-100 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-accent-900/20"
                  )}
                >
                  {tech}
                </button>
              ))}
            </div>

            {/* Show first 3 projects initially */}
            <div className='space-y-3'>
              {filteredProjects.slice(0, showAllMobile ? filteredProjects.length : 3).map((project) => (
                <MobileProjectCard key={project.title} project={project} onClick={() => setSelectedProject(project)} />
              ))}
            </div>

            {/* Show More/Less Button */}
            {filteredProjects.length > 3 && (
              <button
                onClick={() => setShowAllMobile(!showAllMobile)}
                className={clsx(
                  "mt-4 w-full rounded-xl border-2 border-dashed p-4 text-center",
                  "border-divider-light dark:border-divider-dark",
                  "text-slate-600 dark:text-slate-400",
                  "hover:border-accent-400 hover:text-accent-600",
                  "dark:hover:border-accent-400 dark:hover:text-accent-400",
                  "transition-colors duration-200"
                )}
              >
                {showAllMobile ? (
                  <>
                    <span>Show Less</span>
                    <svg className='ml-2 inline-block h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7' />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Show All {filteredProjects.length} Projects</span>
                    <svg className='ml-2 inline-block h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                    </svg>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Desktop Project List */}
        <div className={clsx("hidden flex-1 flex-col gap-3 pt-8", "lg:flex")}>
          {/* Tech Stack Filter - Desktop */}
          <div className='mb-2 flex gap-2'>
            {(["All", "React", "React Native", "Flutter"] as const).map((tech) => (
              <button
                key={tech}
                onClick={() => setTechFilter(tech)}
                className={clsx(
                  "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                  techFilter === tech
                    ? "bg-accent-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-accent-100 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-accent-900/20"
                )}
              >
                {tech}
              </button>
            ))}
          </div>

          <div className={clsx("flex flex-col gap-3")}>
            {filteredProjects.slice(0, showAllDesktop ? filteredProjects.length : 4).map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                isActive={selectedProject?.title === project.title}
                onClick={() => setSelectedProject(project)}
                isMobile={false}
              />
            ))}

            {/* Desktop Show More/Less Button */}
            {filteredProjects.length > 4 && (
              <button
                onClick={() => setShowAllDesktop(!showAllDesktop)}
                className={clsx(
                  "mt-2 w-full rounded-xl border-2 border-dashed p-4 text-center",
                  "border-divider-light dark:border-divider-dark",
                  "text-slate-600 dark:text-slate-400",
                  "hover:border-accent-400 hover:text-accent-600",
                  "dark:hover:border-accent-400 dark:hover:text-accent-400",
                  "transition-colors duration-200"
                )}
              >
                {showAllDesktop ? (
                  <>
                    <span>Show Less</span>
                    <svg className='ml-2 inline-block h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7' />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Show All {filteredProjects.length} Projects</span>
                    <svg className='ml-2 inline-block h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                    </svg>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Project Preview - Hidden on Mobile */}
        <div className={clsx("hidden w-full", "lg:block lg:w-auto")}>
          <div className={clsx("-mt-[81px]")}>
            {/* Preview Mode Controls */}
            <div className='mb-4 flex gap-2'>
              <button
                onClick={() => setPreviewMode("github")}
                className={clsx(
                  "rounded-lg px-3 py-1 text-sm font-medium transition-colors",
                  previewMode === "github"
                    ? "bg-accent-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-accent-100 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-accent-900/20"
                )}
              >
                GitHub
              </button>
              <button
                onClick={() => setPreviewMode("ui")}
                className={clsx(
                  "rounded-lg px-3 py-1 text-sm font-medium transition-colors",
                  previewMode === "ui"
                    ? "bg-accent-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-accent-100 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-accent-900/20"
                )}
              >
                UI Preview
              </button>

              <button
                onClick={() => setPreviewMode("lessons")}
                className={clsx(
                  "rounded-lg px-3 py-1 text-sm font-medium transition-colors",
                  previewMode === "lessons"
                    ? "bg-accent-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-accent-100 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-accent-900/20"
                )}
              >
                Lessons Learned
              </button>
            </div>

            <div className={clsx("w-full overflow-x-auto", "lg:h-[600px] lg:w-[600px]")}>
              {selectedProject && <div className='h-full w-full'>{renderProjectPreview(selectedProject)}</div>}
            </div>
          </div>
        </div>
      </div>
    </SectionContent>
  );
}

export default ProjectsContents;
