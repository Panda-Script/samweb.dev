export const lessons = [
  {
    id: 1,
    title: "What is the Primary Goal of Network Segmentation?",
    description: "Understand the fundamental objective behind dividing networks into segments for security and performance",
    order: 1,
    duration: 15,
    topic: "Fundamentals",
    icon: "target",
    content: `<h1>What is the Primary Goal of Network Segmentation?</h1>
  
  <h2>Core Objective</h2>
  <p>The primary goal of network segmentation is to enhance security and improve network performance by dividing a computer network into smaller, isolated subnetworks (segments). This strategic division controls and restricts the flow of traffic between segments based on defined security policies (Cisco, 2023).</p>
  
  <h2>Real-World Example</h2>
  <p>Imagine a university campus network. The primary goal of segmenting the network is to keep the research lab's sensitive data completely separate from the public Wi-Fi used by visitors in the library. This prevents a compromised visitor device from directly accessing critical research servers.</p>
  
  <h2>Policy Foundation</h2>
  <p>The goal is formally defined in an organization's <strong>network security policy</strong>. This high-level document outlines the objectives, such as "protect payment card data" or "ensure the availability of industrial control systems," which the segmentation design is built to achieve (NIST, 2020).</p>
  
  <h2>Zero Trust Evolution</h2>
  <p>Zero Trust segmentation applies the principle of "never trust, always verify" as the primary goal. It assumes threats exist inside the network, so the goal shifts from creating a hard external perimeter to enforcing granular "least privilege" access between <em>all</em> workloads and devices, east-west and north-south (Forrester, 2021).</p>
  
  <h2>Key Takeaways</h2>
  <ul>
    <li><strong>Defines Security Posture</strong>: Establishes whether segmentation is for simple containment or sophisticated access rules</li>
    <li><strong>Guides Investment</strong>: Determines whether traditional tools or modern platforms are needed</li>
    <li><strong>Measures Success</strong>: Compliance audits and reduced attack impact become measurable outcomes</li>
  </ul>`
  },
  {
    id: 2,
    title: "Traditional Methods of Network Segmentation",
    description: "Explore legacy approaches like VLANs and firewalls for dividing networks",
    order: 2,
    duration: 20,
    topic: "Implementation",
    icon: "server",
    content: `<h1>Traditional Methods of Network Segmentation</h1>
  
  <h2>How Traditional Segmentation Works</h2>
  <p>Traditional network segmentation is implemented by creating physical or logical divisions in the network infrastructure using dedicated hardware and configuration protocols. These methods control traffic flow at the network layer (Layers 3 and 4) based on IP addresses, subnets, and ports (Palo Alto Networks, 2024).</p>
  
  <h2>Practical Example</h2>
  <p>A company might use <strong>Virtual Local Area Networks (VLANs)</strong> to separate its finance department's computers from the marketing department's on the same physical network switches. This prevents broadcast traffic and direct communication between the two groups unless explicitly allowed by a router or firewall.</p>
  
  <h2>Enforcement Mechanisms</h2>
  <p>The primary enforcement devices are:</p>
  <ul>
    <li><strong>Internal Firewalls</strong>: Placed between network segments to filter traffic</li>
    <li><strong>Routers with Access Control Lists (ACLs)</strong>: Rule sets that permit or deny traffic based on source/destination IP and port</li>
    <li><strong>Switches with VLAN configurations</strong>: Logically isolate Layer 2 broadcast domains</li>
  </ul>
  
  <h2>Limitations and Challenges</h2>
  <p>These approaches are often <strong>costly, complex, and rigid</strong>. Managing hundreds of firewall rules and VLANs across multi-vendor equipment is manual, error-prone, and difficult to scale in dynamic environments like cloud or with mobile devices (Gartner, 2022).</p>
  
  <h2>Why It Still Matters</h2>
  <ul>
    <li><strong>Foundation Knowledge</strong>: Forms the basis of modern networking concepts</li>
    <li><strong>Legacy Environment Relevance</strong>: Many existing networks still rely on these technologies</li>
    <li><strong>Contrast Point</strong>: Highlights limitations that justify shift to modern solutions</li>
  </ul>`
  },
  {
    id: 3,
    title: "Software-Defined Segmentation",
    description: "Learn how modern abstraction simplifies segmentation policy management",
    order: 3,
    duration: 18,
    topic: "Modern Approaches",
    icon: "cpu",
    content: `<h1>Software-Defined Segmentation</h1>
  
  <h2>How It Works</h2>
  <p>Software-defined segmentation abstracts the segmentation policy from the underlying physical hardware. It works by centrally defining security rules based on logical tags (like user role or application type) and automatically pushing these policies to enforcement points across the network (VMware, 2023).</p>
  
  <h2>Example Scenario</h2>
  <p>In a modern data center, an administrator can create a policy stating: "The 'Web-App' tier can only talk to the 'Database' tier on port 3306." The software-defined platform automatically applies this rule to all virtual machines (VMs) or containers with those tags, regardless of their physical server or IP address.</p>
  
  <h2>Policy Enforcement</h2>
  <p>A central <strong>controller or management plane</strong> (like Cisco DNA Center or VMware NSX Manager) holds the policy. It programs <strong>distributed enforcement points</strong>, which can be virtual switches, hypervisor kernels, cloud-native firewalls, or compatible physical switches, to allow or deny traffic based on tags (Cisco, 2023).</p>
  
  <h2>Key Advantage</h2>
  <p>The key advantage is <strong>agility and consistency</strong>. Policies follow workloads as they move (e.g., from on-premises to cloud), and changes are made once in the central controller, not on dozens of individual devices.</p>
  
  <h2>Benefits Summary</h2>
  <ul>
    <li><strong>Simplified Management</strong>: Reduces configuration complexity and human error</li>
    <li><strong>Dynamic Policy</strong>: Adapts to virtualized, cloud, and mobile environments</li>
    <li><strong>Granular Control</strong>: Enables policies closer to the workload, not just at network chokepoints</li>
  </ul>`
  },
  {
    id: 4,
    title: "Macro vs Microsegmentation",
    description: "Compare broad network zoning with granular workload isolation",
    order: 4,
    duration: 16,
    topic: "Concepts",
    icon: "layers",
    content: `<h1>Macro vs Microsegmentation</h1>
  
  <h2>The Fundamental Difference</h2>
  <p>Macro and microsegmentation differ in the <strong>scope and granularity</strong> of their isolation. Macro-segmentation creates large zones (e.g., "Production" vs. "Development"), while microsegmentation isolates individual workloads or processes <em>within</em> those zones (e.g., one server from another) (Fortinet, 2024).</p>
  
  <h2>Hospital Network Example</h2>
  <p>In a hospital network:</p>
  <ul>
    <li><strong>Macro-segmentation</strong>: Creates separate network zones for "Clinical Devices," "Patient Wi-Fi," and "Administrative Systems"</li>
    <li><strong>Microsegmentation <em>within</em> the "Clinical Devices" zone</strong>: Prevents an X-ray machine from communicating directly with an infusion pump, even though they are in the same broad zone</li>
  </ul>
  
  <h2>Enforcement Points</h2>
  <ul>
    <li><strong>Macro-segmentation</strong>: Typically enforced by <strong>firewalls, routers, and VLANs</strong> at the perimeter of network zones</li>
    <li><strong>Microsegmentation</strong>: Enforced <strong>closer to the workload</strong> by host-based firewalls, hypervisor-level filters, or cloud security groups that understand application identity</li>
  </ul>
  
  <h2>Why Microsegmentation is Critical</h2>
  <p>It limits <strong>east-west (lateral) movement</strong>. If an attacker breaches one server in a macro-segment, they can often move freely to others. Microsegmentation acts as internal bulkheads, containing the breach to the initial compromised asset (CrowdStrike, 2023).</p>
  
  <h2>Strategic Benefits</h2>
  <ul>
    <li><strong>Defense-in-Depth</strong>: Macro provides broad zoning; micro provides granular internal control</li>
    <li><strong>Compliance & Least Privilege</strong>: Macro meets regulatory zoning requirements; micro enforces least-privilege access between applications</li>
  </ul>`
  },
  {
    id: 5,
    title: "Segmentation for Regulatory Compliance",
    description: "Understand how segmentation reduces compliance scope and costs",
    order: 5,
    duration: 22,
    topic: "Compliance",
    icon: "shield-check",
    content: `<h1>Segmentation for Regulatory Compliance</h1>
  
  <h2>Core Compliance Function</h2>
  <p>Segmentation supports compliance by logically isolating systems that store or process regulated data (the "in-scope" systems) from those that do not. This reduces the number of systems subject to expensive security controls and audit processes, simplifying compliance validation (NIST SP 800-53, 2020).</p>
  
  <h2>PCI DSS Example</h2>
  <p>The Payment Card Industry Data Security Standard (PCI DSS) requires strong protection for systems handling cardholder data. Segmentation (specifically termed "network isolation") can ensure that only the designated cardholder data environment (CDE) is in scope for the full PCI audit, not the entire corporate network (PCI SSC, 2022).</p>
  
  <h2>What Provides Evidence</h2>
  <p>The enforcement is the <strong>segmentation architecture itself</strong>, documented and validated. This includes firewall rule sets, network diagrams, and change management logs that prove the isolation of the in-scope environment is maintained at all times.</p>
  
  <h2>Common Pitfall to Avoid</h2>
  <p>A common pitfall is <strong>weak segmentation</strong>. If the controls separating the in-scope network (like the CDE) are not rigorous—for example, allowing unnecessary services or protocols through—auditors may "scope in" the connected systems, negating the benefit (SANS Institute, 2021).</p>
  
  <h2>Compliance Benefits</h2>
  <ul>
    <li><strong>Reduced Audit Cost & Scope</strong>: Limits the number of systems requiring detailed assessment</li>
    <li><strong>Clearer Security Focus</strong>: Allows stronger controls to be concentrated on the most critical assets</li>
    <li><strong>Demonstrable Due Care</strong>: Provides clear evidence to regulators of intent to protect sensitive data</li>
  </ul>`
  },
  {
    id: 6,
    title: "Firewalls in Segmentation Architecture",
    description: "Learn how firewalls enforce segmentation policies between network zones",
    order: 6,
    duration: 17,
    topic: "Implementation",
    icon: "filter",
    content: `<h1>Firewalls in Segmentation Architecture</h1>
  
  <h2>Primary Role</h2>
  <p>Firewalls act as the primary <strong>policy enforcement points</strong> and <strong>traffic filters</strong> between network segments. They examine traffic flowing between segments and permit or block it based on a configured rule set, thus implementing the segmentation policy (Palo Alto Networks, 2024).</p>
  
  <h2>Manufacturing Example</h2>
  <p>A next-generation firewall (NGFW) placed between a company's corporate network and its manufacturing floor network can enforce a rule that allows IT administrators (from specific IPs) to communicate with manufacturing PCs on port 22 (SSH) for maintenance, but blocks all other traffic, including common web or file-sharing ports.</p>
  
  <h2>Types of Segmentation Firewalls</h2>
  <ul>
    <li><strong>Traditional/Internal Firewalls</strong>: Hardware appliances placed at zone boundaries</li>
    <li><strong>Virtual Firewalls</strong>: Software versions deployed in virtualized or cloud environments</li>
    <li><strong>Next-Generation Firewalls (NGFWs)</strong>: Add application awareness, user identity, and threat intelligence to port/IP filtering</li>
  </ul>
  
  <h2>Firewall vs ACL Comparison</h2>
  <p>While both filter traffic, a firewall is typically a dedicated, stateful device. It tracks the <em>state</em> of connections (understanding if a packet is part of an established session), provides deeper packet inspection, and integrates more security services like intrusion prevention, unlike a simpler, stateless ACL on a router (Cisco, 2023).</p>
  
  <h2>Key Contributions</h2>
  <ul>
    <li><strong>Centralized Control & Logging</strong>: Provides a clear choke point for policy and visibility</li>
    <li><strong>Advanced Threat Protection</strong>: NGFWs can block malicious traffic <em>between</em> segments, not just at the internet edge</li>
    <li><strong>Flexible Policy Creation</strong>: Rules can be based on user, application, and content, not just network address</li>
  </ul>`
  },
  {
    id: 7,
    title: "Host-Based Segmentation (Microsegmentation)",
    description: "Explore endpoint-level segmentation that follows workloads anywhere",
    order: 7,
    duration: 19,
    topic: "Modern Approaches",
    icon: "monitor",
    content: `<h1>Host-Based Segmentation (Microsegmentation)</h1>
  
  <h2>Definition</h2>
  <p>Host-based segmentation is a form of microsegmentation where the segmentation policy is enforced directly on the <strong>endpoint (server, workload, or device)</strong> itself, rather than on network hardware. It uses a lightweight agent or built-in host firewall to control all inbound and outbound communications (VMware, 2023).</p>
  
  <h2>Web Server Example</h2>
  <p>A company installs a <strong>host-based firewall agent</strong> on all its web servers. A policy states that each web server can only receive traffic on port 443 (HTTPS) and can only initiate connections to a specific database server on port 5432. This policy is enforced on the server's own network interface, even if the server is moved to a new data center.</p>
  
  <h2>Enforcement Mechanisms</h2>
  <p>The enforcement is done by:</p>
  <ul>
    <li><strong>A Software Agent</strong>: Installed on the OS, often managed by a central console</li>
    <li><strong>The Host Firewall</strong>: Built-in tools like iptables (Linux) or Windows Defender Firewall with Advanced Security</li>
    <li><strong>Cloud Security Groups/Tags</strong>: Applied to virtual machine instances in cloud environments</li>
  </ul>
  
  <h2>Differentiator from Network-Based</h2>
  <p>It is <strong>more granular and portable</strong>. The policy is attached to the workload's identity (e.g., "AppServer-Web") and moves with it anywhere—on-premises, cloud, or hybrid. Network-based segmentation relies on fixed IP addresses and physical topology (Gartner, 2022).</p>
  
  <h2>Advantages</h2>
  <ul>
    <li><strong>Workload-Centric Security</strong>: Policies follow the workload, enabling consistent security in dynamic environments</li>
    <li><strong>Fine-Grained Control</strong>: Can control traffic between workloads on the same host or subnet</li>
    <li><strong>Reduces Network Complexity</strong>: Shifts policy enforcement from the network fabric to the endpoint</li>
  </ul>`
  },
  {
    id: 8,
    title: "Performance Benefits of Network Segmentation",
    description: "Discover how segmentation reduces congestion and improves network efficiency",
    order: 8,
    duration: 14,
    topic: "Benefits",
    icon: "zap",
    content: `<h1>Performance Benefits of Network Segmentation</h1>
  
  <h2>How Performance Improves</h2>
  <p>Segmentation improves network performance by reducing <strong>congestion and broadcast traffic</strong>. By dividing a large, flat network into smaller segments, it limits the volume of traffic that must be processed by any single device and confines disruptive broadcast packets to a smaller domain (Fortinet, 2024).</p>
  
  <h2>Broadcast Storm Example</h2>
  <p>In a large office with a single, flat network, a single malfunctioning network interface card (NIC) flooding the wire with broadcast packets could slow down or halt connectivity for <em>everyone</em>. With segmentation via VLANs, this "broadcast storm" is contained to the specific VLAN of the malfunctioning device, protecting the rest of the organization's traffic.</p>
  
  <h2>Technical Mechanisms</h2>
  <ul>
    <li><strong>Reduced Collision/Congestion Domains</strong>: Switches create separate collision domains per port, but segmentation creates separate <em>broadcast</em> domains</li>
    <li><strong>Traffic Localization</strong>: Department-specific traffic stays within its segment, not consuming bandwidth on links serving other departments</li>
  </ul>
  
  <h2>Security vs Performance Trade-off</h2>
  <p>Properly designed, they are complementary. While security policies (like firewall inspection) can add minimal latency, the overall performance benefit of reduced congestion and optimized traffic paths typically outweighs this cost. The key is to use hardware or solutions capable of line-rate inspection (SANS Institute, 2021).</p>
  
  <h2>Performance Gains</h2>
  <ul>
    <li><strong>Higher Available Bandwidth</strong>: Limits unnecessary cross-network traffic</li>
    <li><strong>Improved Application Response</strong>: Critical applications get more predictable performance in their own segment</li>
    <li><strong>Enhanced Scalability</strong>: Networks are easier to scale when broken into logical, performance-isolated units</li>
  </ul>`
  },
  {
    id: 9,
    title: "Implementation Challenges of Segmentation",
    description: "Identify common obstacles and how to overcome them when deploying segmentation",
    order: 9,
    duration: 21,
    topic: "Implementation",
    icon: "alert-triangle",
    content: `<h1>Implementation Challenges of Network Segmentation</h1>
  
  <h2>Key Challenges</h2>
  <p>The key challenges of implementing segmentation are <strong>operational complexity, cost, and the risk of disrupting business operations</strong>. Designing, deploying, and maintaining a segmented network requires careful planning, ongoing management, and can introduce new points of potential failure (Gartner, 2022).</p>
  
  <h2>Legacy Application Challenge</h2>
  <p>A company attempting to retrofit segmentation into an old, flat network may discover that a critical but poorly documented legacy application relies on obscure, unrestricted communication between dozens of servers. Identifying and accurately documenting all these "application dependencies" is a massive, error-prone challenge that can stall the project.</p>
  
  <h2>Specific Difficulties</h2>
  <ul>
    <li><strong>Discovery and Mapping</strong>: Identifying all assets, their communication patterns, and business owners</li>
    <li><strong>Policy Definition</strong>: Creating rules that balance security (least privilege) with business needs</li>
    <li><strong>Change Management</strong>: Updating policies for new applications without creating security holes or outages</li>
  </ul>
  
  <h2>Mitigation Strategies</h2>
  <p>Adopting a <strong>phased, tool-assisted approach</strong> is critical. Start with high-value assets, use network traffic analysis tools to map flows, and leverage modern software-defined platforms that automate policy application and reduce manual configuration errors (Cisco, 2023).</p>
  
  <h2>Benefits of Overcoming Challenges</h2>
  <ul>
    <li><strong>Sustainable Security Model</strong>: A well-planned segmentation architecture is maintainable long-term</li>
    <li><strong>Reduced Business Risk</strong>: Proactively managing application dependencies prevents costly outages</li>
    <li><strong>Justified Investment</strong>: Clear understanding of challenges leads to better tool selection and ROI</li>
  </ul>`
  },
  {
    id: 10,
    title: "Zero Trust Network Access (ZTNA) and Segmentation",
    description: "Understand how ZTNA extends segmentation principles for modern hybrid work",
    order: 10,
    duration: 23,
    topic: "Modern Approaches",
    icon: "lock",
    content: `<h1>Zero Trust Network Access (ZTNA) and Segmentation</h1>
  
  <h2>ZTNA Definition</h2>
  <p>Zero Trust Network Access (ZTNA) is a modern security service that provides <strong>granular, identity-centric access</strong> to specific applications or services. It is the evolution of network segmentation for a hybrid world, enforcing "least privilege" not just by network zone, but by user, device, and application context (Forrester, 2021).</p>
  
  <h2>Traditional VPN vs ZTNA Example</h2>
  <ul>
    <li><strong>Traditional VPN with segmentation</strong>: An employee connects to the corporate network (VPN) and is placed in a "Remote Users" segment with broad access to many internal resources</li>
    <li><strong>ZTNA</strong>: The same employee is only granted a temporary, encrypted connection to the <em>one</em> SaaS application they need, after their device and identity are verified. They never see or can probe the broader corporate network.</li>
  </ul>
  
  <h2>Policy Enforcement Model</h2>
  <p>A <strong>cloud-based ZTNA service</strong> or controller acts as a broker. It authenticates the user and device, then dynamically provisions a secure, encrypted tunnel directly between the user and the authorized application, regardless of network location.</p>
  
  <h2>ZTNA vs Microsegmentation Relationship</h2>
  <p>They are complementary concepts:</p>
  <ul>
    <li><strong>Microsegmentation</strong>: Controls traffic <em>between workloads</em> (east-west) inside a data center or cloud</li>
    <li><strong>ZTNA</strong>: Controls access <em>from users to applications</em> (north-south), typically from outside the corporate network</li>
  </ul>
  <p>Together, they form a complete Zero Trust architecture (CrowdStrike, 2023).</p>
  
  <h2>Benefits as an Access Model</h2>
  <ul>
    <li><strong>Eliminates Network Trust</strong>: Removes the concept of a "trusted" corporate network</li>
    <li><strong>Reduces Attack Surface</strong>: Users and devices are invisible to the internet</li>
    <li><strong>Supports Modern Work</strong>: Ideal for securing remote users, BYOD, and cloud applications</li>
  </ul>`
  },
];

