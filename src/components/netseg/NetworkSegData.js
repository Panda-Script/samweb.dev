// src/components/netseg/NetworkSegData.js

export const lessons = [
  {
    id: 1,
    title: "Introduction to Network Segmentation",
    description:
      "Learn the basics of network segmentation and why it's important for security",
    order: 1,
    duration: 15,
    topic: "Fundamentals",
    icon: "book",
    content: `# Introduction to Network Segmentation
  
  ## What is Network Segmentation?
  Network segmentation is the practice of dividing a computer network into smaller, isolated subnetworks to improve security, performance, and manageability.
  
  ## Key Benefits:
  - **Enhanced Security**: Limits attack surfaces
  - **Improved Performance**: Reduces network congestion
  - **Better Compliance**: Meets regulatory requirements
  - **Simplified Troubleshooting**: Isolates network issues`,
  },
  {
    id: 2,
    title: "Types of Network Segmentation",
    description:
      "Understand different segmentation approaches and methodologies",
    order: 2,
    duration: 20,
    topic: "Fundamentals",
    icon: "layers",
    content: `# Types of Network Segmentation
  
  ## 1. Physical Segmentation
  - Separate physical networks
  - Complete isolation
  - Highest security level
  
  ## 2. Virtual LANs (VLANs)
  - Logical segmentation
  - Based on switch configuration
  - Cost-effective solution
  
  ## 3. Network Access Control
  - Policy-based access
  - User/device authentication
  - Dynamic segmentation`,
  },
  {
    id: 3,
    title: "Design Principles",
    description:
      "Learn how to design effective network segmentation strategies",
    order: 3,
    duration: 25,
    topic: "Design",
    icon: "design",
    content: `# Design Principles
  
  ## Best Practices:
  1. **Least Privilege**: Grant minimum necessary access
  2. **Defense in Depth**: Multiple security layers
  3. **Zone-Based Design**: Logical security zones
  4. **Future-Proofing**: Scalable architecture`,
  },
  {
    id: 4,
    title: "Implementation Guide",
    description: "Step-by-step guide to implementing segmentation",
    order: 4,
    duration: 30,
    topic: "Implementation",
    icon: "implementation",
    content: `# Implementation Guide
  
  ## Implementation Steps:
  1. **Assessment**: Current network analysis
  2. **Planning**: Segmentation strategy
  3. **Execution**: Gradual implementation
  4. **Testing**: Security validation`,
  },
  {
    id: 5,
    title: "Security Testing Methods",
    description: "How to test your segmentation for vulnerabilities",
    order: 5,
    duration: 20,
    topic: "Testing",
    icon: "testing",
    content: `# Security Testing Methods
  
  ## Testing Approaches:
  - **Penetration Testing**
  - **Vulnerability Scanning**
  - **Traffic Analysis**
  - **Compliance Auditing`,
  },
  {
    id: 6,
    title: "Zero Trust Architecture",
    description: "Implement Zero Trust principles in network segmentation",
    order: 6,
    duration: 25,
    topic: "Advanced",
    icon: "shield",
    content: `# Zero Trust Architecture
  
  ## Core Principles:
  - **Never Trust, Always Verify**
  - **Least Privilege Access**
  - **Micro-segmentation**
  - **Continuous Monitoring`,
  },
  {
    id: 7,
    title: "Micro-segmentation",
    description: "Advanced segmentation at the workload level",
    order: 7,
    duration: 20,
    topic: "Advanced",
    icon: "micro",
    content: `# Micro-segmentation
  
  ## What is Micro-segmentation?
  Granular segmentation at the workload or application level.
  
  ## Use Cases:
  - **Container Security**
  - **Cloud Workloads**
  - **API Protection**
  - **Data Center Security`,
  },
  {
    id: 8,
    title: "Compliance Requirements",
    description: "Understanding regulatory compliance for segmentation",
    order: 8,
    duration: 15,
    topic: "Compliance",
    icon: "compliance",
    content: `# Compliance Requirements
  
  ## Key Regulations:
  - **PCI DSS**: Payment Card Industry
  - **HIPAA**: Healthcare data
  - **GDPR**: Data privacy
  - **NIST**: Security frameworks`,
  },
  {
    id: 9,
    title: "Monitoring & Analytics",
    description: "Tools and techniques for monitoring segmented networks",
    order: 9,
    duration: 20,
    topic: "Operations",
    icon: "monitoring",
    content: `# Monitoring & Analytics
  
  ## Essential Tools:
  - **SIEM Systems**
  - **Network Traffic Analyzers**
  - **Log Management**
  - **Anomaly Detection`,
  },
  {
    id: 10,
    title: "Case Studies & Best Practices",
    description: "Real-world examples and lessons learned",
    order: 10,
    duration: 25,
    topic: "Advanced",
    icon: "case-study",
    content: `# Case Studies & Best Practices
  
  ## Successful Implementations:
  1. **Financial Institution**: PCI Compliance
  2. **Healthcare Provider**: HIPAA Compliance
  3. **E-commerce Platform**: Security Optimization
  4. **Government Agency**: Data Protection`,
  },
];

