/* ============================================================
   main.js — Portfolio Site JavaScript
   Handles: Dark Mode, Mobile Nav, Scroll Effects, Dynamic Layouts
   (Projects, Education, Experience, Blog), Modals, and Forms
   ============================================================ */

// ──────────────────────────────────────────────
// 1. DATA MODELS / DATASETS
// ──────────────────────────────────────────────

// Projects Dataset
const projectsData = [
  {
    id: 'web-dev',
    title: 'Manifest Employee System',
    category: 'web',
    categoryLabel: 'Web Development',
    shortDesc: 'A web-based application to support the employee evacuation process during emergencies by providing access to department-based manifest documents.',
    fullDesc: 'Employee Manifest System is a web-based application designed to support the evacuation process for employees during emergencies, such as fires or other critical situations. The system features PIN-based authentication for each department to access manifest documents containing information about employees, work areas, assembly points, and attendance status based on fingerprint data. Administrators can manage PIN access for each department, while department users are limited to previewing, downloading, and printing manifest documents according to their assigned access rights.',
    tech: ['Laravel', 'Tailwind CSS', 'JavaScript', 'Web APIs', 'DomPdf'],
    image: 'assets/images/project/website/Manifest.png',
    role: 'Full Stack Developer',
    year: '2026',
    features: [
       'PIN authentication for each department',
       'Administrator dashboard with manifest data monitoring',
       'PIN access management per department',
       'Preview, download, and print manifest documents',
       'Access rights based on Admin and Department roles',
       'Employee information, work areas, assembly points, and attendance status based on fingerprint data'
    ],
    demo: '#',
    github: '#'
  },
  {
    id: 'activity-ICT-plan',
    title: 'ICT Activity Plan and Report',
    category: 'data',
    categoryLabel: 'Data Analyst',
    shortDesc: 'Dashboard and monitoring system for ICT team activities, covering work planning and ICT staff performance.',
    fullDesc: 'The ICT Activity Plan is a Power BI-based dashboard developed to assist in monitoring the activities of the Information and Communication Technology (ICT) team. It presents information on attendance, daily activity planning, and work summaries through interactive visualizations. Data is processed from SharePoint Excel files and modeled in Power BI, thereby facilitating the monitoring process and supporting decision-making for both the team and management.',
    tech: ['Power BI', 'SharePoint', 'Excel', 'Data Modeling', 'Data Visualization'],
    image: 'assets/images/project/pbi/ict.png',
    role: 'Principal Data Analyst',
    year: '2026',
    features: [
     'Daily, weekly, and monthly activity summaries',
     'Data visualization using interactive dashboards',
     'Data analysis using SQL queries',
     'Filtering by period and team member',
     'Reports for monitoring ICT team performance'
    ],
    demo: '#',
    github: '#'
  },
  // {
  //   id: 'task-scheduler',
  //   title: 'Automated Task Board & Scheduler',
  //   category: 'programming',
  //   categoryLabel: 'IT Programming',
  //   shortDesc: 'A drag-and-drop productivity dashboard with smart prioritization and custom animation loops.',
  //   fullDesc: 'A highly functional task management board utilizing HTML5 drag-and-drop APIs. Features smart priority algorithms to highlight urgent work, custom sub-task nesting, and automatic reminders. Leverages CSS keyframes for high-performance fluid user interactions.',
  //   tech: ['HTML5', 'CSS3 Keyframes', 'JavaScript', 'LocalStorage', 'Flexbox'],
  //   image: 'assets/images/ict.png',
  //   role: 'IT Programmer & Developer',
  //   year: '2026',
  //   features: [
  //     'Interactive drag-and-drop work lists (Kanban style)',
  //     'Automated task ranking and urgency warning signals',
  //     'Detailed sub-task tracking meters',
  //     'LocalStorage mapping for reliable data restoration'
  //   ],
  //   demo: '#',
  //   github: '#'
  // },
  // {
  //   id: 'net-topology',
  //   title: 'Network Diagnostics & Node Mapper',
  //   category: 'support',
  //   categoryLabel: 'IT Support',
  //   shortDesc: 'A simulated network monitoring suite that diagrams topologies and recommends debugging workflows.',
  //   fullDesc: 'An interactive operational system designed for network administration simulation. Graphs server nodes, checks node statuses, and visualizes network packet traffic. Integrates standard diagnostic checklists to assist support technicians in fixing server downtime.',
  //   tech: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Ping Simulator', 'JSON Models'],
  //   image: 'assets/images/project-4.png',
  //   role: 'IT Support Engineer',
  //   year: '2025',
  //   features: [
  //     'Interactive network map with real-time status signals',
  //     'Packet transit animations to trace ping latency',
  //     'Automated network diagnostics checklist generator',
  //     'Visual hardware reboot workflow simulations'
  //   ],
  //   demo: '#',
  //   github: '#'
  // },
  {
    id: 'labor-cost',
    title: 'Labor Cost Dashboard',
    category: 'data',
    categoryLabel: 'Data Analyst',
    shortDesc: 'Dashboard interaktif untuk memantau biaya tenaga kerja berdasarkan data absensi, jam kerja, dan informasi operasional perusahaan.',
    fullDesc: 'Labor Cost Dashboard merupakan dashboard interaktif yang dikembangkan menggunakan Power BI untuk membantu proses monitoring biaya tenaga kerja perusahaan. Dashboard ini mengolah data absensi, jam kerja, dan informasi operasional dari berbagai sumber data menggunakan SQL Query sebelum divisualisasikan dalam bentuk laporan interaktif. Selain melakukan analisis dan visualisasi data, proses pengembangan juga mencakup validasi data, optimalisasi model data, serta penyempurnaan data source agar siap dipublikasikan ke Power BI Service dengan koneksi gateway yang stabil.',
    tech: ['Power BI', 'SQL Query', 'Data Modeling', 'Data Visualization','MySql'], 
    image: 'assets/images/project/pbi/payroll.png',
    role: 'Principal Data Analyst',
    year: '2026',
    features: [
     'Visualization of labor costs',
        'Analysis of employee attendance and working hours data',
        'Data transformation and cleaning using Power Query',
        'Writing SQL queries for data processing',
        'Data validation prior to publishing',
        'Integration and optimization of data sources for Power BI Service'
    ],
    demo: '#',
    github: '#'
  },
  
   {
    id: 'reqruitment',
    title: 'Reqruitment Dashboard',
    category: 'data',
    categoryLabel: 'Data Analyst',
    shortDesc: 'An interactive dashboard for monitoring the recruitment process, selection stages, and selection status to support decision-making.',
    fullDesc: 'The Recruitment Dashboard is an interactive dashboard developed using Power BI to assist the Human Resources team in monitoring the recruitment process. It presents information—such as applicant numbers, the recruitment workflow, and process statuses—through easy-to-understand visualizations. Data is processed in Microsoft Excel and modeled in Power BI to ensure the displayed information is accurate and supports the monitoring and evaluation of recruitment activities.',
    tech: ['Power BI', 'Excel', 'Data Modeling', 'Data Visualization'], 
    image: 'assets/images/project/pbi/rekrutment.png',
    role: 'Principal Data Analyst',
    year: '2026',
    features: [
      'Interactive monitoring of the recruitment process',
      'Analysis of applicant volume and selection status',
      'Dashboard filtering by period and position',
      'Data transformation using Power Query',
      'Data processing using DAX modeling'
    ],
    demo: '#',
    github: '#'
  },

  {
    id: 'Training Employee',
    title: 'Employee Training Dashboard',
    category: 'data',
    categoryLabel: 'Data Analyst',
    shortDesc: 'An interactive dashboard for monitoring the implementation of employee training, participation rates, and competency development progress.',
    fullDesc: 'Employee Training Dashboard is an interactive dashboard developed using Power BI to assist the Human Resources team in monitoring the implementation of employee training programs. The dashboard presents information regarding the number of training participants, attendance rates, training completion status, as well as training distribution based on department and period. Data is processed using SQL Query and Power Query to produce accurate visualizations that facilitate the evaluation and decision-making processes related to employee competency development.',
    tech: ['Power BI', 'Excel', 'Data Modeling', 'Data Visualization'], 
    image: 'assets/images/project/pbi/Training.png',
    role: 'Principal Data Analyst',
    year: '2026',
    features: [
    'Monitoring employee training implementation',
    'Visualization of attendance rates and training completion',
    'Analysis of participant numbers by department',
    'Monitoring training hours',
    'Dashboard filtering by period, department, and training type',
    'Data transformation using Power Query and DAX modeling'
    ],
    demo: '#',
    github: '#'
  },

    {
    id: 'sales',
    title: 'Sales Performance Dashboard',
    category: 'data',
    categoryLabel: 'Data Analyst',
    shortDesc: 'An interactive dashboard for monitoring sales performance, product distribution, and warehouse activities to support decision-making.',
    fullDesc: 'The Sales Dashboard is an interactive dashboard developed using Power BI to assist in monitoring sales and product distribution. It presents information on sales performance, product shipments, and warehouse operational data sourced from SQL Server. The data is processed using SQL queries and Power Query before being visualized in interactive reports, thereby facilitating analysis and decision-making by management.',
    tech: ['Power BI', 'SQL Server', 'Data Modeling', 'Data Visualization','SQL Query'], 
    image: 'assets/images/project/pbi/Sales.png',
    role: 'Principal Data Analyst',
    year: '2026',
    features: [
    'Interactive sales performance monitoring',
    'Visualization of distribution and warehouse data',
    'Data analysis using SQL queries',
    'Data transformation using Power Query',
    'Dashboard filtering by period and category',
    'Data integration from SQL Server'
    ],
    demo: '#',
    github: '#'
  },

 {
    id: 'purchasing',
    title: 'Purchasing Performance Dashboard',
    category: 'data',
    categoryLabel: 'Data Analyst',
    shortDesc: 'An interactive dashboard for monitoring the goods procurement process, purchase order status, and supplier performance in real-time.',
    fullDesc: 'The Purchasing Dashboard is an interactive dashboard developed using Power BI to assist the purchasing team in monitoring the goods procurement process. It presents information on purchase requests (PRs), purchase orders (POs), procurement status, and supplier performance, as well as purchasing analysis by period and category. Data is processed using SQL queries and Power Query from SQL Server before being visualized in interactive reports, thereby facilitating monitoring and decision-making.',
    tech: ['Power BI', 'SQL Server', 'Data Modeling', 'Data Visualization','SQL Query'], 
    image: 'assets/images/project/pbi/purchasing.png',
    role: 'Principal Data Analyst',
    year: '2026',
    features: [
    'Monitoring Purchase Requests (PR) and Purchase Orders (PO)',
    'Visualization of procurement process status',
    'Supplier performance analysis',
    'Dashboard filtering by period, supplier, and category',
    'Data transformation using Power Query',
    'Data processing using SQL queries'
    ],
    demo: '#',
    github: '#'
  },

   {
    id: 'kpi-system',
    title: 'KPI Management System',
    category: 'web',
    categoryLabel: 'Web Development',
    shortDesc: 'A web-based application to support the management and monitoring of Key Performance Indicators (KPIs) for each department.',
    fullDesc: 'The KPI Management System is a web-based application developed to assist in monitoring Key Performance Indicators (KPIs) across various company departments. During the project\'s development, I contributed to building the website using Laravel, implementing user authentication, developing login pages for both Admin and Department roles, and structuring the application according to the Laravel MVC pattern.',
    tech: ['Laravel', 'Tailwind CSS', 'JavaScript', 'Web APIs', 'DomPdf'],
    image: 'assets/images/project/website/ss_web_kpi.png',
    role: 'Full Stack Developer',
    year: '2026',
    features: [
       'Website development using Laravel',
        'Implementation of Admin and Department authentication',
        'Development of a Laravel-based login page',
        'Application of the Laravel MVC structure',
        'MySQL database integration',
        'Initial development of the KPI module'
    ],
    demo: '#',
    github: '#'
  },

  {
    id: 'Uptd',
    title: 'Plered Ceramic Information Portal',
    category: 'web',
    categoryLabel: 'Web Development',
    shortDesc: 'A web-based information portal to promote the Plered ceramics industry and support services for submitting ceramic export documentation.',
    fullDesc: 'The Plered Ceramic Information Portal is a web-based application developed to serve as an information and promotional platform for the Plered ceramic industry. The website provides information on ceramic craft centers, product galleries, and the latest news, as well as an online service for submitting ceramic export documentation. The system is designed to facilitate access to information and digital administrative services for the public, business operators, and relevant agencies.',
    tech: ['codeigniter', 'bootstrap CSS', 'JavaScript', 'Web APIs', 'DomPdf', 'MySQL'],
    image: 'assets/images/project/website/Uptd.png',
    role: 'Full Stack Developer',
    year: '2025',
    features: [
       'Plered ceramics center information page',
        'Ceramic product gallery',
        'News and information management',
        'Online submission of ceramic export documents',
        'Administrator dashboard for content management',
        'Management of gallery data, news, and document submissions'
    ],
    demo: '#',
    github: '#'
  },


];

