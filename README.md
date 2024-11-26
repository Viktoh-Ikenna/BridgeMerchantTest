# React Native Search Application

## Project Overview

This **React Native Search Application** is a dynamic and scalable solution designed to provide an intuitive product search experience. It features real-time filtering, persistent search history, and dynamic rendering of product categories and results. The app is structured following modern React Native best practices for maintainability and scalability.

---

## Key Features

### **1. Search Functionality**

-    **Real-Time Search**: Dynamically filters products and categories as the user types.
-    **Search History**:
     -    Saves search queries persistently using `AsyncStorage`.
     -    Allows removal of specific items or clearing all history.
-    **Dual Result Display**:
     -    Shows both matching products and categories based on the user's query.

### **2. Category Display**

-    Fetches product categories from the API.
-    Displays categories with dynamic images and custom background colors.
-    Fully responsive design for consistent UI across all devices.

### **3. Product Listing**

-    Dynamically fetches and displays products from the API.
-    Displays product details including:
     -    Name
     -    Price
     -    Image
-    Optimized for both portrait and landscape orientations.

### **4. Animations**

-    Smooth animations for enhanced user experience during:
     -    Search input.
     -    Result transitions.

### **5. Cross-Platform Support**

-    Fully compatible with both **Android** and **iOS** platforms.
-    Adapts to various screen sizes for a seamless user experience.

---

## Project Structure

The project is organized for scalability and maintainability:

```plaintext
.
├── android/          # Android-specific configuration
├── ios/              # iOS-specific configuration
├── src/              # Application source code
│   ├── components/   # Reusable UI components
│   │   ├── SearchHeader.tsx    # Search bar component
│   │   ├── SearchHistory.tsx   # Search history display
│   │   ├── CategoryCard.tsx    # Category card display
│   │   └── ProductCard.tsx     # Product card display
│   ├── screens/      # Screen-level components
│   │   └── SearchScreen.tsx    # Main search screen
│   ├── hooks/        # Custom hooks for data fetching
│   │   ├── useCategories.ts    # Fetch categories from API
│   │   └── useProducts.ts      # Fetch products from API
│   ├── utils/        # Helper functions and utilities
│   │   ├── storage.ts           # Search history persistence
│   │   └── animations.ts        # Animation utilities
│   ├── assets/       # Static assets (images, icons, etc.)
│   └── theme.ts      # Custom theme for NativeBase
├── App.tsx           # Main application entry point
├── package.json      # Project metadata and dependencies
└── README.md         # Project documentation
```