export const quizzes = [
  {
    id: 1,
    lesson_id: 1,
    questions: [
      {
        question: "What is the primary purpose of network segmentation?",
        options: [
          "To increase network speed",
          "To enhance security by isolating network segments",
          "To reduce hardware costs",
          "To simplify network cabling",
        ],
        correct_answer: 1,
        explanation:
          "Network segmentation primarily enhances security by creating isolated subnetworks that limit the spread of attacks.",
      },
      {
        question:
          "Which benefit is NOT typically associated with network segmentation?",
        options: [
          "Improved compliance",
          "Reduced attack surface",
          "Eliminates all security risks",
          "Better network performance",
        ],
        correct_answer: 2,
        explanation:
          "Segmentation reduces but doesn't eliminate all security risks.",
      },
      {
        question:
          "Network segmentation can help with which compliance requirement?",
        options: [
          "PCI DSS for payment data",
          "HIPAA for healthcare data",
          "Both A and B",
          "Neither A nor B",
        ],
        correct_answer: 2,
        explanation:
          "Network segmentation helps with various compliance requirements including PCI DSS and HIPAA.",
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
          "Which type of segmentation provides the highest security level?",
        options: [
          "Virtual LANs (VLANs)",
          "Physical segmentation",
          "Network Access Control",
          "Software-defined networking",
        ],
        correct_answer: 1,
        explanation:
          "Physical segmentation provides complete isolation, offering the highest security level.",
      },
      {
        question: "VLANs are an example of:",
        options: [
          "Physical segmentation",
          "Logical segmentation",
          "Cloud segmentation",
          "Application segmentation",
        ],
        correct_answer: 1,
        explanation:
          "VLANs (Virtual LANs) are logical segmentation implemented through switch configuration.",
      },
    ],
    passing_score: 70,
  },
  {
    id: 3,
    lesson_id: 3,
    questions: [
      {
        question: "What does 'Least Privilege' mean in network design?",
        options: [
          "Give everyone admin access",
          "Grant minimum necessary access",
          "Allow all network traffic",
          "Use the cheapest equipment",
        ],
        correct_answer: 1,
        explanation:
          "Least Privilege means granting users and systems only the minimum access necessary.",
      },
      {
        question: "Which design principle involves multiple security layers?",
        options: [
          "Least Privilege",
          "Defense in Depth",
          "Zone-Based Design",
          "Future-Proofing",
        ],
        correct_answer: 1,
        explanation:
          "Defense in Depth involves implementing multiple layers of security controls.",
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
          "What is the first step in implementing network segmentation?",
        options: [
          "Buy new equipment",
          "Assessment of current network",
          "Implement VLANs",
          "Update firewall rules",
        ],
        correct_answer: 1,
        explanation:
          "Assessment of the current network is the crucial first step in any segmentation project.",
      },
    ],
    passing_score: 70,
  },
  {
    id: 5,
    lesson_id: 5,
    questions: [
      {
        question: "Which testing method simulates real attacks?",
        options: [
          "Vulnerability Scanning",
          "Penetration Testing",
          "Traffic Analysis",
          "Compliance Auditing",
        ],
        correct_answer: 1,
        explanation:
          "Penetration Testing involves simulating real-world attacks to identify security weaknesses.",
      },
    ],
    passing_score: 70,
  },
  {
    id: 6,
    lesson_id: 6,
    questions: [
      {
        question: "What is the core principle of Zero Trust?",
        options: [
          "Trust but verify",
          "Never trust, always verify",
          "Trust internal traffic only",
          "Trust based on IP address",
        ],
        correct_answer: 1,
        explanation:
          "Zero Trust follows the principle of 'Never Trust, Always Verify' for all network traffic.",
      },
    ],
    passing_score: 70,
  },
  {
    id: 7,
    lesson_id: 7,
    questions: [
      {
        question: "Micro-segmentation is typically implemented at which level?",
        options: [
          "Network perimeter",
          "Workload or application level",
          "Data center level",
          "Building level",
        ],
        correct_answer: 1,
        explanation:
          "Micro-segmentation provides granular control at the workload or application level.",
      },
    ],
    passing_score: 70,
  },
  {
    id: 8,
    lesson_id: 8,
    questions: [
      {
        question: "Which regulation protects healthcare data?",
        options: ["PCI DSS", "HIPAA", "GDPR", "SOX"],
        correct_answer: 1,
        explanation:
          "HIPAA (Health Insurance Portability and Accountability Act) protects healthcare data.",
      },
    ],
    passing_score: 70,
  },
  {
    id: 9,
    lesson_id: 9,
    questions: [
      {
        question: "What does SIEM stand for?",
        options: [
          "Security Information and Event Management",
          "System Integration and Error Monitoring",
          "Security Inspection and Enforcement Module",
          "System Intelligence and Event Monitoring",
        ],
        correct_answer: 0,
        explanation:
          "SIEM stands for Security Information and Event Management.",
      },
    ],
    passing_score: 70,
  },
  {
    id: 10,
    lesson_id: 10,
    questions: [
      {
        question: "What should you learn from case studies?",
        options: [
          "Only theoretical concepts",
          "Real-world implementation challenges and solutions",
          "Marketing strategies",
          "Equipment pricing",
        ],
        correct_answer: 1,
        explanation:
          "Case studies provide valuable insights into real-world implementation challenges and solutions.",
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
