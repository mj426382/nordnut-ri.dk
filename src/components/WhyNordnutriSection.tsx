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
        background: 'linear-gradient(135deg, #f0f9ff 0%, #eef7eb 50%, #f0f9ff 100%)',
      }}
    >
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

        {/* Advantages grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv) => (
            <div
              key={adv.num}
              className="group bg-white hover:bg-sky-50 border border-neutral-100 hover:border-sky-200 rounded-2xl p-8 transition-all shadow-sm hover:shadow-md"
            >
              <span className="text-4xl font-bold text-sky-200 group-hover:text-sky-300 transition-colors">
                {adv.num}
              </span>
              <h3 className="text-lg font-bold text-neutral-900 mt-4 mb-3">{adv.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