export const quizzes = [
  {
    id: 1,
    lesson_id: 1,
    questions: [
      {
        question:
          "What is the primary goal of network segmentation according to modern security practices?",
        options: [
          "To increase internet bandwidth for all users",
          "To enhance security and improve network performance by creating isolated subnetworks",
          "To eliminate the need for firewalls entirely",
          "To make network configuration more complex for better security",
        ],
        correct_answer: 1,
        explanation:
          "The primary goal is to enhance security and improve performance by dividing networks into smaller, isolated segments that control traffic flow based on security policies (Cisco, 2023).",
      },
      {
        question:
          "How does Zero Trust segmentation differ from traditional segmentation goals?",
        options: [
          "It focuses only on external threats",
          "It assumes threats exist inside the network and enforces 'least privilege' access between all devices",
          "It eliminates all network segmentation needs",
          "It trusts all internal traffic by default",
        ],
        correct_answer: 1,
        explanation:
          "Zero Trust assumes threats exist inside the network and shifts from a hard external perimeter to enforcing granular 'least privilege' access between all workloads and devices (Forrester, 2021).",
      },
      {
        question:
          "What document formally defines an organization's segmentation objectives?",
        options: [
          "The IT budget proposal",
          "The network security policy",
          "The employee handbook",
          "The hardware procurement list",
        ],
        correct_answer: 1,
        explanation:
          "Segmentation goals are formally defined in an organization's network security policy, which outlines objectives like 'protect payment card data' or 'ensure availability of industrial control systems' (NIST, 2020).",
      },
    ],
    passing_score: 70,
  },
  {
    id: 2,
    lesson_id: 2,
    questions: [
      {
        question:
          "Which of these is a traditional method for implementing network segmentation?",
        options: [
          "Virtual Local Area Networks (VLANs)",
          "Cloud-native serverless functions",
          "Artificial Intelligence algorithms",
          "Blockchain technology",
        ],
        correct_answer: 0,
        explanation:
          "VLANs are a traditional segmentation method that logically separates networks on the same physical infrastructure by controlling broadcast domains.",
      },
      {
        question:
          "What is a major limitation of traditional segmentation methods like VLANs and firewall rules?",
        options: [
          "They are too simple to implement",
          "They are costly, complex, and difficult to scale in dynamic environments",
          "They don't provide any security benefits",
          "They only work on wireless networks",
        ],
        correct_answer: 1,
        explanation:
          "Traditional methods are often costly, complex, rigid, and difficult to scale in dynamic environments like cloud or with mobile devices (Gartner, 2022).",
      },
      {
        question:
          "What type of traffic do traditional segmentation methods primarily control?",
        options: [
          "Application-layer content",
          "User identity information",
          "Network layer traffic based on IP addresses and ports",
          "Physical cable signals",
        ],
        correct_answer: 2,
        explanation:
          "Traditional methods control traffic at the network layer (Layers 3 and 4) based on IP addresses, subnets, and ports, not application content or user identity.",
      },
    ],
    passing_score: 70,
  },
  {
    id: 3,
    lesson_id: 3,
    questions: [
      {
        question:
          "How does software-defined segmentation differ from traditional segmentation?",
        options: [
          "It requires more physical hardware",
          "It abstracts policy from hardware and uses logical tags that follow workloads",
          "It eliminates all network equipment",
          "It only works for on-premises networks",
        ],
        correct_answer: 1,
        explanation:
          "Software-defined segmentation abstracts policy from hardware, using logical tags (like user role or application type) that follow workloads anywhere they move.",
      },
      {
        question:
          "What is the key advantage of software-defined segmentation's central controller?",
        options: [
          "It makes networks slower",
          "It increases manual configuration work",
          "It provides agility and consistency by allowing policy changes in one place",
          "It requires specialized networking knowledge to use",
        ],
        correct_answer: 2,
        explanation:
          "The central controller provides agility and consistency - policies follow workloads as they move, and changes are made once centrally, not on dozens of individual devices.",
      },
      {
        question:
          "Where are software-defined segmentation policies typically enforced?",
        options: [
          "Only at the internet gateway",
          "At distributed enforcement points like virtual switches and hypervisor kernels",
          "Only on physical firewall appliances",
          "In the DNS server configuration",
        ],
        correct_answer: 1,
        explanation:
          "Policies are enforced at distributed points like virtual switches, hypervisor kernels, cloud-native firewalls, or compatible physical switches programmed by the central controller.",
      },
    ],
    passing_score: 70,
  },
  {
    id: 4,
    lesson_id: 4,
    questions: [
      {
        question:
          "What is the fundamental difference between macro and microsegmentation?",
        options: [
          "Macro is for small networks, micro is for large networks",
          "Macro creates large zones, micro isolates individual workloads within zones",
          "Macro uses software, micro uses hardware",
          "Macro is cheaper, micro is more expensive",
        ],
        correct_answer: 1,
        explanation:
          "Macro-segmentation creates large zones (like 'Production' vs 'Development'), while microsegmentation isolates individual workloads or processes within those zones.",
      },
      {
        question:
          "Why is microsegmentation critical for limiting modern cyber attacks?",
        options: [
          "It prevents all internet access",
          "It limits east-west (lateral) movement if an attacker breaches one system",
          "It makes passwords stronger",
          "It encrypts all data at rest",
        ],
        correct_answer: 1,
        explanation:
          "Microsegmentation limits east-west lateral movement, acting as internal bulkheads that contain a breach to the initially compromised asset.",
      },
      {
        question:
          "In a hospital network example, what would microsegmentation within the 'Clinical Devices' zone do?",
        options: [
          "Allow all medical devices to communicate freely",
          "Prevent an X-ray machine from communicating directly with an infusion pump",
          "Block all internet access for medical devices",
          "Combine all medical devices into one network segment",
        ],
        correct_answer: 1,
        explanation:
          "Microsegmentation within the Clinical Devices zone would prevent specific devices like an X-ray machine from communicating directly with an infusion pump, even though they're in the same broad zone.",
      },
    ],
    passing_score: 70,
  },
  {
    id: 5,
    lesson_id: 5,
    questions: [
      {
        question: "How does segmentation help with PCI DSS compliance?",
        options: [
          "It eliminates all compliance requirements",
          "It reduces audit scope by isolating cardholder data environment from other systems",
          "It automatically generates compliance reports",
          "It replaces all security controls required by PCI DSS",
        ],
        correct_answer: 1,
        explanation:
          "Segmentation can ensure only the designated cardholder data environment (CDE) is in scope for full PCI audit, not the entire corporate network.",
      },
      {
        question:
          "What evidence demonstrates effective segmentation for compliance audits?",
        options: [
          "Marketing brochures",
          "Employee testimonials",
          "Firewall rule sets, network diagrams, and change management logs",
          "Hardware purchase receipts",
        ],
        correct_answer: 2,
        explanation:
          "The segmentation architecture itself - documented through firewall rules, network diagrams, and change logs - provides evidence that isolation is maintained.",
      },
      {
        question: "What is a common compliance pitfall with segmentation?",
        options: [
          "Having too much documentation",
          "Weak segmentation that allows unnecessary connections, causing auditors to 'scope in' connected systems",
          "Segmenting networks too much",
          "Using the latest technology",
        ],
        correct_answer: 1,
        explanation:
          "Weak segmentation with unnecessary allowed connections can cause auditors to 'scope in' connected systems, negating the compliance benefits.",
      },
    ],
    passing_score: 70,
  },
  {
    id: 6,
    lesson_id: 6,
    questions: [
      {
        question:
          "What is the primary role of firewalls in segmentation architecture?",
        options: [
          "To increase network speed",
          "To act as policy enforcement points and traffic filters between segments",
          "To replace all other security controls",
          "To generate network diagrams automatically",
        ],
        correct_answer: 1,
        explanation:
          "Firewalls act as primary policy enforcement points that examine and filter traffic between network segments based on configured rules.",
      },
      {
        question:
          "How does a Next-Generation Firewall (NGFW) differ from a traditional firewall in segmentation?",
        options: [
          "It only filters by IP address and port",
          "It adds application awareness, user identity, and threat intelligence to filtering",
          "It doesn't support segmentation at all",
          "It's only for internet edge protection",
        ],
        correct_answer: 1,
        explanation:
          "NGFWs add application awareness, user identity, and threat intelligence to basic port/IP filtering, enabling more sophisticated segmentation policies.",
      },
      {
        question:
          "What key capability distinguishes a stateful firewall from a simple ACL in segmentation?",
        options: [
          "Color of the device",
          "Ability to track connection state and understand if packets are part of established sessions",
          "Higher cost without additional features",
          "Lack of logging capabilities",
        ],
        correct_answer: 1,
        explanation:
          "Stateful firewalls track connection state and understand packet relationships, unlike simpler, stateless ACLs that only check individual packets.",
      },
    ],
    passing_score: 70,
  },
  {
    id: 7,
    lesson_id: 7,
    questions: [
      {
        question: "What is host-based segmentation?",
        options: [
          "Segmentation enforced on network hardware only",
          "Segmentation policy enforced directly on endpoints (servers/workloads) themselves",
          "Segmentation that only works for host computers, not servers",
          "A type of segmentation that doesn't require any policies",
        ],
        correct_answer: 1,
        explanation:
          "Host-based segmentation enforces policies directly on endpoints using agents or built-in host firewalls, rather than on network hardware.",
      },
      {
        question:
          "What is the key advantage of host-based segmentation over network-based approaches?",
        options: [
          "It's less secure",
          "It's more granular and portable - policies follow workloads anywhere",
          "It requires more network configuration",
          "It only works with fixed IP addresses",
        ],
        correct_answer: 1,
        explanation:
          "Host-based segmentation is more granular and portable because policies are attached to workload identity and move with workloads anywhere.",
      },
      {
        question:
          "Which of these is NOT an enforcement mechanism for host-based segmentation?",
        options: [
          "Software agents installed on operating systems",
          "Built-in host firewalls (like iptables or Windows Firewall)",
          "Cloud security groups applied to virtual machines",
          "Physical router ACL configurations",
        ],
        correct_answer: 3,
        explanation:
          "Physical router ACLs are network-based, not host-based. Host-based enforcement uses software agents, host firewalls, or cloud security groups.",
      },
    ],
    passing_score: 70,
  },
  {
    id: 8,
    lesson_id: 8,
    questions: [
      {
        question: "How does segmentation improve network performance?",
        options: [
          "By increasing internet bandwidth purchases",
          "By reducing congestion and containing broadcast traffic to smaller domains",
          "By eliminating all security checks",
          "By making all networks wireless",
        ],
        correct_answer: 1,
        explanation:
          "Segmentation improves performance by reducing congestion and confining broadcast packets to smaller domains, preventing issues like broadcast storms from affecting entire networks.",
      },
      {
        question:
          "What network problem does segmentation help prevent through broadcast domain separation?",
        options: [
          "Slow DNS resolution",
          "Broadcast storms that can halt entire network connectivity",
          "ISP outages",
          "Power supply failures",
        ],
        correct_answer: 1,
        explanation:
          "By creating separate broadcast domains, segmentation contains broadcast storms to individual segments rather than letting them affect the entire network.",
      },
      {
        question:
          "What is the relationship between security and performance in properly designed segmentation?",
        options: [
          "They always conflict - better security means worse performance",
          "They are complementary - performance benefits typically outweigh minimal security latency",
          "Performance is irrelevant to security design",
          "Security always degrades performance significantly",
        ],
        correct_answer: 1,
        explanation:
          "Properly designed, security and performance are complementary. While security adds minimal latency, performance benefits from reduced congestion typically outweigh this cost.",
      },
    ],
    passing_score: 70,
  },
  {
    id: 9,
    lesson_id: 9,
    questions: [
      {
        question:
          "What is a major challenge when implementing segmentation in legacy networks?",
        options: [
          "Finding vendors who sell networking equipment",
          "Documenting obscure application dependencies between dozens of servers",
          "Getting management approval for new projects",
          "Training users on basic computer skills",
        ],
        correct_answer: 1,
        explanation:
          "Legacy applications often have poorly documented communication dependencies that must be identified before segmentation to avoid breaking critical business functions.",
      },
      {
        question:
          "What approach helps mitigate segmentation implementation challenges?",
        options: [
          "Implementing everything at once for consistency",
          "A phased, tool-assisted approach starting with high-value assets",
          "Avoiding documentation to save time",
          "Using only the cheapest available solutions",
        ],
        correct_answer: 1,
        explanation:
          "A phased, tool-assisted approach starting with high-value assets and using traffic analysis tools helps manage complexity and reduce errors.",
      },
      {
        question:
          "Which task is particularly challenging during segmentation implementation?",
        options: [
          "Ordering pizza for the IT team",
          "Creating policies that balance security (least privilege) with business needs",
          "Choosing wall paint colors for server rooms",
          "Writing email signatures for network administrators",
        ],
        correct_answer: 1,
        explanation:
          "Balancing strict security (least privilege) with business application functionality is a significant challenge requiring careful analysis and testing.",
      },
    ],
    passing_score: 70,
  },
  {
    id: 10,
    lesson_id: 10,
    questions: [
      {
        question:
          "How does Zero Trust Network Access (ZTNA) differ from traditional VPN segmentation?",
        options: [
          "ZTNA grants broad network access, VPN grants specific app access",
          "ZTNA grants specific application access only, VPN places users on the corporate network",
          "ZTNA is less secure than VPN",
          "ZTNA doesn't require authentication",
        ],
        correct_answer: 1,
        explanation:
          "ZTNA grants temporary, encrypted access to specific applications only, while traditional VPNs place users on the corporate network with broader access.",
      },
      {
        question:
          "What is the relationship between ZTNA and microsegmentation?",
        options: [
          "They are the same thing",
          "They are completely unrelated technologies",
          "They are complementary - ZTNA controls user-to-app access, microsegmentation controls workload-to-workload access",
          "ZTNA replaces all need for microsegmentation",
        ],
        correct_answer: 2,
        explanation:
          "ZTNA and microsegmentation are complementary: ZTNA controls north-south user-to-application access, while microsegmentation controls east-west workload-to-workload access.",
      },
      {
        question: "What security model does ZTNA fundamentally change?",
        options: [
          "It reinforces the 'trusted internal network' model",
          "It eliminates the concept of a 'trusted' corporate network entirely",
          "It makes the network perimeter stronger but keeps the same model",
          "It only changes authentication methods",
        ],
        correct_answer: 1,
        explanation:
          "ZTNA eliminates the traditional 'trusted internal network' concept, treating the network merely as transport and verifying every access request regardless of location.",
      },
    ],
    passing_score: 70,
  },
];

export const badges = [
  {
    id: 1,
    name: "Segment Novice",
    description: "Complete the first lesson",
    icon: "book",
    color: "blue",
    requirement_type: "lesson_complete",
    requirement_value: 1,
  },
  {
    id: 2,
    name: "Design Expert",
    description: "Complete all design lessons",
    icon: "design",
    color: "purple",
    requirement_type: "lessons_count",
    requirement_value: 3,
  },
  {
    id: 3,
    name: "Security Master",
    description: "Achieve perfect scores on all quizzes",
    icon: "shield",
    color: "gold",
    requirement_type: "quiz_perfect",
  },
  {
    id: 4,
    name: "Learning Streak",
    description: "Complete lessons for 5 consecutive days",
    icon: "flame",
    color: "orange",
    requirement_type: "streak",
    requirement_value: 5,
  },
];
