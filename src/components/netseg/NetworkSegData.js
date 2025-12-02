export const lessons = [

  {
    id: 1,
    title: "What is Network Segmentation?",
    description: "Learn why we break networks into smaller pieces for better security",
    order: 1,
    duration: 10,
    topic: "Basics",
    icon: "target",
    content: `<h1>What is Network Segmentation?</h1>
  
  <h2>Simple Definition</h2>
  <p>Network segmentation means breaking one big network into smaller, separate pieces (like rooms in a house). Each piece can't talk to the others unless you give it permission.</p>
  
  <h2>Why Do This?</h2>
  <p>Think of a big office building. You wouldn't let visitors walk into the accounting department or server room. Segmentation does the same for your network - it keeps different parts separate.</p>
  
  <h2>Main Benefits</h2>
  <ul>
    <li><strong>Better Security</strong>: If a hacker gets into one part, they can't easily reach other parts</li>
    <li><strong>Faster Network</strong>: Less traffic jams on your network</li>
    <li><strong>Easier to Manage</strong>: Problems stay in one area instead of spreading everywhere</li>
  </ul>
  
  <h2>Real Example</h2>
  <p>In a hotel, guest Wi-Fi is completely separate from the computers that handle credit card payments. Even if a guest's laptop has a virus, it can't reach the payment systems.</p>`
  },
  {
    id: 2,
    title: "How We Used to Do It (Old Way)",
    description: "Learn about traditional methods like firewalls and VLANs",
    order: 2,
    duration: 12,
    topic: "Basics",
    icon: "server",
    content: `<h1>How We Used to Do It (Old Way)</h1>
  
  <h2>Traditional Methods</h2>
  <p>For years, companies used physical equipment to create network walls. The main tools were:</p>
  <ul>
    <li><strong>Firewalls</strong>: Like security guards between network sections</li>
    <li><strong>VLANs</strong>: Virtual groups on switches (like putting labels on network cables)</li>
    <li><strong>Router Rules</strong>: Lists of who can talk to who</li>
  </ul>
  
  <h2>Simple Example</h2>
  <p>Imagine a school with three buildings. The old way would put a security guard (firewall) between each building to check IDs. Teachers in Building A can't visit Building C without permission.</p>
  
  <h2>Problems with Old Way</h2>
  <ul>
    <li><strong>Hard to Change</strong>: Like rebuilding walls instead of moving furniture</li>
    <li><strong>Expensive</strong>: Needs lots of equipment</li>
    <li><strong>Confusing</strong>: Hundreds of rules to manage</li>
  </ul>
  
  <h2>Still Useful Today?</h2>
  <p>Yes, but mainly for simple networks or places that don't change much. Most modern companies need something more flexible.</p>`
  },
  {
    id: 3,
    title: "New Way: Software-Based Segmentation",
    description: "Learn how modern networks use software instead of hardware",
    order: 3,
    duration: 11,
    topic: "Modern",
    icon: "cpu",
    content: `<h1>New Way: Software-Based Segmentation</h1>
  
  <h2>How It Works</h2>
  <p>Instead of physical walls, we use software rules. Think of it like giving each computer or server a "security badge" that follows it everywhere.</p>
  
  <h2>Simple Example</h2>
  <p>In a cloud data center, a web server might move from Texas to Virginia. With software segmentation, its security rules move with it automatically. The rules say "only talk to the database on port 3306" no matter where it goes.</p>
  
  <h2>Key Features</h2>
  <ul>
    <li><strong>Central Control</strong>: One place to set all rules (like a master remote control)</li>
    <li><strong>Follows Workloads</strong>: Rules stick to servers even when they move</li>
    <li><strong>Easy Changes</strong>: Update rules in one spot instead of on 50 devices</li>
  </ul>
  
  <h2>Benefits</h2>
  <p>Perfect for companies using cloud services or where computers move around a lot. Much easier to manage than the old way.</p>`
  },
  {
    id: 4,
    title: "Big Walls vs Tiny Walls",
    description: "Understand the difference between macro and micro segmentation",
    order: 4,
    duration: 13,
    topic: "Concepts",
    icon: "layers",
    content: `<h1>Big Walls vs Tiny Walls</h1>
  
  <h2>Two Levels of Protection</h2>
  <p>Network segmentation comes in two sizes:</p>
  
  <h3>Big Walls (Macro-segmentation)</h3>
  <ul>
    <li>Separates big areas (like "Office Network" from "Factory Network")</li>
    <li>Like having different floors in a building</li>
    <li>Easy to understand but not very detailed</li>
  </ul>
  
  <h3>Tiny Walls (Microsegmentation)</h3>
  <ul>
    <li>Separates individual machines or applications</li>
    <li>Like having locked doors between every office</li>
    <li>More work to set up but much more secure</li>
  </ul>
  
  <h2>Hospital Example</h2>
  <p><strong>Big walls</strong>: Patient Wi-Fi separate from medical devices<br>
  <strong>Tiny walls</strong>: An X-ray machine can't talk to a heart monitor, even though both are medical devices</p>
  
  <h2>Why Tiny Walls Matter</h2>
  <p>If a hacker gets past the big walls, tiny walls stop them from moving sideways to other computers. It's like having emergency doors that contain a fire to one room.</p>`
  },
  {
    id: 5,
    title: "Segmentation Helps with Rules",
    description: "Learn how segmentation makes compliance easier",
    order: 5,
    duration: 14,
    topic: "Compliance",
    icon: "shield-check",
    content: `<h1>Segmentation Helps with Rules</h1>
  
  <h2>What Are Compliance Rules?</h2>
  <p>Many industries have special rules (like PCI for credit cards, HIPAA for hospitals). These rules say you must protect certain types of data.</p>
  
  <h2>How Segmentation Helps</h2>
  <p>If you put all your sensitive data in one protected area (segment), you only have to worry about securing that area - not your whole network.</p>
  
  <h2>Credit Card Example</h2>
  <p>PCI rules require strong protection for credit card systems. If you put those systems in their own segment, only that segment needs expensive security checks - not every computer in the company.</p>
  
  <h2>Common Mistake</h2>
  <p>If your "secure segment" has holes (like allowing unnecessary connections), auditors might say "everything connected to it needs checking too." Good segmentation means clean separation.</p>
  
  <h2>Benefits</h2>
  <ul>
    <li><strong>Cheaper Audits</strong>: Fewer systems to check</li>
    <li><strong>Clear Boundaries</strong>: Easy to show what's protected</li>
    <li><strong>Less Work</strong>: Focus security efforts where they matter most</li>
  </ul>`
  },
  {
    id: 6,
    title: "Firewalls: The Traffic Cops",
    description: "Learn how firewalls control traffic between segments",
    order: 6,
    duration: 12,
    topic: "Tools",
    icon: "filter",
    content: `<h1>Firewalls: The Traffic Cops</h1>
  
  <h2>What Firewalls Do</h2>
  <p>Firewalls sit between network segments and check every message going through. They follow rules like "Office computers can talk to printers, but not to factory machines."</p>
  
  <h2>Types of Firewalls</h2>
  <ul>
    <li><strong>Old Firewalls</strong>: Check IP addresses and ports (like checking zip codes)</li>
    <li><strong>New Firewalls</strong>: Also check applications and users (like checking ID and purpose)</li>
    <li><strong>Virtual Firewalls</strong>: Software versions for cloud networks</li>
  </ul>
  
  <h2>Factory Example</h2>
  <p>A firewall between office and factory might say: "IT support can access factory computers for maintenance, but office workers can't." It checks every connection attempt.</p>
  
  <h2>Firewall vs Simple Rules</h2>
  <p>A basic rule just says "allow or deny." A firewall is smarter - it understands conversations. It knows if a message is part of an ongoing chat or a new one starting.</p>
  
  <h2>Key Jobs</h2>
  <ul>
    <li><strong>Traffic Control</strong>: Directs network traffic like a police officer</li>
    <li><strong>Logging</strong>: Keeps records of who tried to talk to who</li>
    <li><strong>Threat Blocking</strong>: Stops known bad traffic between segments</li>
  </ul>`
  },
  {
    id: 7,
    title: "Security on Each Computer",
    description: "Learn about putting security directly on servers and computers",
    order: 7,
    duration: 11,
    topic: "Modern",
    icon: "monitor",
    content: `<h1>Security on Each Computer</h1>
  
  <h2>What is Host-Based Security?</h2>
  <p>Instead of relying on network equipment, we put security rules directly on each server or computer. Each machine knows what it's allowed to do.</p>
  
  <h2>Web Server Example</h2>
  <p>A web server might have rules saying: "I will only accept website traffic (port 443) and I will only talk to my database server." Even if the server moves to a different building or cloud, these rules stay with it.</p>
  
  <h2>How It Works</h2>
  <ul>
    <li><strong>Software Agent</strong>: Small program on the computer that enforces rules</li>
    <li><strong>Built-in Firewall</strong>: Using the computer's own security features</li>
    <li><strong>Cloud Tags</strong>: Labels in cloud services that control access</li>
  </ul>
  
  <h2>Big Advantage</h2>
  <p>The rules travel with the computer. Move a server from New York to London? The security rules move too. No need to reconfigure the network.</p>
  
  <h2>Best For</h2>
  <ul>
    <li>Companies using cloud services</li>
    <li>Networks that change often</li>
    <li>Applications that move between locations</li>
  </ul>`
  },
  {
    id: 8,
    title: "Segmentation Makes Networks Faster",
    description: "Learn how breaking networks up improves performance",
    order: 8,
    duration: 10,
    topic: "Benefits",
    icon: "zap",
    content: `<h1>Segmentation Makes Networks Faster</h1>
  
  <h2>Why Networks Get Slow</h2>
  <p>In a flat network (no segments), everything talks to everything. This creates traffic jams - like one big highway with everyone trying to get everywhere.</p>
  
  <h2>How Segmentation Helps</h2>
  <p>Segmentation creates local roads. Accounting department traffic stays in accounting. Engineering traffic stays in engineering. Less congestion for everyone.</p>
  
  <h2>Broadcast Storm Example</h2>
  <p>Sometimes a broken computer sends out endless "hello" messages. In a flat network, this cripples everything. With segmentation, the problem stays in one area - like containing a spill to one room.</p>
  
  <h2>Performance Benefits</h2>
  <ul>
    <li><strong>Less Congestion</strong>: Local traffic stays local</li>
    <li><strong>Faster Critical Apps</strong>: Important systems don't get slowed down by less important traffic</li>
    <li><strong>Better Reliability</strong>: Problems in one area don't crash everything</li>
  </ul>
  
  <h2>Security vs Speed</h2>
  <p>People worry security checks will slow things down. But the speed gain from less congestion usually outweighs the tiny delay from security checks.</p>`
  },
  {
    id: 9,
    title: "Common Problems and Solutions",
    description: "Learn what can go wrong and how to fix it",
    order: 9,
    duration: 15,
    topic: "Implementation",
    icon: "alert-triangle",
    content: `<h1>Common Problems and Solutions</h1>
  
  <h2>Biggest Challenges</h2>
  <p>Adding segmentation to an existing network can be tricky. The main problems are:</p>
  
  <h3>1. Finding All Connections</h3>
  <p>Old applications might have hidden connections you don't know about. Block the wrong thing and important apps break.</p>
  
  <h3>2. Balancing Security and Access</h3>
  <p>Too strict: People can't work. Too loose: Not secure enough. Finding the middle ground takes work.</p>
  
  <h3>3. Managing Changes</h3>
  <p>Every new application needs new rules. Without good processes, this becomes a mess.</p>
  
  <h2>How to Succeed</h2>
  <ul>
    <li><strong>Start Small</strong>: Don't try to fix everything at once</li>
    <li><strong>Use Tools</strong>: Software that maps connections automatically</li>
    <li><strong>Plan for Change</strong>: Make rules easy to update</li>
  </ul>
  
  <h2>Legacy System Example</h2>
  <p>A 20-year-old accounting system might need to talk to 15 different servers in weird ways. You need to discover all these connections before building walls, or the system breaks.</p>`
  },
  {
    id: 10,
    title: "Zero Trust: The Future",
    description: "Learn about the latest approach to network security",
    order: 10,
    duration: 14,
    topic: "Modern",
    icon: "lock",
    content: `<h1>Zero Trust: The Future</h1>
  
  <h2>Old Thinking vs New Thinking</h2>
  <p><strong>Old way</strong>: "If you're inside our network, we trust you"<br>
  <strong>New way (Zero Trust)</strong>: "We don't trust anyone, even if they're already inside"</p>
  
  <h2>How Zero Trust Works</h2>
  <p>Every request gets checked. Every time. It doesn't matter if you're in the office or at home. You prove who you are and only get what you need.</p>
  
  <h2>VPN vs Zero Trust Example</h2>
  <ul>
    <li><strong>VPN</strong>: Connect to office network, then access many things</li>
    <li><strong>Zero Trust</strong>: Connect directly to one application, nothing else</li>
  </ul>
  
  <h2>Zero Trust + Segmentation</h2>
  <p>Zero Trust takes segmentation to the extreme. Instead of just separating networks, it separates every user and application. Two parts work together:</p>
  <ul>
    <li><strong>User Access</strong>: Controls people reaching applications</li>
    <li><strong>Microsegmentation</strong>: Controls applications talking to each other</li>
  </ul>
  
  <h2>Benefits</h2>
  <ul>
    <li><strong>Work From Anywhere</strong>: Same security at home or office</li>
    <li><strong>Smaller Target</strong>: Hackers can't see your whole network</li>
    <li><strong>Simple Rules</strong>: "Only give access to what's needed"</li>
  </ul>`
  }

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