// Education Dataset
const educationData = [
  {
    institution: 'Singaperbangsa Karawang University',
    degree: "Bachelor of Information Systems",
    year: '2021 - 2025',
    desc: 'Graduated with CumLaude honors (GPA 3.88). Possesses competencies in systems analysis, databases, and web development. Final project titled "Design and Development of an Educational Ceramic Export Document Submission System (Case Study: Plered Ceramic R&D Technical Implementation Unit)," focusing on the digitization of administrative processes and the provision of web-based information.'
  },
  {
    institution: 'State Vocational School 1 Sukatani',
    degree: 'Software Engineering',
    year: '2018 - 2021',
    desc: 'Studied the fundamentals of programming, web development, database design, and software development. Successfully built various application projects to implement the competencies acquired during the course of study.'
  }
];

// Experience Dataset
const experienceData = [
  {
    position: 'IT Programmer',
    company: 'PT. Summit Adyawinsa Indonesia',
    duration: 'Dec 2025 - Jun 2026',
    type: 'Internship MagangHub Kemnaker',
    responsibilities: [
      'Developed a web-based Key Performance Indicator (KPI) application using Laravel (Frontend, Backend, CRUD, Authentication, PDF Export).',
      'Developing a web-based employee manifest application featuring real-time employee data.',
      'Managing and integrating MySQL, SQL Server, and Epicor ERP databases using SQL queries.',
      'Design and develop Power BI dashboards using ETL processes, data modeling, DAX, measures, and data visualization to support business analysis needs.',
      'Perform troubleshooting, data validation, and Power BI Service configuration, as well as data refreshes to ensure visibility across the organization.',
      'Collaborate with the IT team and users on system development, testing, and implementation.',
      'Provide technical support (IT Support) by troubleshooting hardware and software; installing and configuring operating systems; maintaining and repairing computers and laptops; and conducting training for users on the use of applications and dashboards.'
    ],
    achievements: 'Successfully developed a Laravel-based KPI application,manifest system and managed a Power BI dashboard integrated with MySQL, SQL Server, and Epicor ERP to support reporting and decision-making. Optimized reporting processes through data automation and provided technical support to ensure optimal system performance.'
  },
  {
    position: 'Full-stack Developer',
    company: 'PT. Stechoq Robotika Indonesia',
    duration: 'Aug 2023 - Dec 2023',
    type: 'Internship',
    responsibilities: [
      'Developing an inventory management web application using Vue and Node.js.',
      'Integrating a MySQL database for product and user data storage.',
      'Implementing version control using Git & GitHub for team collaboration.',
      'Implementing CRUD functionality, login authentication, and an analytics dashboard.'
    ],
    achievements: 'Successfully developed an inventory management web application using Vue and Node.js that facilitates product data management. Implemented CRUD features, authentication, analytics dashboard, and MySQL database integration to support efficient data management and team collaboration through Git & GitHub.'
  },
  {
    position: 'Administrative Staff',
    company: 'Darangdan District Office',
    duration: 'Jul 2020 - Sep 2020',
    type: 'Internship',
    responsibilities: [
      'Manage administrative correspondence processes (preparing official letters, recording civil registration documents).',
      'Input and archive resident data into the system.',
      'Assist with direct public services, including receiving and verifying residents documents.',
      'Support sub-district staff with daily operational activities.'
    ],
    achievements: 'Successfully supported administrative and public service processes through effective document management, data entry, and archival. Contributed to smooth daily operations by providing efficient public assistance.'
  }
];

