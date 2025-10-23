# Project Screenshots

This directory contains screenshots for project previews in the portfolio.

## Adding Screenshots

1. **Mobile App Screenshots**: 
   - Recommended size: 375x812px (iPhone X dimensions)
   - Format: PNG with transparent background preferred
   - Name: `{project-name}-mobile-screenshot.png`

2. **Web App Screenshots**:
   - Recommended size: 1200x800px or higher
   - Format: PNG or JPG
   - Name: `{project-name}-web-screenshot.png`

## Usage

Add the `screenshotUrl` property to your project configuration in `src/contents/projects/index.tsx`:

### Local Images:
```typescript
{
  title: "My Project",
  // ... other properties
  previewType: "mobile", // or "webapp"
  screenshotUrl: "/assets/images/projects/my-project-screenshot.png",
  // ... config properties
}
```

### External URLs (including placeholders):
```typescript
{
  title: "My Project",
  // ... other properties
  previewType: "mobile", // or "webapp"
  screenshotUrl: "https://picsum.photos/375/812?random=1", // Mobile placeholder
  // screenshotUrl: "https://picsum.photos/1200/800?random=1", // Web placeholder
  // screenshotUrl: "https://your-domain.com/screenshot.png", // Your own URL
  // ... config properties
}
```

## Placeholder Image Services

For development and testing, you can use these placeholder services:

### 1. Lorem Picsum (Recommended)
- **Mobile**: `https://picsum.photos/375/812?random=X` (where X is a unique number)
- **Web**: `https://picsum.photos/1200/800?random=X`
- **Features**: High-quality photos, reliable, fast loading

### 2. Placeholder.com
- **Mobile**: `https://via.placeholder.com/375x812/4F46E5/FFFFFF?text=Mobile+App`
- **Web**: `https://via.placeholder.com/1200x800/3B82F6/FFFFFF?text=Web+App`
- **Features**: Customizable colors and text

### 3. PlaceIMG (Category-specific)
- **Tech**: `https://placeimg.com/375/812/tech`
- **Business**: `https://placeimg.com/1200/800/tech`
- **Features**: Category-specific images

## Fallback Behavior

If a screenshot fails to load or is not provided, the component will automatically fall back to the wireframe mockup.

## Tips

- Use high-quality screenshots that showcase the main features
- For mobile apps, capture the most representative screen
- For web apps, capture the main dashboard or landing page
- Optimize images for web (compress without losing quality)
- Use different `?random=X` numbers for each project to get varied placeholder images
- External URLs are cached by browsers, so they load quickly after the first visit
