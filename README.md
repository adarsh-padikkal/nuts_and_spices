# 🌿 Kalyan Foods | Premium Culinary Delights

Welcome to the **Kalyan Foods** web application repository. This is a highly polished, premium landing page designed for a high-end culinary brand that specializes in delivering nature's finest quality ingredients directly to the consumer.

## ✨ Features

- **Premium Dark Aesthetic**: A stunning, modern dark theme featuring glassmorphism elements, vibrant gold (`#E6B325`), and warm spice red (`#E0472C`) accents.
- **Dynamic Hero Carousel**: An auto-playing, fully responsive image slider highlighting core products (Nuts, Spices, Cardamom, Pickles, Dry Fish) with smooth fade transitions and interactive controls.
- **Responsive Architecture**: Built with CSS Grid and Flexbox, the site seamlessly adapts to desktop, tablet, and mobile displays. Features an animated mobile hamburger navigation menu.
- **Custom Branding**: Includes scalable, custom SVG logos and favicons tailored to the brand's premium identity.
- **Modern Component Structure**: Clean, modular React component architecture (`Navbar`, `HeroCarousel`, `Products`, `About`, `Contact`, `Footer`) ensuring maintainability and scalability.

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS3 (Custom Properties, Grid, Flexbox, Animations)
- **Typography**: Google Fonts ('Outfit' for sleek body text, 'Playfair Display' for elegant headings)

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js v20.19+** installed. If you are using NVM, you can switch easily:
```bash
nvm use 20
```

### Installation

1. Clone this repository or navigate to the project directory:
```bash
cd nuts_and_spices
```

2. Install the dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

### Building for Production

To create an optimized production build, run:
```bash
npm run build
```
The compiled assets will be output to the `dist/` directory, ready to be deployed to platforms like Vercel, Netlify, or AWS.

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── About.jsx        # Legacy and Features section
│   ├── Contact.jsx      # Advanced split-layout contact form
│   ├── Footer.jsx       # Multi-column structured footer
│   ├── HeroCarousel.jsx # Dynamic image/text slider
│   ├── Navbar.jsx       # Top navigation with mobile menu
│   └── Products.jsx     # Product highlight grid
├── App.jsx              # Main application root
├── index.css            # Global stylesheet & design tokens
└── main.jsx             # React DOM entry point
public/
├── images/              # High-resolution product & hero images
└── favicon.svg          # Premium custom SVG branding icon
```

---
*Crafted with precision for a legacy of quality.*
