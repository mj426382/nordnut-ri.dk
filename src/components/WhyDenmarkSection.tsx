import { useTranslations } from 'next-intl';

export default function WhyDenmarkSection() {
  const t = useTranslations('whyDenmark');

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
    { value: t('stat4Value'), label: t('stat4Label') },
  ];

  const features = [
    { title: t('f1Title'), desc: t('f1Desc') },
    { title: t('f2Title'), desc: t('f2Desc') },
    { title: t('f3Title'), desc: t('f3Desc') },
    { title: t('f4Title'), desc: t('f4Desc') },
  ];

  return (
    <section id="why-denmark" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-sky-500" />
            <span className="text-sky-600 text-sm font-semibold uppercase tracking-widest">
              {t('label')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            {t('headline')}
          </h2>
          <p className="text-lg text-neutral-600">{t('subheadline')}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gradient-to-br from-sky-500 to-sky-700 rounded-2xl p-6 text-center text-white"
            >
              <p className="text-3xl lg:text-4xl font-bold mb-1">{stat.value}</p>
              <p className="text-sky-100 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 p-6 bg-sky-50 rounded-2xl"
            >
              <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
