import type { Metadata } from "next";
import releases from "./relases";

export const metadata: Metadata = { title: "새로운 내용 | 강림이" };

export default function ChangelogPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">새로운 내용</h1>
      <p className="text-gray-500 mb-10">강림이의 업데이트 내역입니다.</p>

      <div className="space-y-8">
        {releases.map((release) => (
          <div
            key={release.version}
            className="bg-white rounded-xl border border-gray-200 px-6 py-6"
          >
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-lg font-bold text-gray-900">
                v{release.version}
              </span>
              {"build" in release && (
                <span className="text-xs text-gray-400 bg-gray-100 rounded px-1.5 py-0.5">
                  {release.build}
                </span>
              )}
              <span className="text-sm text-gray-400">{release.date}</span>
            </div>
            <ul className="space-y-2">
              {release.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-knu flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
