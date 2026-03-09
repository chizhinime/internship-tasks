# 🚀 Front-End Web Development Internship Tasks

## 📋 Overview

This repository contains **4 complete front-end web development projects** built as part of a 1-month internship program. Each task demonstrates different aspects of modern web development including responsive design, interactive UI components, and vanilla JavaScript functionality.

| Task | Project | Level | Key Skills |
|------|---------|-------|------------|
| 1 | Collapsible Sidebar | Level 1 | HTML, CSS, JavaScript, Animations |
| 2 | Contact Form | Level 1 | Forms, Validation, Responsive Design |
| 3 | TaskFlow One-Page Website | Level 2 | Layout, Sections, Flexbox/Grid |
| 4 | Personal Blog Homepage | Level 2 | Cards, Filtering, Search, Pagination |

---

## 📁 Project Structure

```
internship-tasks/
│
├── task1-sidebar/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
├── task2-contact-form/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
├── task3-taskflow/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
├── task4-blog-homepage/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
└── README.md (this file)
```

---

## 🎯 Task Details

### [Task 1: Collapsible Sidebar](./task1-sidebar)
A professional, responsive sidebar that collapses/expands with smooth animations.

**Features:**
- ✅ Smooth toggle animation (0.3s cubic-bezier)
- ✅ Logo with icon and text
- ✅ 5 navigation links with Font Awesome icons
- ✅ Active state highlighting (#2563EB)
- ✅ Hover effects (#F1F5F9)
- ✅ User profile section
- ✅ Fully responsive (mobile, tablet, desktop)

**Color Palette:**
- Sidebar Background: #FFFFFF
- Hover State: #F1F5F9
- Active State: #2563EB
- Text Color: #1E293B
- Border Color: #E2E8F0

---

### [Task 2: Contact Form](./task2-contact-form)
A clean, modern contact form with real-time validation and success feedback.

**Features:**
- ✅ Fully responsive design
- ✅ Real-time validation with helpful error messages
- ✅ Email format validation
- ✅ Required field validation
- ✅ Character counter for message field
- ✅ Success message with animation
- ✅ Loading state during submission
- ✅ Contact information section

**Validation Rules:**
- Full Name: Required, 2-50 characters, letters only
- Email: Required, valid format, <100 characters
- Message: Required, 10-1000 characters
- Subject: Optional

---

### [Task 3: TaskFlow One-Page Website](./task3-taskflow)
A complete SaaS landing page for a fictional task management app.

**Sections:**
- ✅ Responsive navigation bar
- ✅ Hero section with animated text and CTA
- ✅ 6 feature cards with hover effects
- ✅ Testimonials carousel with auto-play
- ✅ 3 pricing cards with "Most Popular" highlight
- ✅ Call-to-action section
- ✅ Complete footer with multiple columns

**Bonus Features:**
- Scroll-triggered animations
- Counter animations for statistics
- Floating UI elements
- Navbar blur effect on scroll
- Mobile hamburger menu

---

### [Task 4: Personal Blog Homepage](./task4-blog-homepage)
A content-driven blog with category filtering and search functionality.

**Features:**
- ✅ Responsive header with navigation
- ✅ Hero section with category pills
- ✅ Featured posts section
- ✅ 10 blog post cards with images
- ✅ Category filter (Tech, Travel, Food, Lifestyle)
- ✅ Search functionality (title + content)
- ✅ Pagination (6 posts per page)
- ✅ Newsletter signup form

**Filtering Capabilities:**
- Click category pills in hero section
- Use filter buttons above posts grid
- Real-time search as you type
- Combined filters (search + category)
- "No results" message with friendly UI

---

## 🛠️ Technologies Used

| Technology | Usage |
|------------|-------|
| HTML5 | Structure and semantics |
| CSS3 | Styling, animations, responsive design |
| JavaScript (ES6+) | Interactivity, DOM manipulation |
| Font Awesome 6 | Icons throughout all projects |
| Google Fonts | Typography (Inter, Playfair Display) |

---

## 🎨 Design System

All tasks follow a consistent design language:

### Colors
```css
--primary: #2563EB
--primary-dark: #1D4ED8
--primary-light: #60A5FA
--secondary: #10B981
--dark: #1E293B
--light: #F8FAFC
--gray: #64748B
--light-gray: #E2E8F0
--white: #FFFFFF
```

### Typography
- **Body Font:** Inter (sans-serif)
- **Heading Font:** Inter / Playfair Display (blog)
- **Base Size:** 16px
- **Line Height:** 1.6

### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1)
```

---

## 📱 Responsive Breakpoints

All projects are fully responsive across all devices:

| Device | Breakpoint | Behavior |
|--------|------------|----------|
| Desktop | >1024px | Full layout, multi-column grids |
| Tablet | 768px - 1024px | 2-column layouts, adjusted spacing |
| Mobile | <768px | Single column, hamburger menus |
| Small Mobile | <480px | Optimized typography and spacing |

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Basic understanding of HTML/CSS/JS

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/chizhinime/internship-tasks.git
   cd internship-tasks
   ```

2. **Navigate to any task folder**
   ```bash
   cd task1-sidebar
   ```

3. **Open in browser**
   - Double-click `index.html`
   - Or use Live Server in VS Code

---

## 💻 Running Each Task

### Task 1: Sidebar
```bash
cd task1-sidebar
# Open index.html in browser
# Click the ☰ button to toggle sidebar
```

### Task 2: Contact Form
```bash
cd task2-contact-form
# Open index.html
# Try submitting empty fields to see validation
# Test email format validation
```

### Task 3: TaskFlow Website
```bash
cd task3-taskflow
# Open index.html
# Scroll to see animations
# Click testimonials slider
```

### Task 4: Blog Homepage
```bash
cd task4-blog-homepage
# Open index.html
# Click category filters
# Try searching for "React" or "Bali"
```

---

## ✨ Key Features Across All Tasks

### ✅ Responsive Design
- Mobile-first approach
- Fluid layouts with CSS Grid/Flexbox
- Touch-friendly interactions

### ✅ Performance
- Vanilla JavaScript (no frameworks)
- Optimized animations
- Minimal dependencies

### ✅ Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Proper color contrast

### ✅ Code Quality
- Clean, commented code
- Consistent naming conventions
- Modular CSS structure
- ES6+ JavaScript features

---

## 📸 Screenshots

### Task 1: Collapsible Sidebar
| Expanded | Collapsed | Mobile |
|----------|-----------|--------|
| [Add screenshot] | [Add screenshot] | [Add screenshot] |

### Task 2: Contact Form
| Desktop | Mobile | Validation |
|---------|--------|------------|
| [Add screenshot] | [Add screenshot] | [Add screenshot] |

### Task 3: TaskFlow Website
| Hero | Features | Pricing |
|------|----------|---------|
| [Add screenshot] | [Add screenshot] | [Add screenshot] |

### Task 4: Blog Homepage
| Grid View | Filtered | Search |
|-----------|----------|--------|
| [Add screenshot] | [Add screenshot] | [Add screenshot] |

---

## 🧪 Testing

All tasks have been tested on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ iOS Safari
- ✅ Android Chrome

---

## 🤝 Contributing

This is a personal internship project, but suggestions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is created for educational purposes as part of a front-end development internship.

---

## 📬 Contact

**Chijioke Chizhinime** - [@ChizhinimeC](https://twitter.com/ChizhinimeC) - chizhimchijioke@gmail.com

Project Link: [https://github.com/chizhinime/internship-tasks](https://github.com/chizhinime/internship-tasks)

---

## 🙏 Acknowledgments

- Font Awesome for the amazing icons
- Google Fonts for typography
- Placehold.co for placeholder images
- Internship program for the task guidelines

---

## 📊 Task Completion Status

| Task | Status | Completion Date |
|------|--------|-----------------|
| Task 1: Collapsible Sidebar | ✅ Complete | March 2026 |
| Task 2: Contact Form | ✅ Complete | March 2026 |
| Task 3: TaskFlow Website | ✅ Complete | March 2026 |
| Task 4: Blog Homepage | ✅ Complete | March 2026 |

---

## 🎓 What I Learned

Through these 4 tasks, I gained practical experience in:

1. **HTML5** - Semantic structure, forms, accessibility
2. **CSS3** - Flexbox, Grid, animations, variables, responsive design
3. **JavaScript** - DOM manipulation, events, validation, filtering
4. **UI/UX** - Clean layouts, user feedback, mobile-first design
5. **Project Structure** - Organizing code, consistent naming, documentation

---

## 🔮 Future Improvements

- [ ] Add dark mode toggle to all projects
- [ ] Convert to React components
- [ ] Add backend integration
- [ ] Implement user authentication
- [ ] Add more interactive demos
- [ ] Optimize images and assets
- [ ] Add unit tests
- [ ] Create video demonstrations

---

## ⚡ Quick Demo Links

| Task | Live Demo |
|------|-----------|
| Task 1 | [View Demo](#) |
| Task 2 | [View Demo](#) |
| Task 3 | [View Demo](#) |
| Task 4 | [View Demo](#) |

---

**Made with ❤️ for the Front-End Web Development Internship**  
*March 2026*