// Blog Articles Dataset
const blogData = [
  {
    id: 'modern-web-perf',
    title: 'Optimizing Static Website Performance for Recruiter Portfolios',
    category: 'Web Development',
    shortDesc: 'A detailed look into optimizing assets, lazy-loading images, and clean structures to secure top Lighthouse scores that impress recruiters.',
    date: 'July 10, 2026',
    readTime: '5 min read',
    thumbnail: 'assets/images/project-2.png',
    featured: true,
    content: 'Static portfolio websites are the first point of contact for recruiters. Having a site that loads in under 1 second and achieves high Lighthouse scores can significantly increase your response rates. In this article, we cover optimizing Tailwind CDN usage, structuring clean HTML grids, avoiding layout shifts, and lazy loading graphic cards.'
  },
  {
    id: 'local-env-db',
    title: 'Setting Up a Local PHP & SQL Server Environment with XAMPP',
    category: 'IT Support',
    shortDesc: 'A step-by-step diagnostic guide for web developers to troubleshoot Apache port conflicts, SQL database permissions, and local hosting setups.',
    date: 'June 28, 2026',
    readTime: '8 min read',
    thumbnail: 'assets/images/project-4.png',
    featured: false,
    content: 'Local environments are crucial for developers. However, setting them up on Windows can lead to port conflicts (such as IIS blocking port 80). This guide walks you through fixing Apache configuration files, setting up local VirtualHosts, securing MySQL database access, and resolving system permissions.'
  },
  {
    id: 'data-viz-charts',
    title: 'Choosing the Right Charts for Your Data Analytics Dashboards',
    category: 'Data Analytics',
    shortDesc: 'An analytical review comparing Chart.js models for KPI metrics, regional comparisons, and continuous time-series trend plotting.',
    date: 'May 15, 2026',
    readTime: '6 min read',
    thumbnail: 'assets/images/project-1.png',
    featured: false,
    content: 'Effective dashboard design requires choosing charts that convey business values without cluttering. Learn when to use doughnut charts for percentages, bar charts for comparisons, line charts for continuous sales data trends, and scatter plots for predictive variable relations.'
  },
  {
    id: 'js-arrays-automation',
    title: 'Automating Developer Checklists with JavaScript ES6+',
    category: 'Programming',
    shortDesc: 'Discover how using simple JavaScript arrays and dynamic DOM injections can make your web applications more modular, cleaner, and easier to maintain.',
    date: 'April 02, 2026',
    readTime: '4 min read',
    thumbnail: 'assets/images/project-3.png',
    featured: false,
    content: 'Hardcoding HTML for repeatable components leads to bloated, unmaintainable index.html files. By leveraging modern ES6 features (like .filter(), .map(), and template literals), you can build a lightweight client-side data engine that dynamically renders content smoothly.'
  }
];


