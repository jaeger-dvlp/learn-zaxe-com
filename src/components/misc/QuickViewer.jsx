import React from 'react';
import { ImPlus } from 'react-icons/im';
import { useTranslation } from 'next-i18next';
import Content from '@/src/content/Content';

function QuickViewer() {
  const { t } = useTranslation();
  const [QuickView, setQuickView] = React.useState({
    activeView: 'quick-view',
    activeSubstance: null,
    subjects: Content.components.quickViewer,
  });

  const scrollToSubject = (id) => {
    const subject = document.querySelector(`#subject${id}`) || null;
    if (subject && window.innerWidth < 1024) {
      subject.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  };

  const changeActiveSubject = (subject, index) => {
    scrollToSubject(index);
    if (QuickView.activeSubstance !== subject.slug) {
      return setQuickView({
        ...QuickView,
        activeView: subject.slug,
      });
    }
    return false;
  };

  const changeActiveSubtance = (substance) => {
    if (QuickView.activeSubstance !== substance) {
      return setQuickView({
        ...QuickView,
        activeSubstance: substance,
      });
    }
    return setQuickView({
      ...QuickView,
      activeSubstance: null,
    });
  };

  return (
    <div
      data-aos="fade"
      data-aos-delay={200}
      data-aos-duration={500}
      className="grid w-full grid-cols-1 font-zaxe place-content-start place-items-center"
    >
      <div className="grid w-full grid-cols-1 py-16 bg-white max-w-[1150px] place-content-start place-items-center">
        <div className="grid w-full grid-cols-1 gap-5 xl:gap-16 lg:gap-16 xl:grid-cols-11 lg:grid-cols-11 place-content-start place-items-start">
          <div className="relative flex justify-between w-full gap-6 p-5 py-3 overflow-scroll subjects-container xl:px-5 lg:px-5 xl:overflow-visible lg:overflow-visible xl:py-0 lg:py-0 xl:col-span-3 lg:col-span-3 col-span-full xl:grid lg:grid xl:grid-cols-1 lg:grid-cols-1 place-content-start place-items-center">
            {QuickView.subjects.map((subject, index) => (
              <button
                key={subject.slug}
                id={`subject${index}`}
                onClick={() => changeActiveSubject(subject, index)}
                className={`w-full xl:min-w-[230px] lg:min-w-[230px] min-w-[200px] outline-none ring-2 ring-transparent active:ring-sky-500
                transition-all duration-200 xl:min-h-[60px] lg:min-h-[60px] min-h-[55px] xl:text-2xl lg:text-2xl text-lg font-semibold p-1 rounded-3xl bg-[#F5F5F5]
                text-[#6F6F6F] hover:bg-sky-200 hover:text-zinc-600 ${
                  QuickView.activeView === subject.slug &&
                  '!bg-zaxe !text-white'
                }`}
                type="button"
              >
                {t(subject.name)}
              </button>
            ))}
          </div>
          <div className="grid w-full grid-cols-1 gap-6 p-5 py-0 xl:col-span-8 lg:col-span-8 col-span-full place-content-start place-items-start">
            {QuickView.subjects
              .find(({ slug }) => slug === QuickView.activeView)
              .substances.map((substance) => (
                <button
                  type="button"
                  onClick={() => changeActiveSubtance(substance)}
                  key={substance.id}
                  className={`w-full overflow-hidden anim-fade-down grid grid-cols-1
                  place-content-start place-items-start outline-none ring-2 ring-transparent
                  active:ring-sky-500 transition-all duration-200 min-h-[60px] p-0 gap-0 rounded-3xl
                  bg-[#F5F5F5] text-[#6F6F6F] hover:bg-sky-200 hover:text-zinc-600 ${
                    substance === QuickView.activeSubstance &&
                    '!bg-zaxe !text-white'
                  }`}
                >
                  <h1 className="flex items-center justify-between w-full gap-5 pt-4 pb-4 mt-0 font-normal text-left text-md xl:text-xl lg:text-xl xl:pb-0 lg:pb-0 px-7">
                    <span>{t(substance.heading)}</span>
                    <ImPlus
                      className={`rotate-0 !w-5 !h-5 !text-xl transition-all duration-150 text-zaxe ${
                        substance === QuickView.activeSubstance &&
                        '!-rotate-45 !text-white'
                      }`}
                    />
                  </h1>
                  <div
                    className={`max-h-[0px] overflow-hidden text-left invisible opacity-0
                    text-white xl:text-lg lg:text-lg text-sm px-8 py-0 h-full transition-all duration-300 ${
                      substance === QuickView.activeSubstance &&
                      '!max-h-[100rem] !visible !opacity-100 !py-5'
                    }`}
                  >
                    <p className="!transition-none font-light">
                      {t(substance.description)}
                    </p>
                  </div>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickViewer;
