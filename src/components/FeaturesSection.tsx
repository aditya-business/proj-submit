import {
  ArrowRight,
  BookOpen,
  Box,
  Database,
  Menu,
  Smartphone,
  Tv,
} from 'lucide-react';
import { FEATURES_DATA, FeatureItem } from '../data/portfolioData';

interface FeaturesSectionProps {
  onSelectFeature: (feature: FeatureItem) => void;
}

function renderFeatureIcon(icon: FeatureItem['icon']) {
  const iconClass =
    'w-10 h-10 text-[#FF014F] group-hover:text-white transition-colors duration-300';

  switch (icon) {
    case 'bars':
      return <Menu className={iconClass} strokeWidth={1.6} />;
    case 'book':
      return <BookOpen className={iconClass} strokeWidth={1.6} />;
    case 'tv':
      return <Tv className={iconClass} strokeWidth={1.6} />;
    case 'mobile':
      return <Smartphone className={iconClass} strokeWidth={1.6} />;
    case 'database':
      return <Database className={iconClass} strokeWidth={1.6} />;
    case 'cube':
      return <Box className={iconClass} strokeWidth={1.6} />;
  }
}

export function FeaturesSection({ onSelectFeature }: FeaturesSectionProps) {
  return (
    <section
      id="features"
      className="scroll-mt-24 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24"
    >
      <div className="mb-12 lg:mb-14">
        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#FF014F] mb-3">
          SKILLS &amp; PRACTICE
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-[48px] text-[#3C3E41] tracking-tight">
          What I&apos;m Learning &amp; Doing
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES_DATA.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelectFeature(item)}
            className="group text-left p-9 sm:p-11 rounded-xl bg-[#F5F7FA] border border-[#D4DBE2] hover:bg-[#FF014F] hover:border-[#FF014F] transition-colors duration-200 flex flex-col justify-between min-h-[290px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F]"
          >
            <div>
              <div className="mb-7">{renderFeatureIcon(item.icon)}</div>
              <h3 className="font-display font-semibold text-[22px] text-[#1E2125] group-hover:text-white transition-colors duration-200 mb-4">
                {item.title}
              </h3>
              <p className="text-[15px] leading-[1.75] text-[#3C3E41] group-hover:text-white transition-colors duration-200">
                {item.description}
              </p>
            </div>

            <div className="mt-6 flex items-center text-[#FF014F] group-hover:text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              <ArrowRight className="w-5 h-5" strokeWidth={1.8} />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
