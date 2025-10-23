import clsx from "clsx";
import { SkeletonSm, SkeletonMd } from "@/components/wireframes/Skeletons";

interface MobileAppWireframeProps {
  appName: string;
  description: string;
  primaryColor?: string;
  hasBottomNav?: boolean;
  screenType?: "list" | "detail" | "form" | "dashboard";
  screenshotUrl?: string;
}

function MobileAppWireframe({
  appName,
  description,
  primaryColor = "blue",
  hasBottomNav = true,
  screenType = "list",
  screenshotUrl,
}: MobileAppWireframeProps) {
  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
  };

  const renderScreenContent = () => {
    switch (screenType) {
      case "list":
        return (
          <div className='flex-1 space-y-3 p-4'>
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className='flex items-center gap-3 rounded-lg bg-slate-50 p-3 dark:bg-slate-800'>
                <div className='h-12 w-12 flex-shrink-0 rounded-lg bg-slate-200 dark:bg-slate-700' />
                <div className='flex-1 space-y-1'>
                  <SkeletonSm w={120 + item * 20} />
                  <SkeletonSm w={80 + item * 10} />
                </div>
                <div className='h-6 w-6 rounded bg-slate-200 dark:bg-slate-700' />
              </div>
            ))}
          </div>
        );
      case "dashboard":
        return (
          <div className='flex-1 space-y-4 p-4'>
            <div className='grid grid-cols-2 gap-3'>
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className='rounded-lg bg-slate-50 p-3 text-center dark:bg-slate-800'>
                  <div className='mx-auto mb-2 h-8 w-8 rounded bg-slate-200 dark:bg-slate-700' />
                  <SkeletonSm w={60} />
                </div>
              ))}
            </div>
            <div className='rounded-lg bg-slate-50 p-4 dark:bg-slate-800'>
              <SkeletonMd w={100} />
              <div className='mt-3 h-20 rounded bg-slate-200 dark:bg-slate-700' />
            </div>
          </div>
        );
      case "form":
        return (
          <div className='flex-1 space-y-4 p-4'>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className='space-y-2'>
                <SkeletonSm w={80} />
                <div className='h-10 rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800' />
              </div>
            ))}
            <div className={clsx("h-12 rounded-lg", colorClasses[primaryColor as keyof typeof colorClasses])} />
          </div>
        );
      default:
        return (
          <div className='flex-1 p-4'>
            <SkeletonMd w={150} />
            <div className='mt-4 space-y-2'>
              <SkeletonSm w={200} />
              <SkeletonSm w={180} />
              <SkeletonSm w={160} />
            </div>
          </div>
        );
    }
  };

  return (
    <div className='flex h-full w-full items-center justify-center rounded-xl border border-slate-200 bg-white p-6 dark:bg-slate-900'>
      <div className='mt-[-21px] h-full max-h-[1000px] min-h-[600px] w-64 rounded-3xl bg-black p-1 shadow-2xl'>
        <div className='flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white dark:bg-slate-900'>
          {/* Status Bar */}
          <div className='flex h-6 items-center justify-between bg-slate-50 px-4 text-xs dark:bg-slate-800'>
            <div className='flex items-center gap-1'>
              <div className='h-2 w-4 rounded-sm bg-slate-300 dark:bg-slate-600' />
              <div className='h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600' />
              <div className='h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600' />
            </div>
            <div className='text-slate-600 dark:text-slate-400'>9:41</div>
            <div className='flex items-center gap-1'>
              <div className='h-2 w-4 rounded-sm bg-slate-300 dark:bg-slate-600' />
            </div>
          </div>

          {/* Header */}
          <div className={clsx("flex h-16 items-center justify-between px-4", colorClasses[primaryColor as keyof typeof colorClasses])}>
            <div className='h-6 w-6 rounded bg-white/20' />
            <div className='max-w-32 truncate text-sm font-semibold text-white'>{appName}</div>
            <div className='h-6 w-6 rounded bg-white/20' />
          </div>

          {/* Content */}
          {screenshotUrl ? (
            <div className='flex-1 overflow-hidden'>
              <img
                src={screenshotUrl}
                alt={`${appName} screenshot`}
                className='h-full w-full object-cover object-top'
                crossOrigin='anonymous'
                loading='lazy'
                onError={(e) => {
                  // Fallback to wireframe if image fails to load
                  console.log(`Failed to load screenshot for ${appName}, falling back to wireframe`);
                  e.currentTarget.style.display = "none";
                  const fallbackDiv = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallbackDiv) fallbackDiv.style.display = "block";
                }}
              />
              <div style={{ display: "none" }}>{renderScreenContent()}</div>
            </div>
          ) : (
            renderScreenContent()
          )}

          {/* Bottom Navigation */}
          {hasBottomNav && (
            <div className='flex h-16 items-center justify-around border-t border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800'>
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className='flex flex-col items-center gap-1'>
                  <div
                    className={clsx(
                      "h-6 w-6 rounded",
                      item === 1 ? colorClasses[primaryColor as keyof typeof colorClasses] : "bg-slate-300 dark:bg-slate-600"
                    )}
                  />
                  <div className='h-1 w-8 rounded bg-slate-200 dark:bg-slate-700' />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileAppWireframe;
