import { useTranslations } from 'next-intl';

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
          <div className="w-8 h-px bg-emerald-600" />
          <span className="text-emerald-600 text-sm font-semibold uppercase tracking-widest">
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
            <div className="mt-8 p-6 bg-emerald-50 rounded-2xl border-l-4 border-emerald-500">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700 mb-2">
                {t('mission')}
              </p>
              <p className="text-neutral-700 italic leading-relaxed">
                &ldquo;{t('missionText')}&rdquo;
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 text-white text-center lg:text-left"
              >
                <p className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-emerald-100 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
