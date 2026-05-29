import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Alex Monroe — Video Editor & VFX Compositor' },
      { name: 'description', content: 'Award-winning Video Editor, Short Form Editor, Long Form Editor, and VFX Compositor. Crafting cinematic stories that move.' },
      { name: 'keywords', content: 'video editor, VFX compositor, short form editor, long form editor, motion graphics, color grading' },
      { property: 'og:title', content: 'Alex Monroe — Video Editor & VFX Compositor' },
      { property: 'og:description', content: 'Award-winning Video Editor crafting cinematic stories that move.' },
      { property: 'og:type', content: 'website' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="noise">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
