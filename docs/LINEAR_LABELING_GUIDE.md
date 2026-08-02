# Linear Project Management: Label System Guide

**Version:** 1.0  
**Last Updated:** August 1, 2025  
**Project:** Effuse Labs Website Development

---

## 📋 Overview

This guide establishes the comprehensive labeling system for the Effuse Labs project in Linear, ensuring consistent project management practices and enabling powerful filtering and analytics capabilities.

### Why This System?

✅ **Clear Categorization**: One label per group eliminates confusion  
✅ **Powerful Filtering**: Find exactly what you need quickly  
✅ **Sprint Tracking**: Measure velocity and progress accurately  
✅ **Resource Planning**: Balance domains and effort levels  
✅ **Component Organization**: Track UI development systematically

---

## 🏷️ Label Group Architecture

Linear's **exclusive label groups** ensure each issue gets exactly one label per category, creating clear, focused classification.

### Group 1: Development Phases

_Sprint and timeline tracking_

| Label      | Color     | Description                               | Usage        |
| ---------- | --------- | ----------------------------------------- | ------------ |
| `Sprint-1` | `#4CAF50` | Project Setup & Environment Configuration | ✅ Completed |
| `Sprint-2` | `#2196F3` | Core Infrastructure & UI Foundation       | 🔄 Current   |
| `Sprint-3` | `#9C27B0` | Layout Components & Navigation            | ⏳ Future    |
| `Sprint-4` | `#FF9800` | Hero Section & 3D Graphics                | ⏳ Future    |
| `Sprint-5` | `#F44336` | Feature Sections & Content                | ⏳ Future    |
| `Sprint-6` | `#795548` | CMS Integration & Content Management      | ⏳ Future    |
| `Sprint-7` | `#607D8B` | Accessibility & Testing                   | ⏳ Future    |
| `Sprint-8` | `#E91E63` | Launch Preparation & Final Polish         | ⏳ Future    |

### Group 2: Technical Domains

_Primary expertise and technology areas_

| Label               | Color     | Description                             | When to Use                                       |
| ------------------- | --------- | --------------------------------------- | ------------------------------------------------- |
| `Frontend`          | `#22C5C3` | Next.js, React, UI components           | React components, styling, client-side            |
| `Backend`           | `#2E3440` | APIs, server-side logic                 | Server logic, database, API development           |
| `DevOps`            | `#FFD25A` | CI/CD, deployment, infrastructure       | Deployment, build systems, environment setup      |
| `Quality Assurance` | `#808285` | Testing, linting, code quality          | ESLint setup, testing frameworks, code standards  |
| `CMS Integration`   | `#8BC34A` | Sanity.io, content management           | Sanity setup, content schemas, CMS features       |
| `Animation`         | `#E91E63` | Framer Motion, 3D graphics, transitions | Motion libraries, 3D implementations, animations  |
| `Performance`       | `#FF5722` | Speed optimization, bundle size         | Optimization, speed improvements, bundle analysis |
| `Accessibility`     | `#3F51B5` | WCAG AA compliance, a11y features       | Screen reader support, keyboard navigation, WCAG  |
| `SEO`               | `#795548` | Search optimization, meta tags          | SEO implementation, meta data, search features    |

### Group 3: Work Classification

_Type and nature of work_

| Label           | Color     | Description                           | Examples                                                  |
| --------------- | --------- | ------------------------------------- | --------------------------------------------------------- |
| `Feature`       | `#4CAF50` | New functionality implementation      | New components, new features, fresh implementations       |
| `Enhancement`   | `#2196F3` | Improvements to existing features     | Performance improvements, UI polishing, feature additions |
| `Bug`           | `#F44336` | Issues and fixes                      | Bug fixes, error corrections, issue resolutions           |
| `Refactor`      | `#FF9800` | Code improvement without new features | Code cleanup, structure improvements, optimization        |
| `Research`      | `#9C27B0` | Investigation and exploration         | Technology research, approach investigation, POCs         |
| `Documentation` | `#607D8B` | Docs, guides, specifications          | README updates, guide creation, documentation             |
| `Testing`       | `#795548` | Test creation and validation          | Test writing, QA validation, testing framework setup      |

