import { useState, useEffect, useCallback } from 'react'
import logoImg from '@/imports/image.png'
import iconImg from '@/imports/LOGO_ESTAMPAMOS__5_.png'
import bannerImg from '@/imports/image-1.png'

const WA = '573001234567'
function wa(product?: string) {
  const msg = product
    ? `Hola, quiero cotizar: *${product}*. ¿Me pueden dar más información?`
    : `Hola, quiero conocer sus productos y servicios de personalización.`
  return `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`
}

const SOCIAL = {
  instagram: 'https://instagram.com/estampamostusideas',
  facebook: 'https://facebook.com/estampamostusideas',
  tiktok: 'https://tiktok.com/@estampamostusideas',
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconWA({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
function IconClose() {
  return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
}
function IconArrow() {
  return <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
}
function IconCheck() {
  return <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
}
function IconChevron({ dir = 'right' }: { dir?: 'left' | 'right' }) {
  return <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={dir === 'right' ? 'M9 18l6-6-6-6' : 'M15 18l-6-6 6-6'} /></svg>
}
function IconStar() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
}
function IconInstagram() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
}
function IconFacebook() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
}
function IconTikTok() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.84 4.84 0 01-1.01-.07z"/></svg>
}

// ─── Product data ─────────────────────────────────────────────────────────────

type Product = {
  name: string; category: string; detail: string; desc: string
  techniques: string[]; cover: string; examples: { img: string; label: string }[]
}

const PRODUCTS: Product[] = [
  {
    name: 'Buzos y Hoodies', category: 'Confección',
    detail: 'Con capota · Sin capota · Con cremallera',
    desc: 'Confeccionamos buzos a medida con tu diseño. Disponibles con capota, sin capota o con cremallera. Ideales para equipos, colegios y marcas.',
    techniques: ['Serigrafía', 'Sublimación', 'DTF', 'Bordado'],
    cover: 'https://images.unsplash.com/photo-1680292783974-a9a336c10366?w=600&h=680&fit=crop&auto=format',
    examples: [
      { img: 'https://images.unsplash.com/photo-1680292783974-a9a336c10366?w=800&h=700&fit=crop&auto=format', label: 'Buzo con estampado frontal' },
      { img: 'https://images.unsplash.com/photo-1728394604722-c1007e3edf09?w=800&h=700&fit=crop&auto=format', label: 'Buzo con capota liso' },
      { img: 'https://images.unsplash.com/photo-1571821324176-52ff15e96348?w=800&h=700&fit=crop&auto=format', label: 'Buzo full color' },
      { img: 'https://images.unsplash.com/photo-1634032188532-f11af97817ab?w=800&h=700&fit=crop&auto=format', label: 'Diseño back print' },
    ],
  },
  {
    name: 'Chaquetas', category: 'Confección',
    detail: 'Deportivo · Corporativo · Personalizado',
    desc: 'Chaquetas rompevientos de alta calidad, perfectas para uniformes corporativos y equipos deportivos.',
    techniques: ['Bordado', 'Serigrafía', 'Transfer', 'Sublimación'],
    cover: 'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600&h=680&fit=crop&auto=format',
    examples: [
      { img: 'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=800&h=700&fit=crop&auto=format', label: 'Chaqueta corporativa' },
      { img: 'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=800&h=700&fit=crop&auto=format', label: 'Chaqueta deportiva' },
      { img: 'https://images.unsplash.com/photo-1728394604722-c1007e3edf09?w=800&h=700&fit=crop&auto=format', label: 'Rompevientos con capota' },
    ],
  },
  {
    name: 'Camisetas', category: 'Estampados',
    detail: 'Serigrafía · Sublimación · DTF',
    desc: 'Camisetas personalizadas con los mejores métodos de estampado. Para eventos, uniformes, tiendas y más.',
    techniques: ['Serigrafía', 'Sublimación', 'DTF', 'Vinilo textil'],
    cover: 'https://images.unsplash.com/photo-1663433567177-9f94be0bff4c?w=600&h=680&fit=crop&auto=format',
    examples: [
      { img: 'https://images.unsplash.com/photo-1663433567177-9f94be0bff4c?w=800&h=700&fit=crop&auto=format', label: 'Proceso de estampado' },
      { img: 'https://images.unsplash.com/photo-1663433541063-ddab084d1126?w=800&h=700&fit=crop&auto=format', label: 'Producción en planta' },
      { img: 'https://images.unsplash.com/photo-1614494731690-53925976ea29?w=800&h=700&fit=crop&auto=format', label: 'Acabado de alta definición' },
    ],
  },
  {
    name: 'Gorras', category: 'Bordados',
    detail: 'Bordado · Estampado · Snap-back · Trucker',
    desc: 'Gorras con bordado computarizado de alta definición o estampado. Ideales para empresas y eventos.',
    techniques: ['Bordado computarizado', 'Serigrafía', 'Sublimación'],
    cover: 'https://images.unsplash.com/photo-1774346091843-a487e60c8ff9?w=600&h=680&fit=crop&auto=format',
    examples: [
      { img: 'https://images.unsplash.com/photo-1775848366633-46257a5f55c0?w=800&h=700&fit=crop&auto=format', label: 'Bordado con logo corporativo' },
      { img: 'https://images.unsplash.com/photo-1774346091843-a487e60c8ff9?w=800&h=700&fit=crop&auto=format', label: 'Gorra blanca personalizada' },
      { img: 'https://images.unsplash.com/photo-1777639629784-02808d01322e?w=800&h=700&fit=crop&auto=format', label: 'Detalle bordado en relieve' },
    ],
  },
  {
    name: 'Termos', category: 'Regalos',
    detail: 'Sublimación · Full color · Laser · Corporativos',
    desc: 'Termos personalizados con grabado láser o sublimación full color. Ideales para regalos corporativos y eventos.',
    techniques: ['Grabado Láser', 'Sublimación', 'Impresión UV'],
    cover: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=680&fit=crop&auto=format',
    examples: [
      { img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&h=700&fit=crop&auto=format', label: 'Termo con grabado láser' },
      { img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=700&fit=crop&auto=format', label: 'Termo personalizado corporativo' },
    ],
  },
  {
    name: 'Mugs', category: 'Regalos',
    detail: 'Sublimación · Full color · Mágicos · Gift',
    desc: 'Mugs sublimados full color, mágicos y personalizados. Perfectos para regalos y recordatorios.',
    techniques: ['Sublimación', 'Full color', 'Mágico'],
    cover: 'https://images.unsplash.com/photo-1643946404043-178456b0e3f8?w=600&h=680&fit=crop&auto=format',
    examples: [
      { img: 'https://images.unsplash.com/photo-1643946404043-178456b0e3f8?w=800&h=700&fit=crop&auto=format', label: 'Mug sublimado full color' },
      { img: 'https://images.unsplash.com/photo-1516390118834-21602d501886?w=800&h=700&fit=crop&auto=format', label: 'Mug personalizado corporativo' },
    ],
  },
]

// ─── Size options per product category ───────────────────────────────────────

const SIZES: Record<string, string[]> = {
  'Confección': ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'No sé aún'],
  'Estampados': ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'No sé aún'],
  'Bordados':   ['Única talla', 'Ajustable'],
  'Regalos':    ['Estándar', 'Grande', 'Único'],
  'Corporativo':['Único', 'Variado por kit'],
}

