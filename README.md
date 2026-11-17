# Buah Pikiran — React + Vite Interactive Wireframe

This project is the **Phase 1: Interactive Wireframe & Structural Prototype** for the **Buah Pikiran** digital agency website, built using **React** and **Vite**, based directly on the provided 6-page design document.

* **GitHub Repository:** [doni-wahyudi/buah_pikiran](https://github.com/doni-wahyudi/buah_pikiran)
* **GitHub Pages Live URL:** [https://doni-wahyudi.github.io/buah_pikiran/](https://doni-wahyudi.github.io/buah_pikiran/)

---

## 🚀 GitHub Pages Deployment

The repository is configured with an automated **GitHub Actions** deployment pipeline ([`.github/workflows/deploy.yml`](file:///c:/Users/22036590/Documents/code/website/buah_pikiran/.github/workflows/deploy.yml)) and Vite base path (`/buah_pikiran/`).

### Quick Deploy:
You can push and deploy in either of two ways:

#### Option A: One-Click Script
Run or double-click [`deploy.bat`](file:///c:/Users/22036590/Documents/code/website/buah_pikiran/deploy.bat) (or run `./deploy.ps1` in PowerShell).

#### Option B: Terminal Git Commands
Run the following in your terminal:

```bash
git init
git branch -M main
git remote add origin https://github.com/doni-wahyudi/buah_pikiran.git
git add .
git commit -m "feat: complete interactive wireframe website for Buah Pikiran"
git push -u origin main
```

### Enable GitHub Pages in your Repository:
1. Open your repository at [github.com/doni-wahyudi/buah_pikiran](https://github.com/doni-wahyudi/buah_pikiran).
2. Go to **Settings** > **Pages** (under Code and automation).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Once the Actions workflow completes, your website will be live at:  
   👉 **`https://doni-wahyudi.github.io/buah_pikiran/`**

---

## 💻 Local Testing & Preview

### Option 1: Standalone Browser Preview (No install required)
* Open [`standalone-wireframe.html`](file:///c:/Users/22036590/Documents/code/website/buah_pikiran/standalone-wireframe.html) directly in any browser.

### Option 2: Local Vite Development Server
```bash
npm install
npm run dev
```

---

## 📑 Included Pages & Features

1. **Homepage (`/`)**:
   - Floating peach/pink rounded box navigation bar (`#FFCCD2`).
   - "What we do? (Performance)": Dynamic hot pink showcase container with title-only state expanding to short descriptions on click.
   - **"I need" Vertical Drum Picker**: Click-to-scroll vertical picker that cycles through capabilities and auto-preselects the service on the Contact page when clicking `Next →`.
   - Continuous moving brand marquee (referencing `madebyhart.com`).
   - Flip-book testimonial carousel with partner showcase.
   - Articles and Featured Projects teasers.
2. **About Us (`/about`)**:
   - Agency backstory and 4 core value cards (Boldness, Integrity, Teamwork, Effectiveness).
   - Meet the Founders with clean profile avatars and hover-reveal drawers for *Core Expertise & Focus Area*.
   - Signature Approach soft peach container with interactive modal popups for **Sprint** and **PODS**.
   - CTA with mascot trio leading to Contact.
3. **Contact Us (`/contact`)**:
   - Soft peach greeting card with fruit banner.
   - Partnership inquiry radio selector.
   - Interactive service dropdown (pre-selected from Homepage).
   - Form inputs with confirmation state.
4. **Our Works (`/works`)**:
   - Demand vs. Discovery positioning banner.
   - Category filter pills.
   - Case study cards + vibrant hot-pink placeholder slots.
5. **Case Study Detail (`/works/femmy-fyber`)**:
   - Full narrative for FEMMY FYBER (Objective & The Challenge).
   - **Animated rolling number counters** (155%, 1.9K, 235+, 140K).
   - 6-slot campaign asset gallery and related case studies.
6. **Articles / Blog (`/articles`)**:
   - 6 static recent article cards.
   - Previous articles section with decoupled pagination (`< 1 2 3 4 5 >`) and year/month filters that update only the archive list.
