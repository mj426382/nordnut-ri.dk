import { useTranslations } from 'next-intl';

export default function ProcessSection() {
  const t = useTranslations('process');

  const steps = [
    { num: '01', title: t('step1Title'), desc: t('step1Desc') },
    { num: '02', title: t('step2Title'), desc: t('step2Desc') },
    { num: '03', title: t('step3Title'), desc: t('step3Desc') },
    { num: '04', title: t('step4Title'), desc: t('step4Desc') },
    { num: '05', title: t('step5Title'), desc: t('step5Desc') },
  ];

  return (
    <section id="process" className="py-20 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-emerald-600" />
            <span className="text-emerald-600 text-sm font-semibold uppercase tracking-widest">
              {t('label')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            {t('headline')}
          </h2>
          <p className="text-lg text-neutral-600">{t('subheadline')}</p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute left-[39px] top-12 bottom-12 w-px bg-emerald-200" />

          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={step.num} className="flex gap-8 items-start group">
                {/* Step number circle */}
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-white border-2 border-emerald-200 group-hover:border-emerald-500 group-hover:bg-emerald-600 flex flex-col items-center justify-center transition-all shadow-sm z-10">
                  <span className="text-xs font-bold text-emerald-600 group-hover:text-emerald-200 transition-colors leading-none">
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 group-hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-2">{step.title}</h3>
                      <p className="text-neutral-600 leading-relaxed">{step.desc}</p>
                    </div>
                    {idx === steps.length - 1 && (
                      <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
