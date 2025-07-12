# Wind Electric E-commerce Demo

A fully client-side e-commerce demo web app for wind electric generators with a Bitbucket-inspired design theme.

## 🚀 Features

- **Complete E-commerce Experience**: Product catalog, cart, checkout, and user authentication
- **Bitbucket-Inspired Design**: Deep blues, soft grays, and professional color palette
- **Dark Mode Support**: Toggle between light and dark themes with localStorage persistence
- **GSAP Animations**: Smooth scroll-triggered animations and micro-interactions
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Mock Data**: Realistic product data, testimonials, and user interactions

## 🛠️ Tech Stack

- **Frontend**: Vite + React (JavaScript)
- **Styling**: Tailwind CSS v3.x with custom design system
- **Animations**: GSAP for scroll triggers and micro-interactions
- **Icons**: Lucide React
- **State Management**: Zustand with localStorage persistence
- **Routing**: React Router DOM

## 📦 Pages

1. **Home** (`/`) - Landing page with hero section, benefits, and testimonials
2. **Products** (`/products`) - Product catalog with filtering and sorting
3. **Product Detail** (`/product/:id`) - Individual product pages with specs and reviews
4. **Cart** (`/cart`) - Shopping cart with quantity controls
5. **Checkout** (`/checkout`) - Amazon-style checkout process
6. **About** (`/about`) - Company information and team
7. **Contact** (`/contact`) - Contact form and company details
8. **Login** (`/login`) - User authentication
9. **Register** (`/register`) - User registration
10. **404** (`/404`) - Not found page

## 🎨 Design System

### Color Palette (Bitbucket-Inspired)
- **Primary**: Deep blues (#0ea5e9 to #082f49)
- **Secondary**: Soft grays (#f8fafc to #020617)
- **Accent**: Purple gradients (#d946ef to #4a044e)
- **Success**: Green (#22c55e)
- **Warning**: Orange (#f59e0b)
- **Error**: Red (#ef4444)

### Typography
- **Primary Font**: Inter (system fallback)
- **Display Font**: Poppins (for headings)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd wind-electric-ecommerce
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🔐 Demo Credentials

For testing the authentication features:
- **Email**: `demo@windelectric.com`
- **Password**: `password`

## 📱 Features Demo

### Shopping Experience
- Browse products with advanced filtering
- Add items to cart with quantity controls
- Complete checkout process with form validation
- Responsive design across all devices

### User Interface
- Dark/light mode toggle
- Smooth animations and transitions
- Professional Bitbucket-inspired design
- Accessible with proper focus states

### Mock Data
- 6 realistic wind turbine products
- Customer testimonials and reviews
- Company statistics and achievements
- Team member profiles

## 🎯 Key Components

### State Management
- **Cart Store**: Shopping cart with localStorage persistence
- **Auth Store**: User authentication state
- **Theme Store**: Dark/light mode preferences
- **Filter Store**: Product filtering and sorting

### Animations
- GSAP scroll-triggered animations
- Micro-interactions on hover and click
- Smooth page transitions
- Loading states and feedback

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Products.jsx    # Product catalog
│   ├── ProductDetail.jsx # Individual product
│   ├── Cart.jsx        # Shopping cart
│   ├── Checkout.jsx    # Checkout process
│   ├── About.jsx       # Company info
│   ├── Contact.jsx     # Contact form
│   ├── Login.jsx       # Authentication
│   ├── Register.jsx    # User registration
│   └── NotFound.jsx    # 404 page
├── store/              # Zustand stores
│   └── index.js        # State management
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Adding New Products
Edit the `products` array in `src/store/index.js` to add new wind turbine products.

### Modifying Colors
Update the color palette in `tailwind.config.js` to match your brand.

### Adding Animations
Use GSAP in components for custom animations and scroll triggers.

## 📄 License

This project is for demonstration purposes. Feel free to use as a starting point for your own e-commerce projects.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue in the repository.

---

**Built with ❤️ for renewable energy enthusiasts**