// ──────────────────────────────────────────────
// 2. DARK / LIGHT MODE TOGGLE
// ──────────────────────────────────────────────
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function applyTheme(theme) {
  if (theme === 'dark') {
    html.classList.add('dark');
    themeIcon.innerHTML = `
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 3v1m0 16v1m8.66-9H20M4 12H3m15.36-6.36-.71.71M6.34 17.66l-.71.71
           M17.66 17.66l.71.71M6.34 6.34l-.71-.71M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>`;
  } else {
    html.classList.remove('dark');
    themeIcon.innerHTML = `
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646
           9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>`;
  }
}

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const isDark = html.classList.contains('dark');
  const next = isDark ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
});


// ──────────────────────────────────────────────
// 3. MOBILE HAMBURGER MENU
// ──────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
  });
});


// ──────────────────────────────────────────────
// 4. SMOOTH SCROLL – ACTIVE NAV LINK HIGHLIGHT
// ──────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNav() {
  let scrollY = window.pageYOffset;
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('text-indigo-650', 'text-indigo-500', 'dark:text-indigo-400');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('text-indigo-500', 'dark:text-indigo-400');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNav);


// ──────────────────────────────────────────────
// 5. NAVBAR — GLASSMORPHISM ON SCROLL
// ──────────────────────────────────────────────
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('shadow-lg', 'backdrop-blur-md', 'bg-white/80', 'dark:bg-gray-950/80');
  } else {
    navbar.classList.remove('shadow-lg', 'backdrop-blur-md');
  }
});


