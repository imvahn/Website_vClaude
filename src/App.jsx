import { SECTIONS } from '@/sections'
import { ScrollProvider } from '@/contexts/ScrollContext'
import { AppCanvas } from '@/components/Canvas'
import { HtmlOverlay } from '@/components/html/HtmlOverlay'

const totalScrollHeight = SECTIONS.reduce((s, sec) => s + sec.scrollVh, 0) * 100 + 'vh'

function App() {
  return (
    <ScrollProvider>
      <div style={{ position: 'relative', height: totalScrollHeight }}>
        <HtmlOverlay />
      </div>
      <AppCanvas />
    </ScrollProvider>
  )
}

export default App
