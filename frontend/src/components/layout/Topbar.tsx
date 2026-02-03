'use client';

import { usePathname } from 'next/navigation';

const pageTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/editor': 'Prompt Editor',
  '/optimize': 'Optimize',
  '/evaluate': 'Evaluate',
  '/tests': 'Test Cases',
  '/compare': 'Compare Versions',
  '/library': 'Prompt Library',
  '/dna': 'Prompt DNA',
  '/settings': 'Settings',
};

export function Topbar() {
  const pathname = usePathname();

  const getPageTitle = () => {
    // Exact match first
    if (pageTitles[pathname]) {
      return pageTitles[pathname];
    }
    // Check for prefix match
    for (const [path, title] of Object.entries(pageTitles)) {
      if (path !== '/' && pathname.startsWith(path)) {
        return title;
      }
    }
    return 'Prompt Tool';
  };

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
      <div className="flex h-full items-center justify-between px-6">
        {/* Page title */}
        <h1 className="text-lg font-semibold text-neutral-900 dark:text-white">
          {getPageTitle()}
        </h1>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="
                w-64 pl-10 pr-4 py-2
                bg-neutral-100 dark:bg-neutral-800
                border-0
                rounded-lg
                text-sm text-neutral-900 dark:text-neutral-100
                placeholder:text-neutral-400 dark:placeholder:text-neutral-500
                focus:outline-none focus:ring-2 focus:ring-neutral-500
                transition-colors duration-150
              "
            />
          </div>

          {/* User menu placeholder */}
          <button
            type="button"
            className="
              flex items-center justify-center
              w-9 h-9 rounded-full
              bg-neutral-200 dark:bg-neutral-700
              text-neutral-600 dark:text-neutral-300
              hover:bg-neutral-300 dark:hover:bg-neutral-600
              transition-colors duration-150
            "
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