// ──────────────────────────────────────────────
// 6. SCROLL-REVEAL ANIMATION (Intersection Observer)
// ──────────────────────────────────────────────
let revealObserver;

function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');

  if (revealObserver) {
    revealObserver.disconnect();
  }

  revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealEls.forEach(el => revealObserver.observe(el));
}


// ──────────────────────────────────────────────
// 7. PROJECTS FILTERING & RENDERER
// ──────────────────────────────────────────────
const projectsGrid = document.getElementById('projects-grid');
const projectsEmpty = document.getElementById('projects-empty');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderProjects(filterValue) {
  // Add smooth fade out transition
  projectsGrid.classList.remove('opacity-100', 'scale-100');
  projectsGrid.classList.add('opacity-0', 'scale-95');

  setTimeout(() => {
    // Filter projects
    const filtered = projectsData.filter(proj => {
      if (filterValue === 'all') return true;
      return proj.category === filterValue;
    });

    // Handle empty state
    if (filtered.length === 0) {
      projectsGrid.innerHTML = '';
      projectsGrid.classList.add('hidden');
      projectsEmpty.classList.remove('hidden');
      projectsEmpty.classList.add('reveal');
      initScrollReveal();
      return;
    }

    projectsEmpty.classList.add('hidden');
    projectsGrid.classList.remove('hidden');

    // Build Cards HTML
    let cardsHtml = '';
    filtered.forEach((proj, idx) => {
      const techBadges = proj.tech.map(t =>
        `<span class="text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300">${t}</span>`
      ).join('');

      cardsHtml += `
        <article class="reveal group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden
                        shadow-md hover:shadow-xl hover:shadow-indigo-500/10 border border-gray-100 dark:border-gray-800
                        transition-all duration-500 hover:-translate-y-2 flex flex-col h-full" style="animation-delay: ${idx * 100}ms">
          <!-- Thumbnail -->
          <div class="overflow-hidden h-48 bg-gray-100 dark:bg-gray-900 relative">
            <img src="${proj.image}" alt="${proj.title} preview"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <!-- Category Badge -->
            <span class="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 text-indigo-600 dark:text-indigo-400 shadow-sm border border-gray-100 dark:border-gray-800">
              ${proj.categoryLabel}
            </span>
          </div>
          <!-- Body -->
          <div class="p-6 flex flex-col flex-1 justify-between space-y-4">
            <div class="space-y-2.5">
              <h3 class="font-extrabold text-xl text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">${proj.title}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">${proj.shortDesc}</p>
            </div>
            
            <div class="space-y-4">
              <!-- Tech badges -->
              <div class="flex flex-wrap gap-1.5 pt-1">
                ${techBadges}
              </div>
              <!-- Buttons -->
              <div class="flex gap-2 pt-2 text-xs">
                <button onclick="openDetailsModal('${proj.id}')"
                  class="flex-1 text-center font-bold py-2.5 rounded-xl border border-indigo-200 dark:border-indigo-900/60
                         text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40
                         transition-all duration-300">
                  View Details
                </button>
                <a href="${proj.demo}" target="_blank" rel="noopener"
                  class="flex items-center justify-center p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 hover:shadow-md hover:shadow-indigo-500/25"
                  title="Live Demo">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
                <a href="${proj.github}" target="_blank" rel="noopener"
                  class="flex items-center justify-center p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                  title="GitHub Repository">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
                      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7
                      c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305
                      3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38
                      1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399
                      3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12
                      3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22
                      0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297
                      c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </article>
      `;
    });

    projectsGrid.innerHTML = cardsHtml;

    // Animate grid cards back in
    setTimeout(() => {
      projectsGrid.classList.remove('opacity-0', 'scale-95');
      projectsGrid.classList.add('opacity-100', 'scale-100');
      initScrollReveal();
    }, 50);

  }, 350);
}

