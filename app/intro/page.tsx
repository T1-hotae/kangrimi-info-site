import type { Metadata } from "next";
import GooglePlayButton from "./_components/google-play-btn";
import AppStoreButton from "./_components/app-store-btn";

export const metadata: Metadata = { title: "앱 소개 | 강림이" };

const features = [
  {
    icon: "🎯",
    title: "통합 공지 피드",
    desc: "본부 6개 카테고리 + 20개 학과 게시판, 26개 채널을 하나의 피드로 제공합니다. 30분마다 자동 업데이트.",
  },
  {
    icon: "🔍",
    title: "빠른 검색 & 필터",
    desc: "실시간 검색으로 3초 안에 원하는 공지를 찾아보세요. 카테고리·학과·날짜 기준 필터도 지원합니다.",
  },
  {
    icon: "📱",
    title: "개인화 알림",
    desc: "관심 카테고리와 내 학과를 선택해 꼭 필요한 공지만 알림으로 받을 수 있습니다.",
  },
  {
    icon: "🔖",
    title: "북마크 & 읽음 표시",
    desc: "나중에 볼 공지는 북마크로 저장하고, 읽은 공지는 자동으로 구분됩니다.",
  },
  {
    icon: "🗺️",
    title: "캠퍼스 맵",
    desc: "네이버 지도로 강남대 캠퍼스를 한눈에. 20개 이상 주요 건물 위치를 바로 확인할 수 있습니다.",
  },
];

const steps = [
  {
    step: "1",
    title: "공지 둘러보기",
    desc: "앱을 열면 최신 공지가 바로 표시됩니다. 카테고리·학과 탭으로 원하는 공지만 골라보세요.",
  },
  {
    step: "2",
    title: "공지 검색",
    desc: "상단 검색 아이콘을 누르고 키워드를 입력하면 실시간으로 결과가 나타납니다.",
  },
  {
    step: "3",
    title: "북마크 저장",
    desc: "공지 옆 북마크 아이콘을 누르면 저장됩니다. 북마크 탭에서 언제든 확인하세요.",
  },
  {
    step: "4",
    title: "알림 설정",
    desc: "더보기 → 알림 설정에서 카테고리를 선택하면 새 공지가 올라올 때 바로 알림을 받습니다.",
  },
];

export default function IntroPage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section>
        <div className="inline-block text-xs font-semibold text-[#006DB8] bg-blue-50 px-3 py-1 rounded-full mb-3">
          강남대학교 공지 통합 앱
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">강림이</h1>
        <p className="text-gray-500 text-sm leading-7 mb-6">
          강남대학교 + 알림이의 줄임말로, 흩어진 공지를 한눈에 모아 중요한
          소식을 놓치지 않게 해드립니다.
        </p>
        <div className="flex flex-wrap gap-3">
          <GooglePlayButton />
          <AppStoreButton />
        </div>
      </section>

      {/* Why */}
      <section className="bg-blue-50 rounded-2xl px-6 py-5">
        <p className="text-xs font-semibold text-[#006DB8] mb-2 uppercase tracking-wide">
          왜 강림이인가요?
        </p>
        <p className="text-sm text-gray-700 leading-7">
          강남대학교의 공지는 본부, 각 학과 등 수십 개의 게시판에 흩어져
          있습니다. 장학금 신청, 수강신청 안내 같은 중요한 공지를 놓치기 쉬운
          구조죠. <strong className="text-gray-900">강림이</strong>는 26개
          채널을 한 곳에 모아 3초 안에 원하는 공지를 찾을 수 있도록
          설계했습니다.
        </p>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-base font-bold text-gray-900 mb-4">핵심 기능</h2>
        <div className="grid grid-cols-1 gap-3">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm"
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-0.5">
                  {title}
                </p>
                <p className="text-sm text-gray-500 leading-6">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to use */}
      <section>
        <h2 className="text-base font-bold text-gray-900 mb-4">
          이렇게 사용하세요
        </h2>
        <div className="space-y-3">
          {steps.map(({ step, title, desc }) => (
            <div key={step} className="flex items-start gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#006DB8] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {step}
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-0.5">
                  {title}
                </p>
                <p className="text-sm text-gray-500 leading-6">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Supported channels */}
      <section>
        <h2 className="text-base font-bold text-gray-900 mb-3">
          지원하는 공지 채널
        </h2>
        <div className="space-y-2">
          <div className="bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
            <p className="text-xs font-semibold text-[#006DB8] mb-2">
              학교 공식 (6개)
            </p>
            <p className="text-sm text-gray-600 leading-6">
              학사 · 장학 · 학습/상담 · 취창업 · 교내행사 · 교외행사
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
            <p className="text-xs font-semibold text-[#006DB8] mb-2">
              학과별 (20개)
            </p>
            <p className="text-sm text-gray-600 leading-6">
              자유전공학부 · 컴퓨터공학부 · 인공지능융합공학부 ·
              전자반도체공학부 · 사회복지학부 · 상경학부 · 법행정세무학부 ·
              교육학과 · 유아교육과 외 다수
            </p>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="border-t border-gray-100 pt-10">
        <p className="text-sm font-semibold text-gray-900 mb-1">
          지금 바로 다운로드
        </p>
        <p className="text-sm text-gray-500 mb-5">
          Google Play · App Store에서 무료로 이용할 수 있습니다.
        </p>
        <div className="flex flex-wrap gap-3">
          <GooglePlayButton />
          <AppStoreButton />
        </div>
      </section>
    </div>
  );
}