const COLOR_SWATCHES = [
  { name: 'Blanco',      hex: '#ffffff', border: true },
  { name: 'Negro',       hex: '#1a1a1a' },
  { name: 'Azul marino', hex: '#0d2137' },
  { name: 'Azul',        hex: '#3b82f6' },
  { name: 'Rojo',        hex: '#ef4444' },
  { name: 'Verde',       hex: '#22c55e' },
  { name: 'Gris',        hex: '#6b7280' },
  { name: 'Amarillo',    hex: '#eab308' },
  { name: 'Morado',      hex: '#8b5cf6' },
  { name: 'Naranja',     hex: '#f97316' },
]

// ─── Product Modal ────────────────────────────────────────────────────────────

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [active, setActive]   = useState(0)
  const [name,   setName]     = useState('')
  const [size,   setSize]     = useState('')
  const [color,  setColor]    = useState('')
  const [customColor, setCustomColor] = useState('')
  const [qty,    setQty]      = useState('')

  const sizes = SIZES[product.category] ?? ['Única talla']
  const displayColor = color === 'Personalizado' ? customColor : color

  function buildWALink() {
    const lines = [
      `Hola! Quiero cotizar el siguiente pedido 👋`,
      ``,
      `🧥 *Producto:* ${product.name}`,
      `📏 *Talla:* ${size || 'Por definir'}`,
      `🎨 *Color:* ${displayColor || 'Por definir'}`,
      `📦 *Cantidad:* ${qty ? qty + ' unidades' : 'Por definir'}`,
      `👤 *Nombre / Empresa:* ${name || 'Sin especificar'}`,
      ``,
      `¿Me pueden dar más información y precio? ¡Gracias!`,
    ]
    return `https://wa.me/${WA}?text=${encodeURIComponent(lines.join('\n'))}`
  }

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setActive(v => (v + 1) % product.examples.length)
      if (e.key === 'ArrowLeft')  setActive(v => (v - 1 + product.examples.length) % product.examples.length)
    }
    window.addEventListener('keydown', fn)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', fn); document.body.style.overflow = '' }
  }, [onClose, product.examples.length])

  const inputCls = 'w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-[#0d2137] placeholder-[#0d2137]/30 focus:outline-none focus:border-[#6366f1] transition-colors duration-150'

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="bg-white w-full sm:max-w-4xl sm:rounded-3xl overflow-hidden shadow-2xl max-h-[95dvh] flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 shrink-0">
          <div>
            <span className="text-base font-extrabold text-[#6366f1] uppercase tracking-wider">{product.category}</span>
            <h2 className="text-xl font-extrabold text-[#0d2137]">{product.name}</h2>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-[#0d2137] transition-colors duration-150">
            <IconClose />
          </button>
        </div>

        <div className="overflow-y-auto flex-1">
          <div className="grid sm:grid-cols-[1fr_320px]">

            {/* Gallery */}
            <div className="bg-slate-50">
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img key={active} src={product.examples[active].img} alt={product.examples[active].label}
                  className="w-full h-full object-cover" style={{ animation: 'fadeImg .25s ease' }} />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent px-5 py-4">
                  <p className="text-white text-sm font-medium">{product.examples[active].label}</p>
                </div>
                {product.examples.length > 1 && <>
                  <button onClick={() => setActive(v => (v - 1 + product.examples.length) % product.examples.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-all hover:scale-105">
                    <IconChevron dir="left" />
                  </button>
                  <button onClick={() => setActive(v => (v + 1) % product.examples.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-all hover:scale-105">
                    <IconChevron dir="right" />
                  </button>
                </>}
              </div>
              <div className="flex gap-2 p-3 overflow-x-auto">
                {product.examples.map((ex, i) => (
                  <button key={i} onClick={() => setActive(i)}
                    className={`shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-150 ${i === active ? 'border-[#6366f1] scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}>
                    <img src={ex.img} alt={ex.label} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quote form */}
            <div className="p-6 flex flex-col gap-4 border-t sm:border-t-0 sm:border-l border-slate-100">
              <div>
                <p className="text-xs font-semibold text-[#0d2137]/35 uppercase tracking-widest mb-0.5">Arma tu cotización</p>
                <p className="text-[#0d2137]/50 text-xs">Completa los datos y te generamos el mensaje listo para enviar.</p>
              </div>

              {/* Nombre */}
              <div>
                <label className="text-xs font-semibold text-[#0d2137] mb-1.5 block">👤 Tu nombre o empresa</label>
                <input type="text" placeholder="Ej. Juan García / Empresa XYZ"
                  value={name} onChange={e => setName(e.target.value)}
                  className={inputCls} />
              </div>

              {/* Talla */}
              <div>
                <label className="text-xs font-semibold text-[#0d2137] mb-1.5 block">📏 Talla</label>
                <div className="flex flex-wrap gap-1.5">
                  {sizes.map(s => (
                    <button key={s} onClick={() => setSize(s)}
                      className={`text-xs font-semibold rounded-lg px-3 py-1.5 border transition-all duration-150 ${
                        size === s
                          ? 'bg-[#6366f1] border-[#6366f1] text-white'
                          : 'bg-white border-slate-200 text-[#0d2137] hover:border-[#6366f1]/40'
                      }`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div>
                <label className="text-xs font-semibold text-[#0d2137] mb-1.5 block">🎨 Color</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {COLOR_SWATCHES.map(c => (
                    <button key={c.name} onClick={() => setColor(c.name)} title={c.name}
                      className={`w-7 h-7 rounded-full transition-all duration-150 ${
                        color === c.name ? 'ring-2 ring-offset-2 ring-[#6366f1] scale-110' : 'hover:scale-105'
                      } ${c.border ? 'border border-slate-200' : ''}`}
                      style={{ background: c.hex }} />
                  ))}
                  <button onClick={() => setColor('Personalizado')}
                    className={`w-7 h-7 rounded-full border-2 border-dashed text-[10px] font-bold flex items-center justify-center transition-all duration-150 ${
                      color === 'Personalizado' ? 'border-[#6366f1] text-[#6366f1] scale-110' : 'border-slate-300 text-slate-400 hover:scale-105'
                    }`}>
                    +
                  </button>
                </div>
                {color && (
                  <p className="text-xs text-[#0d2137]/50 mb-1">
                    Seleccionado: <span className="font-semibold text-[#6366f1]">{color}</span>
                  </p>
                )}
                {color === 'Personalizado' && (
                  <input type="text" placeholder="Escribe el color exacto…"
                    value={customColor} onChange={e => setCustomColor(e.target.value)}
                    className={inputCls} />
                )}
              </div>

              {/* Cantidad */}
              <div>
                <label className="text-xs font-semibold text-[#0d2137] mb-1.5 block">📦 Cantidad (unidades)</label>
                <input type="number" min="1" placeholder="Ej. 50"
                  value={qty} onChange={e => setQty(e.target.value)}
                  className={inputCls} />
              </div>

              {/* CTA */}
              <div className="mt-auto pt-3 border-t border-slate-100">
                <p className="text-xs text-[#0d2137]/30 mb-3 italic">
                  Se abrirá WhatsApp con el mensaje listo. Solo tienes que enviarlo.
                </p>
                <a href={buildWALink()} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb85a] text-white font-bold rounded-2xl px-5 py-3.5 transition-all duration-200 hover:shadow-lg hover:shadow-green-200 text-sm w-full">
                  <IconWA /> Abrir WhatsApp y Enviar
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <style>{`@keyframes fadeImg { from { opacity: 0.4 } to { opacity: 1 } }`}</style>
    </div>
  )
}

// ─── Deals bar ───────────────────────────────────────────────────────────────

const DEALS = [
  '🔥 2 Mugs personalizados por $50.000',
  '👕 Camisetas desde $25.000 c/u en pedidos de 12+',
  '🧢 Gorras bordadas desde $35.000',
  '🧥 Buzos con capota desde $55.000 en pedidos mayoristas',
  '🎁 Kits corporativos con descuento especial para empresas',
  '⚡ Envío gratis en pedidos superiores a 30 unidades',
]

function DealsBar() {
  const doubled = [...DEALS, ...DEALS]
  return (
    <div className="fixed inset-x-0 top-0 z-[60] bg-[#0d2137] h-8 overflow-hidden flex items-center">
      <div className="flex w-max" style={{ animation: 'marquee 40s linear infinite' }}>
        {doubled.map((deal, i) => (
          <span key={i} className="whitespace-nowrap text-xs font-semibold text-white/80 flex items-center gap-6 px-6">
            {deal}
            <span className="w-1 h-1 rounded-full bg-[#6366f1] shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const links = [
    { href: '#modelos', label: 'Cómo Comprar' },
    { href: '#productos', label: 'Productos' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#cobertura', label: 'Cobertura' },
  ]
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/92 backdrop-blur-xl border-b border-slate-100 shadow-sm' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={iconImg} alt="Estampamos tus Ideas" className="h-12 w-auto object-contain" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-[#0d2137]/50 hover:text-[#0d2137] text-sm font-medium transition-colors duration-200">{l.label}</a>
          ))}
        </nav>
        <a href="#productos" className="hidden md:inline-flex items-center gap-1.5 bg-[#0d2137] hover:bg-[#163354] text-white text-sm font-semibold rounded-full px-5 py-2.5 transition-all duration-200">
          Ver Catálogo <IconArrow />
        </a>
        <button className="md:hidden p-2 text-[#0d2137]" onClick={() => setOpen(v => !v)}>
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-5 py-4 flex flex-col gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[#0d2137] font-medium py-3 border-b border-slate-50 text-sm">{l.label}</a>
          ))}
          <a href="#productos" onClick={() => setOpen(false)} className="mt-3 flex items-center justify-center gap-1.5 bg-[#0d2137] text-white font-semibold rounded-full px-4 py-3 text-sm">
            Ver Catálogo <IconArrow />
          </a>
        </div>
      )}
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-white">
      <div className="max-w-6xl mx-auto px-5 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#6366f1]/20 bg-[#6366f1]/5 text-[#6366f1] rounded-full px-4 py-1.5 text-sm font-semibold mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
              Tienda Virtual · Compra 100% Segura
            </div>

            {/* Headline with Caveat script accent — mirrors "tus Ideas" in the logo */}
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#0d2137] leading-[1.05] mb-6">
              Tu marca en<br />
              cada{' '}
              <span style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, color: '#6366f1', fontSize: '1.15em', lineHeight: 1 }}>
                prenda
              </span>
              <br />
              <span style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, color: '#00b0cf', fontSize: '1.1em', lineHeight: 1 }}>
                y producto
              </span>
            </h1>

            <p className="text-[#0d2137]/55 text-lg leading-relaxed mb-5 max-w-md">
              Personalizamos, estampamos y bordamos para personas y empresas en toda Colombia.
            </p>

            {/* Key differentiators */}
            <div className="flex gap-3 mb-8">
              {[
                { icon: '⭐', label: 'Calidad' },
                { icon: '🛡️', label: 'Garantía' },
                { icon: '✅', label: 'Cumplimiento' },
              ].map(d => (
                <div key={d.label} className="flex items-center gap-2 bg-[#f7fafd] border border-slate-200 rounded-2xl px-4 py-2.5">
                  <span className="text-lg">{d.icon}</span>
                  <span className="text-[#0d2137] font-bold text-sm">{d.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#productos" className="inline-flex items-center gap-2 bg-[#6366f1] hover:bg-[#4f46e5] text-white font-semibold rounded-full px-6 py-3 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-200 text-sm">
                Ver Catálogo <IconArrow />
              </a>
              <a href="#modelos" className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 text-[#0d2137] font-semibold rounded-full px-6 py-3 transition-all duration-200 text-sm">
                Cómo Comprar
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, #e0e7ff 0%, transparent 70%)' }} />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/80 max-w-sm w-full">
              <img src={bannerImg} alt="Portafolio de productos personalizados" className="w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-2 sm:-left-8 bg-white rounded-2xl shadow-lg shadow-slate-200 border border-slate-100 px-4 py-3 flex items-center gap-3">
              <span className="text-2xl">🌎</span>
              <div>
                <p className="text-[#0d2137] font-bold text-xs">Cobertura Nacional</p>
                <p className="text-[#0d2137]/45 text-xs">Toda Colombia</p>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 sm:-right-6 bg-[#0d2137] rounded-2xl px-4 py-3">
              <p className="text-[#00b0cf] font-bold text-xs">+100</p>
              <p className="text-white/50 text-xs">Empresas atendidas</p>
            </div>
          </div>
        </div>

        {/* Promo strip */}
        <div className="mt-20 pt-10 border-t border-slate-100">
          <p className="text-xs font-semibold text-[#0d2137]/30 uppercase tracking-widest mb-4">Promociones destacadas</p>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1" style={{ scrollbarWidth: 'none' }}>
            {[
              { img: 'https://images.unsplash.com/photo-1643946404043-178456b0e3f8?w=200&h=200&fit=crop&auto=format', tag: '🔥 Oferta', title: '2 Mugs', price: '$50.000' },
              { img: 'https://images.unsplash.com/photo-1663433567177-9f94be0bff4c?w=200&h=200&fit=crop&auto=format', tag: '🔥 Oferta', title: 'Camisetas ×12', price: 'desde $25.000 c/u' },
              { img: 'https://images.unsplash.com/photo-1775848366633-46257a5f55c0?w=200&h=200&fit=crop&auto=format', tag: '⚡ Popular', title: 'Gorras bordadas', price: 'desde $35.000' },
              { img: 'https://images.unsplash.com/photo-1680292783974-a9a336c10366?w=200&h=200&fit=crop&auto=format', tag: '🏭 Mayorista', title: 'Buzos ×30+', price: 'desde $55.000' },
              { img: 'https://images.unsplash.com/photo-1781722351700-a80cd87ac1cb?w=200&h=200&fit=crop&auto=format', tag: '🎁 Corporativo', title: 'Kit empresarial', price: 'Precio especial' },
              { img: 'https://images.unsplash.com/photo-1760602672748-6a570286ce73?w=200&h=200&fit=crop&auto=format', tag: '🚚 Envío gratis', title: 'Pedidos +30 uds', price: 'Sin costo adicional' },
            ].map((p) => (
              <a key={p.title} href={wa(p.title)} target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 shrink-0 bg-white border border-slate-100 hover:border-[#6366f1]/30 hover:shadow-lg hover:shadow-slate-200/80 rounded-2xl px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 w-56">
                {/* Thumbnail */}
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                {/* Text */}
                <div className="min-w-0">
                  <span className="inline-block bg-[#6366f1]/10 text-[#6366f1] text-[10px] font-bold rounded-full px-2 py-0.5 mb-1 leading-none">
                    {p.tag}
                  </span>
                  <p className="text-[#0d2137] font-bold text-xs leading-tight truncate">{p.title}</p>
                  <p className="text-[#6366f1] font-extrabold text-sm leading-tight">{p.price}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Guarantee strip — inspired by Printful ───────────────────────────────────

function GuaranteeStrip() {
  const items = [
    { icon: '⚡', label: 'Cotización en 2 horas' },
    { icon: '🎨', label: 'Diseño incluido' },
    { icon: '📦', label: 'Envío a toda Colombia' },
    { icon: '🔁', label: 'Sin mínimos en minorista' },
    { icon: '🛡️', label: 'Garantía en cada pedido' },
    { icon: '🧵', label: 'Fabricación propia' },
  ]
  return (
    <div className="bg-[#0d2137] py-5">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {items.map(it => (
            <div key={it.label} className="flex items-center gap-2.5">
              <span className="text-xl shrink-0">{it.icon}</span>
              <span className="text-white/70 text-xs font-semibold leading-tight">{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Sales Models ─────────────────────────────────────────────────────────────

function SalesModels() {
  const models = [
    {
      id: 'minorista', icon: '🛍️', label: 'Minorista', sub: 'Para personas y emprendedores',
      desc: 'Ideal si necesitas pocas unidades con un diseño especial para ti, tu negocio o un regalo único.',
      features: ['Sin mínimos de cantidad', 'Diseño personalizado incluido', 'Asesoría directa', 'Envío a toda Colombia'],
    },
    {
      id: 'mayorista', icon: '🏭', label: 'Mayorista', sub: 'Para empresas y negocios',
      desc: 'Diseñado para producciones grandes, uniformes corporativos o regalos institucionales a escala.',
      features: ['Precios especiales por volumen', 'Producción de alta escala', 'Branding corporativo', 'Importación bajo pedido'],
      dark: true,
    },
  ]
  return (
    <section id="modelos" className="py-24 bg-[#f7fafd]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-14">
          <p className="text-base font-extrabold text-[#6366f1] uppercase tracking-wider mb-3">¿Cómo quieres comprar?</p>
          <h2 className="text-4xl font-extrabold text-[#0d2137]">
            Dos formas de adquirir<br />
            <span style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, color: '#6366f1', fontSize: '1.1em' }}>
              nuestros productos
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {models.map(m => (
            <div key={m.id} className={`rounded-3xl p-8 border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${m.dark ? 'bg-[#0d2137] border-[#0d2137] hover:shadow-[#0d2137]/15' : 'bg-white border-slate-100 hover:shadow-slate-200/80'}`}>
              <span className="text-4xl">{m.icon}</span>
              <h3 className={`text-2xl font-extrabold mt-4 mb-1 ${m.dark ? 'text-white' : 'text-[#0d2137]'}`}>{m.label}</h3>
              <p className={`text-sm mb-4 ${m.dark ? 'text-[#00b0cf]' : 'text-[#6366f1]'}`}>{m.sub}</p>
              <p className={`text-sm leading-relaxed mb-6 ${m.dark ? 'text-white/55' : 'text-[#0d2137]/55'}`}>{m.desc}</p>
              <ul className="space-y-3 mb-8">
                {m.features.map(f => (
                  <li key={f} className={`flex items-center gap-3 text-sm font-medium ${m.dark ? 'text-white/75' : 'text-[#0d2137]'}`}>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${m.dark ? 'bg-[#00b0cf]/20 text-[#00b0cf]' : 'bg-[#6366f1]/10 text-[#6366f1]'}`}>
                      <IconCheck />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a href="#productos" className="inline-flex items-center gap-2 font-semibold text-sm rounded-full px-6 py-3 transition-all duration-200 bg-[#0d2137] hover:bg-[#163354] text-white">
            Ver Productos <IconArrow />
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Products ─────────────────────────────────────────────────────────────────

function ProductCard({ product, onOpen }: { product: Product; onOpen: () => void }) {
  return (
    <button onClick={onOpen} className="group text-left block bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-[#6366f1]/30 hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1 cursor-pointer w-full">
      <div className="relative h-56 overflow-hidden bg-slate-50">
        <img src={product.cover} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[#0d2137]/0 group-hover:bg-[#0d2137]/30 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#0d2137] text-sm font-bold rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
            Ver ejemplos <IconArrow />
          </span>
        </div>
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#0d2137] text-xs font-semibold rounded-full px-3 py-1">{product.category}</span>
        <span className="absolute top-3 right-3 bg-[#6366f1]/90 text-white text-xs font-semibold rounded-full px-2.5 py-1">{product.examples.length} ejemplos</span>
      </div>
      <div className="p-5">
        <h3 className="text-[#0d2137] font-bold text-base mb-1">{product.name}</h3>
        <p className="text-[#0d2137]/40 text-xs mb-3">{product.detail}</p>
        <div className="flex items-center justify-between">
          <span className="text-[#0d2137]/25 text-xs italic">Precio a consultar</span>
          <span className="text-[#6366f1] text-xs font-semibold flex items-center gap-1">Ver más <IconArrow /></span>
        </div>
      </div>
    </button>
  )
}

function Products() {
  const [selected, setSelected] = useState<Product | null>(null)
  const close = useCallback(() => setSelected(null), [])
  return (
    <section id="productos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-base font-extrabold text-[#6366f1] uppercase tracking-wider mb-3">Portafolio</p>
            <h2 className="text-4xl font-extrabold text-[#0d2137]">Productos que<br />personalizamos</h2>
          </div>
          <p className="text-[#0d2137]/45 text-sm max-w-xs leading-relaxed">Haz clic para ver ejemplos reales y cotizar.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map(p => <ProductCard key={p.name} product={p} onOpen={() => setSelected(p)} />)}
        </div>
        <div className="mt-10 rounded-2xl bg-[#f7fafd] border border-slate-100 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-[#0d2137] font-bold text-lg mb-1">¿Tienes una idea diferente?</p>
            <p className="text-[#0d2137]/45 text-sm">Fabricamos e importamos lo que necesites. Cuéntanos.</p>
          </div>
          <a href="#modelos" className="shrink-0 inline-flex items-center gap-2 bg-[#0d2137] hover:bg-[#163354] text-white font-semibold rounded-full px-6 py-3 transition-all duration-200 text-sm">
            Cómo Comprar <IconArrow />
          </a>
        </div>
      </div>
      {selected && <ProductModal product={selected} onClose={close} />}
    </section>
  )
}

// ─── Portfolio — infinite scrolling rows like markmelo.com ───────────────────

const MOSAIC_ROWS = [
  [
    { img: 'https://images.unsplash.com/photo-1781722351700-a80cd87ac1cb?w=400&h=400&fit=crop&auto=format', label: 'Kit corporativo completo' },
    { img: 'https://images.unsplash.com/photo-1760602672748-6a570286ce73?w=400&h=400&fit=crop&auto=format', label: 'Caja regalo personalizada' },
    { img: 'https://images.unsplash.com/photo-1643946404043-178456b0e3f8?w=400&h=400&fit=crop&auto=format', label: 'Mug corporativo' },
    { img: 'https://images.unsplash.com/photo-1516390118834-21602d501886?w=400&h=400&fit=crop&auto=format', label: 'Mug con logo empresa' },
    { img: 'https://images.unsplash.com/photo-1775848366633-46257a5f55c0?w=400&h=400&fit=crop&auto=format', label: 'Gorra bordada corporativa' },
    { img: 'https://images.unsplash.com/photo-1777639629784-02808d01322e?w=400&h=400&fit=crop&auto=format', label: 'Bordado institucional' },
    { img: 'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=400&h=400&fit=crop&auto=format', label: 'Kit de bienvenida' },
    { img: 'https://images.unsplash.com/photo-1774346091843-a487e60c8ff9?w=400&h=400&fit=crop&auto=format', label: 'Gorra evento corporativo' },
  ],
  [
    { img: 'https://images.unsplash.com/photo-1760602672748-6a570286ce73?w=400&h=400&fit=crop&auto=format', label: 'Set regalo empresa' },
    { img: 'https://images.unsplash.com/photo-1781722351700-a80cd87ac1cb?w=400&h=400&fit=crop&auto=format', label: 'Libreta y bolígrafo' },
    { img: 'https://images.unsplash.com/photo-1775848366633-46257a5f55c0?w=400&h=400&fit=crop&auto=format', label: 'Uniformes con logo' },
    { img: 'https://images.unsplash.com/photo-1643946404043-178456b0e3f8?w=400&h=400&fit=crop&auto=format', label: 'Termos personalizados' },
    { img: 'https://images.unsplash.com/photo-1516390118834-21602d501886?w=400&h=400&fit=crop&auto=format', label: 'Recordatorio institucional' },
    { img: 'https://images.unsplash.com/photo-1777639629784-02808d01322e?w=400&h=400&fit=crop&auto=format', label: 'Detalle bordado logo' },
    { img: 'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=400&h=400&fit=crop&auto=format', label: 'Evento corporativo' },
    { img: 'https://images.unsplash.com/photo-1774346091843-a487e60c8ff9?w=400&h=400&fit=crop&auto=format', label: 'Gorra promocional' },
  ],
  [
    { img: 'https://images.unsplash.com/photo-1516390118834-21602d501886?w=400&h=400&fit=crop&auto=format', label: 'Mug sublimado full color' },
    { img: 'https://images.unsplash.com/photo-1781722351700-a80cd87ac1cb?w=400&h=400&fit=crop&auto=format', label: 'Kit onboarding empresa' },
    { img: 'https://images.unsplash.com/photo-1760602672748-6a570286ce73?w=400&h=400&fit=crop&auto=format', label: 'Caja premium con branding' },
    { img: 'https://images.unsplash.com/photo-1643946404043-178456b0e3f8?w=400&h=400&fit=crop&auto=format', label: 'Termos para eventos' },
    { img: 'https://images.unsplash.com/photo-1777639629784-02808d01322e?w=400&h=400&fit=crop&auto=format', label: 'Bordado alta definición' },
    { img: 'https://images.unsplash.com/photo-1775848366633-46257a5f55c0?w=400&h=400&fit=crop&auto=format', label: 'Gorra personalizada' },
    { img: 'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=400&h=400&fit=crop&auto=format', label: 'Regalo institucional' },
    { img: 'https://images.unsplash.com/photo-1774346091843-a487e60c8ff9?w=400&h=400&fit=crop&auto=format', label: 'Uniforme corporativo' },
  ],
]

const ROW_CLASSES = ['mosaic-row-1', 'mosaic-row-2', 'mosaic-row-3']

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#f7fafd] overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-base font-extrabold text-[#6366f1] uppercase tracking-wider mb-3">Productos Corporativos</p>
            <h2 className="text-4xl font-extrabold text-[#0d2137]">
              Tu marca en cada{' '}
              <span style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, color: '#6366f1', fontSize: '1.1em' }}>
                detalle
              </span>
            </h2>
          </div>
          <p className="text-[#0d2137]/45 text-sm max-w-xs">Kits, mugs, gorras y sets corporativos personalizados con la identidad de tu empresa.</p>
        </div>
      </div>

      {/* Three scrolling rows */}
      <div className="flex flex-col gap-3">
        {MOSAIC_ROWS.map((row, ri) => {
          const doubled = [...row, ...row]
          return (
            <div key={ri} className="flex gap-3 w-max">
              <div className={`flex gap-3 ${ROW_CLASSES[ri]}`}>
                {doubled.map((photo, i) => (
                  <a
                    key={i}
                    href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hola! Vi este producto en su portafolio y me interesa cotizar 👋\n\n🧥 Producto: ${photo.label}\n📦 Cantidad: (indícame cuántas unidades necesitas)\n\n¿Me pueden dar más información y precio? ¡Gracias!`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group shrink-0 w-52 h-52 rounded-2xl overflow-hidden bg-slate-200 cursor-pointer"
                  >
                    <img
                      src={photo.img}
                      alt={photo.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#0d2137]/0 group-hover:bg-[#0d2137]/50 transition-all duration-300 flex flex-col items-start justify-end p-3 gap-1.5">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-semibold leading-tight">
                        {photo.label}
                      </span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1 bg-[#25D366] text-white text-[10px] font-bold rounded-full px-2.5 py-1">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        Cotizar
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

// ─── Testimonials — inspired by Markmelo's specificity ───────────────────────

function Testimonials() {
  const reviews = [
    {
      name: 'Camila Torres', role: 'Directora de Marketing', company: 'SportZone Colombia',
      orders: '8 pedidos', text: 'Excelente servicio. Nos entregaron 200 camisetas para un evento corporativo en tiempo récord. El estampado quedó perfecto y la asesoría fue muy profesional.',
      rating: 5,
    },
    {
      name: 'Juan Ramírez', role: 'Gerente General', company: 'Constructora Beta',
      orders: '12 pedidos', text: 'Llevamos más de un año trabajando con ellos para nuestros uniformes. La calidad es consistente, los bordados son de muy alto nivel y los precios son justos para el volumen que manejamos.',
      rating: 5,
    },
    {
      name: 'Laura Mendoza', role: 'Emprendedora', company: 'Tienda Creativa',
      orders: '3 pedidos', text: 'Empecé con un pedido pequeño y quedé encantada. Me ayudaron con el diseño sin costo adicional y los buzos quedaron tal como los imaginé. Definitivamente vuelvo.',
      rating: 5,
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-base font-extrabold text-[#6366f1] uppercase tracking-wider mb-3">Lo que dicen nuestros clientes</p>
          <h2 className="text-4xl font-extrabold text-[#0d2137] mb-3">
            +200 clientes{' '}
            <span style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, color: '#6366f1', fontSize: '1.1em' }}>
              satisfechos
            </span>
          </h2>
          {/* Star rating summary */}
          <div className="flex items-center justify-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#f5c518]"><IconStar /></span>
            ))}
            <span className="text-[#0d2137]/50 text-sm ml-2">5.0 · Valoraciones verificadas</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map(r => (
            <div key={r.name} className="bg-[#f7fafd] border border-slate-100 rounded-2xl p-6 flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(r.rating)].map((_, i) => (
                  <span key={i} className="text-[#f5c518]"><IconStar /></span>
                ))}
              </div>
              <p className="text-[#0d2137]/70 text-sm leading-relaxed flex-1">"{r.text}"</p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-[#0d2137] font-bold text-sm">{r.name}</p>
                  <p className="text-[#0d2137]/40 text-xs">{r.role} · {r.company}</p>
                </div>
                {/* Order count badge — Markmelo style specificity */}
                <span className="bg-[#6366f1]/8 border border-[#6366f1]/15 text-[#6366f1] text-xs font-semibold rounded-full px-2.5 py-1">
                  {r.orders}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Marquee strip ────────────────────────────────────────────────────────────

function Strip() {
  const items = ['Buzos', 'Camisetas', 'Gorras', 'Mugs', 'Regalos Corp.', 'Estampados', 'Bordados', 'Chaquetas', 'Importación']
  const doubled = [...items, ...items]
  return (
    <div className="border-y border-slate-100 py-3 overflow-hidden bg-white">
      <div className="flex marquee gap-10 w-max">
        {doubled.map((item, i) => (
          <span key={i} className="text-[#0d2137]/25 text-xs font-semibold uppercase tracking-widest whitespace-nowrap flex items-center gap-3">
            {item}<span className="w-1 h-1 rounded-full bg-[#6366f1]/30" />
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Partners ─────────────────────────────────────────────────────────────────

function Partners() {
  const partners = [
    { name: 'TextilCo', icon: '🏭', tag: 'Fabricación' },
    { name: 'TintasExpress', icon: '🎨', tag: 'Tintas' },
    { name: 'ImportGroup', icon: '🌍', tag: 'Importación' },
    { name: 'TextilAndes', icon: '🧵', tag: 'Materia Prima' },
    { name: 'PrintTech', icon: '🖨️', tag: 'Impresión' },
    { name: 'EmbalajesCO', icon: '📦', tag: 'Logística' },
  ]
  return (
    <section id="aliados" className="py-24 bg-[#f7fafd]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-14">
          <p className="text-base font-extrabold text-[#6366f1] uppercase tracking-wider mb-3">Aliados estratégicos</p>
          <h2 className="text-4xl font-extrabold text-[#0d2137]">Respaldados por<br />los mejores proveedores</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map(p => (
            <div key={p.name} className="bg-white border border-slate-100 hover:border-[#6366f1]/25 rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-200 hover:shadow-lg hover:shadow-slate-100">
              <span className="text-3xl mb-3">{p.icon}</span>
              <p className="text-[#0d2137] font-bold text-xs">{p.name}</p>
              <p className="text-[#0d2137]/35 text-xs mt-0.5">{p.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Brands ───────────────────────────────────────────────────────────────────

function Brands() {
  const brands = [
    { name: 'Empresa Alfa', sector: 'Salud', c: '#00b0cf' },
    { name: 'Constructora Beta', sector: 'Construcción', c: '#6366f1' },
    { name: 'Colegio San Marcos', sector: 'Educación', c: '#818cf8' },
    { name: 'FoodChain CO', sector: 'Alimentos', c: '#34d399' },
    { name: 'SportZone', sector: 'Deportes', c: '#38bdf8' },
    { name: 'TechSolutions', sector: 'Tecnología', c: '#6366f1' },
    { name: 'GreenEnergy', sector: 'Energía', c: '#34d399' },
    { name: 'MediPlus', sector: 'Salud', c: '#00b0cf' },
    { name: 'LogisCargo', sector: 'Logística', c: '#818cf8' },
    { name: 'EduTech Pro', sector: 'Educación', c: '#38bdf8' },
    { name: 'UniAndes Club', sector: 'Universitario', c: '#6366f1' },
    { name: 'BancoCentral', sector: 'Finanzas', c: '#0d2137' },
  ]
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-14">
          <p className="text-base font-extrabold text-[#6366f1] uppercase tracking-wider mb-3">Empresas que confían en nosotros</p>
          <h2 className="text-4xl font-extrabold text-[#0d2137]">Marcas con las que<br />hemos trabajado</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {brands.map(b => (
            <div key={b.name} className="bg-[#f7fafd] hover:bg-white border border-transparent hover:border-slate-100 rounded-2xl p-4 flex flex-col items-center text-center transition-all duration-200 hover:shadow-md">
              <div className="w-9 h-9 rounded-xl mb-3 flex items-center justify-center text-white text-sm font-bold" style={{ background: b.c }}>
                {b.name[0]}
              </div>
              <p className="text-[#0d2137] font-semibold text-xs leading-tight">{b.name}</p>
              <p className="text-[#0d2137]/35 text-xs mt-0.5">{b.sector}</p>
            </div>
          ))}
        </div>
        <p className="text-[#0d2137]/20 text-xs mt-6 text-center italic">Representación ilustrativa de empresas atendidas.</p>
      </div>
    </section>
  )
}

// ─── Coverage ─────────────────────────────────────────────────────────────────

function Coverage() {
  const STEPS = [
    {
      n: '01',
      icon: (
        // T-shirt / product with star — "define tu producto"
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <path d="M8 14l7-6h6l3 4 3-4h6l7 6-5 4v20H13V18L8 14z" fill="currentColor" fillOpacity=".15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M20 8c0 2.21 1.79 4 4 4s4-1.79 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="24" cy="27" r="5" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 24.5l.9 1.8 2 .3-1.45 1.4.34 2L24 29l-1.79.94.34-2L21.1 26.6l2-.3z" fill="currentColor"/>
        </svg>
      ),
      title: 'Defines tu producto',
      desc: 'Una vez elegido el producto, modelo, cantidad y personalización de tu diseño, continuamos con el proceso de pago.',
    },
    {
      n: '02',
      icon: (
        // Wallet / payment with coins
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <rect x="6" y="14" width="36" height="24" rx="4" fill="currentColor" fillOpacity=".12" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 20h36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <rect x="30" y="25" width="10" height="7" rx="2" fill="currentColor" fillOpacity=".25" stroke="currentColor" strokeWidth="1.8"/>
          <circle cx="35" cy="28.5" r="1.5" fill="currentColor"/>
          <path d="M10 10h18a4 4 0 014 4H6a4 4 0 014-4z" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Realizas el pago',
      desc: 'Aceptamos pago total o anticipo del 50% para iniciar producción. El 50% restante se cancela contra entrega de tu pedido.',
    },
    {
      n: '03',
      icon: (
        // Phone with WhatsApp chat bubble — "envías el soporte"
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <rect x="12" y="4" width="24" height="40" rx="4" fill="currentColor" fillOpacity=".12" stroke="currentColor" strokeWidth="2"/>
          <rect x="16" y="9" width="16" height="24" rx="2" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="24" cy="39" r="2" fill="currentColor" fillOpacity=".4"/>
          <path d="M19 17h10M19 21h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="33" cy="14" r="5" fill="#25D366"/>
          <path d="M33 11.5c-1.38 0-2.5 1.12-2.5 2.5 0 .46.13.9.35 1.27L30.5 16.5l1.27-.35c.37.22.8.35 1.23.35 1.38 0 2.5-1.12 2.5-2.5S34.38 11.5 33 11.5z" fill="white" fillOpacity=".9"/>
        </svg>
      ),
      title: 'Envías el soporte',
      desc: 'Nos envías el comprobante de pago por este mismo medio (WhatsApp) para confirmar y dar inicio al proceso.',
    },
    {
      n: '04',
      icon: (
        // Pencil ruler + checkmark — "apruebas el diseño"
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <rect x="6" y="8" width="28" height="34" rx="3" fill="currentColor" fillOpacity=".12" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 18h16M12 24h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M28 6l2 2-12 12-3 1 1-3z" fill="currentColor" fillOpacity=".25" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
          <circle cx="36" cy="36" r="8" fill="#6366f1"/>
          <path d="M32.5 36l2.5 2.5 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Apruebas el diseño',
      desc: 'Te enviamos una vista previa del diseño para tu aprobación antes de iniciar la producción. Sin tu visto bueno, no producimos.',
    },
    {
      n: '05',
      icon: (
        // Calendar with checkmark — "confirmamos entrega"
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <rect x="6" y="10" width="36" height="32" rx="4" fill="currentColor" fillOpacity=".12" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 20h36" stroke="currentColor" strokeWidth="2"/>
          <circle cx="16" cy="8" r="3" fill="currentColor" fillOpacity=".3" stroke="currentColor" strokeWidth="2"/>
          <circle cx="32" cy="8" r="3" fill="currentColor" fillOpacity=".3" stroke="currentColor" strokeWidth="2"/>
          <path d="M14 8v8M34 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M17 31l4 4 10-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Confirmamos entrega',
      desc: '¡Listo! Confirmamos tu fecha de entrega y tu pedido queda en producción.',
    },
    {
      n: '06',
      icon: (
        // Map pin with building — "punto de entrega"
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <path d="M24 6C17.37 6 12 11.37 12 18c0 9 12 24 12 24s12-15 12-24c0-6.63-5.37-12-12-12z" fill="currentColor" fillOpacity=".15" stroke="currentColor" strokeWidth="2"/>
          <circle cx="24" cy="18" r="5" fill="currentColor" fillOpacity=".3" stroke="currentColor" strokeWidth="2"/>
          <rect x="16" y="36" width="16" height="8" rx="2" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M20 40h2M26 40h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M24 18v0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Punto de entrega',
      desc: 'Estamos en Bogotá. Punto de entrega: Calle 181C #13-54, Oficina 602, Torre 6, Portal de la 183. También prestamos servicio de domicilio, el valor depende de tu ubicación.',
    },
  ]

  return (
    <section id="cobertura" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-base font-extrabold text-[#6366f1] uppercase tracking-wider mb-3">Proceso de trabajo</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0d2137] leading-tight mb-4">
            Fácil, rápido{' '}
            <span style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, color: '#6366f1', fontSize: '1.1em' }}>
              y sencillo
            </span>
          </h2>
          <p className="text-[#0d2137]/45 text-lg max-w-md mx-auto">
            Nuestra forma de trabajo está diseñada para que tu experiencia sea cómoda de principio a fin.
          </p>
        </div>

        {/* Steps — zigzag like the reference image */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden lg:block -translate-x-1/2" />

          <div className="flex flex-col gap-16">
            {STEPS.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={step.n} className={`relative grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${isEven ? '' : 'lg:[direction:rtl]'}`}>
                  {/* Text side */}
                  <div className={isEven ? 'lg:text-right' : 'lg:[direction:ltr] lg:text-left'}>
                    {/* Step number — large accent like the reference */}
                    <span
                      className="block font-extrabold leading-none mb-3 select-none"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '5rem',
                        color: 'transparent',
                        WebkitTextStroke: '2px #6366f1',
                        opacity: 0.18,
                        lineHeight: 1,
                      }}
                    >
                      {step.n}
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#0d2137] mb-3 -mt-6">{step.title}</h3>
                    <p className="text-[#0d2137]/55 text-base leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Icon side */}
                  <div className={`flex ${isEven ? 'lg:justify-start' : 'lg:[direction:ltr] lg:justify-end'} justify-start`}>
                    <div className="relative">
                      {/* Dot on connector */}
                      <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-transparent ring-4 ring-white z-10" />
                      <div className="w-28 h-28 rounded-3xl bg-[#6366f1]/8 border border-[#6366f1]/15 flex items-center justify-center text-[#6366f1]">
                        {step.icon}
                      </div>
                      {/* Number badge */}
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#6366f1] text-white text-xs font-extrabold flex items-center justify-center shadow-md">
                        {parseInt(step.n)}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-[#0d2137] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="text-white font-extrabold text-xl mb-1">¿Listo para empezar?</p>
            <p className="text-white/45 text-sm">Escríbenos y en menos de 2 horas tienes tu cotización.</p>
          </div>
          <a href={wa()} target="_blank" rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb85a] text-white font-bold rounded-full px-7 py-3.5 transition-all duration-200 hover:shadow-lg hover:shadow-green-200 text-sm">
            <IconWA /> Iniciar mi pedido
          </a>
        </div>

      </div>
    </section>
  )
}

// ─── Floating WA ──────────────────────────────────────────────────────────────

function FloatingWA() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <a href={wa()} target="_blank" rel="noopener noreferrer" aria-label="Cotizar por WhatsApp"
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1fb85a] rounded-full flex items-center justify-center shadow-xl shadow-green-300/30 transition-all duration-300 hover:scale-110 wa-pulse ${show ? 'opacity-100' : 'opacity-0 pointer-events-none translate-y-4'}`}>
      <IconWA size={26} />
    </a>
  )
}

// ─── Events ───────────────────────────────────────────────────────────────────

const EVENT_CARDS = [
  {
    tag: 'Conciertos & Festivales',
    headline: 'Staff y voluntarios con identidad visual unificada',
    sub: 'Camisetas, polos y chaquetas para todo tu equipo operativo.',
    img: 'https://images.unsplash.com/photo-1773883949033-455699ab1361?w=900&h=600&fit=crop&auto=format',
    accent: '#6366f1',
    span: 'lg:col-span-2 lg:row-span-2',
    big: true,
    examples: [
      { img: 'https://images.unsplash.com/photo-1773883949033-455699ab1361?w=700&h=500&fit=crop&auto=format', label: 'Staff en camisetas a juego' },
      { img: 'https://images.unsplash.com/photo-1773883926069-4135f1fdd710?w=700&h=500&fit=crop&auto=format', label: 'Equipo Google uniformado' },
      { img: 'https://images.unsplash.com/photo-1773883925979-73e8eb2f36ac?w=700&h=500&fit=crop&auto=format', label: 'Camisetas con números y logos' },
    ],
  },
  {
    tag: 'Corporativos',
    headline: 'Dotación para tu empresa',
    sub: 'Polos, camisas y chaquetas con tu logo.',
    img: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&h=400&fit=crop&auto=format',
    accent: '#00b0cf',
    span: 'lg:col-span-1',
    big: false,
    examples: [
      { img: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=700&h=500&fit=crop&auto=format', label: 'Camisetas corporativas' },
      { img: 'https://images.unsplash.com/photo-1773883926157-2687f3209666?w=700&h=500&fit=crop&auto=format', label: 'Equipo con letras de empresa' },
      { img: 'https://images.unsplash.com/photo-1717127354833-e4d10625d3e7?w=700&h=500&fit=crop&auto=format', label: 'Polos con marca' },
    ],
  },
  {
    tag: 'Deportes & Torneos',
    headline: 'Hoodies y Camisetas de Colegio',
    sub: 'Sublimación full color para camisetas y uniformes.',
    img: 'https://images.unsplash.com/photo-1613125479775-0c09b9a46ae1?w=600&h=400&fit=crop&auto=format',
    accent: '#6366f1',
    span: 'lg:col-span-1',
    big: false,
    examples: [
      { img: 'https://images.unsplash.com/photo-1613125479775-0c09b9a46ae1?w=700&h=500&fit=crop&auto=format', label: 'Jersey de fútbol sublimado' },
      { img: 'https://images.unsplash.com/photo-1623451377838-bdecc55ee07d?w=700&h=500&fit=crop&auto=format', label: 'Uniforme deportivo personalizado' },
    ],
  },
  {
    tag: 'Universidades & Colegios',
    headline: 'Hoodies y Camisetas empresariales',
    sub: 'Bordado o serigrafía en grandes volúmenes.',
    img: 'https://images.unsplash.com/photo-1773883926069-4135f1fdd710?w=900&h=400&fit=crop&auto=format',
    accent: '#00b0cf',
    span: 'lg:col-span-2',
    big: false,
    examples: [
      { img: 'https://images.unsplash.com/photo-1770235622269-bf3124d85032?w=700&h=500&fit=crop&auto=format', label: 'Sudadera universitaria bordada' },
      { img: 'https://images.unsplash.com/photo-1770235622334-7b721261a230?w=700&h=500&fit=crop&auto=format', label: 'Uniforme institucional' },
      { img: 'https://images.unsplash.com/photo-1773883949033-455699ab1361?w=700&h=500&fit=crop&auto=format', label: 'Grupo de estudiantes uniformados' },
    ],
  },
  {
    tag: 'Institucional Colegio',
    headline: 'Hoodies y Camisetas de Colegio',
    sub: 'Chaquetas, Camisetas Hoodies institucionales',
    img: 'https://images.unsplash.com/photo-1770235622269-bf3124d85032?w=900&h=400&fit=crop&auto=format',
    accent: '#6366f1',
    span: 'lg:col-span-2',
    big: false,
    examples: [
      { img: 'https://images.unsplash.com/photo-1770235622269-bf3124d85032?w=700&h=500&fit=crop&auto=format', label: 'Sudadera con logo del colegio' },
      { img: 'https://images.unsplash.com/photo-1680292783974-a9a336c10366?w=700&h=500&fit=crop&auto=format', label: 'Buzo institucional bordado' },
      { img: 'https://images.unsplash.com/photo-1773883949033-455699ab1361?w=700&h=500&fit=crop&auto=format', label: 'Camisetas de educación física' },
    ],
  },
  {
    tag: 'Fundaciones & ONG',
    headline: 'Identificamos a tu equipo de voluntarios',
    sub: 'Camisetas, chalecos y gorras para organizaciones.',
    img: 'https://images.unsplash.com/photo-1773883926157-2687f3209666?w=900&h=400&fit=crop&auto=format',
    accent: '#00b0cf',
    span: 'lg:col-span-1',
    big: false,
    examples: [
      { img: 'https://images.unsplash.com/photo-1773883926157-2687f3209666?w=700&h=500&fit=crop&auto=format', label: 'Camisetas para voluntarios' },
      { img: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=700&h=500&fit=crop&auto=format', label: 'Kit de identificación' },
      { img: 'https://images.unsplash.com/photo-1773883949033-455699ab1361?w=700&h=500&fit=crop&auto=format', label: 'Dotación evento social' },
    ],
  },
]

function EventModal({ card, onClose }: { card: typeof EVENT_CARDS[0]; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', fn)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', fn); document.body.style.overflow = '' }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 pt-6 pb-4 border-b border-slate-100 flex items-start justify-between z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1 text-white mb-2 inline-block"
              style={{ background: card.accent }}>
              {card.tag}
            </span>
            <h3 className="font-extrabold text-[#0d2137] text-lg mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {card.headline}
            </h3>
            <p className="text-[#0d2137]/50 text-sm mt-1">{card.sub}</p>
          </div>
          <button onClick={onClose} className="ml-4 shrink-0 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="#0d2137" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>

        {/* Examples grid */}
        <div className="p-6">
          <p className="text-xs font-semibold text-[#0d2137]/40 uppercase tracking-widest mb-4">Ejemplos de lo que hemos hecho</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {card.examples.map((ex, i) => (
              <div key={i} className={`relative rounded-2xl overflow-hidden ${i === 0 && card.examples.length % 2 !== 0 ? 'sm:col-span-2' : ''}`}>
                <img src={ex.img} alt={ex.label} className="w-full h-52 object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-semibold">{ex.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="px-6 pb-6">
          <a
            href={`https://wa.me/573001234567?text=${encodeURIComponent(`Hola! Me interesa cotizar dotación para ${card.tag}. ¿Me pueden ayudar?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb85a] text-white font-semibold rounded-2xl px-6 py-4 text-sm transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Cotizar {card.tag}
          </a>
        </div>
      </div>
    </div>
  )
}

function Events() {
  const [active, setActive] = useState<typeof EVENT_CARDS[0] | null>(null)

  return (
    <section className="py-24 bg-white">
      {active && <EventModal card={active} onClose={() => setActive(null)} />}
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#6366f1]/20 bg-[#6366f1]/5 text-[#6366f1] rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
              Para eventos y empresas
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d2137] leading-tight">
              Vestimos tu evento,<br />
              <span className="text-[#6366f1]">de principio a fin</span>
            </h2>
          </div>
          <p className="text-[#0d2137]/50 text-sm leading-relaxed max-w-xs md:text-right">
            Haz clic en cada categoría para ver ejemplos reales de lo que hemos hecho.
          </p>
        </div>

        {/* Bento photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10" style={{ gridAutoRows: '220px' }}>
          {EVENT_CARDS.map((c) => (
            <button
              key={c.tag}
              onClick={() => setActive(c)}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1] ${c.span} ${c.big ? 'lg:row-span-2' : ''}`}
            >
              {/* Photo */}
              <img
                src={c.img}
                alt={c.tag}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060f1c]/80 via-[#060f1c]/20 to-transparent" />

              {/* Tag pill */}
              <div className="absolute top-4 left-4">
                <span className="text-white text-[10px] font-bold uppercase tracking-widest rounded-full px-3 py-1"
                  style={{ background: c.accent + 'cc' }}>
                  {c.tag}
                </span>
              </div>

              {/* "Ver ejemplos" hint on hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-semibold rounded-full px-3 py-1 flex items-center gap-1">
                  Ver ejemplos
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5h6M5 2l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </div>

              {/* Text bottom */}
              <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end">
                <h3 className={`font-extrabold text-white leading-snug mb-1 ${c.big ? 'text-xl md:text-2xl' : 'text-base'}`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {c.headline}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed">{c.sub}</p>
              </div>
            </button>
          ))}
        </div>

        {/* CTA bar */}
        <div className="relative rounded-2xl overflow-hidden bg-[#0d2137] px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#6366f1]/20 blur-2xl pointer-events-none" />
          <div>
            <p className="text-[#00b0cf] text-xs font-semibold uppercase tracking-widest mb-1">Sin compromiso</p>
            <p className="text-white font-bold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              ¿Tienes un evento o necesitas dotación?
            </p>
          </div>
          <a
            href={`https://wa.me/573001234567?text=${encodeURIComponent('Hola! Tengo un evento próximo y necesito cotizar dotación personalizada. ¿Me pueden ayudar?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb85a] text-white font-semibold rounded-full px-7 py-3 text-sm transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Cotizar ahora
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#060f1c] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <img src={iconImg} alt="Estampamos tus Ideas" className="h-12 w-auto object-contain brightness-0 invert opacity-60" />
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-6">
              Personalizamos, estampamos y bordamos productos de calidad para personas y empresas en toda Colombia.
            </p>

            {/* Social media */}
            <div className="mb-6">
              <p className="text-white/25 text-xs font-semibold uppercase tracking-widest mb-3">Síguenos</p>
              <div className="flex items-center gap-3">
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/8 hover:bg-[#E1306C] border border-white/10 hover:border-[#E1306C] flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                  aria-label="Instagram">
                  <IconInstagram />
                </a>
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/8 hover:bg-[#1877F2] border border-white/10 hover:border-[#1877F2] flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                  aria-label="Facebook">
                  <IconFacebook />
                </a>
                <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/8 hover:bg-white/20 border border-white/10 hover:border-white/30 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                  aria-label="TikTok">
                  <IconTikTok />
                </a>
                <a href={wa()} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/8 hover:bg-[#25D366] border border-white/10 hover:border-[#25D366] flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                  aria-label="WhatsApp">
                  <IconWA size={18} />
                </a>
              </div>
            </div>

            {/* Coverage tag */}
            <div className="flex items-center gap-2 text-white/30 text-xs">
              <span>🇨🇴</span> Distribución en toda Colombia
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="text-white/25 text-xs font-semibold uppercase tracking-widest mb-4">Productos</p>
            <ul className="space-y-2.5">
              {PRODUCTS.map(p => (
                <li key={p.name}>
                  <button onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/40 hover:text-white text-sm transition-colors duration-200 text-left">
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="text-white/25 text-xs font-semibold uppercase tracking-widest mb-4">Información</p>
            <ul className="space-y-2.5 text-white/40 text-sm">
              <li>🛒 Tienda Virtual</li>
              <li>💯 Compra Segura</li>
              <li>🤝 Minorista y Mayorista</li>
              <li>⚡ Cotización en 2 horas</li>
              <li>🎨 Diseño incluido</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/15 text-xs">© {new Date().getFullYear()} Estampamos tus Ideas · Colombia 🇨🇴</p>
          <p className="text-white/15 text-xs">Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GuaranteeStrip />
        <Strip />
        <SalesModels />
        <Events />
        <Products />
        <Portfolio />
        <Testimonials />
        <Partners />
        <Brands />
        <Coverage />
      </main>
      <Footer />
      <FloatingWA />
    </>
  )
}