// Attach filter button event listeners
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active class styles
    filterBtns.forEach(b => {
      b.className = "filter-btn px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-105 active:scale-95";
    });
    btn.className = "filter-btn px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:scale-105 active:scale-95";

    const filter = btn.getAttribute('data-filter');
    renderProjects(filter);
  });
});


// ──────────────────────────────────────────────
// 8. PROJECT DETAILS MODAL MANAGER
// ──────────────────────────────────────────────
const detailsModal = document.getElementById('details-modal');
const detailsContent = document.getElementById('details-modal-content');
const detailsCloseBtn = document.getElementById('details-close');
const detailsImg = document.getElementById('details-img');
const detailsCatBadge = document.getElementById('details-category-badge');
const detailsTitle = document.getElementById('details-title');
const detailsYear = document.getElementById('details-year');
const detailsDesc = document.getElementById('details-desc');
const detailsFeaturesList = document.getElementById('details-features');
const detailsRole = document.getElementById('details-role');
const detailsTechsGrid = document.getElementById('details-techs');
const detailsDemoLink = document.getElementById('details-demo');
const detailsGithubLink = document.getElementById('details-github');

function openDetailsModal(projectId) {
  const proj = projectsData.find(p => p.id === projectId);
  if (!proj) return;

  // Set project text values
  detailsImg.src = proj.image;
  detailsImg.alt = `${proj.title} cover screenshot`;
  detailsCatBadge.textContent = proj.categoryLabel;
  detailsTitle.textContent = proj.title;
  detailsYear.textContent = proj.year;
  detailsDesc.textContent = proj.fullDesc;
  detailsRole.textContent = proj.role;
  detailsDemoLink.href = proj.demo;
  detailsGithubLink.href = proj.github;

  // Render Features list
  detailsFeaturesList.innerHTML = proj.features.map(f => `<li>${f}</li>`).join('');

  // Render Tech badges
  detailsTechsGrid.innerHTML = proj.tech.map(t =>
    `<span class="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-600/40 text-indigo-700 dark:text-indigo-600 border border-indigo-100/30 dark:border-indigo-/10">${t}</span>`
  ).join('');

  // Show modal with animations
  detailsModal.classList.remove('hidden');
  detailsModal.classList.add('flex');

  // Fade in backdrops and scale up content
  setTimeout(() => {
    detailsModal.classList.remove('opacity-0');
    detailsModal.classList.add('opacity-100');
    detailsContent.classList.remove('scale-95');
    detailsContent.classList.add('scale-100');
  }, 10);

  document.body.style.overflow = 'hidden';
}

