# Task 4: Personal Blog Homepage

## 🎯 Task Requirements
- Build a homepage for a personal blog showing blog posts in a card layout
- Add a simple header with the blog title
- Display blog post cards (title, image, short description, date)
- Add a category filter to switch between types of posts (Tech, Travel, Food, Lifestyle)
- Limit visible posts per page
- **Bonus:** Add a search input to filter posts by title keyword

## 🎨 Design Specifications
- **Primary Color:** #2563EB (consistent with previous tasks)
- **Background:** #F8FAFC (light), #FFFFFF (white)
- **Text:** #1E293B (dark), #64748B (gray)
- **Accent Colors:** #10B981 (success), #EF4444 (food), #8B5CF6 (travel), #EC4899 (lifestyle)
- **Fonts:** Inter (body), Playfair Display (headings)

## ✨ Features Implemented

### ✅ Core Requirements
- **Responsive Header** with navigation and search toggle
- **Hero Section** with category pills
- **Featured Posts** section with 2 highlighted articles
- **10 Blog Posts** with cards (title, image, description, date, read time)
- **Category Filter** with 5 categories (All, Tech, Travel, Food, Lifestyle)
- **Pagination** with 6 posts per page
- **Complete Footer** with social links and contact info

### ✅ Bonus Features
- **Search Functionality** to filter posts by title/keyword
- **Real-time filtering** with no results message
- **Mobile-responsive** hamburger menu
- **Sticky header** with blur effect
- **Smooth scroll** animations
- **Active navigation** highlighting
- **Newsletter signup** form
- **Read time** indicators on posts

## 📱 Responsive Breakpoints

| Device | Breakpoint | Grid Layout |
|--------|------------|-------------|
| Desktop | >1024px | 3 columns |
| Tablet | 768px - 1024px | 2 columns |
| Mobile | <768px | 1 column |
| Small Mobile | <480px | Optimized spacing |

## 🗂️ Blog Categories

| Category | Color | Post Count |
|----------|-------|------------|
| Tech | #2563EB | 3 posts |
| Travel | #8B5CF6 | 2 posts |
| Food | #EF4444 | 3 posts |
| Lifestyle | #EC4899 | 2 posts |

## 🔍 Filtering Features

### Category Filter
- Click category pills in hero section
- Click filter buttons above posts grid
- Active category highlighted
- Smooth transitions between filters

### Search Filter
- Click search icon to open search bar
- Search by title or content keywords
- Real-time filtering as you type
- "No results" message when no matches found
- Clear search to return to category view

## 📄 Pagination
- 6 posts per page
- Page numbers update based on visible posts
- Next button for navigation
- Hidden pages when filtered results change

## 🛠️ Technologies Used
- HTML5
- CSS3 (Flexbox, Grid, Animations, Variables)
- Vanilla JavaScript (ES6+)
- Font Awesome 6 (icons)
- Google Fonts (Inter, Playfair Display)

## 🎨 Key CSS Features
- CSS Custom Properties for theming
- Flexbox and Grid layouts
- Smooth transitions and hover effects
- Backdrop filter for sticky header
- Gradient text effects
- Card hover animations
- Mobile-first approach

## 📦 Project Structure
