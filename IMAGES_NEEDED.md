# Images Required for Kam Aslam Portfolio

This document lists all placeholder images that need to be replaced with Kam's actual photos, screenshots, and branding materials.

---

## 🎯 PRIORITY: Professional Photos

### 1. Hero Portrait (Homepage)
- **Current**: Generic male portrait (Unsplash)
- **Needed**: Professional headshot of Kam Aslam
- **Specifications**:
  - High resolution (minimum 1000x1400px)
  - Portrait orientation
  - Professional attire
  - Neutral or transparent background preferred
  - Should work well in grayscale (hover effect)
- **Location**: `components/home/Hero.jsx`
- **File Path**: Save as `/public/images/kam-portrait.jpg`

### 2. Footer Portrait
- **Current**: Generic portrait (Unsplash)
- **Needed**: Alternative professional photo of Kam or same as hero
- **Specifications**:
  - High resolution (minimum 1000x1200px)
  - Works in grayscale with hover color reveal
- **Location**: `components/home/Footer.jsx`
- **File Path**: Save as `/public/images/kam-footer.jpg`

### 3. About/Manifesto Page Image
- **Current**: Team collaboration stock photo
- **Needed**: Kam at work, facilitating workshop, or in professional environment
- **Specifications**:
  - Landscape orientation (minimum 2070x1380px)
  - Shows Kam in action (design sprint, workshop, presentation)
  - Professional environment
  - Works well with rounded corners and grayscale hover
- **Location**: `app/manifesto/page.jsx`
- **File Path**: Save as `/public/images/kam-about.jpg`

### 4. Skills Section Image
- **Current**: Minimalist workspace stock photo
- **Needed**: Kam's actual workspace, tools, or professional environment
- **Specifications**:
  - Portrait orientation (minimum 1000x1333px)
  - Shows design tools, workspace, or process
  - Dark/moody aesthetic preferred
  - Works in grayscale
- **Location**: `components/home/Skills.jsx`
- **File Path**: Save as `/public/images/kam-workspace.jpg`

### 5. Process Page Image
- **Current**: Meeting/collaboration stock photo
- **Needed**: Workshop/design sprint photo or process artifacts
- **Specifications**:
  - Landscape or square (minimum 2070x1500px)
  - Design sprint, whiteboarding, or team collaboration
  - Shows process in action
  - Works with rounded corners and grayscale
- **Location**: `app/process/page.jsx`
- **File Path**: Save as `/public/images/kam-process.jpg`

---

## 📱 PROJECT SCREENSHOTS

Replace all Unsplash placeholder images with actual project screenshots.

### Project 1: Voicecake.io (2025)
**Location**: `data/projects.js` - Voicecake project entry

**Main Image** (Hero):
- Dashboard overview or key interface
- Specs: 1000x600px minimum
- Save as: `/public/images/projects/voicecake-hero.jpg`

**Screen Gallery** (3 images):
1. Conversation flow design
2. Agent dashboard or control panel
3. Mobile interface or analytics view
- Specs: 800x600px each
- Save as: `/public/images/projects/voicecake-[1-3].jpg`

### Project 2: Praxia Bank (2019)
**Location**: `data/projects.js` - Praxia Bank project entry

**Main Image** (Hero):
- Mobile banking app overview
- Specs: 1000x600px minimum
- Save as: `/public/images/projects/praxia-hero.jpg`

**Screen Gallery** (3 images):
1. Mobile app home screen
2. Transaction or account view
3. Design system components or style guide
- Specs: 800x600px each
- Save as: `/public/images/projects/praxia-[1-3].jpg`

### Project 3: Nationwide - Later Life Mortgages (2018-2019)
**Location**: `data/projects.js` - Nationwide project entry

**Main Image** (Hero):
- Application interface overview
- Specs: 1000x600px minimum
- Save as: `/public/images/projects/nationwide-hero.jpg`

**Screen Gallery** (3 images):
1. Application form screens
2. UI kit or style guide samples
3. Accessible design elements or user flows
- Specs: 800x600px each
- Save as: `/public/images/projects/nationwide-[1-3].jpg`

### Project 4: Style.com (2014-2015)
**Location**: `data/projects.js` - Style.com project entry

**Main Image** (Hero):
- Homepage or key landing page
- Specs: 1000x600px minimum
- Save as: `/public/images/projects/style-hero.jpg`

**Screen Gallery** (3 images):
1. Navigation and category pages
2. Product listing or detail pages
3. "Cloud" save feature or key differentiator
- Specs: 800x600px each
- Save as: `/public/images/projects/style-[1-3].jpg`

### Project 5: Vogue & GQ Digital (2014-2015)
**Location**: `data/projects.js` - Conde Nast project entry

**Main Image** (Hero):
- Magazine app interface
- Specs: 1000x600px minimum
- Save as: `/public/images/projects/conde-nast-hero.jpg`