function closeDetailsModal() {
  detailsModal.classList.remove('opacity-100');
  detailsModal.classList.add('opacity-0');
  detailsContent.classList.remove('scale-100');
  detailsContent.classList.add('scale-95');

  setTimeout(() => {
    detailsModal.classList.remove('flex');
    detailsModal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 300);
}

// Bind modal closing events
detailsCloseBtn.addEventListener('click', closeDetailsModal);
detailsModal.addEventListener('click', e => {
  if (e.target === detailsModal) closeDetailsModal();
});


// ──────────────────────────────────────────────
// 9. EDUCATION DYNAMIC RENDERER
// ──────────────────────────────────────────────
const educationContainer = document.getElementById('education-container');

function renderEducation() {
  let eduHtml = '';
  educationData.forEach((edu, idx) => {
    eduHtml += `
      <div class="reveal p-6 sm:p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800
                  rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-4 justify-between items-start"
           style="animation-delay: ${idx * 150}ms">
        <div class="space-y-2">
          <span class="text-xs font-bold text-indigo-500 uppercase tracking-widest block">${edu.year}</span>
          <h3 class="text-xl font-extrabold text-gray-900 dark:text-white">${edu.degree}</h3>
          <p class="text-sm font-semibold text-gray-600 dark:text-gray-400">${edu.institution}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pt-2">${edu.desc}</p>
        </div>
      </div>
    `;
  });
  educationContainer.innerHTML = eduHtml;
}


// ──────────────────────────────────────────────
// 10. EXPERIENCE DYNAMIC TIMELINE RENDERER
// ──────────────────────────────────────────────
const experienceTimeline = document.getElementById('experience-timeline');

function renderExperience() {
  let expHtml = '';
  experienceData.forEach((exp, idx) => {
    const listItems = exp.responsibilities.map(r => `<li class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">${r}</li>`).join('');

    expHtml += `
      <div class="reveal timeline-item relative pl-4" style="animation-delay: ${idx * 150}ms">
        <!-- Duration badge -->
        <span class="text-xs font-bold text-indigo-500 uppercase tracking-wider block mb-1">${exp.duration}</span>
        
        <div class="p-6 sm:p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 space-y-4">
          <!-- Position & Company -->
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 class="text-xl font-extrabold text-gray-900 dark:text-white">${exp.position}</h3>
              <p class="text-sm font-semibold text-gray-600 dark:text-gray-400">${exp.company}</p>
            </div>
            <!-- Experience Type Badge -->
            <span class="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-900/10">
              ${exp.type}
            </span>
          </div>

          <!-- Responsibilities -->
          <ul class="list-disc pl-5 space-y-2">
            ${listItems}
          </ul>

          <!-- Achievements -->
          <div class="pt-2 border-t border-gray-50 dark:border-gray-750 flex items-start gap-2 text-sm">
            <span class="text-base select-none">🏆</span>
            <p class="text-gray-600 dark:text-gray-300 font-medium">
              <strong class="text-gray-900 dark:text-white">Key Achievement:</strong> ${exp.achievements}
            </p>
          </div>
        </div>
      </div>
    `;
  });
  experienceTimeline.innerHTML = expHtml;
}


// ──────────────────────────────────────────────
// 11. BLOG DYNAMIC RENDERER
// ──────────────────────────────────────────────
const blogFeatured = document.getElementById('blog-featured');
const blogGrid = document.getElementById('blog-grid');

function renderBlogs() {
  const featured = blogData.find(b => b.featured);
  const others = blogData.filter(b => !b.featured);

  // Render Featured Article
  if (featured) {
    blogFeatured.innerHTML = `
      <div class="group bg-white dark:bg-gray-850 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 grid lg:grid-cols-12 gap-6 p-6">
        <!-- Thumbnail -->
        <div class="overflow-hidden rounded-2xl h-64 lg:h-full lg:col-span-5 bg-gray-100 dark:bg-gray-900">
          <img src="${featured.thumbnail}" alt="${featured.title} cover"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" />
        </div>
        <!-- Info Content -->
        <div class="lg:col-span-7 flex flex-col justify-between p-2 space-y-4">
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <!-- Featured Category Badge -->
              <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-600 text-white shadow-sm">
                ${featured.category}
              </span>
              <span class="text-xs text-gray-400 font-medium">${featured.date}</span>
            </div>
            
            <h3 class="text-2xl font-extrabold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">${featured.title}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">${featured.shortDesc}</p>
          </div>
          
          <div class="flex items-center justify-between border-t border-gray-50 dark:border-gray-800 pt-4">
            <span class="text-xs text-gray-400 font-medium">${featured.readTime}</span>
            <button onclick="openBlogModal('${featured.id}')"
              class="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline underline-offset-4 flex items-center gap-1.5">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // Render Grid Articles
  let gridHtml = '';
  others.forEach((blog, idx) => {
    gridHtml += `
      <article class="reveal group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden
                      shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-800
                      transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full"
               style="animation-delay: ${idx * 100}ms">
        <!-- Thumbnail -->
        <div class="overflow-hidden h-48 bg-gray-100 dark:bg-gray-900 relative">
          <img src="${blog.thumbnail}" alt="${blog.title} cover"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <!-- Category Badge -->
          <span class="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 dark:bg-gray-900/95 text-indigo-600 dark:text-indigo-400 border border-gray-100 dark:border-gray-800 shadow-sm">
            ${blog.category}
          </span>
        </div>
        <!-- Body -->
        <div class="p-6 flex flex-col flex-1 justify-between space-y-4">
          <div class="space-y-2.5">
            <span class="text-xs text-gray-400 font-semibold block">${blog.date}</span>
            <h3 class="font-extrabold text-lg text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">${blog.title}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">${blog.shortDesc}</p>
          </div>
          
          <div class="flex items-center justify-between border-t border-gray-50 dark:border-gray-750 pt-4 text-xs font-semibold">
            <span class="text-gray-400">${blog.readTime}</span>
            <button onclick="openBlogModal('${blog.id}')"
              class="text-indigo-650 dark:text-indigo-400 hover:underline underline-offset-4 flex items-center gap-1">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  });
  blogGrid.innerHTML = gridHtml;
}

