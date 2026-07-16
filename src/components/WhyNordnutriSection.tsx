import { useTranslations } from 'next-intl';

export default function WhyNordnutriSection() {
  const t = useTranslations('whyNordnutri');

  const advantages = [
    { title: t('a1Title'), desc: t('a1Desc'), num: '01' },
    { title: t('a2Title'), desc: t('a2Desc'), num: '02' },
    { title: t('a3Title'), desc: t('a3Desc'), num: '03' },
    { title: t('a4Title'), desc: t('a4Desc'), num: '04' },
    { title: t('a5Title'), desc: t('a5Desc'), num: '05' },
    { title: t('a6Title'), desc: t('a6Desc'), num: '06' },
  ];

  return (
    <section
      id="why-nordnutri"
      className="py-20 lg:py-32"
      style={{
        background: 'linear-gradient(135deg, #0a2e1a 0%, #0d3d24 50%, #1a5c3a 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">
              {t('label')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('headline')}
          </h2>
          <p className="text-lg text-emerald-100/70">{t('subheadline')}</p>
        </div>

        {/* Advantages grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv) => (
            <div
              key={adv.num}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-8 transition-all"
            >
              <span className="text-4xl font-bold text-emerald-500/30 group-hover:text-emerald-500/50 transition-colors">
                {adv.num}
              </span>
              <h3 className="text-lg font-bold text-white mt-4 mb-3">{adv.title}</h3>
              <p className="text-emerald-100/60 text-sm leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
