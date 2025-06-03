<div align="center">
  <h1>🚀 Klevis Portfolio</h1>
  <p><em>A modern, interactive portfolio built with Next.js, MDX, and a powerful set of custom components</em></p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-13.1.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.2.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![MDX](https://img.shields.io/badge/MDX-2.2.1-1C1E24?style=for-the-badge&logo=mdx)](https://mdxjs.com/)
  
  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#mdx-components-library">Components</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#customization">Customization</a>
  </p>
</div>

---

## ✨ Features

- 🎨 **Dynamic Theme System** - Multiple accent colors with real-time switching
- 📝 **Rich MDX Components** - Enhanced content creation with custom React components
- 🌙 **Dark/Light Mode** - Seamless theme switching with next-themes
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🎯 **Interactive Elements** - Engaging user interface components
- 🔧 **Developer Experience** - TypeScript, ESLint, Prettier, and more

---

## 🛠️ Tech Stack

| Technology        | Purpose                            |
| ----------------- | ---------------------------------- |
| **Next.js 13**    | React framework with app directory |
| **MDX**           | Markdown with JSX for rich content |
| **TypeScript**    | Type safety and better DX          |
| **Tailwind CSS**  | Utility-first CSS framework        |
| **Framer Motion** | Smooth animations                  |
| **Prisma**        | Database ORM                       |
| **Headless UI**   | Accessible UI components           |

---

## 📦 MDX Components Library

This portfolio features a comprehensive set of custom MDX components that make content creation a breeze:

### 🎨 AccentDemo

Interactive accent color switcher that dynamically changes the entire site's color scheme.

```tsx
<AccentDemo />
```

**Available Colors:** Violet, Red, Blue, Orange, Green, Pink

### 📢 Callout

Attention-grabbing callout boxes for important information.

```tsx
<Callout variant="info">
  This is an informational callout!
</Callout>

<Callout variant="warning">
  Pay attention to this warning!
</Callout>

<Callout variant="danger">
  This is critical information!
</Callout>
```

**Variants:** `neutral`, `info`, `warning`, `danger`

### 💻 CodeGroup

Tabbed code blocks for showing multiple files or different approaches.

```tsx
<CodeGroup variant='files'>
  <Pre data-title='package.json' data-language='json'>
    {`{
      "name": "my-project",
      "version": "1.0.0"
    }`}
  </Pre>
  <Pre data-title='README.md' data-language='markdown'>
    {`# My Project
    
    This is awesome!`}
  </Pre>
</CodeGroup>
```

**Variants:** `tab`, `files`

### 📚 TIL (Today I Learned)

Timeline-style components perfect for learning logs and progress tracking.

```tsx
<TIL.Items date='2024-01-15'>
  <TIL.Item>
    <TIL.ItemTags>
      <TIL.ItemTag>react</TIL.ItemTag>
      <TIL.ItemTag>typescript</TIL.ItemTag>
    </TIL.ItemTags>

    <h3>Learned about custom hooks</h3>
    <p>Custom hooks are amazing for reusable logic!</p>

    <TIL.DnD>
      <TIL.Do>Use custom hooks for reusable stateful logic</TIL.Do>
      <TIL.Dont>Don't overuse them for simple state</TIL.Dont>
    </TIL.DnD>
  </TIL.Item>
</TIL.Items>
```

### 🏷️ Labels & Tags

Semantic labels for categorizing content.

```tsx
<Labels>
  <Label variant='primary'>Featured</Label>
  <Label variant='secondary'>Tutorial</Label>
</Labels>
```

### 🖼️ Enhanced Images

Smart image components with optimizations and sensitivity options.

```tsx
<Image
  src="/path/to/image.jpg"
  alt="Description"
  caption="Image caption"
/>

<ImageSensitive
  src="/path/to/sensitive-image.jpg"
  alt="Click to reveal"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### ✨ InlineHighlight

Highlight important text inline.

```tsx
<InlineHighlight>This text is highlighted!</InlineHighlight>
```

### 📚 Stack

Vertical layout component for organizing content.

```tsx
<Stack>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

### 🔗 Enhanced Links

Smart links with external link detection and styling.

```tsx
<Link href="https://example.com">External Link</Link>
<Link href="/internal-page">Internal Link</Link>
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/klevis/klevis-x-portfolio.git
   cd klevis-x-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up the database**

   ```bash
   npm run db:generate
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── mdx/                    # MDX components library
│   │   ├── AccentDemo.tsx      # Dynamic accent color switcher
│   │   ├── Callout.tsx         # Info/warning/danger callouts
│   │   ├── CodeGroup.tsx       # Tabbed code blocks
│   │   ├── TIL.tsx            # Today I Learned timeline
│   │   ├── Labels.tsx          # Content labeling system
│   │   ├── Image.tsx           # Enhanced image component
│   │   ├── ImageSensitive.tsx  # Blurred sensitive images
│   │   ├── InlineHighlight.tsx # Inline text highlighting
│   │   ├── Stack.tsx           # Vertical layout component
│   │   ├── Link.tsx            # Smart link component
│   │   └── custom-components/  # Base MDX overrides
│   └── ...
├── pages/                      # Next.js pages
├── styles/                     # Global styles
└── lib/                        # Utility functions
```

---

## 🎨 Customization

### Accent Colors

The portfolio supports 6 different accent colors that can be switched dynamically:

- **Violet** (Default) - Professional and modern
- **Red** - Bold and energetic
- **Blue** - Trustworthy and calm
- **Orange** - Creative and warm
- **Green** - Natural and growth-focused
- **Pink** - Playful and creative

### Adding New MDX Components

1. Create your component in `src/components/mdx/`
2. Export it from the appropriate index file
3. Use it in your MDX content

Example:

```tsx
// src/components/mdx/MyComponent.tsx
function MyComponent({ children }) {
  return <div className='my-custom-component'>{children}</div>;
}

export default MyComponent;
```

---

## 📜 Available Scripts

| Script                | Description                                    |
| --------------------- | ---------------------------------------------- |
| `npm run dev`         | Start development server                       |
| `npm run build`       | Build for production                           |
| `npm run start`       | Start production server                        |
| `npm run lint`        | Run ESLint                                     |
| `npm run lint:all`    | Run all linters (ESLint, TypeScript, Prettier) |
| `npm run lint:types`  | Check TypeScript types                         |
| `npm run lint:style`  | Check code formatting                          |
| `npm run db:generate` | Generate Prisma client                         |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [MDX](https://mdxjs.com/) - Markdown for the component era
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Headless UI](https://headlessui.com/) - Unstyled, accessible UI components
- [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/klevis">Klevis</a></p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
