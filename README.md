---

# KICKS – Premium Sneaker Store

**KICKS** is a high-performance e-commerce frontend built with **Next.js 15+** and **Redux Toolkit**. It features a modern, responsive design tailored for sneaker enthusiasts, integrated with a real-time product API.

## Live Demo & Repository

* **Live URL:** [https://kicks-store-five.vercel.app/](https://kicks-store-five.vercel.app/)
* **Repository:** [https://github.com/mahbubnoyon506/kicks-store](https://github.com/mahbubnoyon506/kicks-store)

---

## Key Features

- **Dynamic Product Management**: Real-time product fetching using **RTK Query** from the Platzi API.
- **Advanced Shopping Cart**: Add to cart with specific size/color selection, quantity updates, and unique item tracking (ID + Size).
- **Persistent Wishlist**: Cross-session "Like" functionality allowing users to save their favorite drops.
- **Robust Slider System**: A reusable, modular `SliderComponent` with custom navigation and pagination logic optimized for different breakpoints.
- **Smart Fallbacks**: Automated image fallback logic that replaces broken API links with deterministic local assets to ensure a polished UI.
- **Responsive Design**: Mobile-first architecture using **Tailwind CSS**, supporting smooth transitions and interactive elements across all device widths.

---

## Tech Stack

- **Framework**: Next.js (App Router)
- **State Management**: Redux Toolkit (Slices & API Service)
- **Styling**: Tailwind CSS & Lucide React Icons
- **Components**: Radix UI (via Shadcn/ui)
- **Animations**: React-Slick & CSS Transitions

---

## Installation & Setup

1. **Clone the repo**:

```bash
git clone https://github.com/mahbubnoyon506/kicks-store.git

```

2. **Install dependencies**:

```bash
npm install

```

3. **Run the development server**:

```bash
npm run dev

```

4. **Build for production**:

```bash
npm run build

```

---