### Group 4: Effort Estimation

_Size and complexity indicators_

| Label    | Color     | Description                      | Time Estimate | Examples                                       |
| -------- | --------- | -------------------------------- | ------------- | ---------------------------------------------- |
| `XS`     | `#E8F5E8` | Quick fixes, small tweaks        | < 2 hours     | Documentation updates, small bug fixes         |
| `Small`  | `#C8E6C9` | Single component, simple feature | < 1 day       | Simple component, basic feature implementation |
| `Medium` | `#FFF3E0` | Complex component, integration   | 1-3 days      | Complex component, system integration          |
| `Large`  | `#FFEBEE` | Major feature, system change     | 3-5 days      | Major feature development, significant changes |
| `XL`     | `#FCE4EC` | Epic, major refactor             | > 1 week      | Complete system overhauls, major features      |

### Group 5: Component Areas _(Optional)_

_Application-specific sections - apply when relevant_

| Label                | Color     | Description                         | When to Use                                  |
| -------------------- | --------- | ----------------------------------- | -------------------------------------------- |
| `Navigation`         | `#E3F2FD` | Header, menus, routing              | Navigation components, menu functionality    |
| `Hero Section`       | `#F3E5F5` | Landing page hero area              | Main hero component, landing page features   |
| `Feature Sections`   | `#E8F5E8` | Dark/light feature areas            | Feature display components, content sections |
| `Footer`             | `#FFF8E1` | Footer components and links         | Footer development, footer functionality     |
| `Layout System`      | `#FCE4EC` | Grid, containers, responsive design | Layout components, responsive systems        |
| `Content Management` | `#F1F8E9` | CMS-driven content areas            | Content integration, CMS features            |
| `Forms`              | `#FFF3E0` | Contact, signup, interaction forms  | Form components, form validation             |
| `Graphics 3D`        | `#E8EAF6` | Three.js, 3D animations             | 3D implementations, WebGL features           |

---

## 📏 Label Application Rules

### Required Labels _(Always Apply)_

**Every issue MUST have these four labels:**

1. **Development Phase**: Which sprint does this belong to?
2. **Technical Domain**: What primary expertise is needed?
3. **Work Classification**: What type of work is this?
4. **Effort Estimation**: How big is this task?

### Optional Labels _(Apply When Relevant)_

5. **Component Area**: Does this affect a specific UI section?

### ❌ Label Conflicts to Avoid

**Never apply multiple labels from the same group:**

- ❌ `Sprint-1` + `Sprint-2` (choose one sprint)
- ❌ `Frontend` + `DevOps` (choose primary domain)
- ❌ `Small` + `Medium` (choose one size)

---

## 🎯 Application Examples

### Example 1: "Create Navigation Component"

```yaml
Required Labels:
  Sprint: Sprint-3 # Navigation work planned for Sprint 3
  Domain: Frontend # React/UI component work
  Type: Feature # New functionality
  Size: Medium # Complex component with mobile menu

Optional Label:
  Component: Navigation # Specifically navigation area
```

### Example 2: "Fix ESLint Configuration"

```yaml
Required Labels:
  Sprint: Sprint-1 # Code quality is Sprint 1 work
  Domain: Quality Assurance # Linting and code standards
  Type: Bug # Fixing existing configuration
  Size: Small # Quick configuration fix

Optional Label:
  Component: [none] # No specific UI component
```

### Example 3: "Implement 3D Hero Graphics"

```yaml
Required Labels:
  Sprint: Sprint-4 # Hero section planned for Sprint 4
  Domain: Animation # 3D graphics and animations
  Type: Feature # New 3D implementation
  Size: Large # Complex 3D development

Optional Label:
  Component: Graphics 3D # Specifically 3D graphics work
```