// Blog Reader Modal Sim
function openBlogModal(blogId) {
  const blog = blogData.find(b => b.id === blogId);
  if (!blog) return;

  // We can open standard alert or reuse the image modal markup for text preview
  const imgModal = document.getElementById('img-modal');
  const modalImg = document.getElementById('modal-img');
  const modalClose = document.getElementById('modal-close');

  // Customize modal overlay slightly for text or build a prompt
  alert(`📚 Article Preview:\n\nTitle: ${blog.title}\nCategory: ${blog.category}\nDate: ${blog.date} (${blog.readTime})\n\nContent:\n${blog.content}\n\n(This is a simulated article view for portfolio demonstrations.)`);
}


// ──────────────────────────────────────────────
// 12. PROJECT IMAGE MODAL (Fallback zoom)
// ──────────────────────────────────────────────
const modal = document.getElementById('img-modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.project-img-zoom').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}
if (modal) {
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeDetailsModal();
  }
});


// ──────────────────────────────────────────────
// 13. CONTACT FORM — CLIENT-SIDE FEEDBACK
// ──────────────────────────────────────────────
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = 'Please fill in all fields.';
      formStatus.className = 'mt-4 text-center text-red-500 text-sm font-semibold';
      return;
    }

    formStatus.textContent = `Thanks, ${name}! Your message was successfully received. I'll get back to you soon.`;
    formStatus.className = 'mt-4 text-center text-green-500 text-sm font-medium';
    contactForm.reset();

    setTimeout(() => { formStatus.textContent = ''; }, 6000);
  });
}


// ──────────────────────────────────────────────
// 14. TYPED TEXT EFFECT — HERO ROLES
// ──────────────────────────────────────────────
const roles = ['Full Stack Web Developer', 'Data Analyst', 'IT Programmer', 'IT Support'];
const typedEl    = document.getElementById('typed-role');
let roleIdx      = 0;
let charIdx      = 0;
let isDeleting   = false;

function type() {
  const current = roles[roleIdx];

  if (isDeleting) {
    typedEl.textContent = current.slice(0, charIdx--);
  } else {
    typedEl.textContent = current.slice(0, charIdx++);
  }

  if (!isDeleting && charIdx > current.length) {
    isDeleting = true;
    setTimeout(type, 1800);
    return;
  }

  if (isDeleting && charIdx < 0) {
    isDeleting = false;
    roleIdx    = (roleIdx + 1) % roles.length;
    charIdx    = 0;
    setTimeout(type, 400);
    return;
  }

  setTimeout(type, isDeleting ? 60 : 90);
}
type();

// ──────────────────────────────────────────────
// 15. INITIALIZATION
// ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Render all datasets
  renderProjects('all');
  renderEducation();
  renderExperience();
  renderBlogs();

  // Start roles typewriter
  type();

  // Start scroll reveal intersection observer
  initScrollReveal();
});
