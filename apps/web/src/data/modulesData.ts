// Centralized module and lesson data

export interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string; // e.g., "15 min"
  completed: boolean;
  locked: boolean;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  progress: number;
  icon: string;
  lessons: number;
  color: string;
  detailedDescription: string;
  learningObjectives: string[];
  lessonsList: Lesson[];
}

export const modulesData: Module[] = [
  {
    id: 1,
    title: 'Email Basics',
    description: 'Learn to send, receive, and organize emails safely',
    difficulty: 'Beginner',
    estimatedTime: '2 hours',
    progress: 45,
    icon: '📧',
    lessons: 8,
    color: '#0052A3',
    detailedDescription: 'Master the fundamentals of email communication. This module will teach you how to create, send, and manage emails confidently and securely. You\'ll learn best practices for staying safe online while communicating with friends, family, and businesses.',
    learningObjectives: [
      'Create and send emails with attachments',
      'Organize your inbox with folders and labels',
      'Identify and avoid email scams',
      'Manage your contacts effectively',
      'Use email safely and securely'
    ],
    lessonsList: [
      { id: 1, title: 'Getting Started with Email', description: 'Create your first email account and explore the interface', duration: '15 min', completed: true, locked: false },
      { id: 2, title: 'Composing Your First Email', description: 'Learn to write and send professional emails', duration: '20 min', completed: true, locked: false },
      { id: 3, title: 'Reading and Replying', description: 'Check your inbox and respond to messages', duration: '15 min', completed: true, locked: false },
      { id: 4, title: 'Managing Attachments', description: 'Send and receive files safely via email', duration: '20 min', completed: true, locked: false },
      { id: 5, title: 'Organizing Your Inbox', description: 'Create folders and use labels to stay organized', duration: '15 min', completed: false, locked: false },
      { id: 6, title: 'Email Safety & Security', description: 'Recognize phishing attempts and spam', duration: '20 min', completed: false, locked: false },
      { id: 7, title: 'Managing Contacts', description: 'Build and organize your address book', duration: '10 min', completed: false, locked: true },
      { id: 8, title: 'Advanced Email Features', description: 'Signatures, auto-replies, and filters', duration: '15 min', completed: false, locked: true },
    ]
  },
  {
    id: 2,
    title: 'Video Calls',
    description: 'Connect with family and friends through video chat',
    difficulty: 'Beginner',
    estimatedTime: '1.5 hours',
    progress: 20,
    icon: '📹',
    lessons: 6,
    color: '#007A00',
    detailedDescription: 'Stay connected with loved ones through video calling. Learn how to use popular video chat platforms to see and hear family and friends, no matter where they are in the world.',
    learningObjectives: [
      'Set up and test your camera and microphone',
      'Join and host video calls',
      'Use screen sharing features',
      'Manage call settings for best quality',
      'Troubleshoot common video call issues'
    ],
    lessonsList: [
      { id: 1, title: 'Introduction to Video Calls', description: 'Understanding video calling platforms', duration: '10 min', completed: true, locked: false },
      { id: 2, title: 'Setting Up Your Equipment', description: 'Test your camera, microphone, and speakers', duration: '15 min', completed: false, locked: false },
      { id: 3, title: 'Making Your First Call', description: 'Start a video call with someone', duration: '20 min', completed: false, locked: false },
      { id: 4, title: 'Joining Group Calls', description: 'Participate in family video chats', duration: '15 min', completed: false, locked: true },
      { id: 5, title: 'Screen Sharing Basics', description: 'Share your screen during a call', duration: '15 min', completed: false, locked: true },
      { id: 6, title: 'Troubleshooting Tips', description: 'Fix common audio and video problems', duration: '15 min', completed: false, locked: true },
    ]
  },
  {
    id: 3,
    title: 'Online Banking',
    description: 'Manage your finances securely from home',
    difficulty: 'Intermediate',
    estimatedTime: '3 hours',
    progress: 0,
    icon: '🏦',
    lessons: 10,
    color: '#5B21B6',
    detailedDescription: 'Take control of your finances from the comfort of home. Learn how to safely access your bank account online, pay bills, transfer money, and monitor your transactions.',
    learningObjectives: [
      'Log in to online banking securely',
      'Check account balances and transactions',
      'Transfer money between accounts',
      'Pay bills online safely',
      'Set up alerts and notifications'
    ],
    lessonsList: [
      { id: 1, title: 'Online Banking Overview', description: 'What is online banking and why use it?', duration: '15 min', completed: false, locked: false },
      { id: 2, title: 'Creating Your Online Account', description: 'Set up secure access to your bank', duration: '20 min', completed: false, locked: false },
      { id: 3, title: 'Logging In Securely', description: 'Use strong passwords and two-factor authentication', duration: '15 min', completed: false, locked: true },
      { id: 4, title: 'Viewing Your Accounts', description: 'Check balances and transaction history', duration: '15 min', completed: false, locked: true },
      { id: 5, title: 'Transferring Money', description: 'Move funds between your accounts', duration: '20 min', completed: false, locked: true },
      { id: 6, title: 'Paying Bills Online', description: 'Set up and manage bill payments', duration: '25 min', completed: false, locked: true },
      { id: 7, title: 'Setting Up Alerts', description: 'Get notified about account activity', duration: '15 min', completed: false, locked: true },
      { id: 8, title: 'Mobile Banking Apps', description: 'Access your bank from your phone', duration: '20 min', completed: false, locked: true },
      { id: 9, title: 'Avoiding Banking Scams', description: 'Stay safe from fraud and phishing', duration: '20 min', completed: false, locked: true },
      { id: 10, title: 'Best Practices & Tips', description: 'Maintain secure online banking habits', duration: '15 min', completed: false, locked: true },
    ]
  },
  {
    id: 4,
    title: 'Social Media',
    description: 'Stay connected and share moments with loved ones',
    difficulty: 'Beginner',
    estimatedTime: '2.5 hours',
    progress: 60,
    icon: '🌐',
    lessons: 9,
    color: '#0891B2',
    detailedDescription: 'Connect with friends and family on social media platforms. Learn how to share photos, write posts, and interact with others while maintaining your privacy and security.',
    learningObjectives: [
      'Create and manage your social media profile',
      'Share photos and updates safely',
      'Connect with friends and family',
      'Adjust privacy settings',
      'Recognize and avoid social media scams'
    ],
    lessonsList: [
      { id: 1, title: 'Introduction to Social Media', description: 'Overview of popular platforms', duration: '15 min', completed: true, locked: false },
      { id: 2, title: 'Creating Your Profile', description: 'Set up your account and add information', duration: '20 min', completed: true, locked: false },
      { id: 3, title: 'Finding Friends & Family', description: 'Connect with people you know', duration: '15 min', completed: true, locked: false },
      { id: 4, title: 'Posting Updates', description: 'Share text, photos, and thoughts', duration: '20 min', completed: true, locked: false },
      { id: 5, title: 'Sharing Photos', description: 'Upload and tag photos from events', duration: '20 min', completed: true, locked: false },
      { id: 6, title: 'Commenting & Reacting', description: 'Engage with others\' posts', duration: '15 min', completed: true, locked: false },
      { id: 7, title: 'Privacy Settings', description: 'Control who sees your content', duration: '20 min', completed: false, locked: false },
      { id: 8, title: 'Social Media Safety', description: 'Avoid scams and protect your information', duration: '20 min', completed: false, locked: true },
      { id: 9, title: 'Groups & Communities', description: 'Join groups with shared interests', duration: '15 min', completed: false, locked: true },
    ]
  },
  {
    id: 5,
    title: 'Online Shopping',
    description: 'Shop safely and conveniently from your device',
    difficulty: 'Intermediate',
    estimatedTime: '2 hours',
    progress: 10,
    icon: '🛒',
    lessons: 7,
    color: '#DC2626',
    detailedDescription: 'Discover the convenience of online shopping while staying safe. Learn how to find products, compare prices, make secure purchases, and track your orders.',
    learningObjectives: [
      'Browse and search for products online',
      'Compare prices and read reviews',
      'Add items to cart and checkout securely',
      'Track orders and manage returns',
      'Identify trustworthy online retailers'
    ],
    lessonsList: [
      { id: 1, title: 'Getting Started with Online Shopping', description: 'Benefits and overview of e-commerce', duration: '15 min', completed: true, locked: false },
      { id: 2, title: 'Finding Products', description: 'Search and browse online stores', duration: '20 min', completed: false, locked: false },
      { id: 3, title: 'Reading Reviews & Comparisons', description: 'Make informed purchasing decisions', duration: '20 min', completed: false, locked: true },
      { id: 4, title: 'Creating Store Accounts', description: 'Set up accounts for faster checkout', duration: '15 min', completed: false, locked: true },
      { id: 5, title: 'Secure Checkout Process', description: 'Enter payment info safely', duration: '20 min', completed: false, locked: true },
      { id: 6, title: 'Tracking Your Orders', description: 'Monitor shipping and delivery', duration: '15 min', completed: false, locked: true },
      { id: 7, title: 'Returns & Customer Service', description: 'Handle issues with your orders', duration: '15 min', completed: false, locked: true },
    ]
  },
  {
    id: 6,
    title: 'Health Services',
    description: 'Access telehealth and manage medical appointments',
    difficulty: 'Intermediate',
    estimatedTime: '2.5 hours',
    progress: 0,
    icon: '🏥',
    lessons: 8,
    color: '#059669',
    detailedDescription: 'Take advantage of digital health services. Learn how to schedule appointments online, participate in telehealth visits, access medical records, and manage prescriptions from home.',
    learningObjectives: [
      'Schedule medical appointments online',
      'Join telehealth video consultations',
      'Access your medical records',
      'Manage prescriptions and refills',
      'Use health tracking apps'
    ],
    lessonsList: [
      { id: 1, title: 'Introduction to Digital Health', description: 'Overview of online health services', duration: '15 min', completed: false, locked: false },
      { id: 2, title: 'Patient Portal Basics', description: 'Access your medical information online', duration: '20 min', completed: false, locked: false },
      { id: 3, title: 'Scheduling Appointments', description: 'Book doctor visits online', duration: '20 min', completed: false, locked: true },
      { id: 4, title: 'Preparing for Telehealth', description: 'Set up for a virtual doctor visit', duration: '20 min', completed: false, locked: true },
      { id: 5, title: 'During Your Telehealth Visit', description: 'Tips for successful video consultations', duration: '20 min', completed: false, locked: true },
      { id: 6, title: 'Managing Prescriptions', description: 'Refill and track medications online', duration: '20 min', completed: false, locked: true },
      { id: 7, title: 'Health Tracking Apps', description: 'Monitor your health data digitally', duration: '20 min', completed: false, locked: true },
      { id: 8, title: 'Privacy & Security in Healthcare', description: 'Protect your health information', duration: '15 min', completed: false, locked: true },
    ]
  },
];

export const getModuleById = (id: number): Module | undefined => {
  return modulesData.find(module => module.id === id);
};
