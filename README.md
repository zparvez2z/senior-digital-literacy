# Senior Digital Literacy - AI-Assisted Learning Platform
## Empowering Seniors Through Technology Education

**Status:** MVP Development (Phase 2)  
**Version:** 0.1.0  
**Started:** October 30, 2025  
**Target Launch:** June 2026

---

## 🎯 Project Overview

An AI-powered, accessibility-first platform that helps seniors (65+) develop digital literacy skills through personalized, adaptive learning experiences with empathetic AI assistance.

### Key Features
- ✅ **AI Companion:** 24/7 patient support with Google Gemini
- ✅ **Personalized Learning:** Adaptive curriculum based on skill level
- ✅ **WCAG 2.2 AAA Compliant:** Maximum accessibility
- ✅ **Voice Support:** Google Cloud Speech for hands-free learning
- ✅ **Progress Tracking:** Visual dashboards with achievements
- ✅ **Safe Practice:** Simulated environments for risk-free learning

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0+ 
- npm 9.0+
- Python 3.10+ (for backend)
- PostgreSQL 14+
- Redis 7+

### Installation

```bash
# Clone repository
git clone <repo-url>
cd senior-digital-literacy

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your API keys

# Start development servers
npm run dev
```

This starts:
- Web app: http://localhost:5173
- Backend API: http://localhost:3001
- Mobile: Metro bundler

---

## 📁 Project Structure

```
senior-digital-literacy/
├── apps/
│   ├── web/              # React web application
│   │   ├── src/
│   │   │   ├── components/    # Reusable UI components
│   │   │   ├── pages/         # Route pages
│   │   │   ├── store/         # Redux state management
│   │   │   ├── theme/         # MUI theme (WCAG AAA)
│   │   │   └── services/      # API clients
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   └── package.json
│   │
│   └── mobile/           # React Native application
│       ├── src/
│       ├── ios/
│       ├── android/
│       └── package.json
│
├── backend/
│   ├── services/
│   │   ├── auth/         # Authentication service (Node.js)
│   │   ├── learning/     # Learning content service
│   │   ├── ai/           # AI chatbot service (Python)
│   │   └── analytics/    # Analytics service
│   └── shared/
│       ├── database/     # DB schemas and migrations
│       └── middleware/   # Shared middleware
│
├── shared/               # Shared TypeScript code
│   ├── types/           # Type definitions
│   ├── constants/       # App constants
│   └── utils/           # Utility functions
│
├── package.json         # Root package (workspace config)
├── tsconfig.json        # TypeScript configuration
├── .eslintrc.js         # ESLint (with jsx-a11y)
└── .prettierrc          # Code formatting
```

---

## 🛠️ Technology Stack

### Frontend
- **Framework:** React 18.3 with TypeScript
- **Build Tool:** Vite 5.1.4
- **UI Library:** Material-UI 5.15 (customized for accessibility)
- **State Management:** Redux Toolkit 2.2
- **Routing:** React Router 6.22
- **Mobile:** React Native 0.76 (New Architecture)

### Backend
- **API:** Node.js with Express (REST)
- **AI Service:** Python with FastAPI
- **Database:** PostgreSQL + MongoDB
- **Cache:** Redis
- **Queue:** RabbitMQ / AWS SQS

### AI/ML
- **LLM:** Google Gemini 2.0 Flash
- **Embeddings:** Gemini text-embedding-004
- **Vector DB:** Pinecone
- **Voice:** Google Cloud Speech API
- **ML Framework:** TensorFlow / PyTorch

### Infrastructure
- **Cloud:** AWS (EKS, RDS, S3, CloudFront)
- **Orchestration:** Kubernetes
- **CI/CD:** GitHub Actions
- **Monitoring:** Datadog / Prometheus

---

## 🎨 Design System

### Accessibility (WCAG 2.2 AAA)
- **Font Size:** 18px base, scalable to 40px
- **Touch Targets:** 56x56px minimum
- **Color Contrast:** 7:1 minimum ratio
- **Focus Indicators:** 3px solid outline
- **Screen Reader:** Full support (ARIA labels)
- **Keyboard Navigation:** Complete tab order

### Color Palette
```css
/* Primary Colors */
--primary: #0052A3;      /* 7.5:1 contrast */
--secondary: #FF8800;    /* High visibility */

/* Semantic Colors */
--success: #007A00;      /* 7.2:1 contrast */
--error: #A80000;        /* 7.1:1 contrast */
--warning: #6B5400;      /* 7.0:1 contrast */

/* Text */
--text-primary: #000000; /* Maximum contrast */
--text-secondary: #333333;
```

### Typography
```css
/* Font Sizes */
--font-base: 18px;
--font-large: 24px;
--font-xlarge: 32px;
--font-xxlarge: 40px;

/* Line Height */
--line-height: 1.6;      /* Enhanced readability */
```

---

## 🧪 Development

