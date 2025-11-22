# Wedding Invitation Website

## Overview
This project is a full-stack JavaScript application for a wedding invitation website for Stephen and Sheryl Grace, celebrating their wedding on December 20, 2025 at Easter College Gymnasium in Baguio City, Philippines. It features a responsive, interactive, and modern design with multiple sections including hero, slideshow, invitation details, countdown, story, venue, RSVP, and more. The website aims to provide an elegant and engaging experience for wedding guests. Key capabilities include background music with user interaction, countdown timer, venue details with Google Maps integration, and SEO optimization.

## User Preferences
- Background music should play automatically when clicking "Open Invitation" with NO control buttons
- Clean, sophisticated design without visual artifacts or decorative elements that interfere with images
- Elegant wedding-appropriate typography using Google Fonts

## System Architecture
The application is a full-stack JavaScript project using a React frontend with TypeScript, Vite for bundling, and Tailwind CSS with shadcn/ui for styling. The backend is an Express.js server also written in TypeScript. Routing is handled by Wouter, and server state management uses TanStack Query. Data is currently stored in-memory using MemStorage, with potential for PostgreSQL integration. The UI/UX incorporates a dark mode aesthetic with an "old money" style, elegant Google Fonts (Playfair Display, Cormorant Garamond, Inter), and sophisticated components from shadcn/ui. Core features include an interactive quiz game that determines the invitation design (premium vs. standard based on score), responsive design for various devices, and a background music feature that respects user interaction for playback. The system is designed for deployment on platforms like Replit, with specific configurations for port handling and static asset serving.

## External Dependencies
- **Cloudinary CDN**: Used for hosting audio files and images.
- **Google Fonts**: Playfair Display, Cormorant Garamond, Inter for typography.
- **Tailwind CSS**: For utility-first styling.
- **shadcn/ui**: UI component library.
- **TanStack Query**: For server state management.
- **Wouter**: For client-side routing.
- **Express.js**: Backend server framework.
- **Vite**: Frontend build tool.

## Recent Changes
- **2025-11-22**: Complete content overhaul for Stephen & Sheryl's wedding:
  - Updated all components with new couple names "Stephen" and "Sheryl Grace"
  - Changed wedding date to December 20, 2025 at 10:00 AM
  - Updated venue to Easter College Gymnasium:
    - Location: 34 Easter Road, Guisad Central, 2600 Baguio City
    - Added Google Maps embed: https://maps.app.goo.gl/rKfr5SMXJ1Enfint9
  - Updated dress code section with color palette-specific guidance:
    - Principal Sponsors: Sage green, old rose, or beige formal attire
    - Guests: Motif colors (sage green, old rose, beige) welcome but not required
  - Updated wedding guest color motif:
    - Sage Green, Old Rose, Beige
  - Simplified wedding timeline to 2 events:
    - 10:00 AM: Wedding Ceremony
    - 11:00 AM: Reception
  - Changed wedding hashtags to #ShehSubmittedStephensHeart and #DecemberTitleFight
  - Updated HTML title and meta description with new couple names and date in client/index.html
  - Updated all meta tags for SEO and social sharing (Open Graph and Twitter cards)
  - Updated countdown timer to December 20, 2025 at 10:00 AM
  - Updated love story section with MMA-themed narrative
  - Updated gift guide with monetary gift wording and Snap & Share section
  - Updated RSVP link to mark-sheryl-rsvp.replit.app
  - Verified zero residual references to old wedding data through comprehensive search

