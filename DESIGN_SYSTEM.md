# Vercedo Design System

## Visual Identity

### Brand Colors

**Primary Palette:**
- **Vercedo Purple:** `#8B5CF6` (Primary CTA, accents, hover states)
- **Deep Black:** `#0A0A0F` (Main background)
- **Rich Purple-Black:** `#1A0B2E` (Secondary background, sections)
- **Neon Violet:** `#C084FC` (Highlights, glow effects)

**Neutral Palette:**
- **Pure White:** `#FFFFFF` (Primary text on dark)
- **Soft Gray:** `#E5E7EB` (Secondary text)
- **Medium Gray:** `#9CA3AF` (Tertiary text, labels)
- **Dark Gray:** `#374151` (Borders, dividers)

**Accent Colors:**
- **Success Green:** `#10B981` (Confirmation, positive metrics)
- **Warning Yellow:** `#F59E0B` (Alerts, attention)
- **Error Red:** `#EF4444` (Errors, critical info)

### Gradient Presets

**Hero Gradient:**  
```css
background: linear-gradient(135deg, #1A0B2E 0%, #0A0A0F 100%);
```

**Card Hover Gradient:**  
```css
background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(192, 132, 252, 0.05) 100%);
```

**Button Gradient:**  
```css
background: linear-gradient(135deg, #8B5CF6 0%, #C084FC 100%);
```

**Section Divider Gradient:**  
```css
background: linear-gradient(90deg, transparent 0%, #8B5CF6 50%, transparent 100%);
```

---

## Typography

### Font Families

**Primary Font (Headlines):** Inter, sans-serif  
**Secondary Font (Body):** Inter, sans-serif  
**Monospace (Code):** JetBrains Mono, monospace

### Type Scale

**Hero Headline:**  
- Desktop: 96px (6rem), weight 800, line-height 1.1
- Mobile: 48px (3rem), weight 800, line-height 1.15

**Section Headline:**  
- Desktop: 48px (3rem), weight 700, line-height 1.2
- Mobile: 32px (2rem), weight 700, line-height 1.25

**Sub-headline:**  
- Desktop: 24px (1.5rem), weight 500, line-height 1.5
- Mobile: 20px (1.25rem), weight 500, line-height 1.5

**Body Large:**  
- 20px (1.25rem), weight 400, line-height 1.6

**Body Regular:**  
- 16px (1rem), weight 400, line-height 1.6

**Body Small:**  
- 14px (0.875rem), weight 400, line-height 1.5

**Button Text:**  
- 16px (1rem), weight 600, letter-spacing 0.025em

---

## Component Specifications

### Buttons

**Primary Button:**
- Background: Vercedo Purple gradient
- Text: White, 16px, weight 600
- Padding: 16px 32px
- Border-radius: 8px
- Hover: Scale 1.02, brightness 1.1
- Shadow: 0 4px 16px rgba(139, 92, 246, 0.3)

**Secondary Button:**
- Background: Transparent
- Border: 2px solid Soft Gray
- Text: White, 16px, weight 600
- Padding: 14px 30px
- Border-radius: 8px
- Hover: Border color to Vercedo Purple

**Text Link:**
- Text: Neon Violet, 16px, weight 500
- Underline on hover
- Transition: 200ms ease

### Cards

**Feature Card:**
- Background: Rich Purple-Black with 10% opacity
- Border: 1px solid rgba(139, 92, 246, 0.2)
- Border-radius: 16px
- Padding: 32px
- Hover: Border glow, scale 1.02, shadow 0 8px 32px rgba(139, 92, 246, 0.2)

**Testimonial Card:**
- Background: Rich Purple-Black with 15% opacity
- Border: 1px solid Dark Gray
- Border-radius: 12px
- Padding: 24px
- Avatar: 64px circle with 2px Vercedo Purple border

### Forms

**Input Field:**
- Background: rgba(255, 255, 255, 0.05)
- Border: 1px solid Dark Gray
- Border-radius: 8px
- Padding: 12px 16px
- Text: White, 16px
- Focus: Border color to Vercedo Purple, glow shadow

**Dropdown:**
- Same styling as input field
- Chevron icon in Soft Gray
- Options menu with dark background

**Checkbox:**
- 20px square
- Border: 2px solid Medium Gray
- Checked: Background Vercedo Purple, white checkmark

---

## Iconography

**Style:** Line-based, 2px stroke weight, rounded caps  
**Size Scale:** 16px, 24px, 32px, 48px  
**Color:** Soft Gray default, Vercedo Purple on hover  

**Icon Library:**
- Microphone (voice agents)
- Flowchart nodes (automation)
- Bar chart (analytics)
- Puzzle pieces (integrations)
- Calendar (bookings)
- Shopping cart (e-commerce)
- House (real estate)
- Shield lock (security)
- Lightning bolt (speed)
- Star (quality)

---

## Spacing System

**Base Unit:** 8px

**Scale:**
- xs: 4px (0.5 unit)
- sm: 8px (1 unit)
- md: 16px (2 units)
- lg: 24px (3 units)
- xl: 32px (4 units)
- 2xl: 48px (6 units)
- 3xl: 64px (8 units)
- 4xl: 96px (12 units)

**Section Padding:**
- Desktop: 96px vertical, 64px horizontal
- Mobile: 64px vertical, 24px horizontal

---

## Motion & Animation

### Transitions

**Standard:**  
200ms ease-in-out

**Slow:**  
400ms ease-in-out

**Fast:**  
100ms ease-in-out

### Animations

**Waveform (Hero):**  
Looping animation, 3s duration, smooth sine wave motion

**Card Hover:**  
Scale 1.02, 200ms ease

**Button Hover:**  
Scale 1.02, brightness 1.1, 200ms ease

**Scroll Fade-In:**  
Opacity 0 to 1, translateY(20px) to 0, 600ms ease-out

**Logo Marquee:**  
Infinite scroll, 30s linear

---

## Layout Grid

**Desktop (1440px+):**
- 12 columns
- 32px gutter
- 64px margin

**Tablet (768px – 1439px):**
- 8 columns
- 24px gutter
- 32px margin

**Mobile (< 768px):**
- 4 columns
- 16px gutter
- 24px margin

---

## Accessibility Standards

**Color Contrast:**  
Minimum WCAG AA (4.5:1 for body text, 3:1 for large text)

**Focus States:**  
Visible 2px outline in Vercedo Purple on all interactive elements

**Keyboard Navigation:**  
Full support for tab, enter, escape

**Screen Readers:**  
Semantic HTML5 tags, ARIA labels for interactive widgets

**Responsive Images:**  
Alt text for all visual content

---

## Dark Mode (Default)

The entire site uses dark mode as the default theme. For optional light mode (future enhancement):

- Invert background to White `#FFFFFF`
- Primary text to Deep Black `#0A0A0F`
- Keep Vercedo Purple as primary accent
- Adjust card backgrounds to light gray `#F9FAFB`