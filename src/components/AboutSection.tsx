import { useTranslations } from 'next-intl';

function NordicQualityBadge() {
  return (
    <div className="relative bg-white rounded-2xl shadow-md border border-sky-100 p-6 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0ea5e9 1px, transparent 0)', backgroundSize: '20px 20px' }} />
      
      {/* Danish flag + Nordic feel */}
      <div className="relative flex items-center gap-4 mb-6">
        {/* Danish flag mini */}
        <div className="w-12 h-8 rounded overflow-hidden flex-shrink-0 shadow-sm">
          <div className="w-full h-full bg-[#C60C30] relative">
            <div className="absolute left-3 top-0 w-1.5 h-full bg-white" />
            <div className="absolute left-0 top-3 h-1.5 w-full bg-white" />
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-sky-600">Danmark</p>
          <p className="text-sm text-neutral-500 font-medium">Nordic Quality Standard</p>
        </div>
      </div>

      <div className="space-y-3">
        {[
          { icon: '🏆', label: 'GMP Certified' },
          { icon: '✅', label: 'EU Compliant' },
          { icon: '🌿', label: 'Clean Label' },
          { icon: '🚚', label: 'EU-Wide Delivery' },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-3 bg-sky-50 rounded-lg px-4 py-2.5">
            <span className="text-base">{item.icon}</span>
            <span className="text-sm font-semibold text-neutral-700">{item.label}</span>
            <svg className="w-4 h-4 text-[#86BA80] ml-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutSection() {
  const t = useTranslations('about');

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-sky-500" />
          <span className="text-sky-600 text-sm font-semibold uppercase tracking-widest">
            {t('label')}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-8 leading-tight">
              {t('headline')}
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>{t('body1')}</p>
              <p>{t('body2')}</p>
              <p>{t('body3')}</p>
            </div>

            {/* Mission block */}
            <div className="mt-8 p-6 bg-sky-50 rounded-2xl border-l-4 border-sky-400">
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-700 mb-2">
                {t('mission')}
              </p>
              <p className="text-neutral-700 italic leading-relaxed">
                &ldquo;{t('missionText')}&rdquo;
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-sky-500 to-sky-700 rounded-2xl p-5 text-white text-center"
                >
                  <p className="text-2xl lg:text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sky-100 text-xs font-medium leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual: quality badges */}
          <div className="flex flex-col gap-6">
            <NordicQualityBadge />

            {/* Extra highlight card */}
            <div
              className="rounded-2xl p-6 text-white"
              style={{ background: 'linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #86BA80 100%)' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-white mb-1">Pan-European Network</p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Reaching retailers, pharmacies and e-commerce platforms across 25+ EU markets from our Danish base.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