### Running Tests
```bash
# Unit tests (all workspaces)
npm test

# Web app tests only
npm run test:web

# E2E tests
npm run test:e2e

# Accessibility tests
npm run test:a11y
```

### Linting & Formatting
```bash
# Lint all files
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Type checking
npm run type-check
```

### Building
```bash
# Build web app
npm run build:web

# Build mobile apps
npm run build:mobile

# Build all
npm run build
```

---

## 🔑 Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/senior_digital_literacy
MONGODB_URI=mongodb://localhost:27017/senior_digital_literacy

# Google AI
GOOGLE_AI_API_KEY=your_gemini_api_key_here
GOOGLE_APPLICATION_CREDENTIALS=path/to/service-account.json

# Pinecone
PINECONE_API_KEY=your_pinecone_api_key_here
PINECONE_ENVIRONMENT=us-east-1-aws

# JWT
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=1h

# OAuth
GOOGLE_CLIENT_ID=your_google_oauth_client_id
FACEBOOK_APP_ID=your_facebook_app_id

# Redis
REDIS_URL=redis://localhost:6379

# AWS (optional)
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
S3_BUCKET_NAME=senior-digital-literacy-content
```

---

## 📖 Documentation

- **[Phase 1 Executive Summary](/Phase1_Executive_Summary.md)** - Project overview
- **[Technical Architecture](/Phase1_Technical_Architecture.md)** - System design
- **[UI/UX Wireframes](/Phase1_UIUX_Wireframes.md)** - Design specifications
- **[Phase 2 Technical Reference](/Phase2_Technical_Reference.md)** - Latest tech docs
- **[Phase 2 Implementation Guide](/Phase2_Implementation_Guide.md)** - Week-by-week plan
- **[Phase 2 Launch Summary](/Phase2_Launch_Summary.md)** - Current progress

---

## 🧑‍💻 Contributing

### Code Standards
- ✅ TypeScript strict mode
- ✅ ESLint with jsx-a11y rules
- ✅ Prettier formatting
- ✅ 100% accessible components
- ✅ Unit tests for all features
- ✅ Documentation for complex code

### Git Workflow
1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes with clear commits
3. Run tests: `npm test`
4. Check accessibility: `npm run test:a11y`
5. Submit PR with description

### Definition of Done
- [ ] Code reviewed and approved
- [ ] All tests passing
- [ ] Accessibility tests passing
- [ ] Manual keyboard navigation tested
- [ ] Screen reader tested (NVDA/VoiceOver)
- [ ] Documentation updated
- [ ] Tested by senior user (if applicable)

---

## 📝 Accessibility Testing

### Automated Tools
```bash
# Run axe-core accessibility tests
npm run test:a11y

# Lighthouse CI
npm run lighthouse

# Pa11y automated scan
npm run pa11y
```

### Manual Testing Checklist
- [ ] Keyboard navigation (Tab, Enter, Esc)
- [ ] Screen reader (NVDA on Windows, VoiceOver on Mac)
- [ ] Color contrast (7:1 minimum)
- [ ] Focus indicators visible
- [ ] Touch targets ≥56px
- [ ] No keyboard traps
- [ ] Skip navigation works
- [ ] ARIA labels present

---

## 🐛 Known Issues

### Phase 2 (MVP)
- [ ] None yet - just started!

### Future Enhancements
- [ ] Offline mode for downloaded lessons
- [ ] AR practice environments
- [ ] Smartwatch integration
- [ ] Multi-language support (Phase 4)

---

## 📊 Current Progress

**Phase 2: MVP Development** (Weeks 5-12)

| Task | Status | Progress |
|------|--------|----------|
| Project Setup | ✅ Complete | 100% |
| Technical Documentation | ✅ Complete | 100% |
| Auth Service | 🔄 In Progress | 10% |
| Component Library | 📋 Planned | 0% |
| Learning Modules | 📋 Planned | 0% |
| AI Integration | 📋 Planned | 0% |
| Progress Dashboard | 📋 Planned | 0% |
| User Testing | 📋 Planned | 0% |

**Overall Progress:** Week 5, Day 1 - 15% Complete

---

## 🤝 Support

### For Developers
- **Issues:** GitHub Issues
- **Slack:** #senior-digital-literacy
- **Email:** dev@seniordigitalliteracy.com

### For Users (Future)
- **Help Center:** help.seniordigitalliteracy.com
- **AI Assistant:** In-app 24/7
- **Phone:** 1-800-SENIORS
- **Email:** support@seniordigitalliteracy.com

---

## 📜 License

Proprietary - All Rights Reserved

---

## 🙏 Acknowledgments

- AARP for technology adoption research
- W3C for WCAG guidelines
- Google for Gemini API and Cloud services
- Senior community beta testers
- Open source accessibility community

---

**"Let's make technology accessible to everyone, regardless of age."** 🚀

*Last Updated: October 30, 2025*
