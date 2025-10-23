import clsx from "clsx";
import { SkeletonSm } from "@/components/wireframes/Skeletons";

interface ArchitectureWireframeProps {
  projectName: string;
  description: string;
  architecture?: "fullstack" | "mobile" | "microservices" | "serverless" | "monolith";
  techStack: string[];
}

function ArchitectureWireframe({ projectName, description, architecture = "fullstack", techStack }: ArchitectureWireframeProps) {
  const getTechColor = (tech: string) => {
    const techColors: Record<string, string> = {
      React: "bg-blue-500",
      "React Native": "bg-blue-600",
      "Next.js": "bg-black dark:bg-white",
      TypeScript: "bg-blue-700",
      JavaScript: "bg-yellow-500",
      "Node.js": "bg-green-600",
      Express: "bg-gray-600",
      PostgreSQL: "bg-blue-800",
      MongoDB: "bg-green-700",
      Supabase: "bg-green-500",
      "Tailwind CSS": "bg-cyan-500",
      CSS: "bg-blue-400",
      Python: "bg-yellow-600",
      Django: "bg-green-800",
      AWS: "bg-orange-500",
      Docker: "bg-blue-600",
      Kubernetes: "bg-blue-700",
    };
    return techColors[tech] || "bg-gray-500";
  };

  const renderArchitecture = () => {
    switch (architecture) {
      case "fullstack":
        return (
          <div className='space-y-0'>
            {/* Frontend Layer */}
            <div className='text-center'>
              <div className='inline-block rounded-lg border-2 border-blue-300 bg-blue-100 p-6 dark:border-blue-700 dark:bg-blue-900/30'>
                <div className='mb-2 text-sm font-semibold text-blue-800 dark:text-blue-200'>Frontend</div>
                <div className='flex justify-center gap-2'>
                  {techStack
                    .filter((tech) => ["React", "Next.js", "TypeScript", "Tailwind CSS", "CSS"].includes(tech))
                    .map((tech) => (
                      <div key={tech} className={clsx("rounded px-2 py-1 text-xs text-white", getTechColor(tech))}>
                        {tech}
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Connection */}
            <div className='flex justify-center'>
              <div className='h-8 w-px bg-slate-400 dark:bg-slate-600' />
            </div>

            {/* API Layer */}
            <div className='text-center'>
              <div className='inline-block rounded-lg border-2 border-green-300 bg-green-100 p-6 dark:border-green-700 dark:bg-green-900/30'>
                <div className='mb-2 text-sm font-semibold text-green-800 dark:text-green-200'>API / Backend</div>
                <div className='flex justify-center gap-2'>
                  {techStack
                    .filter((tech) => ["Node.js", "Express", "Python", "Django"].includes(tech))
                    .map((tech) => (
                      <div key={tech} className={clsx("rounded px-2 py-1 text-xs text-white", getTechColor(tech))}>
                        {tech}
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Connection */}
            <div className='flex justify-center'>
              <div className='h-8 w-px bg-slate-400 dark:bg-slate-600' />
            </div>

            {/* Database Layer */}
            <div className='text-center'>
              <div className='inline-block rounded-lg border-2 border-purple-300 bg-purple-100 p-6 dark:border-purple-700 dark:bg-purple-900/30'>
                <div className='mb-2 text-sm font-semibold text-purple-800 dark:text-purple-200'>Database</div>
                <div className='flex justify-center gap-2'>
                  {techStack
                    .filter((tech) => ["PostgreSQL", "MongoDB", "Supabase"].includes(tech))
                    .map((tech) => (
                      <div key={tech} className={clsx("rounded px-2 py-1 text-xs text-white", getTechColor(tech))}>
                        {tech}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "mobile":
        return (
          <div className='space-y-8'>
            {/* Mobile App */}
            <div className='text-center'>
              <div className='inline-block rounded-lg border-2 border-indigo-300 bg-indigo-100 p-6 dark:border-indigo-700 dark:bg-indigo-900/30'>
                <div className='mb-2 text-sm font-semibold text-indigo-800 dark:text-indigo-200'>Mobile App</div>
                <div className='flex justify-center gap-2'>
                  {techStack
                    .filter((tech) => ["React Native", "Expo", "TypeScript"].includes(tech))
                    .map((tech) => (
                      <div key={tech} className={clsx("rounded px-2 py-1 text-xs text-white", getTechColor(tech))}>
                        {tech}
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* API Connection */}
            <div className='flex items-center justify-center space-x-4'>
              <div className='h-px w-16 bg-slate-400 dark:bg-slate-600' />
              <div className='text-xs text-slate-600 dark:text-slate-400'>API Calls</div>
              <div className='h-px w-16 bg-slate-400 dark:bg-slate-600' />
            </div>

            {/* Backend Services */}
            <div className='text-center'>
              <div className='inline-block rounded-lg border-2 border-green-300 bg-green-100 p-6 dark:border-green-700 dark:bg-green-900/30'>
                <div className='mb-2 text-sm font-semibold text-green-800 dark:text-green-200'>Backend Services</div>
                <div className='flex justify-center gap-2'>
                  {techStack
                    .filter((tech) => ["Node.js", "Supabase", "Auth"].includes(tech))
                    .map((tech) => (
                      <div key={tech} className={clsx("rounded px-2 py-1 text-xs text-white", getTechColor(tech))}>
                        {tech}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "microservices":
        return (
          <div className='grid grid-cols-2 gap-6'>
            {/* Service 1 */}
            <div className='rounded-lg border-2 border-blue-300 bg-blue-100 p-4 dark:border-blue-700 dark:bg-blue-900/30'>
              <div className='mb-2 text-sm font-semibold text-blue-800 dark:text-blue-200'>Auth Service</div>
              <SkeletonSm w={80} />
            </div>

            {/* Service 2 */}
            <div className='rounded-lg border-2 border-green-300 bg-green-100 p-4 dark:border-green-700 dark:bg-green-900/30'>
              <div className='mb-2 text-sm font-semibold text-green-800 dark:text-green-200'>API Gateway</div>
              <SkeletonSm w={80} />
            </div>

            {/* Service 3 */}
            <div className='rounded-lg border-2 border-purple-300 bg-purple-100 p-4 dark:border-purple-700 dark:bg-purple-900/30'>
              <div className='mb-2 text-sm font-semibold text-purple-800 dark:text-purple-200'>Data Service</div>
              <SkeletonSm w={80} />
            </div>

            {/* Service 4 */}
            <div className='rounded-lg border-2 border-orange-300 bg-orange-100 p-4 dark:border-orange-700 dark:bg-orange-900/30'>
              <div className='mb-2 text-sm font-semibold text-orange-800 dark:text-orange-200'>Notification</div>
              <SkeletonSm w={80} />
            </div>
          </div>
        );

      default:
        return (
          <div className='space-y-4 text-center'>
            <div className='inline-block rounded-lg border-2 border-slate-300 bg-slate-100 p-6 dark:border-slate-700 dark:bg-slate-800'>
              <div className='mb-2 text-sm font-semibold text-slate-800 dark:text-slate-200'>Application</div>
              <div className='flex flex-wrap justify-center gap-2'>
                {techStack.slice(0, 4).map((tech) => (
                  <div key={tech} className={clsx("rounded px-2 py-1 text-xs text-white", getTechColor(tech))}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className='scrollbar-hide h-full w-full overflow-auto rounded-xl border border-slate-200 bg-slate-50 p-6 dark:bg-slate-900'>
      <div className='mx-auto max-w-2xl'>
        {/* Header */}
        <div className='mb-8 text-center'>
          <h3 className='mb-2 text-lg font-semibold text-slate-900 dark:text-white'>{projectName} Architecture</h3>
          <p className='text-sm text-slate-600 dark:text-slate-400'>{description}</p>
        </div>

        {/* Architecture Diagram */}
        <div className='rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800'>
          {renderArchitecture()}
        </div>

        {/* Tech Stack Summary */}
        <div className='mt-6 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800'>
          <div className='mb-3 text-sm font-semibold text-slate-800 dark:text-slate-200'>Tech Stack</div>
          <div className='flex flex-wrap gap-2'>
            {techStack.map((tech) => (
              <div key={tech} className={clsx("rounded px-2 py-1 text-xs text-white", getTechColor(tech))}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchitectureWireframe;
