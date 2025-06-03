#!/usr/bin/env node

const fs = require('fs');
const https = require('https');
const path = require('path');

// GitHub username
const GITHUB_USERNAME = 'kleviss';

// Function to make API requests
function githubRequest(endpoint) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: endpoint,
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'Portfolio-Update-Script',
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`GitHub API responded with status ${res.statusCode}`));
        }
      });
    });

    req.on('error', reject);
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
    req.end();
  });
}

// Function to calculate relative time
function getRelativeTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) return 'recently';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;

  const diffInDays = Math.floor(diffInSeconds / 86400);
  if (diffInDays === 1) return '1 day ago';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 14) return '1 week ago';
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 60) return '1 month ago';
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;

  return `${Math.floor(diffInDays / 365)} years ago`;
}

// Function to get repository languages
async function getLanguages(repoName) {
  try {
    const languages = await githubRequest(`/repos/${GITHUB_USERNAME}/${repoName}/languages`);
    return Object.keys(languages).sort((a, b) => languages[b] - languages[a]);
  } catch (error) {
    console.warn(`Failed to fetch languages for ${repoName}:`, error.message);
    return [];
  }
}

// Function to enhance tech stack with framework detection
function enhanceTechStack(repoName, description, primaryLanguage, additionalLanguages) {
  let tech = [];

  // Add primary language
  if (primaryLanguage) {
    tech.push(primaryLanguage);
  }

  // Add additional languages
  additionalLanguages.forEach((lang) => {
    if (lang !== primaryLanguage && !tech.includes(lang)) {
      tech.push(lang);
    }
  });

  // Framework detection
  const name = repoName.toLowerCase();
  const desc = (description || '').toLowerCase();

  const frameworks = {
    React: () => name.includes('react') || desc.includes('react'),
    'React Native': () =>
      name.includes('rn-') || name.includes('react-native') || desc.includes('react native'),
    'Next.js': () => name.includes('next') || desc.includes('next.js') || desc.includes('nextjs'),
    Flutter: () => name.includes('flutter') || desc.includes('flutter'),
    Expo: () => name.includes('expo') || desc.includes('expo'),
    'Node.js': () => name.includes('node') || desc.includes('node.js') || desc.includes('nodejs'),
    Express: () => name.includes('express') || desc.includes('express'),
    Gatsby: () => name.includes('gatsby') || desc.includes('gatsby'),
    Vue: () => name.includes('vue') || desc.includes('vue'),
    Angular: () => name.includes('angular') || desc.includes('angular'),
    Svelte: () => name.includes('svelte') || desc.includes('svelte'),
    SWR: () => name.includes('swr') || desc.includes('swr'),
    Supabase: () => name.includes('supabase') || desc.includes('supabase'),
    Firebase: () => name.includes('firebase') || desc.includes('firebase'),
    PostgreSQL: () => desc.includes('postgresql') || desc.includes('postgres'),
    MongoDB: () => desc.includes('mongodb') || desc.includes('mongo'),
    GraphQL: () => desc.includes('graphql'),
    TypeScript: () => additionalLanguages.includes('TypeScript'),
    Tailwind: () => desc.includes('tailwind'),
    MDX: () => additionalLanguages.includes('MDX'),
  };

  Object.entries(frameworks).forEach(([framework, detector]) => {
    if (detector() && !tech.includes(framework)) {
      tech.push(framework);
    }
  });

  return tech.slice(0, 4); // Limit to 4 technologies
}

