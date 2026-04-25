import Link from "next/link";

const links = [
  { href: "/intro", label: "앱 소개", desc: "강림이가 어떤 앱인지 알아보세요." },
  { href: "/changelog", label: "새로운 내용", desc: "최신 업데이트 내역을 확인하세요." },
  { href: "/privacy", label: "개인정보 처리방침", desc: "개인정보를 어떻게 처리하는지 확인하세요." },
  { href: "/terms", label: "서비스 이용약관", desc: "서비스 이용 조건을 확인하세요." },
];

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">강림이</h1>
      <p className="text-gray-500 mb-10">캠퍼스 공지를 한눈에 확인하는 앱</p>
      <div className="grid gap-4">
        {links.map(({ href, label, desc }) => (
          <Link
            key={href}
            href={href}
            className="block bg-white rounded-xl border border-gray-200 px-6 py-5 hover:border-knu hover:shadow-sm transition-all"
          >
            <div className="font-semibold text-gray-900 mb-1">{label}</div>
            <div className="text-sm text-gray-500">{desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
