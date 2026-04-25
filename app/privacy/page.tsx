import type { Metadata } from "next";

export const metadata: Metadata = { title: "개인정보 처리방침 | 강림이" };

export default function PrivacyPage() {
  return (
    <article className="prose-custom">
      <h1>개인정보 처리방침</h1>
      <p className="text-sm text-gray-400 mb-8">
        공고일: 2026년 2월 1일 &nbsp;·&nbsp; 시행일: 2026년 3월 1일
      </p>

      <p>
        <strong>강림이</strong>(이하 "서비스")는 「개인정보 보호법」 등 관련
        법령을 준수하며 이용자의 개인정보를 보호하기 위해 다음과 같이
        개인정보처리방침을 공개합니다.
      </p>

      <h2>1. 수집하는 개인정보 항목</h2>
      <p>
        서비스는 회원가입 없이 이용 가능하며, 서비스 제공 과정에서 아래 정보를
        수집할 수 있습니다.
      </p>

      <h3>1-1. 서버에 저장되는 정보</h3>

      <p>
        <strong>(1) 푸시 알림 관련 정보 (선택)</strong>
      </p>
      <ul>
        <li>
          <strong>Expo Push Token</strong>: 푸시 알림 수신을 위해 기기에서
          발급되는 고유 식별값
        </li>
        <li>
          <strong>알림 구독 카테고리</strong>: 이용자가 선택한 공지 카테고리
          정보 (예: 학사, 장학, 취창업 등)
        </li>
      </ul>

      <p>
        <strong>(2) 공지 스크랩 정보 (선택)</strong>
      </p>
      <ul>
        <li>
          <strong>스크랩한 공지 목록</strong>: 이용자가 저장한 공지사항 ID 및
          저장 일시
        </li>
        <li>기기 ID 기반 익명 식별값 (개인 식별 불가)</li>
      </ul>

      <p>
        <strong>(3) 피드백 정보 (선택)</strong>
      </p>
      <ul>
        <li>
          <strong>피드백 내용</strong>: 이용자가 자발적으로 제출한 피드백 제목
          및 내용
        </li>
        <li>제출 일시</li>
      </ul>

      <p>
        <strong>(4) 자동 수집 정보 (서비스 운영/보안 목적)</strong>
      </p>
      <ul>
        <li>접속 로그, IP 주소</li>
        <li>오류 기록 (비정상 이용 방지 및 장애 대응 목적)</li>
        <li>기기 정보 (운영체제 종류, 앱 버전 등 최소한의 기술 정보)</li>
      </ul>

      <h3>1-2. 기기에만 저장되는 정보 (서버 전송 없음)</h3>
      <p>
        다음 정보는 <strong>기기에만 저장되며 서버로 전송되지 않습니다</strong>:
      </p>
      <ul>
        <li>선택한 학과 정보</li>
        <li>북마크한 공지 목록</li>
        <li>읽은 공지 표시 기록</li>
        <li>최근 검색어 목록</li>
      </ul>
      <p>※ 기기 저장 정보는 앱 삭제 시 모두 자동 삭제됩니다.</p>

      <h3>1-3. 수집하지 않는 정보</h3>
      <p>
        서비스는 원칙적으로{" "}
        <strong>이름, 이메일, 학번, 전화번호, 주민등록번호</strong> 등 이용자를
        직접 식별할 수 있는 정보 및 민감정보는{" "}
        <strong>수집하지 않습니다</strong>.
      </p>

      <h2>2. 개인정보 수집 방법</h2>
      <ul>
        <li>
          이용자가 앱에서 <strong>푸시 알림 허용</strong> 및 알림 카테고리를
          선택하는 과정에서 수집
        </li>
        <li>
          이용자가 공지를 <strong>스크랩(저장)</strong>하는 과정에서 수집
        </li>
        <li>
          이용자가 <strong>피드백을 제출</strong>하는 과정에서 수집
        </li>
        <li>
          서비스 이용 과정에서 <strong>자동으로 생성·수집</strong> (접속 로그,
          오류 기록 등)
        </li>
      </ul>

      <h2>3. 개인정보 이용 목적</h2>
      <p>수집한 정보는 다음 목적에 한해 이용합니다:</p>

      <p>
        <strong>(1) 푸시 알림 서비스 제공</strong>
      </p>
      <ul>
        <li>새로운 공지사항 푸시 알림 발송</li>
        <li>이용자가 선택한 카테고리 기반 맞춤형 알림 제공</li>
        <li>알림 구독 설정 관리</li>
      </ul>

      <p>
        <strong>(2) 공지 스크랩 기능 제공</strong>
      </p>
      <ul>
        <li>이용자가 저장한 공지 목록 보관 및 제공</li>
      </ul>

      <p>
        <strong>(3) 서비스 품질 개선</strong>
      </p>
      <ul>
        <li>이용자 피드백을 통한 앱 기능 개선 및 오류 수정</li>
        <li>서비스 운영, 보안, 장애 대응</li>
      </ul>

      <h2>4. 개인정보 보유 및 이용 기간</h2>

      <p>
        <strong>(1) Expo Push Token 및 알림 구독 정보</strong>
      </p>
      <ul>
        <li>알림 발송 목적 달성 시까지 보유</li>
        <li>
          아래 사유 발생 시 지체 없이 삭제:
          <ul>
            <li>이용자가 알림을 해제한 경우</li>
            <li>토큰이 무효화되어 더 이상 사용 불가한 경우</li>
            <li>서비스 운영상 불필요해진 경우</li>
          </ul>
        </li>
      </ul>

      <p>
        <strong>(2) 공지 스크랩 정보</strong>
      </p>
      <ul>
        <li>이용자가 스크랩을 해제할 때까지 보유</li>
        <li>이용자가 직접 삭제 시 즉시 파기</li>
      </ul>

      <p>
        <strong>(3) 피드백 정보</strong>
      </p>
      <ul>
        <li>
          검토 완료 후 <strong>1년간</strong> 보관 후 자동 파기
        </li>
        <li>서비스 개선 참고 목적으로만 사용</li>
      </ul>

      <p>
        <strong>(4) 접속 로그 및 오류 기록</strong>
      </p>
      <ul>
        <li>
          보안 및 장애 대응 목적으로 <strong>3개월</strong> 보관 후 자동 파기
        </li>
      </ul>

      <p>
        <strong>(5) 법령에 따른 보관</strong>
      </p>
      <ul>
        <li>
          관계 법령에 따라 보관이 필요한 경우 해당 법령에서 정한 기간 동안 보관
        </li>
      </ul>

      <h2>5. 개인정보의 제3자 제공</h2>
      <p>
        서비스는 이용자의 개인정보를{" "}
        <strong>제3자에게 제공하지 않습니다</strong>.
      </p>
      <p>다만, 다음의 경우 예외로 합니다:</p>
      <ul>
        <li>이용자가 사전에 동의한 경우</li>
        <li>법령에 근거하거나 수사기관 등의 적법한 요청이 있는 경우</li>
      </ul>

      <h2>6. 개인정보 처리 위탁</h2>
      <p>
        서비스는 원활한 운영을 위해 아래와 같이 개인정보 처리업무를 위탁합니다.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>수탁자</th>
              <th>위탁 업무 내용</th>
              <th>보유 기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amazon Web Services (AWS)</td>
              <td>서버 호스팅 및 데이터 보관</td>
              <td>위탁 계약 종료 시까지</td>
            </tr>
            <tr>
              <td>Expo (미국)</td>
              <td>푸시 알림 발송 중계</td>
              <td>알림 발송 완료 시까지</td>
            </tr>
            <tr>
              <td>Google LLC (미국)</td>
              <td>Firebase 푸시 토큰 관리</td>
              <td>토큰 무효화 시까지</td>
            </tr>
            <tr>
              <td>Google LLC (미국)</td>
              <td>AI 요약 생성 (Gemini API)</td>
              <td>요청 처리 완료 시까지</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        ※ 위탁업무의 내용이나 수탁자가 변경될 경우, 지체 없이 본
        개인정보처리방침을 통해 공개합니다.
      </p>

      <h2>7. 개인정보의 국외 이전</h2>
      <h3>7-1. 국내 보관 정보</h3>
      <p>
        서비스의 주요 데이터는 <strong>AWS 서울 리전</strong>에서
        보관·처리됩니다.
      </p>

      <h3>7-2. 국외 이전 정보</h3>
      <p>
        푸시 알림 발송 및 AI 기능 제공을 위해 다음 정보가 국외로 이전될 수
        있습니다:
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>이전되는 정보</th>
              <th>이전 국가</th>
              <th>이전 목적</th>
              <th>이전 일시</th>
              <th>보유 기간</th>
              <th>수신자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Expo Push Token</td>
              <td>미국</td>
              <td>푸시 알림 발송</td>
              <td>알림 설정 시</td>
              <td>알림 해제 시까지</td>
              <td>Expo, Inc.</td>
            </tr>
            <tr>
              <td>Firebase Token</td>
              <td>미국</td>
              <td>푸시 토큰 관리</td>
              <td>앱 설치 시</td>
              <td>토큰 무효화 시까지</td>
              <td>Google LLC</td>
            </tr>
            <tr>
              <td>공지 내용 (요약 시)</td>
              <td>미국</td>
              <td>AI 요약 생성</td>
              <td>요약 요청 시</td>
              <td>처리 즉시 파기</td>
              <td>Google LLC</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        ※ 상기 국외 이전은 서비스 제공을 위한 필수적 처리이며, 개인 식별 정보는
        포함되지 않습니다.
      </p>

      <h2>8. 이용자의 권리와 행사 방법</h2>
      <p>이용자는 언제든지 다음의 권리를 행사할 수 있습니다:</p>

      <p>
        <strong>(1) 앱 내에서 직접 관리 가능한 사항</strong>
      </p>
      <ul>
        <li>
          <strong>알림 구독 해제</strong>: 앱 &gt; 더보기 &gt; 알림 설정에서
          카테고리 선택 해제
        </li>
        <li>
          <strong>스크랩 삭제</strong>: 북마크 화면에서 개별 공지 삭제
        </li>
        <li>
          <strong>푸시 알림 차단</strong>: 기기 설정에서 알림 권한 거부
        </li>
        <li>
          <strong>기기 저장 정보 삭제</strong>: 앱 삭제로 모든 로컬 데이터 자동
          삭제
        </li>
      </ul>

      <p>
        <strong>(2) 문의를 통한 권리 행사</strong>
      </p>
      <ul>
        <li>개인정보 열람, 정정, 삭제, 처리정지 요청 가능</li>
        <li>요청 방법: 아래 연락처로 이메일 문의</li>
        <li>처리 기간: 관련 법령에 따라 지체 없이 처리 (10일 이내)</li>
      </ul>
      <p>
        ※ 서비스는 회원가입이 없으므로, 이용자 식별이 필요한 요청은 최소한의
        확인 절차가 있을 수 있습니다.
      </p>

      <h2>9. 개인정보 파기 절차 및 방법</h2>
      <h3>9-1. 파기 절차</h3>
      <p>수집·이용 목적 달성 후 또는 보유 기간 경과 시 지체 없이 파기합니다.</p>

      <h3>9-2. 파기 방법</h3>
      <ul>
        <li>
          <strong>전자적 파일</strong>: 복구 불가능한 방식으로 영구 삭제
        </li>
        <li>
          <strong>데이터베이스</strong>: 즉시 삭제 쿼리 실행으로 복원 불가능하게
          삭제
        </li>
      </ul>

      <h3>9-3. 자동 파기</h3>
      <ul>
        <li>
          <strong>유효하지 않은 푸시 토큰</strong>: 알림 발송 실패 시 자동 삭제
        </li>
        <li>
          <strong>오래된 피드백</strong>: 검토 완료 후 1년 경과 시 자동 파기
        </li>
        <li>
          <strong>접속 로그</strong>: 3개월 경과 시 자동 파기
        </li>
      </ul>

      <h2>10. 개인정보의 안전성 확보 조치</h2>
      <h3>10-1. 기술적 조치</h3>
      <ul>
        <li>
          <strong>전송 구간 암호화</strong>: HTTPS/TLS 적용으로 모든 통신 암호화
        </li>
        <li>
          <strong>데이터베이스 암호화</strong>: 민감 정보 암호화 저장
        </li>
        <li>
          <strong>접근 통제</strong>: 개인정보 처리 시스템 접근 권한 최소화
        </li>
        <li>
          <strong>보안 업데이트</strong>: 정기적인 보안 패치 및 취약점 점검
        </li>
      </ul>

      <h3>10-2. 관리적 조치</h3>
      <ul>
        <li>
          <strong>접근 권한 관리</strong>: 개인정보 처리 담당자를 최소한으로
          제한
        </li>
        <li>
          <strong>정기 교육</strong>: 개인정보 보호 관련 내부 교육 실시
        </li>
      </ul>

      <h3>10-3. 물리적 조치</h3>
      <ul>
        <li>
          <strong>서버 보안</strong>: AWS 등 보안이 검증된 클라우드 서비스 이용
        </li>
      </ul>

      <h2>11. 개인정보 자동 수집 장치</h2>
      <p>
        서비스는 <strong>쿠키(Cookie)</strong> 등 개인정보 자동 수집 장치를
        사용하지 않습니다.
      </p>
      <p>
        다만, 서비스 운영을 위해 필요한 최소한의 기술 정보 (OS 종류, 앱 버전
        등)는 자동 수집될 수 있습니다.
      </p>

      <h2>12. 개인정보 보호책임자 및 문의처</h2>
      <p>
        개인정보 관련 문의, 불만 처리, 피해 구제 등을 위해 아래와 같이 개인정보
        보호책임자를 지정하고 있습니다.
      </p>

      <p>
        <strong>▶ 개인정보 보호책임자</strong>
      </p>
      <ul>
        <li>소속: 팀 원투쓰리 (강남대학교 컴퓨터공학부)</li>
        <li>팀원: 황호태, 신인규, 황주연</li>
        <li>
          문의 이메일:
          <ul>
            <li>
              <a href="mailto:hotae0321@naver.com">hotae0321@naver.com</a>
            </li>
            <li>
              <a href="mailto:inkyu102077@gmail.com">inkyu102077@gmail.com</a>
            </li>
          </ul>
        </li>
      </ul>

      <p>
        <strong>▶ 앱 내 문의</strong>
      </p>
      <ul>
        <li>앱 &gt; 더보기 &gt; 피드백 보내기</li>
      </ul>

      <p>
        <strong>▶ 개인정보 침해 신고 및 상담</strong>
      </p>
      <ul>
        <li>개인정보 침해신고센터: (국번없이) 118</li>
        <li>대검찰청 사이버범죄수사단: (국번없이) 1301</li>
        <li>경찰청 사이버안전국: (국번없이) 182</li>
      </ul>

      <h2>13. 개인정보 처리방침의 변경</h2>
      <p>
        이 개인정보 처리방침은 법령, 정책 또는 보안기술의 변경에 따라 내용이
        추가·삭제·수정될 수 있습니다.
      </p>
      <p>
        변경 사항이 있는 경우 <strong>앱 내 공지사항</strong> 또는{" "}
        <strong>서비스 홈페이지</strong>를 통해 변경 시행{" "}
        <strong>7일 전</strong>부터 공지합니다.
      </p>
      <p>
        다만, 이용자 권리의 중대한 변경이 있는 경우 <strong>30일 전</strong>부터
        공지합니다.
      </p>

      <h2>14. 고지의 의무</h2>
      <ul>
        <li>
          <strong>현재 버전</strong>: v1.7.0
        </li>
        <li>
          <strong>공고일자</strong>: 2026년 2월 1일
        </li>
        <li>
          <strong>시행일자</strong>: 2026년 3월 1일
        </li>
      </ul>

      <hr />

      <h3>부칙 제1조 (시행일)</h3>
      <p>
        본 방침은 <strong>2026년 3월 1일</strong>부터 시행됩니다.
      </p>
    </article>
  );
}
