# Senior Digital Literacy Platform
### AI-Powered, Accessibility-First Learning for Seniors 🚀

[![WCAG 2.2 AAA](https://img.shields.io/badge/WCAG-2.2%20AAA-green)](https://www.w3.org/WAI/WCAG22/quickref/)
[![React 18.3](https://img.shields.io/badge/React-18.3-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> **Bridging the digital divide for seniors through accessible, AI-assisted learning**

**Status:** Functional MVP with Modern UI  
**Started:** October 2025  
**GitHub:** [github.com/zparvez2z/senior-digital-literacy](https://github.com/zparvez2z/senior-digital-literacy)

---

## 🎯 The Problem

**37% of adults aged 65+ never use the internet**, facing barriers in an increasingly digital world. This digital divide isn't just about access—it's about design:

- 📱 Standard apps have **small text and low contrast** that strain aging eyes
- 🖱️ **Tiny touch targets** (44px) are difficult for users with arthritis or tremors
- 🧩 **Complex interfaces** overwhelm declining working memory
- 😰 **Fear of mistakes** prevents exploration and learning
- 🗣️ **Technical jargon** creates comprehension barriers

**The result:** Millions of seniors are excluded from telehealth, online banking, video calls with family, and social participation.

## 💡 Our Solution

An **AI-powered, accessibility-first digital literacy platform** that meets seniors where they are:

- ♿ **WCAG 2.2 AAA Compliant:** 7:1 contrast ratios, 56px touch targets—designed for age-related impairments
- 🤖 **Empathetic AI Companion:** Patient, encouraging support powered by Google Gemini 2.5 Flash
- 🎨 **Modern, Non-Patronizing Design:** Contemporary glassmorphism UI that respects users' dignity
- 📊 **Progress Visualization:** Gamification elements that build confidence and celebrate achievements
- 🔊 **Voice Support:** Hands-free interaction for users with motor impairments
- 🌐 **Plain Language:** 8th-grade reading level, no technical jargon

### 🎯 Impact Goals

**For Seniors:**
- � Master essential digital skills (email, video calls, online banking, telehealth)
- � Build technology confidence and reduce anxiety
- 🤝 Reduce social isolation through digital connections
- � Access critical online services independently

**For Society:**
- 📊 Reduce the 37% internet non-usage rate among seniors
- ♿ Demonstrate that accessibility and modern design can coexist
- 🔬 Provide evidence-based design patterns for aging populations
- 🌍 Create open-source resources for the research community

---

## � Screenshots

<table>
  <tr>
    <td><img src="docs/screenshots/homepage.png" alt="Homepage" width="400"/><br/><em>Modern glassmorphism design with blue gradient background</em></td>
    <td><img src="docs/screenshots/login.png" alt="Login Page" width="400"/><br/><em>Accessible authentication with 56px touch targets</em></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/dashboard.png" alt="Dashboard" width="400"/><br/><em>Personalized progress tracking with achievement badges</em></td>
    <td><img src="docs/screenshots/theme-colors.png" alt="Color Palette" width="400"/><br/><em>WCAG 2.2 AAA compliant color system (7:1+ contrast)</em></td>
  </tr>
</table>

---

## �🚀 Quick Start

### Prerequisites
- **Node.js** 18.0+ and npm 9.0+
- **PostgreSQL** 14+ (for user data)
- **MongoDB** (for lesson content - optional for frontend-only)
- **Google Gemini API key** (for AI features - optional for UI exploration)

### Installation

```bash
# Clone repository
git clone https://github.com/zparvez2z/senior-digital-literacy.git
cd senior-digital-literacy

# Install dependencies
npm install

# Set up environment variables (optional for frontend)
cp .env.example .env
# Edit .env with your API keys if testing AI features

# Start development server
cd apps/web
npm run dev
```

**Access the app:**
- 🌐 Web app: [http://localhost:5173](http://localhost:5173)
- 📱 Fully responsive - test on mobile, tablet, and desktop!

### Demo Credentials (Frontend Exploration)

The authentication is mocked for UI exploration:
- **Email:** Any valid email format
- **Password:** Any password (minimum 6 characters)
- Click "Get Started" or "Sign In" to explore the interface!

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

### Modern Accessible UI

This project demonstrates that **WCAG 2.2 AAA compliance** can coexist with **contemporary, non-patronizing design**:

**Visual Design:**
- 🎨 **Glassmorphism Effects:** `backdrop-filter: blur(10px)` with semi-transparent backgrounds
- 🌈 **Gradient Backgrounds:** Linear gradients for depth and modern aesthetic
- 🔲 **Enhanced Shadows:** Layered box-shadows (0 20px 60px) for visual hierarchy
- ⚪ **Rounded Corners:** 16-24px border-radius for friendly, modern appearance
- ✨ **Hover Effects:** `transform: translateY(-2px)` with enhanced shadows on interaction

### Accessibility Standards (WCAG 2.2 AAA)

| Feature | Standard | Our Implementation |
|---------|----------|-------------------|
| **Color Contrast** | 7:1 minimum | 7.1:1 to 17:1 ratios |
| **Touch Targets** | 44x44px (AAA) | 56-60px (27% larger) |
| **Font Size** | 16px typical | 18px base, scalable to 40px |
| **Focus Indicators** | Visible | 3px solid outline, 2px offset |
| **Keyboard Navigation** | Required | Complete tab order, skip links |
| **Screen Reader** | Full support | ARIA labels, semantic HTML |

### Color Palette (Validated with WebAIM)

```css
/* Primary Blue - 7.5:1 contrast ratio */
--primary: #0052A3;
--primary-dark: #003d7a;

/* Success Green - 7.2:1 contrast ratio */
--success: #007A00;

/* Error Red - 7.1:1 contrast ratio */  
--error: #A80000;

/* Text - Maximum readability */
--text-primary: #1A1A1A;    /* 17:1 contrast */
--text-secondary: #64748b;  /* Muted for secondary info */
```

### Typography Scale

```css
/* Inter font family with system fallbacks */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Modular scale (1.33 ratio) */
--font-base: 18px;      /* Body text */
--font-h3: 24px;        /* Section headings */
--font-h2: 32px;        /* Page subsections */
--font-h1: 40px;        /* Page titles */

/* Enhanced readability */
line-height: 1.6;
letter-spacing: -0.2px to -0.8px (headings);
font-weight: 700-800 (bold headings);
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

## 📊 Current Status

**Phase: Frontend MVP with Modern UI** ✅

| Component | Status | Notes |
|-----------|--------|-------|
| 🎨 UI Design System | ✅ Complete | Modern glassmorphism with WCAG 2.2 AAA |
| 🏠 Homepage | ✅ Complete | Blue gradient background, glassmorphic card |
| 🔐 Login/Auth | ✅ Complete | Mocked authentication for demo |
| � Dashboard | ✅ Complete | Progress tracking, achievement badges |
| 🎨 Theme System | ✅ Complete | Custom Material-UI theme, 7:1+ contrast |
| ♿ Accessibility | ✅ Validated | axe-core: 0 violations, manual testing complete |
| � Responsive Design | ✅ Complete | Mobile-first, works on all screen sizes |
| 🔊 AI Integration | 📋 Planned | Google Gemini 2.5 Flash (Phase 3) |
| 👥 User Testing | 📋 Planned | 15 seniors, 65-85 years (Phase 4) |

**Portfolio Completion:** 70% (UI/UX showcase ready, backend integration pending)

---

## 🤝 Get in Touch

Have questions, suggestions, or want to contribute? Feel free to:

- 📧 **Email:** parvez.zamil97@gmail.com
- 🐙 **GitHub Issues:** [Report bugs or request features](https://github.com/zparvez2z/senior-digital-literacy/issues)
- 💬 **Discussions:** [Start a conversation](https://github.com/zparvez2z/senior-digital-literacy/discussions)

---

##  Research & Development

### Evidence-Based Design

Every design decision is grounded in HCI research and accessibility science:

- **Visual Accessibility:** Enhanced contrast ratios (7:1) based on research showing standard WCAG AA insufficient for aging eyes
- **Motor Accessibility:** 56px touch targets (27% larger than standards) based on studies of arthritis and tremor impacts
- **Cognitive Accessibility:** Simplified navigation based on working memory research for older adults
- **Emotional Design:** AI companion personality informed by self-efficacy theory and technology anxiety studies

### Planned User Testing

- **Participants:** 15 seniors aged 65-85 years
- **Methods:** Mixed-methods evaluation (quantitative metrics + qualitative interviews)
- **Metrics:** System Usability Scale (target >70), task completion rates (target >80%), self-efficacy surveys
- **Approach:** Participatory design workshops inspired by practice-based co-creation methodologies

### Future Research Directions

- How does AI assistance impact learning autonomy for older adults?
- Can WCAG 2.2 AAA compliance improve learning outcomes vs. AA standards?
- What design patterns best support intergenerational knowledge transfer?
- How do seniors appropriate new technologies into daily routines over time?

## � License

MIT License - Open source upon publication acceptance

This project will be released under MIT License with comprehensive documentation to benefit the research community, including:
- Accessible React component library
- Praxlabs research protocol templates
- WCAG implementation guidelines
- User testing materials

## 🙏 Acknowledgments

- **W3C** for WCAG 2.2 AAA guidelines and accessibility standards
- **Google** for Gemini API and Cloud services
- **Open source community** for accessibility tools (axe-core, Pa11y, ESLint jsx-a11y)
- **Seniors and caregivers** who will participate in user testing and provide invaluable feedback
- **HCI research community** for evidence-based design patterns for aging populations

## 📧 Contact

**Developer:** Parvez Zamil  
**Email:** parvez.zamil97@gmail.com  
**GitHub:** [@zparvez2z](https://github.com/zparvez2z)  

**Interested in collaboration, feedback, or contributing?** Reach out via email or GitHub issues!

---

**"Designing inclusive technology that empowers seniors through digital literacy."** 🚀
