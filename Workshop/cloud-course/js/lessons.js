/* Cloud Computing Academy — Course Sections & Lessons */
const CourseData = {
  sections: [
    { id: 'home', num: '00', title: 'Course Introduction', type: 'intro' },
    { id: 'lesson-01', num: '01', title: 'Cloud Computing Fundamentals', type: 'lesson' },
    { id: 'lesson-02', num: '02', title: 'Cloud Service Models', type: 'lesson' },
    { id: 'lesson-03', num: '03', title: 'Cloud Deployment Models', type: 'lesson' },
    { id: 'lesson-04', num: '04', title: 'Cloud Infrastructure & Providers', type: 'lesson' },
    { id: 'lesson-05', num: '05', title: 'Cloud Regions & Availability Zones', type: 'lesson' },
    { id: 'lesson-06', num: '06', title: 'Compute', type: 'lesson' },
    { id: 'lesson-07', num: '07', title: 'Storage', type: 'lesson' },
    { id: 'lesson-08', num: '08', title: 'Databases', type: 'lesson' },
    { id: 'lesson-09', num: '09', title: 'Networking', type: 'lesson' },
    { id: 'lesson-10', num: '10', title: 'Security & IAM', type: 'lesson' },
    { id: 'lesson-11', num: '11', title: 'Scalability & High Availability', type: 'lesson' },
    { id: 'lesson-12', num: '12', title: 'Monitoring', type: 'lesson' },
    { id: 'lesson-13', num: '13', title: 'Serverless', type: 'lesson' },
    { id: 'lesson-14', num: '14', title: 'Containers', type: 'lesson' },
    { id: 'lesson-15', num: '15', title: 'Infrastructure as Code', type: 'lesson' },
    { id: 'lesson-16', num: '16', title: 'Cloud Cost Management', type: 'lesson' },
    { id: 'lesson-17', num: '17', title: 'AWS & Azure Overview', type: 'lesson' },
    { id: 'lesson-18', num: '18', title: 'Cloud Architecture', type: 'lesson' },
    { id: 'lab-01', num: '19', title: 'Hands-on Lab: First Website', type: 'lab' },
    { id: 'lab-02', num: '20', title: 'Hands-on Lab: Docker App', type: 'lab' },
    { id: 'lab-03', num: '21', title: 'Hands-on Lab: Terraform', type: 'lab' },
    { id: 'final-project', num: '22', title: 'Final Project', type: 'project' },
    { id: 'roadmap', num: '23', title: 'Cloud Career Roadmap', type: 'roadmap' },
    { id: 'quizzes', num: '24', title: 'Quiz Center', type: 'quiz' },
    { id: 'final-exam', num: '25', title: 'Final Exam', type: 'exam' },
    { id: 'glossary', num: '26', title: 'Glossary', type: 'glossary' },
    { id: 'certificate', num: '27', title: 'Certificate', type: 'certificate' },
    { id: 'resources', num: '28', title: 'Resources', type: 'resources' }
  ],

  glossary: [
    { term: 'Cloud Computing', def: 'Delivery of computing resources (servers, storage, databases, networking, software) over the Internet on demand, with pay-as-you-go pricing.' },
    { term: 'Region', def: 'A geographic area where a cloud provider operates data centers. Examples: us-east-1, UAE North.' },
    { term: 'Availability Zone', def: 'An isolated data center within a region. Multiple AZs provide fault tolerance.' },
    { term: 'VM', def: 'Virtual Machine — a software-based computer running on physical hardware, with its own OS and resources.' },
    { term: 'Instance', def: 'A running VM or compute resource in the cloud. You launch, stop, and terminate instances.' },
    { term: 'Container', def: 'A lightweight package containing an application and its dependencies, sharing the host OS kernel.' },
    { term: 'Pod', def: 'The smallest deployable unit in Kubernetes, usually running one or more containers.' },
    { term: 'VPC', def: 'Virtual Private Cloud — a logically isolated network you create in the cloud with subnets, routing, and security controls.' },
    { term: 'Subnet', def: 'A subdivision of a VPC IP range, typically public (internet-facing) or private (internal).' },
    { term: 'CIDR', def: 'Classless Inter-Domain Routing — notation like 10.0.0.0/16 defining IP address ranges.' },
    { term: 'IAM', def: 'Identity and Access Management — controls who can access resources and what actions they can perform.' },
    { term: 'API', def: 'Application Programming Interface — a way for software to communicate with cloud services programmatically.' },
    { term: 'Load Balancer', def: 'Distributes incoming traffic across multiple servers for availability and performance.' },
    { term: 'Auto Scaling', def: 'Automatically adds or removes compute resources based on demand or schedules.' },
    { term: 'Object Storage', def: 'Storage for unstructured data (files) as objects in buckets, e.g., AWS S3, Azure Blob.' },
    { term: 'Database', def: 'Organized data store supporting queries — relational (SQL) or non-relational (NoSQL).' },
    { term: 'Serverless', def: 'Run code without managing servers; the cloud provider handles scaling and infrastructure.' },
    { term: 'Docker', def: 'Platform for building, shipping, and running containers using images and Dockerfiles.' },
    { term: 'Kubernetes', def: 'Container orchestration system that manages deployment, scaling, and networking of containers.' },
    { term: 'Terraform', def: 'Infrastructure as Code tool that defines cloud resources in declarative configuration files.' },
    { term: 'DevOps', def: 'Culture and practices combining development and operations with automation and collaboration.' },
    { term: 'CI/CD', def: 'Continuous Integration / Continuous Delivery — automated build, test, and deploy pipelines.' }
  ],

  searchKeywords: {
    'VPC': ['lesson-09', 'lesson-18'],
    'IAM': ['lesson-10', 'lesson-17'],
    'Docker': ['lesson-14', 'lab-02'],
    'Kubernetes': ['lesson-14', 'lesson-18'],
    'S3': ['lesson-07', 'lesson-17'],
    'EC2': ['lesson-06', 'lesson-17', 'lab-01'],
    'Terraform': ['lesson-15', 'lab-03'],
    'Database': ['lesson-08', 'lesson-18'],
    'Networking': ['lesson-09', 'lesson-18'],
    'Lambda': ['lesson-13', 'lesson-17'],
    'Security': ['lesson-10', 'lesson-18'],
    'Container': ['lesson-14', 'lab-02'],
    'Serverless': ['lesson-13'],
    'Azure': ['lesson-17', 'lesson-04'],
    'AWS': ['lesson-17', 'lesson-04']
  }
};

function getLessonContent(id) {
  const contents = LESSON_CONTENTS;
  return contents[id] || null;
}

