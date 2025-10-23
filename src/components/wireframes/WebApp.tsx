import clsx from "clsx";
import { SkeletonSm, SkeletonMd } from "@/components/wireframes/Skeletons";

interface WebAppWireframeProps {
  appName: string;
  description: string;
  appType?: "dashboard" | "ecommerce" | "blog" | "portfolio" | "saas";
  primaryColor?: string;
  hasNavbar?: boolean;
  hasSidebar?: boolean;
  screenshotUrl?: string;
}

function WebAppWireframe({
  appName,
  description,
  appType = "dashboard",
  primaryColor = "blue",
  hasNavbar = true,
  hasSidebar = false,
  screenshotUrl,
}: WebAppWireframeProps) {
  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
    indigo: "bg-indigo-500",
  };

  const renderContent = () => {
    switch (appType) {
      case "dashboard":
        return (
          <div className='space-y-6 p-6'>
            {/* Stats Cards */}
            <div className='grid grid-cols-4 gap-4'>
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className='rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800'>
                  <div className='flex items-center justify-between'>
                    <div className='space-y-2'>
                      <SkeletonSm w={30} />
                      <SkeletonMd w={30} />
                    </div>
                    <div className={clsx("h-8 w-8 rounded", colorClasses[primaryColor as keyof typeof colorClasses], "opacity-20")} />
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Area */}
            <div className='rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800'>
              <SkeletonMd w={120} />
              <div className='mt-4 flex h-48 items-end justify-around rounded bg-slate-100 p-4 dark:bg-slate-700'>
                {[40, 60, 30, 80, 50, 70, 45].map((height, index) => (
                  <div
                    key={index}
                    className={clsx("ml-1 w-8 rounded-t", colorClasses[primaryColor as keyof typeof colorClasses], "opacity-70")}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        );

      case "ecommerce":
        return (
          <div className='p-6'>
            <div className='grid grid-cols-4 gap-6'>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className='overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800'
                >
                  <div className='h-32 bg-slate-200 dark:bg-slate-700' />
                  <div className='space-y-2 p-3'>
                    <SkeletonSm w={80} />
                    <SkeletonSm w={60} />
                    <div
                      className={clsx(
                        "flex h-6 items-center justify-center rounded text-xs text-white",
                        colorClasses[primaryColor as keyof typeof colorClasses]
                      )}
                    >
                      Add to Cart
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "blog":
        return (
          <div className='mx-auto max-w-4xl p-6'>
            <div className='space-y-8'>
              {[1, 2, 3].map((item) => (
                <article key={item} className='rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800'>
                  <div className='flex gap-4'>
                    <div className='h-24 w-24 flex-shrink-0 rounded-lg bg-slate-200 dark:bg-slate-700' />
                    <div className='flex-1 space-y-3'>
                      <SkeletonMd w={200 + item * 50} />
                      <div className='space-y-1'>
                        <SkeletonSm w={300} />
                        <SkeletonSm w={280} />
                        <SkeletonSm w={200} />
                      </div>
                      <div className='flex gap-2'>
                        <SkeletonSm w={60} />
                        <SkeletonSm w={80} />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        );

      case "portfolio":
        return (
          <div className='p-6'>
            {/* Hero Section */}
            <div className='mb-12 py-12 text-center'>
              <div className='mx-auto mb-4 h-24 w-24 rounded-full bg-slate-200 dark:bg-slate-700' />
              <SkeletonMd w={200} />
              <div className='mt-2 space-y-1'>
                <SkeletonSm w={300} />
                <SkeletonSm w={250} />
              </div>
            </div>

            {/* Projects Grid */}
            <div className='grid grid-cols-3 gap-6'>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className='overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800'
                >
                  <div className='h-40 bg-slate-200 dark:bg-slate-700' />
                  <div className='space-y-2 p-4'>
                    <SkeletonSm w={100} />
                    <SkeletonSm w={120} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className='p-6'>
            <SkeletonMd w={150} />
            <div className='mt-6 space-y-4'>
              <SkeletonSm w={400} />
              <SkeletonSm w={350} />
              <SkeletonSm w={300} />
            </div>
          </div>
        );
    }
  };

  if (screenshotUrl) {
    return (
      // <div className='h-full w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:bg-slate-900'>
      <img
        src={screenshotUrl}
        alt={`${appName} screenshot`}
        className='mt-[-121px] h-full w-full object-contain'
        onLoad={() => console.log(`✅ Screenshot loaded successfully: ${screenshotUrl}`)}
        onError={(e) => {
          console.error(`❌ Failed to load screenshot: ${screenshotUrl}`);
          console.error("Error details:", e);
          // Show the error in the UI
          e.currentTarget.style.display = "none";
          const errorDiv = document.createElement("div");
          errorDiv.className = "flex h-full w-full items-center justify-center text-red-500";
          errorDiv.innerHTML = `<div class="text-center"><p>Failed to load image</p><p class="text-sm text-gray-500 mt-2">${screenshotUrl}</p></div>`;
          e.currentTarget.parentNode?.appendChild(errorDiv);
        }}
        loading='lazy'
      />
      // </div>
    );
  }

  return (
    <div className='h-full w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:bg-slate-900'>
      {/* Navigation Bar */}
      {hasNavbar && (
        <div className='flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 dark:border-slate-700 dark:bg-slate-800'>
          <div className='flex items-center gap-4'>
            <div className={clsx("h-8 w-8 rounded", colorClasses[primaryColor as keyof typeof colorClasses])} />
            <SkeletonMd w={100} />
          </div>
          <div className='flex items-center gap-4'>
            <SkeletonSm w={60} />
            <SkeletonSm w={80} />
            <SkeletonSm w={70} />
            <div className='h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700' />
          </div>
        </div>
      )}

      <div className='flex h-full'>
        {/* Sidebar */}
        {hasSidebar && (
          <div className='w-64 border-r border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800'>
            <div className='space-y-2'>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className={clsx(
                    "flex items-center gap-3 rounded-lg p-2",
                    item === 1
                      ? `${colorClasses[primaryColor as keyof typeof colorClasses]} text-white`
                      : "hover:bg-slate-100 dark:hover:bg-slate-700"
                  )}
                >
                  <div className={clsx("h-5 w-5 rounded", item === 1 ? "bg-white/20" : "bg-slate-300 dark:bg-slate-600")} />
                  <SkeletonSm w={80} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className='flex-1 overflow-auto'>
          <div className='relative h-full w-full'>
            {screenshotUrl ? (
              <img
                src={screenshotUrl}
                alt={`${appName} screenshot`}
                className='h-full w-full object-contain'
                loading='lazy'
                onError={(e) => {
                  // Fallback to wireframe if image fails to load
                  console.log(`Failed to load screenshot for ${appName}, falling back to wireframe`);
                  e.currentTarget.style.display = "none";
                  const fallbackDiv = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallbackDiv) fallbackDiv.style.display = "block";
                }}
              />
            ) : (
              renderContent()
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebAppWireframe;