// Function to improve descriptions
function improveDescription(repoName, originalDescription, tech) {
  if (originalDescription && originalDescription.length > 20) {
    return originalDescription;
  }

  const name = repoName.toLowerCase();

  // Custom descriptions for known projects
  const customDescriptions = {
    'gjej-makine-al': 'Gjej Makine Albania - Innovative mobile app for finding cars in Albania',
    'restaurant-vibes': 'Full-stack application for restaurant discovery with great vibes',
    'alba-taste': 'Mobile app promoting food spots and tourism in Albania, inspired by NeoTaste',
    'leben-de-rn-app':
      'React Native mobile application for Questions related to the Einbürgerungstest in Germany',
    'leben-de-dashbaord':
      'Dashboard application for the Leben-De project where admin can manage categories, questions and answers',
    'leben-de-backend':
      'Backend service supporting the dashboard and the mobile app with API endpoints',
    'next-swr-boilerplate': 'Simple Next.js Structure Boilerplate for fetching data with SWR hook',
    'rn-supabase-react-query-emotion-native-boilerplate':
      'Modern React Native boilerplate with Supabase, React Query, and Emotion Native styling',
  };

  if (customDescriptions[name]) {
    return customDescriptions[name];
  }

  // Generate description based on tech stack
  if (tech.includes('React Native')) {
    return `React Native mobile application built with ${tech.slice(1, 3).join(' and ')}`;
  }
  if (tech.includes('Next.js')) {
    return `Next.js web application featuring ${tech.slice(1, 3).join(' and ')}`;
  }
  if (tech.includes('React')) {
    return `React application developed with ${tech.slice(1, 3).join(' and ')}`;
  }

  return originalDescription || `A ${tech[0] || 'software'} project`;
}

// Main function to process repositories and update the file
async function updateProjects() {
  try {
    console.log('🔍 Fetching repositories from GitHub...');

    // Fetch repositories
    const repos = await githubRequest(`/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50`);

    console.log(`📦 Found ${repos.length} repositories`);

    // Filter repositories
    const filteredRepos = repos
      .filter((repo) => !repo.fork && !repo.archived)
      .filter((repo) => {
        const lastUpdate = new Date(repo.updated_at);
        const twoYearsAgo = new Date();
        twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);
        return lastUpdate > twoYearsAgo || repo.stargazers_count > 0;
      })
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 10);

    console.log(`✨ Processing ${filteredRepos.length} repositories...`);

    const projects = [];

    for (const repo of filteredRepos) {
      console.log(`  Processing ${repo.name}...`);

      // Get additional languages
      const languages = await getLanguages(repo.name);

      // Enhance tech stack
      const tech = enhanceTechStack(repo.name, repo.description, repo.language, languages);

      // Improve description
      const description = improveDescription(repo.name, repo.description, tech);

      const project = {
        title: repo.name,
        description,
        githubUrl: repo.html_url,
        tech,
        lastUpdate: getRelativeTime(repo.updated_at),
      };

      projects.push(project);

      // Small delay to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    // Read the current file
    const filePath = path.join(__dirname, '..', 'src', 'contents', 'projects', 'index.tsx');
    let fileContent = fs.readFileSync(filePath, 'utf8');

    // Generate the new projects array string
    const projectsString = projects
      .map(
        (project, index) =>
          `  {\n` +
          `    title: '${project.title}',\n` +
          `    description: '${project.description.replace(/'/g, "\\'")}',\n` +
          `    githubUrl: '${project.githubUrl}',\n` +
          `    tech: [${project.tech.map((t) => `'${t}'`).join(', ')}],\n` +
          `    lastUpdate: '${project.lastUpdate}'\n` +
          `  }${index < projects.length - 1 ? ',' : ''}`
      )
      .join('\n');

    // Replace the projects array in the file
    const updatedContent = fileContent.replace(
      /const projects: Project\[\] = \[[\s\S]*?\];/,
      `const projects: Project[] = [\n${projectsString}\n];`
    );

    // Write the updated file
    fs.writeFileSync(filePath, updatedContent, 'utf8');

    console.log(`\n✅ Successfully updated projects array with ${projects.length} repositories!`);
    console.log('📝 File updated:', filePath);
  } catch (error) {
    console.error('❌ Error updating projects:', error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  updateProjects();
}

module.exports = { updateProjects };