**Screen Gallery** (3 images):
1. Shoppable tray mid-height view
2. Full-screen shopping mode
3. Editorial content integration
- Specs: 800x600px each
- Save as: `/public/images/projects/conde-nast-[1-3].jpg`

---

## 🎨 LOGO & BRANDING

### 1. Logo/Wordmark
- **Current**: Text-only "Kam Aslam"
- **Needed**: Kam's logo or wordmark (if available)
- **Specifications**:
  - SVG format preferred (scalable)
  - Transparent background
  - Should work on both light and dark backgrounds
  - Include variations if available (full logo, icon only, wordmark)
- **Location**: `components/layout/Navbar.jsx`
- **File Path**: 
  - `/public/images/logo.svg` (primary)
  - `/public/images/logo-dark.svg` (if needed for dark backgrounds)
  - `/public/images/logo-icon.svg` (icon only, if available)

### 2. Favicon
- **Current**: Next.js default
- **Needed**: Kam's favicon/icon
- **Specifications**:
  - Multiple sizes: 16x16, 32x32, 180x180 (Apple), 192x192, 512x512
  - .ico format for favicon.ico
  - .png format for other sizes
  - Simple, recognizable at small sizes
- **Location**: `/public/` directory
- **Files Needed**:
  - `/public/favicon.ico`
  - `/public/apple-touch-icon.png` (180x180)
  - `/public/android-chrome-192x192.png`
  - `/public/android-chrome-512x512.png`

---

## 📋 CLIENT LOGOS (Optional)

For the "Marquee" or "Clients" section, if desired:

- AWS logo
- Dell logo
- HSBC logo
- Barclays logo
- EY logo
- Philip Morris International logo

**Specifications**:
- SVG format preferred
- Grayscale versions
- Transparent backgrounds
- Consistent height (e.g., 40-60px)

**File Path**: `/public/images/clients/[client-name].svg`

---

## 📸 IMAGE OPTIMIZATION TIPS

When providing images:

1. **Format**: 
   - Use .jpg for photos
   - Use .png for screenshots with transparency
   - Use .webp for best compression (optional)
   - Use .svg for logos and icons

2. **Optimization**:
   - Compress images before upload (use TinyPNG, ImageOptim, or similar)
   - Target file sizes: <500KB for full-width images, <200KB for thumbnails
   - Maintain aspect ratios specified above

3. **Naming Convention**:
   - Use lowercase
   - Use hyphens instead of spaces
   - Be descriptive: `kam-portrait.jpg`, `voicecake-dashboard.jpg`

4. **Quality**:
   - Provide @2x resolution for Retina displays when possible
   - Ensure good lighting and contrast
   - Check that text in screenshots is legible

---

## 🔄 HOW TO REPLACE PLACEHOLDERS

Once you have the images:

1. **Add images to `/public/images/` folder**
   - Create subfolders: `/projects/`, `/clients/` as needed

2. **Update image paths in code**:
   - `data/projects.js` - Update all `image` and `screens` URLs
   - `components/home/Hero.jsx` - Update hero portrait path
   - `components/home/Footer.jsx` - Update footer portrait path
   - `components/home/Skills.jsx` - Update workspace image path
   - `app/manifesto/page.jsx` - Update about page image path
   - `app/process/page.jsx` - Update process image path

3. **Example path format**:
   ```javascript
   // Instead of Unsplash URLs like:
   src="https://images.unsplash.com/photo-..."
   
   // Use local paths like:
   src="/images/kam-portrait.jpg"
   // or
   src="/images/projects/voicecake-hero.jpg"
   ```

4. **Test images locally**:
   - Run `npm run dev`
   - Check all pages to ensure images load correctly
   - Verify responsive behavior on mobile devices

---

## ✅ CHECKLIST

Use this checklist when collecting images:

- [ ] Hero portrait (Kam)
- [ ] Footer portrait (Kam)
- [ ] About/Manifesto page image
- [ ] Skills section workspace image
- [ ] Process page image
- [ ] Voicecake: 1 hero + 3 screens (4 total)
- [ ] Praxia Bank: 1 hero + 3 screens (4 total)
- [ ] Nationwide: 1 hero + 3 screens (4 total)
- [ ] Style.com: 1 hero + 3 screens (4 total)
- [ ] Conde Nast: 1 hero + 3 screens (4 total)
- [ ] Logo/wordmark (SVG)
- [ ] Favicon set (multiple sizes)
- [ ] Client logos (optional)

**Total Images Needed**: ~35+ images

---

## 📞 QUESTIONS?

If you need specific dimensions, cropping guidance, or have questions about any images, please reach out.

**Current Status**: All placeholder images from Unsplash are in place and working. The site is fully functional and ready for deployment with real images when available.

**Priority Order**:
1. Hero portrait (most visible)
2. Project screenshots (showcase work)
3. About/workspace images
4. Logo/favicon
5. Client logos (optional enhancement)