const LESSON_CONTENTS = {
  home: {
    title: 'Cloud Computing',
    subtitle: 'From Your Laptop to the Cloud ☁️',
    summary: [],
    knowledgeCheck: null,
    html: `
      <div class="welcome-banner">
        <h2>Welcome to Cloud Computing 🚀</h2>
        <p class="lead">Cloud computing is the delivery of computing resources — such as servers, storage, databases, networking, and software — over the Internet. Instead of buying and maintaining your own hardware, you rent what you need from a cloud provider and pay only for what you use.</p>
      </div>
      <div class="card-grid">
        <div class="card"><h3>☁️ What You'll Learn</h3><p>A complete path from zero knowledge to deploying a basic cloud application.</p></div>
        <div class="card"><h3>🎯 Who This Is For</h3><p>University students, beginners, and anyone starting a Cloud or DevOps career.</p></div>
        <div class="card"><h3>⏱️ How It Works</h3><p>Learn → Understand → Example → Practice → Quiz → Apply</p></div>
      </div>
      <section class="content-section">
        <h3>Learning Objectives</h3>
        <p>After completing this course, you will be able to:</p>
        <ul class="checklist">
          <li>Explain Cloud Computing and its benefits</li>
          <li>Explain IaaS, PaaS, and SaaS service models</li>
          <li>Understand Public, Private, and Hybrid Cloud deployment</li>
          <li>Understand cloud infrastructure components</li>
          <li>Explain Regions and Availability Zones</li>
          <li>Create and use a virtual machine</li>
          <li>Understand cloud storage, databases, and networking</li>
          <li>Configure basic security and IAM</li>
          <li>Understand scalability, high availability, containers, and serverless</li>
          <li>Understand Infrastructure as Code and cloud monitoring</li>
          <li>Manage cloud costs and build a basic cloud architecture</li>
          <li>Deploy a simple application</li>
        </ul>
      </section>
      <div class="cta-box">
        <p>Ready to begin? Start with <strong>Lesson 01 — Cloud Computing Fundamentals</strong>.</p>
        <button class="btn btn-primary" data-nav="lesson-01">Start Lesson 1 →</button>
      </div>
    `
  },

  'lesson-01': {
    title: 'What Is Cloud Computing?',
    summary: ['Cloud delivers resources over the Internet', 'Traditional on-premises has high upfront cost', 'Cloud offers on-demand, scalable, pay-as-you-go resources', 'Real-world analogy: electricity vs own power plant'],
    knowledgeCheck: {
      q: 'Why should a company consider cloud computing over buying physical servers?',
      options: ['Cloud is always free', 'Reduce upfront cost and scale on demand', 'Physical servers are faster always', 'Cloud removes need for developers'],
      correct: 1,
      explain: 'Cloud eliminates large upfront hardware investments and lets you scale resources as needed, paying only for usage.'
    },
    html: `
      <div class="lesson-intro"><p class="question-box">Where does an application actually run?</p>
      <p>A website or app needs: <strong>CPU</strong>, <strong>RAM</strong>, <strong>Storage</strong>, <strong>Network</strong>, an <strong>Operating System</strong>, and often a <strong>Database</strong>. Traditionally, companies bought physical servers and maintained everything themselves. Cloud computing lets you rent these resources from providers like AWS, Azure, or Google Cloud.</p></div>

      <div class="tabs" data-tabs="l1">
        <div class="tab-buttons"><button class="tab-btn active" data-tab="l1-traditional">Traditional</button><button class="tab-btn" data-tab="l1-cloud">Cloud</button><button class="tab-btn" data-tab="l1-analogy">Analogy</button></div>
        <div class="tab-panel active" id="l1-traditional">
          <h4>Traditional Infrastructure</h4>
          <pre class="diagram">Company
   |
   +---- Physical Server
   +---- Storage
   +---- Network
   +---- Database
   +---- Cooling
   +---- Electricity
   +---- Maintenance</pre>
          <div class="alert alert-warning"><strong>Problems:</strong> Expensive hardware, ongoing maintenance, limited scalability, hardware failures, large upfront investment (CapEx).</div>
        </div>
        <div class="tab-panel" id="l1-cloud">
          <h4>Cloud Infrastructure</h4>
          <pre class="diagram">            Cloud Provider
                 |
   +-------------+-------------+
   |             |             |
 Compute       Storage      Database
   |             |             |
   +-------------+-------------+
                 |
              Internet
                 |
               Users</pre>
          <p>The provider manages physical data centers, power, cooling, and hardware. You consume virtual resources through a web console or API.</p>
        </div>
        <div class="tab-panel" id="l1-analogy">
          <h4>Real-World Analogy: Electricity</h4>
          <p>Instead of building your own power plant, you plug into the grid and pay for what you use. Cloud computing works the same way — rent compute power when needed instead of owning everything.</p>
        </div>
      </div>

      <section class="content-section">
        <h3>Key Benefits</h3>
        <div class="card-grid card-grid-3">
          <div class="card"><h4>On-Demand</h4><p>Create resources in minutes when needed.</p></div>
          <div class="card"><h4>Scalability</h4><p>Increase or decrease capacity as workload changes.</p></div>
          <div class="card"><h4>Elasticity</h4><p>Automatically adapt resources to traffic spikes.</p></div>
          <div class="card"><h4>Pay-As-You-Go</h4><p>Pay only for what you consume — no idle hardware costs.</p></div>
          <div class="card"><h4>Global Infrastructure</h4><p>Deploy close to users worldwide.</p></div>
          <div class="card"><h4>High Availability</h4><p>Design systems that survive failures.</p></div>
        </div>
      </section>

      <section class="content-section">
        <h3>Important Terminology</h3>
        <table class="data-table"><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>
          <tr><td>Cloud Provider</td><td>Company offering cloud services (AWS, Azure, GCP)</td></tr>
          <tr><td>Resource</td><td>Any cloud service: VM, storage bucket, database</td></tr>
          <tr><td>Consumption Model</td><td>Pay based on usage (hours, GB, requests)</td></tr>
        </tbody></table>
      </section>

      <div class="accordion">
        <details><summary>Common Mistakes Beginners Make</summary>
          <ul><li>Thinking "cloud" means files stored on the internet (that's just storage — cloud is much broader)</li>
          <li>Assuming cloud is always cheaper (poorly managed resources can be expensive)</li>
          <li>Ignoring security because "the provider handles it" (shared responsibility model applies)</li></ul>
        </details>
      </div>

      <div class="inline-quiz" data-quiz-id="l1-q1">
        <h4>Quick Quiz</h4>
        <p><strong>Which statement best describes Cloud Computing?</strong></p>
        <div class="quiz-options">
          <button class="quiz-opt" data-correct="false">A. Buying physical servers</button>
          <button class="quiz-opt" data-correct="true">B. Delivering computing resources over the Internet</button>
          <button class="quiz-opt" data-correct="false">C. Using only local computers</button>
          <button class="quiz-opt" data-correct="false">D. Installing software without a network</button>
        </div>
        <div class="quiz-feedback hidden"></div>
      </div>
    `
  },

  'lesson-02': {
    title: 'Cloud Service Models',
    summary: ['IaaS: you manage OS and apps', 'PaaS: provider manages platform, you write code', 'SaaS: you use ready-made software', 'Shared responsibility varies by model'],
    knowledgeCheck: {
      q: 'In which model does the provider manage the operating system?',
      options: ['IaaS', 'PaaS and SaaS', 'Only IaaS', 'None'],
      correct: 1,
      explain: 'In PaaS and SaaS, the provider manages the OS. In IaaS, you manage the OS yourself.'
    },
    html: `
      <p>Cloud providers offer services at different levels of abstraction. The three main models are <strong>IaaS</strong>, <strong>PaaS</strong>, and <strong>SaaS</strong>.</p>

      <div class="service-model-cards">
        <div class="card model-card"><span class="badge">IaaS</span><h3>Infrastructure as a Service</h3>
          <p>Virtual machines, networks, storage. You manage OS, apps, and configuration.</p>
          <p><strong>Examples:</strong> AWS EC2, Azure VMs, Google Compute Engine</p>
          <pre class="diagram">You manage
-----------
Applications | Runtime | OS | Network config

Provider manages
----------------
Virtualization | Servers | Storage | Networking | Data Center</pre>
        </div>
        <div class="card model-card"><span class="badge badge-paas">PaaS</span><h3>Platform as a Service</h3>
          <p>Provider manages runtime, OS, and infrastructure. You focus on application code.</p>
          <p><strong>Examples:</strong> Heroku, Google App Engine, Azure App Service</p>
        </div>
        <div class="card model-card"><span class="badge badge-saas">SaaS</span><h3>Software as a Service</h3>
          <p>Ready-to-use applications accessed via browser or app. Provider manages everything.</p>
          <p><strong>Examples:</strong> Gmail, Microsoft 365, Salesforce, Dropbox</p>
        </div>
      </div>

      <section class="content-section">
        <h3>Comparison Table</h3>
        <table class="data-table comparison-table">
          <thead><tr><th>Layer</th><th>IaaS</th><th>PaaS</th><th>SaaS</th></tr></thead>
          <tbody>
            <tr><td>Application</td><td class="you">You</td><td class="you">You</td><td class="provider">Provider</td></tr>
            <tr><td>Runtime</td><td class="you">You</td><td class="provider">Provider</td><td class="provider">Provider</td></tr>
            <tr><td>OS</td><td class="you">You</td><td class="provider">Provider</td><td class="provider">Provider</td></tr>
            <tr><td>Infrastructure</td><td class="provider">Provider</td><td class="provider">Provider</td><td class="provider">Provider</td></tr>
          </tbody>
        </table>
        <p class="table-note"><strong>You</strong> = your responsibility. <strong>Provider</strong> = cloud provider manages it.</p>
      </section>

      <div class="alert alert-info"><strong>When to choose what?</strong> IaaS for full control (migrations, custom OS). PaaS for faster development. SaaS when you need ready-made business software.</div>
    `
  },

  'lesson-03': {
    title: 'Cloud Deployment Models',
    summary: ['Public cloud: shared provider infrastructure', 'Private cloud: dedicated to one organization', 'Hybrid: combines public and private', 'Multi-cloud: multiple public providers'],
    knowledgeCheck: {
      q: 'Which deployment model uses both on-premises and public cloud?',
      options: ['Public only', 'Private only', 'Hybrid', 'SaaS'],
      correct: 2,
      explain: 'Hybrid cloud connects private (on-premises) infrastructure with public cloud services.'
    },
    html: `
      <div class="card-grid card-grid-3">
        <div class="card"><h3>Public Cloud</h3>
          <pre class="diagram">  AWS | Azure | GCP
        |
    Many Customers</pre>
          <p>Resources owned by provider, shared among tenants. Fast to start, elastic, pay-as-you-go.</p>
          <p><strong>Examples:</strong> AWS, Microsoft Azure, Google Cloud Platform</p>
        </div>
        <div class="card"><h3>Private Cloud</h3>
          <pre class="diagram">Your Organization
        |
  Dedicated Infrastructure</pre>
          <p>Infrastructure dedicated to one organization — on-premises or hosted exclusively for you. More control, higher management overhead.</p>
        </div>
        <div class="card"><h3>Hybrid Cloud</h3>
          <pre class="diagram">Private Cloud ←→ Public Cloud
        |
   Unified Workloads</pre>
          <p>Combines private and public. Keep sensitive data on-premises, burst to public cloud for scale.</p>
        </div>
      </div>
      <section class="content-section">
        <h3>Multi-Cloud</h3>
        <p>Using multiple public cloud providers (e.g., AWS + Azure) to avoid vendor lock-in or meet regional requirements. Requires managing different tools and APIs.</p>
      </section>
    `
  },

  'lesson-04': {
    title: 'Cloud Infrastructure & Providers',
    summary: ['Major providers: AWS, Azure, GCP', 'Services differ in name but concepts are similar', 'Compute, storage, networking, security exist on all platforms'],
    knowledgeCheck: {
      q: 'Are cloud concepts the same across AWS, Azure, and GCP?',
      options: ['No, completely different', 'Yes, concepts are similar with different service names', 'Only AWS has real cloud', 'Azure has no VMs'],
      correct: 1,
      explain: 'All major providers offer compute, storage, networking, and databases — names differ but concepts transfer.'
    },
    html: `
      <p>Cloud infrastructure includes data centers, servers, storage systems, networking equipment, virtualization layers, and management software — all managed by the provider.</p>
      <div class="provider-grid">
        <div class="card"><h3>☁️ AWS</h3><ul><li>EC2 — Virtual Machines</li><li>S3 — Object Storage</li><li>RDS — Managed Databases</li><li>VPC — Virtual Network</li><li>IAM — Identity Management</li><li>Lambda — Serverless</li><li>CloudWatch — Monitoring</li><li>EKS — Kubernetes</li></ul></div>
        <div class="card"><h3>🔷 Microsoft Azure</h3><ul><li>Virtual Machines</li><li>Blob Storage</li><li>Azure SQL / Cosmos DB</li><li>Virtual Network (VNet)</li><li>Microsoft Entra ID (IAM)</li><li>Azure Functions</li><li>Azure Monitor</li><li>AKS — Kubernetes</li></ul></div>
        <div class="card"><h3>🌐 Google Cloud</h3><ul><li>Compute Engine</li><li>Cloud Storage</li><li>Cloud SQL</li><li>VPC</li><li>Cloud IAM</li><li>Cloud Functions</li><li>Cloud Monitoring</li><li>GKE — Kubernetes</li></ul></div>
      </div>
      <div class="alert alert-success">Learn concepts once — they apply across all providers. Certifications often focus on one provider, but fundamentals transfer.</div>
    `
  },

  'lesson-05': {
    title: 'Regions & Availability Zones',
    summary: ['Region = geographic area with data centers', 'AZ = isolated data center within a region', 'Multi-AZ improves availability', 'Choose region close to users and compliant with data laws'],
    knowledgeCheck: {
      q: 'Why deploy across multiple Availability Zones?',
      options: ['It is cheaper always', 'To survive data center failures', 'To avoid using load balancers', 'Regions require it'],
      correct: 1,
      explain: 'Multiple AZs protect your application if one data center fails.'
    },
    html: `
      <div class="card-grid">
        <div class="card"><h4>Region</h4><p>A geographic location (e.g., Middle East, US East) containing cloud infrastructure. Each region is independent.</p></div>
        <div class="card"><h4>Availability Zone (AZ)</h4><p>An isolated data center within a region, with its own power and networking. Regions contain multiple AZs.</p></div>
      </div>
      <pre class="diagram">Region: Middle East
+-----------------------------+
|  Availability Zone A        |
|  +-----------------------+  |
|  | Servers               |  |
|  +-----------------------+  |
|  Availability Zone B        |
|  +-----------------------+  |
|  | Servers               |  |
|  +-----------------------+  |
+-----------------------------+</pre>
      <p><strong>Best practice:</strong> Deploy production workloads across at least two AZs for high availability. Data transfer within a region is typically low cost; cross-region transfer may cost more.</p>
    `
  },

  'lesson-06': {
    title: 'Compute',
    summary: ['Compute = processing power (CPU/RAM)', 'VMs are most common starting point', 'Containers and serverless are modern alternatives', 'Choose size based on workload needs'],
    knowledgeCheck: {
      q: 'What does a Virtual Machine include?',
      options: ['Only CPU', 'CPU, RAM, disk, OS, and network', 'Only storage', 'Only Docker'],
      correct: 1,
      explain: 'A VM is a full virtual computer with CPU, memory, disk, operating system, and network interface.'
    },
    html: `
      <p><strong>Compute</strong> refers to processing power — the ability to run code, serve requests, and process data.</p>
      <div class="card-grid card-grid-2">
        <div class="card"><h4>Virtual Machines</h4><p>Software computers on shared hardware. Full OS control. Examples: EC2, Azure VM.</p>
          <pre class="diagram">+-------------+
|     VM      |
| CPU | RAM   |
| Disk | OS   |
| Network    |
+-------------+
|  Hypervisor |
|  Physical   |
+-------------+</pre>
        </div>
        <div class="card"><h4>Other Compute Types</h4>
          <ul><li><strong>Bare Metal:</strong> Physical server without virtualization — max performance</li>
          <li><strong>Containers:</strong> Lightweight, shared OS kernel</li>
          <li><strong>Serverless:</strong> Run functions without managing servers</li></ul>
        </div>
      </div>

      <section class="content-section">
        <h3>Practical Example: Setting Up a Web Server</h3>
        <p>These commands install Nginx on a Linux VM:</p>
        <div class="code-block" data-copy="sudo apt update">
          <button class="copy-btn" aria-label="Copy">Copy</button>
          <code>sudo apt update</code>
        </div>
        <p class="cmd-explain">Updates the package list from repositories.</p>
        <div class="code-block" data-copy="sudo apt install nginx -y">
          <button class="copy-btn">Copy</button>
          <code>sudo apt install nginx -y</code>
        </div>
        <p class="cmd-explain">Installs the Nginx web server (-y auto-confirms).</p>
        <div class="code-block" data-copy="sudo systemctl enable nginx">
          <button class="copy-btn">Copy</button>
          <code>sudo systemctl enable nginx</code>
        </div>
        <p class="cmd-explain">Starts Nginx automatically on boot.</p>
        <div class="code-block" data-copy="sudo systemctl start nginx">
          <button class="copy-btn">Copy</button>
          <code>sudo systemctl start nginx</code>
        </div>
        <p class="cmd-explain">Starts the Nginx service now.</p>
      </section>

      <div class="terminal-widget" data-terminal="vm-lab"></div>
    `
  },

  'lesson-07': {
    title: 'Storage',
    summary: ['Object storage for files and media', 'Block storage for VM disks', 'File storage for shared filesystems', 'Choose type based on access pattern'],
    knowledgeCheck: {
      q: 'Which storage type is best for static website images and backups?',
      options: ['Block storage', 'Object storage', 'RAM', 'CPU cache'],
      correct: 1,
      explain: 'Object storage (S3, Blob) is ideal for unstructured files accessed via HTTP/API.'
    },
    html: `
      <section class="content-section">
        <h3>Object Storage</h3>
        <p>Stores files as <strong>objects</strong> in <strong>buckets</strong>. Highly durable, scalable, accessed via API.</p>
        <pre class="diagram">Application
     |
     v
Object Storage
     |
 +---+---+
 |   |   |
Image PDF Video</pre>
        <p><strong>Concepts:</strong> Buckets (containers), Objects (files + metadata), Storage classes (Standard, Infrequent Access, Archive), Access policies.</p>
        <p><strong>Examples:</strong> AWS S3, Azure Blob Storage, Google Cloud Storage</p>
      </section>
      <section class="content-section">
        <h3>Block vs File Storage</h3>
        <table class="data-table">
          <thead><tr><th>Type</th><th>Use Case</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>Block Storage</td><td>VM boot/data disks, databases</td><td>EBS, Azure Disk</td></tr>
            <tr><td>File Storage</td><td>Shared files across multiple servers</td><td>EFS, Azure Files</td></tr>
            <tr><td>Object Storage</td><td>Backups, media, static assets</td><td>S3, Blob</td></tr>
          </tbody>
        </table>
      </section>
    `
  },

  'lesson-08': {
    title: 'Databases',
    summary: ['Apps need persistent structured data', 'SQL uses tables with relationships', 'NoSQL offers flexible schemas', 'Choose based on data model and scale needs'],
    knowledgeCheck: {
      q: 'When is a relational (SQL) database often preferred?',
      options: ['When schema changes every second unpredictably', 'When data has clear relationships and needs ACID transactions', 'When you never query data', 'Only for images'],
      correct: 1,
      explain: 'SQL databases excel at structured data with relationships and transactional integrity.'
    },
    html: `
      <p>Applications store user accounts, orders, posts, and more. Databases provide organized, queryable, persistent storage.</p>
      <div class="card-grid card-grid-2">
        <div class="card"><h3>Relational (SQL)</h3>
          <p>Data in <strong>tables</strong> with <strong>rows</strong> and <strong>columns</strong>. Uses SQL for queries.</p>
          <p><strong>Examples:</strong> MySQL, PostgreSQL, SQL Server, AWS RDS, Azure SQL</p>
          <p><strong>Key concepts:</strong> Primary Key (unique row ID), Foreign Keys (relationships), Indexes (speed up queries)</p>
        </div>
        <div class="card"><h3>NoSQL</h3>
          <p>Flexible schemas for massive scale. Types: Key-value, Document, Wide-column, Graph.</p>
          <p><strong>Examples:</strong> DynamoDB, Cosmos DB, MongoDB, Redis</p>
        </div>
      </div>
      <table class="data-table">
        <thead><tr><th>Choose SQL when...</th><th>Choose NoSQL when...</th></tr></thead>
        <tbody>
          <tr><td>Complex relationships and joins</td><td>Flexible or evolving schema</td></tr>
          <tr><td>ACID transactions required</td><td>Massive horizontal scale needed</td></tr>
          <tr><td>Structured, consistent data</td><td>High throughput, simple access patterns</td></tr>
        </tbody>
      </table>
    `
  },

  'lesson-09': {
    title: 'Cloud Networking',
    summary: ['VPC isolates your cloud network', 'Public vs private subnets control exposure', 'Security groups filter traffic', 'Databases belong in private subnets'],
    knowledgeCheck: {
      q: 'Why should a database normally be placed in a private subnet?',
      options: ['It runs faster', 'To prevent direct exposure to the internet', 'Subnets are free', 'DNS requires it'],
      correct: 1,
      explain: 'Private subnets have no direct internet route, reducing attack surface for sensitive data.'
    },
    html: `
      <p>Cloud networking lets you define how resources communicate — internally and with the internet.</p>
      <div class="card-grid card-grid-2">
        <div class="card"><h4>Key Concepts</h4>
          <ul><li><strong>IP Address:</strong> Unique identifier for a device on a network</li>
          <li><strong>Public IP:</strong> Reachable from the internet</li>
          <li><strong>Private IP:</strong> Internal VPC communication only</li>
          <li><strong>CIDR:</strong> IP range notation (10.0.0.0/16)</li>
          <li><strong>Subnet:</strong> Subdivision of VPC IP range</li>
          <li><strong>Route Table:</strong> Directs traffic</li>
          <li><strong>Internet Gateway:</strong> Connects VPC to internet</li>
          <li><strong>NAT Gateway:</strong> Outbound internet for private subnets</li>
          <li><strong>Security Group:</strong> Virtual firewall per resource</li></ul>
        </div>
      </div>
      <pre class="diagram">                Internet
                   |
            Internet Gateway
                   |
             Public Subnet
                   |
            Load Balancer
                   |
        -------------------
        |                 |
   Private Subnet    Private Subnet
        |                 |
     App Server       App Server
        |                 |
        +--------+--------+
                 |
              Database</pre>
      <div class="alert alert-warning"><strong>Security principle:</strong> Only expose what must be public (load balancers, bastion hosts). Keep databases and app internals private.</div>
    `
  },

  'lesson-10': {
    title: 'Security & IAM',
    summary: ['Authentication verifies identity', 'Authorization controls permissions', 'IAM users, roles, and policies', 'Follow least privilege and enable MFA'],
    knowledgeCheck: {
      q: 'What does "least privilege" mean?',
      options: ['Everyone gets admin', 'Grant minimum permissions needed', 'Disable all access', 'Share one password'],
      correct: 1,
      explain: 'Least privilege means giving only the permissions required to perform a task.'
    },
    html: `
      <pre class="diagram">User
 |
 v
Authentication (Who are you?)
 |
 v
Authorization (What can you do?)
 |
 v
Permission
 |
 v
Resource</pre>
      <div class="card-grid card-grid-2">
        <div class="card"><h4>IAM Components</h4>
          <ul><li><strong>Users:</strong> Individual accounts (avoid for apps — prefer roles)</li>
          <li><strong>Roles:</strong> Temporary credentials for services/users</li>
          <li><strong>Policies:</strong> JSON documents defining permissions</li>
          <li><strong>Groups:</strong> Collections of users with shared permissions</li></ul>
        </div>
        <div class="card"><h4>Security Best Practices</h4>
          <ul class="checklist">
            <li>Enable MFA</li>
            <li>Use least privilege</li>
            <li>Avoid hardcoding credentials</li>
            <li>Rotate credentials regularly</li>
            <li>Use roles where possible</li>
            <li>Never publish secrets to GitHub</li>
          </ul>
        </div>
      </div>
      <p><strong>Secrets:</strong> Passwords, API keys, certificates. Store in secret managers (AWS Secrets Manager, Azure Key Vault), not in code.</p>
    `
  },

  'lesson-11': {
    title: 'Scalability & High Availability',
    summary: ['Vertical scaling: bigger server', 'Horizontal scaling: more servers', 'Single server = single point of failure', 'Use load balancers and multi-AZ for HA'],
    knowledgeCheck: {
      q: 'What is a single point of failure?',
      options: ['A backup system', 'One component whose failure stops the entire system', 'A load balancer', 'A CDN'],
      correct: 1,
      explain: 'If one server handles everything and it fails, the whole application goes down.'
    },
    html: `
      <div class="card-grid card-grid-2">
        <div class="card"><h3>Vertical Scaling (Scale Up)</h3>
          <pre class="diagram">Small VM → More CPU/RAM → Large VM</pre>
          <p>Simpler but has hardware limits. May require downtime to resize.</p>
        </div>
        <div class="card"><h3>Horizontal Scaling (Scale Out)</h3>
          <pre class="diagram">    Load Balancer
    /     |     \\
   VM     VM     VM</pre>
          <p>Add more instances. Better for cloud-native apps. Requires load balancing.</p>
        </div>
      </div>
      <section class="content-section">
        <h3>High Availability</h3>
        <div class="compare-arch">
          <div><h4>❌ Bad Architecture</h4><pre class="diagram">Users → Server → Database</pre><p>One failure = total outage.</p></div>
          <div><h4>✅ Better Architecture</h4><pre class="diagram">Users → Load Balancer → VM + VM → Database</pre><p>Redundancy absorbs failures.</p></div>
        </div>
      </section>
    `
  },

  'lesson-12': {
    title: 'Monitoring',
    summary: ['Metrics show resource health', 'Logs record events and errors', 'Alerts notify on thresholds', 'Dashboards visualize system state'],
    knowledgeCheck: {
      q: 'Which is an example of a metric?',
      options: ['A server log file', 'CPU usage percentage', 'A Dockerfile', 'An IAM policy'],
      correct: 1,
      explain: 'Metrics are numeric measurements over time — CPU, memory, request count, latency.'
    },
    html: `
      <p>You cannot fix what you cannot see. Monitoring is essential for reliable cloud applications.</p>
      <div class="card-grid card-grid-2">
        <div class="card"><h4>Metrics</h4><p>Numerical measurements: CPU %, memory, network traffic, request count, error rate.</p></div>
        <div class="card"><h4>Logs</h4><p>Text records: application logs, system logs, access logs. Used for debugging and auditing.</p></div>
        <div class="card"><h4>Alerts</h4><p>Notifications when thresholds are crossed: CPU &gt; 80%, disk full, service down.</p></div>
        <div class="card"><h4>Dashboards</h4><p>Visual panels combining metrics for at-a-glance system health.</p></div>
      </div>
      <p><strong>Tools:</strong> AWS CloudWatch, Azure Monitor, Google Cloud Monitoring, plus third-party (Datadog, Grafana).</p>
    `
  },

  'lesson-13': {
    title: 'Serverless',
    summary: ['Run code without managing servers', 'Event-driven, auto-scaling', 'Pay per invocation and duration', 'Great for APIs, triggers, and background tasks'],
    knowledgeCheck: {
      q: 'What is a key benefit of serverless?',
      options: ['You must patch OS daily', 'Automatic scaling and no server management', 'It only works offline', 'Fixed monthly cost always'],
      correct: 1,
      explain: 'Serverless platforms handle infrastructure, scaling, and patching automatically.'
    },
    html: `
      <pre class="diagram">User → API Gateway → Function → Database</pre>
      <p><strong>Serverless</strong> means you upload code (functions) and the provider runs it on demand. No servers to provision or patch.</p>
      <ul><li><strong>AWS Lambda</strong> — Functions triggered by events</li>
      <li><strong>Azure Functions</strong> — Same concept on Azure</li>
      <li><strong>Google Cloud Functions</strong> — GCP serverless compute</li></ul>
      <div class="card-grid card-grid-2">
        <div class="card"><h4>Benefits</h4><ul><li>No server management</li><li>Automatic scaling</li><li>Pay per use</li><li>Event-driven</li></ul></div>
        <div class="card"><h4>Good For</h4><ul><li>API backends</li><li>File processing triggers</li><li>Scheduled tasks</li><li>IoT data processing</li></ul></div>
      </div>
    `
  },

  'lesson-14': {
    title: 'Containers & Kubernetes',
    summary: ['Containers package app + dependencies', 'Docker builds and runs containers', 'Kubernetes orchestrates containers at scale', 'Pods, Services, Deployments, Ingress'],
    knowledgeCheck: {
      q: 'What does a Docker container include?',
      options: ['Full physical server', 'Application and dependencies', 'Only the OS kernel alone', 'Cloud billing data'],
      correct: 1,
      explain: 'Containers include the app and its libraries; they share the host OS kernel.'
    },
    html: `
      <div class="card-grid card-grid-2">
        <div class="card"><h3>Docker</h3>
          <pre class="diagram">Traditional: App + Deps + OS config
Container:   App + Deps (shared kernel)</pre>
          <p><strong>Key terms:</strong> Image (template), Container (running instance), Dockerfile (build instructions), Registry (image storage)</p>
          <div class="code-block" data-copy="docker build -t myapp ."><button class="copy-btn">Copy</button><code>docker build -t myapp .</code></div>
          <p class="cmd-explain">Builds an image named "myapp" from Dockerfile in current directory.</p>
          <div class="code-block" data-copy="docker run -p 8080:80 myapp"><button class="copy-btn">Copy</button><code>docker run -p 8080:80 myapp</code></div>
          <p class="cmd-explain">Runs container, mapping host port 8080 to container port 80.</p>
        </div>
        <div class="card"><h3>Kubernetes (K8s)</h3>
          <pre class="diagram">Internet → Ingress → Service → Pods (Pod Pod Pod Pod)</pre>
          <ul><li><strong>Cluster:</strong> Group of nodes</li><li><strong>Node:</strong> Worker machine</li><li><strong>Pod:</strong> Smallest unit, runs containers</li><li><strong>Deployment:</strong> Manages Pod replicas</li><li><strong>Service:</strong> Stable network endpoint</li><li><strong>Ingress:</strong> External HTTP routing</li></ul>
        </div>
      </div>
    `
  },

  'lesson-15': {
    title: 'Infrastructure as Code',
    summary: ['Manual infrastructure is error-prone', 'IaC defines resources in code files', 'Terraform is industry-standard IaC', 'init, plan, apply, destroy workflow'],
    knowledgeCheck: {
      q: 'What does terraform plan do?',
      options: ['Deletes all resources', 'Shows proposed changes before applying', 'Stores passwords', 'Runs unit tests'],
      correct: 1,
      explain: 'terraform plan previews create/update/delete actions without making changes.'
    },
    html: `
      <p>Manually clicking in a console doesn't scale. Changes aren't tracked, and environments drift apart.</p>
      <blockquote class="quote">Infrastructure as Code allows infrastructure to be defined using configuration files — versioned, reviewed, and automated.</blockquote>
      <div class="code-block lang-hcl" data-copy='resource "aws_instance" "web" {
  ami           = "ami-example"
  instance_type = "t3.micro"
}'><button class="copy-btn">Copy</button><code>resource "aws_instance" "web" {
  ami           = "ami-example"
  instance_type = "t3.micro"
}</code></div>
      <pre class="diagram">Terraform Code → Terraform → Cloud Provider → Infrastructure</pre>
      <table class="data-table"><thead><tr><th>Concept</th><th>Description</th></tr></thead><tbody>
        <tr><td>Provider</td><td>Plugin for cloud (aws, azurerm, google)</td></tr>
        <tr><td>Resource</td><td>Infrastructure component to create</td></tr>
        <tr><td>Variable</td><td>Input parameter</td></tr>
        <tr><td>Output</td><td>Exported value after apply</td></tr>
        <tr><td>State</td><td>Tracks real-world mapping</td></tr>
      </tbody></table>
    `
  },

  'lesson-16': {
    title: 'Cloud Cost Management',
    summary: ['Cloud costs can grow quickly', 'Pay for compute, storage, and data transfer', 'Delete idle resources', 'Use budgets, alerts, and right-sizing'],
    knowledgeCheck: {
      q: 'Which action reduces cloud costs?',
      options: ['Leave unused VMs running 24/7', 'Delete idle resources and right-size instances', 'Never check billing', 'Always use largest instance type'],
      correct: 1,
      explain: 'Idle and oversized resources are common sources of wasted cloud spend.'
    },
    html: `
      <p>Cloud is pay-as-you-go — which means costs can surprise you if resources are left running.</p>
      <div class="card-grid card-grid-2">
        <div class="card"><h4>Cost Drivers</h4><ul><li>Compute (VM hours)</li><li>Storage (GB stored)</li><li>Data transfer (egress)</li><li>Managed services</li><li>Idle/unused resources</li></ul></div>
        <div class="card"><h4>Cost Optimization Checklist</h4>
          <ul class="checklist interactive-checklist">
            <li><input type="checkbox"> Delete unused VMs</li>
            <li><input type="checkbox"> Remove unused disks</li>
            <li><input type="checkbox"> Monitor billing dashboard</li>
            <li><input type="checkbox"> Use appropriate instance sizes</li>
            <li><input type="checkbox"> Set budgets and alerts</li>
            <li><input type="checkbox"> Avoid unnecessary resources</li>
          </ul>
        </div>
      </div>
      <p><strong>Free Tier:</strong> Most providers offer limited free usage for 12 months or always-free services — great for learning.</p>
    `
  },

  'lesson-17': {
    title: 'AWS & Azure Overview',
    summary: ['AWS is the largest cloud provider', 'Azure integrates with Microsoft ecosystem', 'GCP strong in data/ML', 'Service names differ, concepts transfer'],
    knowledgeCheck: {
      q: 'AWS EC2 is equivalent to which Azure service?',
      options: ['Blob Storage', 'Virtual Machines', 'Functions', 'Cosmos DB'],
      correct: 1,
      explain: 'Both EC2 and Azure Virtual Machines provide cloud-based virtual servers.'
    },
    html: `
      <table class="data-table">
        <thead><tr><th>Category</th><th>AWS</th><th>Azure</th><th>Google Cloud</th></tr></thead>
        <tbody>
          <tr><td>Compute</td><td>EC2</td><td>Virtual Machines</td><td>Compute Engine</td></tr>
          <tr><td>Storage</td><td>S3</td><td>Blob Storage</td><td>Cloud Storage</td></tr>
          <tr><td>Database</td><td>RDS</td><td>Azure SQL</td><td>Cloud SQL</td></tr>
          <tr><td>Network</td><td>VPC</td><td>VNet</td><td>VPC</td></tr>
          <tr><td>Identity</td><td>IAM</td><td>Entra ID</td><td>Cloud IAM</td></tr>
          <tr><td>Serverless</td><td>Lambda</td><td>Functions</td><td>Cloud Functions</td></tr>
          <tr><td>Monitoring</td><td>CloudWatch</td><td>Monitor</td><td>Cloud Monitoring</td></tr>
          <tr><td>Kubernetes</td><td>EKS</td><td>AKS</td><td>GKE</td></tr>
        </tbody>
      </table>
    `
  },

  'lesson-18': {
    title: 'Cloud Architecture',
    summary: ['Combine compute, network, storage, security', 'Design for availability and scalability', 'Balance performance and cost', 'Follow well-architected principles'],
    knowledgeCheck: {
      q: 'What should a well-architected cloud application consider?',
      options: ['Only cost', 'Security, reliability, performance, and cost', 'Only speed', 'Marketing'],
      correct: 1,
      explain: 'Good architecture balances multiple pillars — not just one dimension.'
    },
    html: `
      <pre class="diagram">              Internet
                 |
            DNS / CDN
                 |
          Load Balancer
           /          \\
    Application    Application
       Server           Server
           \\          /
            Database
               |
            Storage</pre>
      <div class="card-grid card-grid-3">
        <div class="card"><h4>Security</h4><p>IAM, encryption, private subnets, least privilege, MFA</p></div>
        <div class="card"><h4>Availability</h4><p>Multi-AZ, load balancing, health checks, backups</p></div>
        <div class="card"><h4>Scalability</h4><p>Auto scaling, stateless apps, caching, CDN</p></div>
        <div class="card"><h4>Performance</h4><p>Right-sizing, CDN, database optimization</p></div>
        <div class="card"><h4>Cost</h4><p>Reserved instances, spot, lifecycle policies, monitoring</p></div>
      </div>
    `
  },

  'lab-01': {
    title: 'Lab 01: Deploy Your First Website',
    summary: ['Create a VM', 'Connect via SSH', 'Install Nginx', 'Deploy HTML page', 'Configure network access'],
    knowledgeCheck: null,
    html: `
      <div class="lab-header"><span class="badge badge-lab">Hands-on Lab</span><h3>Deploy Your First Website</h3></div>
      <ol class="lab-steps">
        <li><strong>Create a cloud VM</strong> — Launch a small Linux instance (t2.micro / B1s) in a public subnet.</li>
        <li><strong>Connect via SSH</strong> — <code>ssh -i key.pem ubuntu@PUBLIC_IP</code></li>
        <li><strong>Install Nginx</strong> — Run the apt commands from Lesson 06.</li>
        <li><strong>Create HTML page</strong> — <code>echo '&lt;h1&gt;Hello Cloud!&lt;/h1&gt;' | sudo tee /var/www/html/index.html</code></li>
        <li><strong>Configure network</strong> — Allow inbound HTTP (port 80) in security group.</li>
        <li><strong>Start Nginx</strong> — <code>sudo systemctl start nginx</code></li>
        <li><strong>Test</strong> — Open <code>http://PUBLIC_IP</code> in browser.</li>
      </ol>
      <div class="terminal-widget" data-terminal="lab01"></div>
      <button class="btn btn-primary" data-complete-lab="lab-01">Mark Lab Complete ✓</button>
    `
  },

  'lab-02': {
    title: 'Lab 02: Deploy a Docker Application',
    summary: ['Install Docker', 'Write Dockerfile', 'Build image', 'Run container', 'Expose port and test'],
    knowledgeCheck: null,
    html: `
      <div class="lab-header"><span class="badge badge-lab">Hands-on Lab</span><h3>Deploy a Docker Application</h3></div>
      <ol class="lab-steps">
        <li><strong>Install Docker</strong> — <code>sudo apt install docker.io -y</code></li>
        <li><strong>Create Dockerfile</strong>:
          <div class="code-block" data-copy="FROM nginx:alpine
COPY index.html /usr/share/nginx/html/"><button class="copy-btn">Copy</button><code>FROM nginx:alpine
COPY index.html /usr/share/nginx/html/</code></div>
        </li>
        <li><strong>Build image</strong> — <code>docker build -t mywebapp .</code></li>
        <li><strong>Run container</strong> — <code>docker run -d -p 8080:80 mywebapp</code></li>
        <li><strong>Test</strong> — Visit <code>http://localhost:8080</code></li>
      </ol>
      <div class="terminal-widget" data-terminal="lab02"></div>
      <button class="btn btn-primary" data-complete-lab="lab-02">Mark Lab Complete ✓</button>
    `
  },

  'lab-03': {
    title: 'Lab 03: Infrastructure as Code',
    summary: ['Write Terraform config', 'terraform init', 'terraform plan', 'terraform apply', 'terraform destroy'],
    knowledgeCheck: null,
    html: `
      <div class="lab-header"><span class="badge badge-lab">Hands-on Lab</span><h3>Infrastructure as Code with Terraform</h3></div>
      <table class="data-table"><thead><tr><th>Command</th><th>Purpose</th></tr></thead><tbody>
        <tr><td><code>terraform init</code></td><td>Initialize working directory, download providers</td></tr>
        <tr><td><code>terraform plan</code></td><td>Preview changes that will be made</td></tr>
        <tr><td><code>terraform apply</code></td><td>Create/update infrastructure</td></tr>
        <tr><td><code>terraform destroy</code></td><td>Remove all managed resources</td></tr>
      </tbody></table>
      <div class="terminal-widget" data-terminal="lab03"></div>
      <button class="btn btn-primary" data-complete-lab="lab-03">Mark Lab Complete ✓</button>
    `
  },

  'final-project': {
    title: 'Build Your First Cloud Architecture',
    summary: ['Design multi-tier architecture', 'Include compute, network, DB, storage', 'Enable monitoring and HA', 'Document your design'],
    knowledgeCheck: null,
    html: `
      <h3>🚀 Build Your First Cloud Architecture</h3>
      <pre class="diagram">Users → DNS → Load Balancer → App Server + App Server → Database → Storage</pre>
      <h4>Requirements</h4>
      <ul><li>Cloud compute (2+ instances)</li><li>VPC with public/private subnets</li><li>Security groups / firewall rules</li><li>Managed database in private subnet</li><li>Object storage for static assets</li><li>Monitoring and alerts</li><li>High availability across AZs</li></ul>
      <ul class="checklist interactive-checklist project-checklist">
        <li><input type="checkbox" data-project> Create network (VPC/VNet)</li>
        <li><input type="checkbox" data-project> Create subnets</li>
        <li><input type="checkbox" data-project> Create application servers</li>
        <li><input type="checkbox" data-project> Configure security</li>
        <li><input type="checkbox" data-project> Configure database</li>
        <li><input type="checkbox" data-project> Configure storage</li>
        <li><input type="checkbox" data-project> Deploy application</li>
        <li><input type="checkbox" data-project> Enable monitoring</li>
        <li><input type="checkbox" data-project> Test application</li>
        <li><input type="checkbox" data-project> Document architecture</li>
      </ul>
      <button class="btn btn-primary" data-complete-lab="final-project">Mark Project Complete ✓</button>
    `
  },

  'roadmap': {
    title: 'Cloud Career Roadmap',
    summary: [],
    knowledgeCheck: null,
    html: `
      <div class="roadmap">
        <div class="roadmap-step"><div class="step-num">1</div><div><h4>Cloud Fundamentals</h4><p>Understand IaaS/PaaS/SaaS, deployment models, core services. <em>This course!</em></p></div></div>
        <div class="roadmap-arrow">↓</div>
        <div class="roadmap-step"><div class="step-num">2</div><div><h4>Linux</h4><p>Command line, file system, permissions, processes, SSH, bash scripting.</p></div></div>
        <div class="roadmap-arrow">↓</div>
        <div class="roadmap-step"><div class="step-num">3</div><div><h4>Networking</h4><p>TCP/IP, DNS, HTTP, firewalls, VPN, load balancing.</p></div></div>
        <div class="roadmap-arrow">↓</div>
        <div class="roadmap-step"><div class="step-num">4</div><div><h4>Git</h4><p>Version control, branches, pull requests, collaboration.</p></div></div>
        <div class="roadmap-arrow">↓</div>
        <div class="roadmap-step"><div class="step-num">5</div><div><h4>AWS / Azure</h4><p>Deep dive into one provider. Pursue certification (Solutions Architect, AZ-104).</p></div></div>
        <div class="roadmap-arrow">↓</div>
        <div class="roadmap-step"><div class="step-num">6</div><div><h4>Docker</h4><p>Containerize applications, Docker Compose, registries.</p></div></div>
        <div class="roadmap-arrow">↓</div>
        <div class="roadmap-step"><div class="step-num">7</div><div><h4>Kubernetes</h4><p>Orchestration, deployments, services, Helm charts.</p></div></div>
        <div class="roadmap-arrow">↓</div>
        <div class="roadmap-step"><div class="step-num">8</div><div><h4>Terraform</h4><p>Infrastructure as Code, modules, state management, CI integration.</p></div></div>
        <div class="roadmap-arrow">↓</div>
        <div class="roadmap-step"><div class="step-num">9</div><div><h4>CI/CD</h4><p>GitHub Actions, Azure DevOps, Jenkins — automate build and deploy.</p></div></div>
        <div class="roadmap-arrow">↓</div>
        <div class="roadmap-step"><div class="step-num">10</div><div><h4>Monitoring</h4><p>Prometheus, Grafana, CloudWatch, logging, alerting, SRE basics.</p></div></div>
        <div class="roadmap-arrow">↓</div>
        <div class="roadmap-step final-step"><div class="step-num">🎯</div><div><h4>DevOps / Cloud Engineer</h4><p>Combine all skills to build, deploy, and operate cloud-native systems.</p></div></div>
      </div>
    `
  },

  'quizzes': {
    title: 'Quiz Center',
    summary: [],
    knowledgeCheck: null,
    html: `<div id="main-quiz-container"></div>`
  },

  'final-exam': {
    title: 'Final Exam',
    summary: [],
    knowledgeCheck: null,
    html: `<div id="final-exam-container"></div>`
  },

  'glossary': {
    title: 'Cloud Computing Glossary',
    summary: [],
    knowledgeCheck: null,
    html: `<div id="glossary-container"></div>`
  },

  'certificate': {
    title: 'Certificate',
    summary: [],
    knowledgeCheck: null,
    html: `<div id="certificate-container"></div>`
  },

  'resources': {
    title: 'Resources',
    summary: [],
    knowledgeCheck: null,
    html: `
      <div class="card-grid">
        <div class="card"><h4>Official Documentation</h4><ul><li><a href="https://aws.amazon.com/documentation/" target="_blank" rel="noopener">AWS Documentation</a></li><li><a href="https://learn.microsoft.com/azure/" target="_blank" rel="noopener">Azure Documentation</a></li><li><a href="https://cloud.google.com/docs" target="_blank" rel="noopener">Google Cloud Docs</a></li></ul></div>
        <div class="card"><h4>Free Learning</h4><ul><li>AWS Skill Builder</li><li>Microsoft Learn</li><li>Google Cloud Skills Boost</li></ul></div>
        <div class="card"><h4>Practice</h4><ul><li>Free tier accounts for hands-on practice</li><li>Terraform tutorials</li><li>Docker getting started guide</li></ul></div>
      </div>
    `
  }
};
