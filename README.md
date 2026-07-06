# Insight.IO Dashboard Clone

A responsive implementation of the **ERIC Robotics Insight.IO Dashboard**, built using **React**, **TypeScript**, **Tailwind CSS**, and **Three.js**.

The objective of this project was to faithfully recreate the provided dashboard UI while implementing the required interactive features including camera view, 2D/3D map visualization, responsive layout, and modular component architecture.

---

# Features

## Dashboard UI

- Pixel-inspired recreation of the provided Insight.IO dashboard
- Responsive layout for desktop, tablet, and mobile devices
- Smooth animations using Framer Motion
- Modular reusable components

---

## Navigation

- Desktop sidebar
- Mobile hamburger navigation
- Responsive sidebar drawer with animations

---

## Status Panel

Displays

- Robot Mission Status
- Battery Percentage
- Signal Strength
- System Status
- Failsafe Status

---

## Camera View

Implemented using an MP4 video feed.

Features

- Click preview window to enter camera mode
- Click again to return to map
- Smooth transition between map and camera

---

## 2D Map View

Implemented using the provided warehouse map image.

Includes

- Robot Position
- Compass
- Zoom Controls
- Emergency Button

---

## 3D Map View

Implemented using

- Three.js
- React Three Fiber
- Drei
- PCDLoader

Features

- Load Point Cloud (.pcd)
- Orbit Controls
- Interactive Camera
- Toggle between 2D and 3D view

---

## Responsive Design

Optimized for

- Desktop
- Tablet
- Mobile

Responsive improvements include

- Collapsible sidebar
- Hamburger menu
- Scalable buttons
- Responsive typography
- Responsive overlays
- Adaptive map controls

---

# Tech Stack

## Frontend

- React 19
- TypeScript
- Vite

---

## Styling

- Tailwind CSS
- Framer Motion

---

## 3D Visualization

- Three.js
- @react-three/fiber
- @react-three/drei
- three-stdlib (PCDLoader)

---

## Icons

- React Icons

---

# Folder Structure

```
src/
│
├── assets/
│
├── components/
│   ├── Header/
│   │      Header.tsx
│   │      StatusCard.tsx
│   │      ModeToggle.tsx
│   │      TopStats.tsx
│   │
│   ├── Sidebar/
│   │      Sidebar.tsx
│   │      SidebarItem.tsx
│   │      sidebarData.ts
│   │
│   ├── Map/
│   │      Map.tsx
│   │      PointCloud.tsx
│   │      PointCloudViewer.tsx
│   │
│   ├── Camera.tsx
│   ├── Robot.tsx
│   ├── Compass.tsx
│   ├── Zoom.tsx
│   ├── Emergency.tsx
│
├── App.tsx
│
└── main.tsx
```

---

# Project Architecture

The application follows a component-based architecture.

```
App
│
├── Sidebar
│
├── Header
│     ├── Status Card
│     ├── Top Stats
│     └── Mode Toggle
│
├── Map
│     ├── 2D Map
│     ├── 3D Point Cloud
│     ├── Robot
│     ├── Zoom
│     ├── Compass
│     └── Emergency Button
│
└── Camera Preview
```

Each feature is isolated into reusable components making the project easy to maintain and extend.

---

# Libraries Used

| Library | Purpose |
|----------|----------|
| React | UI Framework |
| TypeScript | Static Typing |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Icons | Icons |
| Three.js | 3D Rendering |
| React Three Fiber | React Renderer for Three.js |
| Drei | Orbit Controls |
| three-stdlib | PCD Loader |

---

# Map Visualization

## 2D Mode

Displays

- Warehouse Layout
- Robot Position
- Camera Preview
- Compass
- Zoom Slider
- Emergency Control

---

## 3D Mode

Displays the warehouse point cloud using a PCD file.

Implemented using

- Three.js
- OrbitControls
- PCDLoader

Users can freely rotate, zoom and inspect the environment.

---

# Camera Implementation

The dashboard includes a simulated robot camera.

Implementation

- MP4 video playback
- Full-screen camera mode
- Preview thumbnail
- Toggle between camera and map

---

# Animations

Framer Motion is used for

- Sidebar animation
- Button interactions
- Hover effects
- Emergency pulse animation
- Mobile drawer animation

---

# Responsiveness

Responsive behavior includes

Desktop

- Fixed sidebar
- Full dashboard

Tablet

- Reduced spacing
- Responsive typography
- Scaled controls

Mobile

- Hamburger navigation
- Responsive overlays
- Adaptive component sizing
- Touch-friendly controls

---

# Setup Instructions

## Clone Repository

```bash
git clone <repository-url>
```

---

## Navigate

```bash
cd client
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

Application runs at

```
http://localhost:5173
```

---

## Build Production

```bash
npm run build
```

---

## Preview Production Build

```bash
npm run preview
```

---

# Assets Used

## Camera

- Local MP4 recording

## Warehouse Map

- Warehouse floorplan image

## Point Cloud

- PCD point cloud loaded through Three.js

---

# Design Decisions

The implementation prioritizes

- Component reusability
- Maintainability
- Responsive design
- Smooth user interactions
- Clean folder structure
- Separation of concerns

The 3D viewer was implemented as a separate module to keep rendering logic isolated from the UI components.

---

# Bonus Features Implemented

✔ Responsive Dashboard

✔ Mobile Hamburger Menu

✔ Smooth Animations

✔ Interactive 3D Point Cloud Viewer

✔ Camera Toggle

✔ Modular Architecture

✔ TypeScript Support

✔ Reusable Components

---

# Future Improvements

- ROS2 Live Integration using ROSLib.js
- Real-time Robot Position Updates
- Live Camera Streaming
- Dynamic Point Cloud Updates
- Sensor Data Visualization
- Multi-Robot Support
- Path Planning Visualization
- WebSocket-based Robot Communication

---

# Screenshot

Include screenshots of

- Desktop Dashboard
- Mobile Dashboard
- Camera View
- 3D Point Cloud View

---

# Demo Video

Include a short screen recording demonstrating

- Sidebar navigation
- Camera view toggle
- 2D/3D view switching
- Responsive layout
- Mobile sidebar
- Point cloud interaction

---

# Conclusion

This project recreates the Insight.IO dashboard with a focus on UI fidelity, responsiveness, maintainability, and interactive visualization. The architecture has been designed to support future integration with ROS2 and live robotics data while keeping the codebase modular and scalable.