---

## 🔍 Filtering Strategies

### Common Filter Combinations

**Sprint Planning:**

```bash
Sprint-2 + Feature → All new features for current sprint
Sprint-2 + Small → Quick wins for current sprint
Sprint-2 + Frontend → All UI work for current sprint
```

**Domain Focus:**

```bash
Frontend + Medium → Multi-day UI development tasks
DevOps + Small → Quick infrastructure improvements
Quality Assurance + Feature → New testing implementations
```

**Effort Planning:**

```bash
Small + Feature → Quick feature implementations
Large + Backend → Major server-side development
XS + Bug → Quick bug fixes for immediate completion
```

**Component Development:**

```bash
Navigation + Frontend → All navigation-related UI work
Hero Section + Animation → Hero area motion work
Layout System + Frontend → Design system development
```

---

## 📊 Project Analytics

### Sprint Velocity Tracking

Monitor completion rates by effort size:

```bash
Sprint-1: 2 Medium + 3 Small = 5 tasks (baseline velocity)
Sprint-2: Compare completion rate against Sprint-1 baseline
```

### Domain Workload Balance

Track resource allocation:

```bash
Frontend: 60% of issues → UI-heavy development
DevOps: 30% of issues → Infrastructure focus
Quality Assurance: 10% of issues → Quality maintenance
```

### Effort Calibration

Validate size estimates:

```bash
Small tasks: Actually completed in < 1 day?
Medium tasks: Actually took 1-3 days?
Large tasks: Required 3-5 days as estimated?
```

---

## 🛠️ Best Practices

### For Issue Creation

1. **Always start with required labels** (Sprint, Domain, Type, Size)
2. **Choose the PRIMARY domain** if work spans multiple areas
3. **Estimate conservatively** - better to overestimate than underestimate
4. **Add component labels** only when work is component-specific

### For Sprint Planning

1. **Filter by current sprint** to see active work
2. **Balance effort sizes** - mix Small, Medium, Large tasks
3. **Group by domain** to assign to specialists
4. **Track velocity** using effort completion rates

### For Progress Tracking

1. **Use sprint labels** to measure completion
2. **Monitor domain distribution** for resource planning
3. **Calibrate effort estimates** based on actual completion times
4. **Update labels** if scope or domain changes

---

## 🔗 Integration with Linear Features

### Native Linear Features _(Use Instead of Labels)_

- **Status**: Use Linear's built-in status (Backlog, In Progress, Done, etc.)
- **Priority**: Use Linear's priority system (Urgent, High, Normal, Low)
- **Assignee**: Use Linear's assignment feature
- **Due Date**: Use Linear's date tracking

### Label System Complements

- **Labels**: Focus on categorization and filtering
- **Status**: Track workflow progression
- **Priority**: Indicate urgency and importance
- **Assignee**: Show responsibility and ownership

---

## 📋 Quick Reference

### Label Creation Checklist

- [x] `Sprint-1` through `Sprint-8` created
- [x] All Technical Domain labels created
- [x] All Work Classification labels created
- [x] All Effort Estimation labels created
- [x] All Component Area labels created
- [x] Label groups configured as exclusive

### Issue Labeling Checklist

- [ ] Sprint label applied (required)
- [ ] Domain label applied (required)
- [ ] Type label applied (required)
- [ ] Size label applied (required)
- [ ] Component label applied (if relevant)
- [ ] No duplicate group labels applied

---

## 📚 Related Documentation

- **[Development Status Dashboard](./DEVELOPMENT_STATUS.md)** - Sprint progress and metrics
- **[Development Plan](./DEVELOPMENT_PLAN.md)** - Technical roadmap and sprint details
- **[Project README](../README.md)** - Project overview and setup
- **[Linear Project Dashboard](https://linear.app/scootr-ca/project/effuseio-7194bedc3fdf)** - Live project management

---

**🏷️ Label System Version 1.0 - Comprehensive project categorization for the Effuse Labs website development.**
