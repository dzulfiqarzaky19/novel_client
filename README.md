# Novel Client - 2025 Edition

![Vite](https://img.shields.io/badge/Vite--yellow?style=for-the-badge)
![Typescript](https://img.shields.io/badge/Typescript--blue?style=for-the-badge)
![React](https://img.shields.io/badge/React--blue?style=for-the-badge)

**A lightweight novel-reading client built with Vite + React + TypeScript.**  
This repository is the frontend reader UI that consumes the Novel scraping API (backend). It focuses on distraction-free reading, offline-friendly caching, accessibility, and a pleasant reading theme. The scraping backend is intentionally separate — see the server repository for scraping-specific details.\*\*

## Key features (client)

- Clean, distraction-free reader UI for web novels (pagination, font sizing, line height).
- Multiple reading themes (light / sepia / dark) and a novel-centered color palette.
- Text-to-speech (TTS) integration hooks (uses browser TTS or external service).
- Offline caching for recently-read chapters (IndexedDB / localForage — optional).
- Bookmarks, reading progress, and chapter list UI.
- Responsive layout: mobile-first and desktop-friendly.

---

## Tech stack

- Vite (dev server & build)
- React (function components + hooks)
- TypeScript
- Tailwind / CSS modules (optional — adjust per project)
- ESLint + Prettier (flat config recommended)
- localForage / IndexedDB for optional offline caching

---

## Disclaimer and Purpose

This project and all associated code and documentation are intended **solely for educational and study purposes**. It serves as a practical example of web scraping, API design, and data handling techniques. It is not intended for commercial use or deployment in production environments. The creators and contributors assume no liability for any misuse of the project or any damages resulting from its use. Users are expected to adhere to these guidelines and use the project responsibly.

## Previous Version

Previous Version remain accessible to read, with documentation available at: [p2-iproject-client](https://github.com/dzulfiqarzaky/p2-iproject-client).
