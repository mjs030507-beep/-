"use strict";

const SAVE_KEY = "logos.case.missing-page-24.v1";
const SAVE_VERSION = 1;

const CASE_DATA = {
  id: "missing-page-24",
  title: "사라진 제24면",
  shelf: "L-100 · 대학 기록 아카이브",
  duration: "20–30분",
  difficulty: "입문",
  premise:
    "윤리감사를 55분 앞두고 연구실의 원자료 대조 기록철이 사라졌다. 기록의 시각, 이동 경로, 보존 규정을 연결해 원본의 현재 위치를 복원하라.",
  quote: "모든 기록은 사실이다. 그러나 어느 기록도 혼자서는 충분하지 않다.",
  objectives: [
    "서버 PDF와 물리적 원본의 버전 차이를 확인한다.",
    "기록철이 연구실 밖으로 이동한 이유와 경로를 복원한다.",
    "미등록 자료 U-108의 정체를 독립된 기록으로 교차 검증한다.",
    "보존 규정을 적용해 원본의 현재 위치를 찾는다.",
  ],
  locations: [
    {
      id: "lab",
      code: "L-204",
      name: "인지정보연구실",
      short: "연구실",
      description:
        "MIRROR-7 연구의 원자료가 검토되던 공간. 중앙 탁자, 원자료 보관함, 환경 센서 단말기가 남아 있다.",
      mission: "스캔 이후에도 원본이 이곳에 있었는지 확인하십시오.",
      accent: "rgba(85, 169, 222, 0.25)",
      npcId: "eunchae",
      evidenceIds: ["E01", "E02", "E03", "E04"],
    },
    {
      id: "transfer",
      code: "B-1",
      name: "공동기기실·자료 이관대",
      short: "이관대",
      description:
        "문서 스캐너와 기록보존실 이관 상자가 놓인 공간. 장비 로그와 봉인 인계 기록을 확인할 수 있다.",
      mission: "PDF의 생성 시점과 회색 상자 2호의 이동 경로를 대조하십시오.",
      accent: "rgba(213, 164, 72, 0.24)",
      npcId: "minwoo",
      evidenceIds: ["E05", "E06", "E07", "E08"],
    },
    {
      id: "archive",
      code: "A-09",
      name: "대학기록보존실",
      short: "보존실",
      description:
        "이관 자료를 접수하고 안정화하는 보존 공간. 접수 단말기와 보존 규정 서가, 잠긴 B-4 서랍이 있다.",
      mission: "U-108의 특징을 원본 기록과 대조하고 보존 규정을 적용하십시오.",
      accent: "rgba(101, 207, 167, 0.21)",
      npcId: "harin",
      evidenceIds: ["E09", "E10", "E11", "E12"],
    },
  ],
  npcs: [
    {
      id: "eunchae",
      name: "정은채",
      initials: "정",
      role: "학부 연구보조원",
      intro: "응축수 경보가 발생했을 때 중앙 탁자의 자료를 긴급 이동했다.",
      questions: [
        {
          q: "응축수 경보 당시 무엇을 했나요?",
          a: "오후 6시 6분, 냉방기에서 응축수가 떨어지기 시작했습니다. 중앙 탁자 위의 마른 자료 다섯 점을 열어보지 않고 회색 이관 상자 2호로 옮겼습니다.",
        },
        {
          q: "자료의 제목을 확인했나요?",
          a: "개별 표지는 확인하지 않았습니다. 당시에는 자료가 젖지 않도록 탁자를 비우는 것이 우선이었습니다.",
        },
        {
          q: "상자 2호는 어떻게 되었나요?",
          a: "오후 6시 13분, 강민우 연구원에게 정기 이관분과 함께 운반해 달라고 메시지를 보냈습니다. 저는 보존실에는 가지 않았습니다.",
        },
      ],
    },
    {
      id: "minwoo",
      name: "강민우",
      initials: "강",
      role: "석사과정 연구원·공동기기실 담당",
      intro: "MR-7-A의 스캔과 회색 상자 2호의 봉인·운반을 담당했다.",
      questions: [
        {
          q: "서버 PDF는 언제 만들어졌나요?",
          a: "오후 5시 35분부터 39분까지 1면에서 23면을 스캔했습니다. 오후 5시 41분에는 물리적 기록철을 연구실 측에 반환했습니다.",
        },
        {
          q: "상자 2호를 열어보았나요?",
          a: "열지 않았습니다. 목록상 중량보다 1.15kg 무거워서 그 차이를 이관표에 기록하고, 도착지에서 확인하도록 했습니다.",
        },
        {
          q: "운반 중 상자 상태는 어땠나요?",
          a: "오후 6시 20분 T-041 봉인을 붙였고, 기록보존실에서 이하린 기록관리사가 훼손되지 않은 봉인을 확인한 뒤 처음 열었습니다.",
        },
      ],
    },
    {
      id: "harin",
      name: "이하린",
      initials: "이",
      role: "대학 기록관리사",
      intro: "봉인된 이관 상자를 접수하고 목록에 없는 기록철을 보존 절차에 따라 처리했다.",
      questions: [
        {
          q: "상자 안에서 무엇을 발견했나요?",
          a: "목록에 없는 청색 기록철 한 권이 있었습니다. 표제 라벨이 들뜬 투명 보수 커버에 가려져 있어 U-108이라는 임시번호를 부여했습니다.",
        },
        {
          q: "커버를 벗겨 제목을 확인하지 않은 이유는요?",
          a: "보수 커버를 임의로 떼면 표지가 손상될 수 있습니다. 그래서 외형과 중량만 기록하고 보존 규정을 적용했습니다.",
        },
        {
          q: "U-108은 어디에 보관했나요?",
          a: "정확한 위치는 제 기억으로 단정하지 않겠습니다. 접수대장과 미식별 종이기록물 보존 규정을 함께 확인해 주세요.",
        },
      ],
    },
  ],
  evidence: [
    {
      id: "E01",
      location: "lab",
      title: "최종 검토 메모",
      time: "18:02",
      source: "책임연구자 책상",
      summary: "제24면 보정 수치 기입 후 원본을 중앙 탁자에 두었다는 메모.",
      content: "MR-7-A\n제24면 보정 수치 기입 및 서명 완료.\n원자료 대조 기록철은 중앙 탁자에 둠.\n\n— 18:02 최종 검토",
      role: "스캔 이후 제24면이 추가되었고 원본이 연구실에 있었음을 확인한다.",
    },
    {
      id: "E02",
      location: "lab",
      title: "장비 점검 사진",
      time: "18:04",
      source: "벽면 태블릿",
      summary: "중앙 탁자 위 청색 기록철과 초승달 모양 은색 보수 테이프가 보인다.",
      content: "[장비 점검 사진 확대 기록]\n촬영 시각 18:04\n중앙 탁자 우측: 청색 기록철 1권\n책등 표식: 초승달 모양 은색 보수 테이프\n라벨 노출부: ‘MR-7…’",
      role: "원본의 마지막 확인 위치와 식별 가능한 외형을 제공한다.",
    },
    {
      id: "E03",
      location: "lab",
      title: "환경 센서 경보 로그",
      time: "18:06",
      source: "환경 제어 단말기",
      summary: "냉방기 C-2 응축수 감지와 하부 작업대 자료 이동 권고.",
      content: "18:06:12 / 냉방기 C-2 응축수 감지\n18:06:15 / 하부 작업대 자료 즉시 이동 권고\n18:16:44 / 누수 차단 및 점검 모드 전환",
      role: "중앙 탁자의 자료가 긴급 이동된 원인을 확인한다.",
    },
    {
      id: "E04",
      location: "lab",
      title: "긴급 이동 체크리스트",
      time: "18:11",
      source: "회색 상자 보관대",
      summary: "중앙 탁자 위 마른 자료 5점을 회색 이관 상자 2호로 이동.",
      content: "긴급 자료 이동 체크\n대상: 중앙 탁자 위 마른 자료 5점\n이동: 회색 이관 상자 2호\n개별 제목: 미기재\n작성: 정은채 / 18:11",
      role: "사진 속 기록철이 상자 2호에 포함되었다는 이동 연결을 만든다.",
    },
    {
      id: "E05",
      location: "transfer",
      title: "스캔 작업 영수증",
      time: "17:35–17:41",
      source: "문서 스캐너",
      summary: "MR-7-A 1~23면 PDF 생성 후 17:41 물리적 원본 반환.",
      content: "SCAN JOB #5741\n자료: MR-7-A\n범위: 1–23면\n시작: 17:35\n완료: 17:39\n원본 반환: 17:41\n결과: PDF 저장 완료",
      role: "서버 PDF가 제24면 추가 전 만들어졌으며 원본이 스캐너에 남지 않았음을 확인한다.",
    },
    {
      id: "E06",
      location: "transfer",
      title: "업무 메신저 내보내기",
      time: "18:13–18:14",
      source: "공동 단말기",
      summary: "정은채가 상자 2호를 정기 이관분과 함께 운반해 달라고 요청했다.",
      content: "18:13 정은채\n회색 이관 상자 2호도 정기 이관분과 함께 부탁드립니다. 중앙 탁자 자료 5점이고 모두 마른 상태입니다.\n\n18:14 강민우\n확인했습니다. 중량 기록 후 봉인해 이동하겠습니다.",
      role: "상자 2호가 연구실에서 공식 이관 동선으로 합류했음을 확인한다.",
    },
    {
      id: "E07",
      location: "transfer",
      title: "이관 명세·중량 기록",
      time: "18:19",
      source: "전자저울",
      summary: "상자 2호의 실제 중량이 목록상 중량보다 1.15kg 무겁다.",
      content: "회색 이관 상자 2호\n목록상 중량  6.68kg\n실제 중량    7.83kg\n차이         +1.15kg\n비고: 목록 외 자료 추정, 도착지 확인",
      role: "상자 안에 목록에 없던 물체가 포함되었음을 수치로 확인한다.",
    },
    {
      id: "E08",
      location: "transfer",
      title: "봉인 인계 기록",
      time: "18:20–18:30",
      source: "이관대 기록 단말기",
      summary: "T-041 봉인부터 보존실 최초 개봉까지의 연속 인계 기록.",
      content: "18:20 / 강민우 / T-041 봉인\n18:24 / 연결 통로 게이트 통과\n18:29 / 이하린 / 봉인 훼손 없음 확인\n18:30 / A-09 접수대 최초 개봉",
      role: "운반 중 상자가 개봉되거나 바뀌지 않았음을 확인한다.",
    },
    {
      id: "E09",
      location: "archive",
      title: "기록보존실 수령 대장",
      time: "18:29–18:31",
      source: "A-09 접수대",
      summary: "상자 2호에서 등록 자료 외 물체 1점을 발견해 U-108을 부여했다.",
      content: "18:29 회색 이관 상자 2호 수령\n봉인 T-041 이상 없음\n18:30 최초 개봉\n18:31 등록 자료 외 물체 1점 발견\n임시 접수번호 U-108 부여",
      role: "목록 외 자료가 보존실 내부 절차로 넘어간 시점을 확인한다.",
    },
    {
      id: "E10",
      location: "archive",
      title: "U-108 예외 접수 카드",
      time: "18:31",
      source: "접수 단말기",
      summary: "청색 기록철, 1.14kg, 초승달 모양 보수 테이프가 기록되어 있다.",
      content: "임시번호: U-108\n형태: 청색 기록철\n규격: 31 × 23 × 4cm\n중량: 1.14kg\n책등: 초승달 모양 은색 보수 테이프\n상태: 투명 커버 들뜸 / 라벨 대부분 가림 / 수분 없음\n처리: 내부 미열람",
      role: "사진의 외형과 상자의 초과 중량을 독립적으로 교차 검증한다.",
    },
    {
      id: "E11",
      location: "archive",
      title: "미식별 종이기록물 보존 규정 P-4",
      time: "상시 규정",
      source: "보존 규정 서가",
      summary: "식별자가 가려진 건조 자료는 임시번호를 부여해 B-4에 보관한다.",
      content: "보존 규정 P-4\n건조 상태이나 보호 커버 손상으로 식별자가 가려진 자료는 커버를 임의 제거하지 않는다. 임시번호를 부여하고 안정화 서랍 B-4에 별도 보관한다.",
      role: "U-108의 현재 위치를 보존 절차로 도출하게 한다.",
    },
    {
      id: "E12",
      location: "archive",
      title: "B-4 서랍 입고 기록과 원본",
      time: "18:36",
      source: "안정화 서랍 B-4",
      summary: "U-108 입고 기록과 초승달 표식이 있는 MR-7-A 원본.",
      content: "B-4 입고 기록\n18:36 / U-108 / 1.14kg / 입고 완료\n\n[서랍 내부 확인]\n초승달 모양 은색 보수 테이프\n들뜬 커버 아래 라벨: MR-7-A\n내부 제24면 서명 확인",
      role: "원본의 현재 위치와 정체를 최종 확인한다.",
      locked: true,
    },
  ],
  hints: [
    "파일이 만들어진 시간과 원본이 마지막으로 확인된 시간을 구분해 보십시오. 같은 문서라도 버전과 매체가 다를 수 있습니다.",
    "18시 4분 사진 속 탁자 위 물체와 응축수 경보 뒤 작성된 이동 체크리스트를 함께 보십시오. 그 상자는 이후 누구에게 전달됐습니까?",
    "상자의 초과 중량과 U-108의 중량·외형을 비교하십시오. 두 자료가 같다면 U-108에 적용된 보존 규정이 현재 위치를 알려줍니다.",
  ],
  reconstruction: [
    ["17:35", "강민우가 MR-7-A의 스캔을 시작했다."],
    ["17:39", "1~23면 PDF 생성이 완료됐다."],
    ["17:41", "물리적 기록철이 연구실로 반환됐다."],
    ["18:02", "제24면이 추가·서명되고 중앙 탁자에 놓였다."],
    ["18:04", "점검 사진에 청색 기록철이 촬영됐다."],
    ["18:06", "냉방기 응축수 경보가 발생했다."],
    ["18:11", "중앙 탁자 자료 5점이 회색 상자 2호로 이동했다."],
    ["18:20", "상자 2호에 T-041 봉인이 부착됐다."],
    ["18:29", "기록보존실이 훼손되지 않은 상자를 수령했다."],
    ["18:31", "목록 외 청색 기록철이 U-108로 접수됐다."],
    ["18:36", "U-108이 규정 P-4에 따라 B-4에 입고됐다."],
  ],
};

const JUDGMENT_ITEMS = [
  {
    id: "version",
    label: "서버 PDF가 원본을 대체할 수 없는 이유는 무엇입니까?",
    options: [
      ["", "결론을 선택하십시오"],
      ["corrupted", "PDF 파일이 손상되었기 때문이다"],
      ["incomplete", "제24면이 추가되기 전에 1~23면만 스캔되었기 때문이다"],
      ["unsigned", "모든 면에 서명이 없기 때문이다"],
    ],
    correct: "incomplete",
    required: ["E05", "E01"],
    title: "문서 버전 구분",
    success: "스캔본은 제24면 추가 이전에 생성되었으므로 원본의 완전한 복제본이 아닙니다.",
  },
  {
    id: "last_seen",
    label: "스캔 이후 원본이 마지막으로 확인된 장소는 어디입니까?",
    options: [
      ["", "결론을 선택하십시오"],
      ["scanner", "공동기기실 스캐너"],
      ["cabinet", "원자료 보관함"],
      ["table", "인지정보연구실 중앙 탁자"],
    ],
    correct: "table",
    required: ["E01", "E02"],
    title: "마지막 확인 위치",
    success: "18시 2분 메모와 18시 4분 사진이 원본의 중앙 탁자 존재를 함께 확인합니다.",
  },
  {
    id: "movement",
    label: "기록철이 연구실 밖으로 이동하게 된 직접적인 과정은 무엇입니까?",
    options: [
      ["", "결론을 선택하십시오"],
      ["routine", "정기 스캔이 끝나 자동으로 이관되었다"],
      ["emergency", "응축수 경보 후 중앙 탁자 자료 전체가 상자 2호로 긴급 이동했다"],
      ["audit", "윤리감사 담당자가 먼저 회수했다"],
    ],
    correct: "emergency",
    required: ["E02", "E03", "E04", "E06"],
    title: "이동 원인과 경로",
    success: "경보 직전 탁자에 있던 원본은 긴급 이동 자료와 함께 상자 2호의 이관 동선에 합류했습니다.",
  },
  {
    id: "identity",
    label: "보존실의 미등록 자료 U-108은 무엇입니까?",
    options: [
      ["", "결론을 선택하십시오"],
      ["unrelated", "연구와 관계없는 별도 기록철"],
      ["copy", "MR-7-A의 출력 복제본"],
      ["original", "식별 라벨이 가려진 MR-7-A 원본"],
    ],
    correct: "original",
    required: ["E07", "E08", "E10"],
    title: "U-108의 동일성",
    success: "중량, 외형, 표식, 봉인된 이동 경로가 일치하므로 U-108은 MR-7-A 원본입니다.",
  },
  {
    id: "location",
    label: "현재 원본은 어디에 있으며, 어떤 근거로 그 위치를 확정할 수 있습니까?",
    options: [
      ["", "결론을 선택하십시오"],
      ["intake", "A-09 접수대에 남아 있다"],
      ["b4", "규정 P-4에 따라 안정화 서랍 B-4에 보관되었다"],
      ["lab", "이미 L-204 연구실로 반환되었다"],
    ],
    correct: "b4",
    required: ["E09", "E11", "E12"],
    title: "현재 보관 위치",
    success: "U-108은 P-4의 적용 대상이며 B-4 입고 기록과 원본 확인으로 현재 위치가 확정됩니다.",
  },
];

const CONNECTION_TYPES = ["시간 선후", "이동 경로", "동일 물체", "버전 차이", "규정 적용", "인과 관계"];

function createInitialState(settings = {}) {
  return {
    version: SAVE_VERSION,
    started: false,
    screen: "title",
    resumeScreen: "library",
    currentLocation: "lab",
    collected: [],
    reviewed: [],
    openQa: null,
    boardView: "connections",
    connectionDraft: [],
    connections: [],
    hypothesis: "",
    hintLevel: 0,
    judgment: {
      answers: {},
      claimEvidence: {},
      summary: "",
    },
    result: null,
    modal: null,
    settings: {
      reduceMotion: Boolean(settings.reduceMotion),
      largeText: Boolean(settings.largeText),
    },
    savedAt: null,
  };
}

let loadWarning = "";
let state = loadState();
const app = document.querySelector("#app");
const announcer = document.querySelector("#announcer");
let lastFocusedElement = null;

applySettings();
render();
if (loadWarning) setTimeout(() => showToast(loadWarning), 300);

function loadState() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return createInitialState();
    const parsed = JSON.parse(raw);
    if (parsed.version !== SAVE_VERSION) {
      loadWarning = "이전 버전의 기록은 불러오지 않았습니다. 설정에서 저장 파일을 내보낼 수 있습니다.";
      return createInitialState(parsed.settings || {});
    }
    const base = createInitialState(parsed.settings || {});
    return {
      ...base,
      ...parsed,
      judgment: { ...base.judgment, ...(parsed.judgment || {}) },
      settings: { ...base.settings, ...(parsed.settings || {}) },
      modal: null,
      connectionDraft: [],
    };
  } catch (error) {
    loadWarning = "저장 기록을 해석하지 못했습니다. 새 기록으로 안전하게 시작합니다.";
    return createInitialState();
  }
}

function saveState() {
  try {
    state.savedAt = new Date().toISOString();
    const serializable = { ...state, modal: null, connectionDraft: [] };
    localStorage.setItem(SAVE_KEY, JSON.stringify(serializable));
    return true;
  } catch (error) {
    showToast("브라우저에 진행 상황을 저장하지 못했습니다. 설정에서 기록을 내보내 주세요.", true);
    return false;
  }
}

function applySettings() {
  document.body.classList.toggle("reduce-motion", state.settings.reduceMotion);
  document.body.classList.toggle("large-text", state.settings.largeText);
}

function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getEvidence(id) {
  return CASE_DATA.evidence.find((item) => item.id === id);
}

function getLocation(id) {
  return CASE_DATA.locations.find((item) => item.id === id);
}

function getNpc(id) {
  return CASE_DATA.npcs.find((item) => item.id === id);
}

function isCollected(id) {
  return state.collected.includes(id);
}

function pairKey(a, b) {
  return [a, b].sort().join("::");
}

function hasConnection(a, b, type) {
  const key = pairKey(a, b);
  return state.connections.some(
    (connection) => pairKey(connection.a, connection.b) === key && (!type || connection.type === type),
  );
}

function isB4Unlocked() {
  return hasConnection("E10", "E11", "규정 적용");
}

function progressPercent() {
  if (state.result?.passed) return 100;
  const evidenceWeight = (state.collected.length / CASE_DATA.evidence.length) * 75;
  const connectionWeight = Math.min(state.connections.length / 5, 1) * 15;
  const resultWeight = state.result ? 10 : 0;
  return Math.round(Math.min(100, evidenceWeight + connectionWeight + resultWeight));
}

function announce(message) {
  announcer.textContent = "";
  requestAnimationFrame(() => {
    announcer.textContent = message;
  });
}

function showToast(message, isError = false) {
  document.querySelectorAll(".toast").forEach((node) => node.remove());
  const toast = document.createElement("div");
  toast.className = "toast";
  if (isError) {
    toast.style.borderColor = "rgba(233, 134, 126, .55)";
    toast.style.background = "rgba(75, 24, 23, .96)";
  }
  toast.setAttribute("role", isError ? "alert" : "status");
  toast.textContent = message;
  document.body.append(toast);
  announce(message);
  window.setTimeout(() => toast.remove(), 3600);
}

function navigate(screen) {
  state.screen = screen;
  state.modal = null;
  if (screen !== "title" && screen !== "result") state.resumeScreen = screen;
  if (screen === "result") state.resumeScreen = "result";
  saveState();
  render();
  requestAnimationFrame(() => document.querySelector("#main-content")?.focus());
}

function render() {
  let content = "";
  switch (state.screen) {
    case "library":
      content = renderLibrary();
      break;
    case "briefing":
      content = renderBriefing();
      break;
    case "investigate":
      content = renderInvestigation();
      break;
    case "board":
      content = renderBoard();
      break;
    case "judgment":
      content = renderJudgment();
      break;
    case "result":
      content = renderResult();
      break;
    case "title":
    default:
      content = renderTitle();
  }

  app.innerHTML = `<div class="app-shell">${content}${renderModal()}</div>`;
}

function renderTitle() {
  const canContinue = state.started;
  return `
    <main id="main-content" class="screen title-screen" tabindex="-1">
      <div class="title-stage">
        <img class="title-art" src="assets/logos-title.png" alt="끝없이 이어진 어두운 도서관 중앙에 금빛 LOGOS 제목과 펼쳐진 책이 빛나는 타이틀 화면" />
        <div class="title-vignette" aria-hidden="true"></div>
        <div class="dust" aria-hidden="true"></div>
        <div class="title-mobile-copy">
          <p class="eyebrow">Infinite library of records</p>
          <h1>LOGOS</h1>
          <p>진실은 숨겨져 있지 않다.<br />아직 연결되지 않았을 뿐이다.</p>
        </div>
        <div class="title-actions" aria-label="타이틀 메뉴">
          <button class="title-hotspot" data-action="new-game">게임 시작</button>
          <button class="title-hotspot" data-action="continue-game" ${canContinue ? "" : "disabled"}>이어하기</button>
          <button class="title-hotspot" data-action="open-settings">설정</button>
          <button class="title-hotspot" data-action="exit-game">게임 종료</button>
        </div>
        <div class="title-corner-actions">
          <button class="icon-btn" data-action="toggle-fullscreen" aria-label="전체 화면 전환" title="전체 화면">⛶</button>
        </div>
      </div>
    </main>`;
}

function renderHeader() {
  const progress = progressPercent();
  return `
    <header class="game-header">
      <div class="game-header-inner">
        <button class="brand-button" data-action="go-title" aria-label="LOGOS 타이틀로 이동">
          <span class="brand-mark" aria-hidden="true"></span><span>LOGOS</span>
        </button>
        <div class="header-progress" aria-label="조사 진행률 ${progress}%">
          <div class="progress-meta"><span>사건 복원도</span><span>${progress}%</span></div>
          <div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div>
        </div>
        <div class="header-actions">
          <button class="icon-btn" data-action="export-save" aria-label="진행 기록 내보내기" title="기록 내보내기">⇩</button>
          <button class="icon-btn" data-action="open-settings" aria-label="설정 열기" title="설정">⚙</button>
        </div>
      </div>
    </header>`;
}

function renderWorkspaceNav(active) {
  const items = [
    ["library", "도서관"],
    ["investigate", "사건 조사"],
    ["board", `추론 보드 · ${state.connections.length}`],
    ["judgment", "LOGOS 심사"],
  ];
  return `
    <nav class="workspace-nav" aria-label="게임 주요 화면">
      ${items
        .map(
          ([screen, label]) => `
            <button class="workspace-tab" data-action="navigate" data-screen="${screen}" ${active === screen ? 'aria-current="page"' : ""}>
              ${label}
            </button>`,
        )
        .join("")}
    </nav>`;
}

function renderLibrary() {
  const hasProgress = state.collected.length > 0;
  return `
    ${renderHeader()}
    <main id="main-content" class="screen library-screen" tabindex="-1">
      <div class="content-shell">
        ${renderWorkspaceNav("library")}
        <section class="library-intro" aria-labelledby="library-title">
          <p class="eyebrow">Logosia · Main archive</p>
          <h1 id="library-title">LOGOSIA</h1>
          <p class="quote-line">“진실은 숨겨져 있지 않다. 아직 연결되지 않았을 뿐이다.”</p>
          <p class="muted">기록을 선택하면 그 안의 시간과 공간이 열립니다. 확인된 사실을 수집하고 서로의 관계를 증명하십시오.</p>
        </section>

        <section aria-labelledby="available-books">
          <div class="section-heading-row">
            <div><p class="eyebrow">L-000 · Origin</p><h2 id="available-books">열람 가능한 기록</h2></div>
            <span class="muted small">1권 열람 가능</span>
          </div>
          <div class="book-grid">
            <article class="book-card">
              <div class="book-cover" aria-hidden="true"><span class="book-cover-number">24</span></div>
              <div class="book-copy">
                <p class="eyebrow">${CASE_DATA.shelf}</p>
                <h2>《${CASE_DATA.title}》</h2>
                <p>${CASE_DATA.premise}</p>
                <ul class="tag-list" aria-label="작품 정보">
                  <li class="tag">${CASE_DATA.duration}</li><li class="tag">${CASE_DATA.difficulty}</li><li class="tag">기록 12개</li><li class="tag">자료 교차 검증</li>
                </ul>
                <div class="button-row">
                  <button class="btn btn-primary" data-action="open-case">${hasProgress ? "조사 이어가기" : "기록 열기"} <span aria-hidden="true">→</span></button>
                </div>
              </div>
            </article>

            <article class="book-card locked" aria-label="봉인된 기록 츠키노가타리">
              <div class="book-cover"><img class="book-cover-image" src="assets/tsukino-cover.png" alt="초승달 아래 책과 깃펜을 든 인물의 푸른 판타지 표지" /></div>
              <div class="book-copy">
                <p class="eyebrow">L-500 · Sealed archive</p>
                <h2>《츠키노가타리》</h2>
                <p class="muted">달빛 기록은 아직 복원 중입니다. 첫 사건을 완독하면 로고시아의 더 깊은 서가가 모습을 드러냅니다.</p>
                <ul class="tag-list"><li class="tag">봉인됨</li><li class="tag">Coming later</li></ul>
                <div class="button-row"><button class="btn" disabled>복원 중</button></div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>`;
}

function renderBriefing() {
  return `
    ${renderHeader()}
    <main id="main-content" class="screen" tabindex="-1">
      <div class="content-shell">
        ${renderWorkspaceNav("")}
        <div class="briefing-hero">
          <section class="panel panel-pad briefing-main" aria-labelledby="brief-title">
            <p class="eyebrow">Case 001 · Archive opened</p>
            <h1 id="brief-title">사라진<br /><span class="gold">제24면</span></h1>
            <p class="quote-line">${CASE_DATA.quote}</p>
            <p>${CASE_DATA.premise}</p>
            <div class="divider"></div>
            <p><strong>현재 시각 19:05.</strong> 윤리감사는 20시에 시작됩니다. 서버의 PDF는 23면뿐이며, 오후 6시 2분에 추가된 제24면은 물리적 원본에만 존재합니다.</p>
          </section>
          <aside class="panel panel-pad briefing-meta" aria-label="사건 정보">
            <div><p class="eyebrow">Archive metadata</p><h2>조사 명세</h2></div>
            <div class="metric"><span class="muted">예상 시간</span><strong>${CASE_DATA.duration}</strong></div>
            <div class="metric"><span class="muted">장소</span><strong>3곳</strong></div>
            <div class="metric"><span class="muted">관계자</span><strong>3명</strong></div>
            <div class="metric"><span class="muted">기록</span><strong>12개</strong></div>
            <div class="metric"><span class="muted">최종 목표</span><strong>B-4 확인</strong></div>
            <div class="button-row" style="margin-top:10px">
              <button class="btn btn-primary" data-action="enter-case">조사 시작 <span aria-hidden="true">→</span></button>
              <button class="btn btn-quiet" data-action="navigate" data-screen="library">도서관으로</button>
            </div>
          </aside>
        </div>

        <section class="panel panel-pad" style="margin-top:20px" aria-labelledby="objectives-title">
          <p class="eyebrow">Restoration objectives</p>
          <h2 id="objectives-title">복원해야 할 네 가지 연결</h2>
          <ol class="objective-list">
            ${CASE_DATA.objectives.map((objective) => `<li>${objective}</li>`).join("")}
          </ol>
        </section>
      </div>
    </main>`;
}

function renderInvestigation() {
  const location = getLocation(state.currentLocation) || CASE_DATA.locations[0];
  const npc = getNpc(location.npcId);
  return `
    ${renderHeader()}
    <main id="main-content" class="screen workspace-screen" tabindex="-1">
      <div class="content-shell">
        ${renderWorkspaceNav("investigate")}
        <div class="location-tabs" role="tablist" aria-label="조사 장소">
          ${CASE_DATA.locations
            .map(
              (item) => `
                <button class="location-tab" role="tab" aria-selected="${item.id === location.id}" data-action="change-location" data-location="${item.id}">
                  <span class="scene-code">${item.code}</span><br />${item.short}
                </button>`,
            )
            .join("")}
        </div>

        <div class="investigation-layout">
          <div>
            <section class="location-scene" style="--scene-glow:${location.accent}" aria-labelledby="location-title">
              <div class="scene-copy">
                <span class="scene-code">ARCHIVE LOCATION · ${location.code}</span>
                <h1 id="location-title">${location.name}</h1>
                <p>${location.description}</p>
                <p class="muted"><strong class="gold">조사 초점</strong><br />${location.mission}</p>
              </div>
            </section>

            <section class="evidence-section" aria-labelledby="records-title">
              <div class="section-heading-row">
                <div><p class="eyebrow">Inspectable records</p><h2 id="records-title">조사 가능한 기록</h2></div>
                <span class="muted small">${location.evidenceIds.filter(isCollected).length} / ${location.evidenceIds.length} 수집</span>
              </div>
              <div class="evidence-grid">
                ${location.evidenceIds.map((id) => renderInvestigationEvidence(getEvidence(id))).join("")}
              </div>
            </section>
          </div>

          <aside class="side-stack">
            ${renderNpcCard(npc)}
            ${renderOracleCard()}
            <section class="panel panel-pad">
              <p class="eyebrow">Quick actions</p>
              <h2>조사 도구</h2>
              <div class="button-row">
                <button class="btn" data-action="navigate" data-screen="board">추론 보드 열기</button>
                <button class="btn btn-gold" data-action="navigate" data-screen="judgment">LOGOS 심사</button>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>`;
}

function renderInvestigationEvidence(evidence) {
  const collected = isCollected(evidence.id);
  const locked = evidence.id === "E12" && !isB4Unlocked();
  if (locked) {
    return `
      <article class="evidence-card locked" aria-label="잠긴 기록 B-4 서랍">
        <span class="evidence-id">${evidence.id}</span><span class="status-pill">잠김</span>
        <h3>안정화 서랍 B-4</h3>
        <p class="small">U-108의 보관 규정을 추론 보드에서 연결해야 접근할 수 있습니다.</p>
      </article>`;
  }
  return `
    <button class="evidence-card ${collected ? "collected" : ""}" data-action="open-evidence" data-evidence="${evidence.id}">
      <span class="evidence-id">${evidence.id}</span><span class="status-pill ${collected ? "done" : ""}">${collected ? "수집됨" : "미확인"}</span>
      <h3>${evidence.title}</h3>
      <p class="small muted">${evidence.source} · ${evidence.time}</p>
      <p class="small">${evidence.summary}</p>
    </button>`;
}

function renderNpcCard(npc) {
  return `
    <section class="panel npc-card" aria-labelledby="npc-name">
      <div class="npc-head">
        <span class="npc-avatar" aria-hidden="true">${npc.initials}</span>
        <div><p class="eyebrow">Recorded interview</p><h2 id="npc-name">${npc.name}</h2><p class="muted small">${npc.role}</p></div>
      </div>
      <div class="panel-pad" style="padding-bottom:4px"><p class="small">${npc.intro}</p></div>
      <div class="qa-list">
        ${npc.questions
          .map((item, index) => {
            const key = `${npc.id}:${index}`;
            const open = state.openQa === key;
            return `
              <div class="qa-item">
                <button class="qa-question" data-action="toggle-qa" data-qa="${key}" aria-expanded="${open}">${item.q}</button>
                ${open ? `<div class="qa-answer">“${item.a}”</div>` : ""}
              </div>`;
          })
          .join("")}
      </div>
    </section>`;
}

function renderOracleCard() {
  const message = state.hintLevel > 0 ? CASE_DATA.hints[state.hintLevel - 1] : "현재까지 수집한 기록을 바탕으로 조사 방향을 요청할 수 있습니다.";
  return `
    <section class="panel panel-pad oracle-card" aria-labelledby="oracle-title">
      <p class="eyebrow">Oracle of LOGOS</p>
      <h2 id="oracle-title">로고스의 신탁</h2>
      <div class="oracle-message">${message}</div>
      <div class="button-row" style="margin-top:12px">
        <button class="btn" data-action="next-hint" ${state.hintLevel >= CASE_DATA.hints.length ? "disabled" : ""}>
          ${state.hintLevel === 0 ? "조사 방향 요청" : state.hintLevel >= CASE_DATA.hints.length ? "모든 신탁 확인" : "조금 더 구체적으로"}
        </button>
      </div>
    </section>`;
}

function renderBoard() {
  const collected = CASE_DATA.evidence.filter((item) => isCollected(item.id));
  const selected = state.connectionDraft.map(getEvidence).filter(Boolean);
  return `
    ${renderHeader()}
    <main id="main-content" class="screen workspace-screen" tabindex="-1">
      <div class="content-shell">
        ${renderWorkspaceNav("board")}
        <div class="section-heading-row">
          <div><p class="eyebrow">Deduction workspace</p><h1 style="font-size:clamp(2rem,5vw,3.8rem);margin-bottom:4px">추론 보드</h1><p class="muted">두 기록을 선택하고 그 관계를 명시하십시오.</p></div>
          <div class="button-row"><button class="btn btn-gold" data-action="navigate" data-screen="judgment">심사 준비</button></div>
        </div>

        <div class="board-layout">
          <section class="panel panel-pad" aria-labelledby="collected-title">
            <div class="section-heading-row"><h2 id="collected-title">수집 기록</h2><span class="muted small">${collected.length} / 12</span></div>
            ${
              collected.length
                ? `<div class="board-source-list">${collected.map((item) => renderBoardEvidence(item)).join("")}</div>`
                : `<p class="muted">아직 수집한 기록이 없습니다. 사건 조사에서 기록을 확인해 주세요.</p>`
            }
          </section>

          <div class="board-workspace">
            <section class="panel panel-pad" aria-labelledby="connect-title">
              <p class="eyebrow">Claim–evidence relation</p>
              <h2 id="connect-title">기록 연결</h2>
              <div class="connection-builder">
                <p class="small muted">왼쪽 목록에서 연결할 기록 두 개를 선택하세요.</p>
                <div class="selected-pair">
                  <div class="selected-slot">${selected[0] ? `<strong>${selected[0].id}</strong> · ${selected[0].title}` : "첫 번째 기록"}</div>
                  <span aria-hidden="true">↔</span>
                  <div class="selected-slot">${selected[1] ? `<strong>${selected[1].id}</strong> · ${selected[1].title}` : "두 번째 기록"}</div>
                </div>
                <div class="connection-form">
                  <label><span class="sr-only">관계 유형</span><select id="connection-type" class="select" ${selected.length === 2 ? "" : "disabled"}>
                    ${CONNECTION_TYPES.map((type) => `<option value="${type}">${type}</option>`).join("")}
                  </select></label>
                  <label><span class="sr-only">관계 설명</span><input id="connection-note" class="input" placeholder="두 기록이 무엇을 함께 증명합니까?" ${selected.length === 2 ? "" : "disabled"} /></label>
                  <button class="btn btn-primary" data-action="create-connection" ${selected.length === 2 ? "" : "disabled"}>연결</button>
                </div>
              </div>
            </section>

            ${isB4Unlocked() && !isCollected("E12") ? `<div class="unlock-banner" role="status"><span aria-hidden="true">✦</span><div><strong>B-4 접근 권한 확보</strong><br /><span class="small">U-108과 보존 규정 P-4가 연결되었습니다. A-09 보존실의 B-4 서랍을 조사할 수 있습니다.</span></div><button class="btn" data-action="go-b4">이동</button></div>` : ""}

            <section class="panel panel-pad" aria-labelledby="board-view-title">
              <div class="section-heading-row">
                <div><p class="eyebrow">Organize findings</p><h2 id="board-view-title">조사 정리</h2></div>
                <div class="button-row" role="group" aria-label="보드 보기 방식">
                  <button class="btn ${state.boardView === "connections" ? "btn-primary" : ""}" data-action="board-view" data-view="connections">연결</button>
                  <button class="btn ${state.boardView === "timeline" ? "btn-primary" : ""}" data-action="board-view" data-view="timeline">타임라인</button>
                  <button class="btn ${state.boardView === "hypothesis" ? "btn-primary" : ""}" data-action="board-view" data-view="hypothesis">가설</button>
                </div>
              </div>
              ${renderBoardView()}
            </section>
          </div>
        </div>
      </div>
    </main>`;
}

function renderBoardEvidence(evidence) {
  const selected = state.connectionDraft.includes(evidence.id);
  return `
    <button class="evidence-card ${selected ? "selected" : ""}" data-action="select-evidence" data-evidence="${evidence.id}" aria-pressed="${selected}">
      <span class="evidence-id">${evidence.id}</span>
      <h3>${evidence.title}</h3>
      <p class="small muted">${evidence.time} · ${evidence.source}</p>
    </button>`;
}

function renderBoardView() {
  if (state.boardView === "timeline") {
    const sorted = CASE_DATA.evidence
      .filter((item) => isCollected(item.id) && /^\d/.test(item.time))
      .sort((a, b) => a.time.localeCompare(b.time, "ko"));
    return sorted.length
      ? `<ol class="timeline">${sorted
          .map(
            (item) => `<li class="timeline-item"><span class="timeline-time">${item.time}</span><br /><strong>${item.id} · ${item.title}</strong><br /><span class="muted small">${item.summary}</span></li>`,
          )
          .join("")}</ol>`
      : `<p class="muted">시각이 확인된 기록을 수집하면 자동으로 배치됩니다.</p>`;
  }

  if (state.boardView === "hypothesis") {
    return `
      <label for="hypothesis"><strong>현재 가설</strong><br /><span class="muted small">확인한 기록만을 사용해 사건의 이동 경로를 설명해보세요. 작성 내용은 자동 저장됩니다.</span></label>
      <textarea id="hypothesis" class="textarea" data-input="hypothesis" placeholder="예: 원본은 18시 4분까지 중앙 탁자에 있었고…">${escapeHTML(state.hypothesis)}</textarea>`;
  }

  if (!state.connections.length) {
    return `<p class="muted">아직 만든 연결이 없습니다. 두 기록과 관계 유형을 선택해 첫 연결을 만드세요.</p>`;
  }

  return `
    <ul class="connection-list">
      ${state.connections
        .map((connection, index) => {
          const a = getEvidence(connection.a);
          const b = getEvidence(connection.b);
          return `<li class="connection-item"><div><div class="connection-line"><span class="connection-node">${a.id}</span><span>— ${connection.type} —</span><span class="connection-node">${b.id}</span></div><div class="small muted">${escapeHTML(connection.note || `${a.title}과 ${b.title}의 ${connection.type}`)}</div></div><button class="icon-btn" data-action="remove-connection" data-index="${index}" aria-label="${a.id}와 ${b.id} 연결 삭제">×</button></li>`;
        })
        .join("")}
    </ul>`;
}

function renderJudgment() {
  const collected = CASE_DATA.evidence.filter((item) => isCollected(item.id));
  return `
    ${renderHeader()}
    <main id="main-content" class="screen workspace-screen" tabindex="-1">
      <div class="content-shell">
        ${renderWorkspaceNav("judgment")}
        <div class="section-heading-row">
          <div><p class="eyebrow">Judgment of LOGOS</p><h1 style="font-size:clamp(2.1rem,6vw,4.6rem);margin-bottom:4px">논리 소명</h1><p class="muted">결론을 선택하고 각 주장에 직접 확인한 기록을 첨부하십시오.</p></div>
        </div>
        <div id="validation" class="validation-box" role="alert" tabindex="-1"></div>
        <div class="judgment-layout">
          <section class="panel panel-pad" aria-labelledby="claims-title">
            <p class="eyebrow">Five claims</p><h2 id="claims-title">사건 복원 항목</h2>
            <div class="question-list">
              ${JUDGMENT_ITEMS.map((item, index) => renderJudgmentQuestion(item, index, collected)).join("")}
            </div>
            <div class="divider"></div>
            <label for="final-summary"><strong>최종 소명문</strong><br /><span class="muted small">수집한 기록을 근거로 원본의 전체 이동 경로를 설명하십시오.</span></label>
            <textarea id="final-summary" class="textarea" data-input="summary" placeholder="MR-7-A는 스캔 이후…">${escapeHTML(state.judgment.summary)}</textarea>
          </section>

          <aside class="side-stack">
            <section class="panel panel-pad">
              <p class="eyebrow">Submission status</p><h2>심사 준비도</h2>
              <div class="metric"><span class="muted">수집 기록</span><strong>${state.collected.length} / 12</strong></div>
              <div class="metric"><span class="muted">기록 연결</span><strong>${state.connections.length}개</strong></div>
              <div class="metric"><span class="muted">결론 작성</span><strong>${Object.values(state.judgment.answers).filter(Boolean).length} / 5</strong></div>
              <div class="metric"><span class="muted">소명문</span><strong>${state.judgment.summary.trim().length >= 80 ? "충분" : `${state.judgment.summary.trim().length}자`}</strong></div>
              <p class="small muted">심사는 정답 이름만 확인하지 않습니다. 각 결론에 적절한 기록이 첨부되어야 합니다.</p>
              <div class="button-row">
                <button class="btn btn-gold" data-action="submit-judgment">LOGOS에 제출</button>
                <button class="btn" data-action="navigate" data-screen="board">보드로 돌아가기</button>
              </div>
            </section>
            ${renderOracleCard()}
          </aside>
        </div>
      </div>
    </main>`;
}

function renderJudgmentQuestion(item, index, collected) {
  const answer = state.judgment.answers[item.id] || "";
  const selected = state.judgment.claimEvidence[item.id] || [];
  return `
    <fieldset class="question-card">
      <legend class="sr-only">질문 ${index + 1}</legend>
      <span class="question-number">CLAIM ${String(index + 1).padStart(2, "0")}</span>
      <h3>${item.label}</h3>
      <label><span class="sr-only">${item.label}</span><select class="select" data-answer="${item.id}">
        ${item.options.map(([value, label]) => `<option value="${value}" ${answer === value ? "selected" : ""}>${label}</option>`).join("")}
      </select></label>
      <details style="margin-top:12px" ${selected.length ? "open" : ""}>
        <summary>이 주장을 뒷받침할 기록 선택 <span class="muted small">(${selected.length}개)</span></summary>
        <div class="evidence-checks" style="margin-top:10px">
          ${
            collected.length
              ? collected
                  .map(
                    (evidence) => `<label class="check-card"><input type="checkbox" data-claim-evidence="${item.id}" value="${evidence.id}" ${selected.includes(evidence.id) ? "checked" : ""} /><span><strong>${evidence.id}</strong><br /><span class="small muted">${evidence.title}</span></span></label>`,
                  )
                  .join("")
              : `<p class="muted small">수집한 기록이 없습니다.</p>`
          }
        </div>
      </details>
    </fieldset>`;
}

function evaluateJudgment() {
  const evaluations = JUDGMENT_ITEMS.map((item) => {
    const answerCorrect = state.judgment.answers[item.id] === item.correct;
    const selected = state.judgment.claimEvidence[item.id] || [];
    const matchedCount = item.required.filter((id) => selected.includes(id)).length;
    const allEvidence = matchedCount === item.required.length;
    let status = "missing";
    if (answerCorrect && allEvidence) status = "met";
    else if (answerCorrect && matchedCount > 0) status = "partial";
    return { ...item, answerCorrect, selected, matchedCount, status };
  });
  const met = evaluations.filter((item) => item.status === "met").length;
  const partial = evaluations.filter((item) => item.status === "partial").length;
  const summaryReady = state.judgment.summary.trim().length >= 80;
  const passed = met >= 4 && met + partial === 5 && summaryReady;
  const score = Math.round(((met + partial * 0.5) / evaluations.length) * 90 + (summaryReady ? 10 : 0));
  return { passed, score, met, partial, summaryReady, evaluations, submittedAt: new Date().toISOString() };
}

function renderResult() {
  if (!state.result) {
    state.screen = "judgment";
    return renderJudgment();
  }
  const result = state.result;
  return `
    ${renderHeader()}
    <main id="main-content" class="screen" tabindex="-1">
      <div class="content-shell">
        ${renderWorkspaceNav("")}
        <section class="panel panel-pad result-hero" aria-labelledby="result-title">
          <div class="result-emblem" aria-hidden="true">${result.passed ? "✓" : "△"}</div>
          <p class="eyebrow">Judgment of LOGOS</p>
          <h1 id="result-title" style="font-size:clamp(2.2rem,6vw,4.4rem)">${result.passed ? "기록 복원 승인" : "소명 보완 필요"}</h1>
          <p class="quote-line" style="display:inline-block;text-align:left">${result.passed ? "사실의 이동 경로가 충분한 근거로 연결되었습니다." : "일부 결론은 확인되었지만 아직 근거 연결이 충분하지 않습니다."}</p>
          <p><strong class="gold">논리 소명도 ${result.score}%</strong> · 충족 ${result.met} · 부분 충족 ${result.partial}</p>
          <div class="result-grid">
            ${result.evaluations
              .map(
                (item) => `<article class="result-item ${item.status}"><span class="result-status">${item.status === "met" ? "충족" : item.status === "partial" ? "부분 충족" : "근거 부족"}</span><h3>${item.title}</h3><p class="small">${item.status === "met" ? item.success : item.answerCorrect ? `결론은 맞지만 필요한 기록 ${item.required.length}개 중 ${item.matchedCount}개만 연결했습니다.` : "현재 제출한 결론과 기록으로는 이 항목을 설명할 수 없습니다."}</p></article>`,
              )
              .join("")}
          </div>
          <div class="button-row" style="justify-content:center;margin-top:24px">
            ${result.passed ? `<button class="btn btn-gold" data-action="show-reconstruction">사건 복원 기록 보기</button>` : `<button class="btn btn-primary" data-action="navigate" data-screen="judgment">소명 수정</button>`}
            <button class="btn" data-action="navigate" data-screen="board">추론 보드</button>
            <button class="btn" data-action="export-save">조사 기록 내보내기</button>
          </div>
        </section>
        ${result.passed ? renderReconstruction() : ""}
      </div>
    </main>`;
}

function renderReconstruction() {
  return `
    <section id="reconstruction" class="panel panel-pad reconstruction" aria-labelledby="reconstruction-title">
      <p class="eyebrow">Canonical reconstruction</p>
      <h2 id="reconstruction-title">《사라진 제24면》 사건 복원</h2>
      <ol class="timeline">
        ${CASE_DATA.reconstruction.map(([time, event]) => `<li class="timeline-item"><span class="timeline-time">${time}</span><br />${event}</li>`).join("")}
      </ol>
      <div class="record-document">MR-7-A는 17시 39분 스캔이 끝난 뒤 연구실로 반환되었고, 18시 2분 제24면이 추가된 상태로 중앙 탁자에 놓였다. 18시 6분 응축수 경보가 발생하자 정은채가 탁자 위 자료를 회색 이관 상자 2호로 옮겼다. 강민우는 상자를 봉인해 기록보존실로 운반했다. 기록관리사는 라벨이 보수 커버에 가려진 기록철을 U-108로 접수했고, 규정 P-4에 따라 B-4 서랍에 보관했다. 기록철은 분실된 것이 아니라 긴급 이동과 미등록 보존 절차가 겹치며 소재가 불분명해진 것이었다.</div>
    </section>`;
}

function renderModal() {
  if (!state.modal) return "";
  if (state.modal.type === "settings") return renderSettingsModal();
  if (state.modal.type === "evidence") return renderEvidenceModal(state.modal.id);
  return "";
}

function renderEvidenceModal(id) {
  const evidence = getEvidence(id);
  if (!evidence) return "";
  const collected = isCollected(id);
  return `
    <div class="modal-backdrop" data-action="close-modal" data-backdrop="true">
      <section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal-head">
          <div><p class="eyebrow">Record inspection · ${evidence.id}</p><h2 id="modal-title">${evidence.title}</h2></div>
          <button class="icon-btn" data-action="close-modal" aria-label="기록 닫기">×</button>
        </div>
        <div class="modal-body">
          <div class="record-meta">
            <div><span class="muted small">확인 시각</span><br /><strong>${evidence.time}</strong></div>
            <div><span class="muted small">출처</span><br /><strong>${evidence.source}</strong></div>
          </div>
          <div class="record-document">${escapeHTML(evidence.content)}</div>
          <p><strong>이 기록이 확인하는 것</strong><br /><span class="muted">${evidence.role}</span></p>
          <div class="button-row">
            ${collected ? `<span class="tag">✓ 조사 노트에 수집됨</span>` : `<button class="btn btn-primary" data-action="collect-evidence" data-evidence="${evidence.id}">조사 노트에 추가</button>`}
            <button class="btn" data-action="close-modal">닫기</button>
          </div>
        </div>
      </section>
    </div>`;
}

function renderSettingsModal() {
  return `
    <div class="modal-backdrop" data-action="close-modal" data-backdrop="true">
      <section class="modal" role="dialog" aria-modal="true" aria-labelledby="settings-title">
        <div class="modal-head">
          <div><p class="eyebrow">Archive preferences</p><h2 id="settings-title">설정</h2></div>
          <button class="icon-btn" data-action="close-modal" aria-label="설정 닫기">×</button>
        </div>
        <div class="modal-body">
          <div class="setting-row"><div><strong>움직임 줄이기</strong><br /><span class="muted small">먼지와 화면 전환 효과를 최소화합니다.</span></div><label class="switch"><input type="checkbox" data-setting="reduceMotion" ${state.settings.reduceMotion ? "checked" : ""} /><span class="switch-track"></span><span class="sr-only">움직임 줄이기</span></label></div>
          <div class="setting-row"><div><strong>큰 글자</strong><br /><span class="muted small">본문과 컨트롤의 글자 크기를 키웁니다.</span></div><label class="switch"><input type="checkbox" data-setting="largeText" ${state.settings.largeText ? "checked" : ""} /><span class="switch-track"></span><span class="sr-only">큰 글자</span></label></div>
          <div class="divider"></div>
          <h3>진행 기록</h3>
          <p class="muted small">진행 상황은 이 브라우저에 자동 저장됩니다. 브라우저 데이터를 지우기 전에 파일로 내보내세요.</p>
          <div class="button-row">
            <button class="btn" data-action="export-save">기록 내보내기</button>
            <label class="btn" for="import-save">기록 불러오기</label><input class="sr-only" id="import-save" type="file" accept="application/json" data-input="import-save" />
            <button class="btn btn-danger" data-action="reset-progress">진행 초기화</button>
          </div>
        </div>
      </section>
    </div>`;
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "close-modal" && target.dataset.backdrop === "true" && event.target !== target) return;

  switch (action) {
    case "new-game": {
      if (state.started && (state.collected.length || state.result)) {
        const confirmed = window.confirm("새 기록을 열면 현재 조사가 초기화됩니다. 계속할까요?");
        if (!confirmed) return;
      }
      const settings = { ...state.settings };
      state = createInitialState(settings);
      state.started = true;
      state.screen = "library";
      state.resumeScreen = "library";
      saveState();
      render();
      requestAnimationFrame(() => document.querySelector("#main-content")?.focus());
      break;
    }
    case "continue-game":
      if (state.started) navigate(state.resumeScreen || "library");
      break;
    case "open-case":
      navigate(state.collected.length ? "investigate" : "briefing");
      break;
    case "enter-case":
      navigate("investigate");
      break;
    case "navigate":
      navigate(target.dataset.screen);
      break;
    case "go-title":
      navigate("title");
      break;
    case "change-location":
      state.currentLocation = target.dataset.location;
      state.openQa = null;
      saveState();
      render();
      break;
    case "toggle-qa":
      state.openQa = state.openQa === target.dataset.qa ? null : target.dataset.qa;
      saveState();
      render();
      break;
    case "open-evidence":
      openModal({ type: "evidence", id: target.dataset.evidence }, target);
      break;
    case "collect-evidence": {
      const id = target.dataset.evidence;
      if (!state.collected.includes(id)) state.collected.push(id);
      if (!state.reviewed.includes(id)) state.reviewed.push(id);
      saveState();
      render();
      showToast(`${id} · ${getEvidence(id).title}을 조사 노트에 추가했습니다.`);
      requestAnimationFrame(() => document.querySelector('[data-action="close-modal"]')?.focus());
      break;
    }
    case "close-modal":
      closeModal();
      break;
    case "open-settings":
      openModal({ type: "settings" }, target);
      break;
    case "next-hint":
      if (state.hintLevel < CASE_DATA.hints.length) state.hintLevel += 1;
      saveState();
      render();
      announce(`신탁 ${state.hintLevel}단계가 열렸습니다.`);
      break;
    case "select-evidence": {
      const id = target.dataset.evidence;
      if (state.connectionDraft.includes(id)) {
        state.connectionDraft = state.connectionDraft.filter((item) => item !== id);
      } else if (state.connectionDraft.length < 2) {
        state.connectionDraft.push(id);
      } else {
        state.connectionDraft = [state.connectionDraft[1], id];
      }
      render();
      break;
    }
    case "create-connection":
      createConnection();
      break;
    case "remove-connection":
      state.connections.splice(Number(target.dataset.index), 1);
      saveState();
      render();
      break;
    case "board-view":
      state.boardView = target.dataset.view;
      saveState();
      render();
      break;
    case "go-b4":
      state.currentLocation = "archive";
      navigate("investigate");
      break;
    case "submit-judgment":
      submitJudgment();
      break;
    case "show-reconstruction":
      document.querySelector("#reconstruction")?.scrollIntoView({ behavior: state.settings.reduceMotion ? "auto" : "smooth" });
      break;
    case "export-save":
      exportSave();
      break;
    case "reset-progress":
      resetProgress();
      break;
    case "toggle-fullscreen":
      toggleFullscreen();
      break;
    case "exit-game":
      window.close();
      showToast("브라우저 정책상 이 탭을 자동으로 닫을 수 없습니다. 진행 상황은 저장되었습니다.");
      break;
  }
});

app.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches("[data-answer]")) {
    state.judgment.answers[target.dataset.answer] = target.value;
    saveState();
  }
  if (target.matches("[data-claim-evidence]")) {
    const claim = target.dataset.claimEvidence;
    const current = new Set(state.judgment.claimEvidence[claim] || []);
    target.checked ? current.add(target.value) : current.delete(target.value);
    state.judgment.claimEvidence[claim] = [...current];
    saveState();
  }
  if (target.matches("[data-setting]")) {
    state.settings[target.dataset.setting] = target.checked;
    applySettings();
    saveState();
  }
  if (target.matches('[data-input="import-save"]')) importSave(target.files?.[0]);
});

app.addEventListener("input", (event) => {
  const target = event.target;
  if (target.dataset.input === "hypothesis") {
    state.hypothesis = target.value;
    saveState();
  }
  if (target.dataset.input === "summary") {
    state.judgment.summary = target.value;
    saveState();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.modal) {
    closeModal();
    return;
  }
  if (event.key === "Tab" && state.modal) {
    const focusable = [...document.querySelectorAll('.modal button:not(:disabled), .modal input:not(:disabled), .modal select:not(:disabled), .modal textarea:not(:disabled), .modal [href], .modal [tabindex]:not([tabindex="-1"])')];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

function openModal(modal, trigger) {
  lastFocusedElement = trigger || document.activeElement;
  state.modal = modal;
  render();
  requestAnimationFrame(() => document.querySelector(".modal button, .modal input, .modal select")?.focus());
}

function closeModal() {
  state.modal = null;
  render();
  requestAnimationFrame(() => lastFocusedElement?.focus?.());
}

function createConnection() {
  if (state.connectionDraft.length !== 2) return;
  const type = document.querySelector("#connection-type")?.value || CONNECTION_TYPES[0];
  const note = document.querySelector("#connection-note")?.value.trim() || "";
  const [a, b] = state.connectionDraft;
  const duplicate = state.connections.some(
    (connection) => pairKey(connection.a, connection.b) === pairKey(a, b) && connection.type === type,
  );
  if (duplicate) {
    showToast("같은 유형의 연결이 이미 존재합니다.", true);
    return;
  }
  const wasUnlocked = isB4Unlocked();
  state.connections.push({ a, b, type, note, createdAt: new Date().toISOString() });
  state.connectionDraft = [];
  saveState();
  render();
  if (!wasUnlocked && isB4Unlocked()) showToast("규정 연결이 성립했습니다. 안정화 서랍 B-4가 열렸습니다.");
  else showToast(`${a}와 ${b}를 ‘${type}’ 관계로 연결했습니다.`);
}

function submitJudgment() {
  const missingAnswers = JUDGMENT_ITEMS.filter((item) => !state.judgment.answers[item.id]);
  const validation = document.querySelector("#validation");
  if (missingAnswers.length || state.judgment.summary.trim().length < 40) {
    const messages = [];
    if (missingAnswers.length) messages.push(`결론을 선택하지 않은 항목이 ${missingAnswers.length}개 있습니다.`);
    if (state.judgment.summary.trim().length < 40) messages.push("최종 소명문을 40자 이상 작성해 주세요.");
    validation.textContent = messages.join(" ");
    validation.classList.add("visible");
    validation.focus?.();
    validation.scrollIntoView({ behavior: state.settings.reduceMotion ? "auto" : "smooth", block: "center" });
    announce(messages.join(" "));
    return;
  }
  state.result = evaluateJudgment();
  state.screen = "result";
  state.resumeScreen = "result";
  saveState();
  render();
  requestAnimationFrame(() => document.querySelector("#main-content")?.focus());
}

function exportSave() {
  const payload = {
    exportedAt: new Date().toISOString(),
    game: "LOGOS",
    caseId: CASE_DATA.id,
    state: { ...state, modal: null, connectionDraft: [] },
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `logos-${CASE_DATA.id}-save.json`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("진행 기록을 JSON 파일로 내보냈습니다.");
}

function importSave(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      const imported = parsed.state || parsed;
      if (imported.version !== SAVE_VERSION) throw new Error("version");
      const base = createInitialState(imported.settings || {});
      state = {
        ...base,
        ...imported,
        judgment: { ...base.judgment, ...(imported.judgment || {}) },
        settings: { ...base.settings, ...(imported.settings || {}) },
        modal: null,
        connectionDraft: [],
      };
      applySettings();
      saveState();
      render();
      showToast("진행 기록을 불러왔습니다.");
    } catch (error) {
      showToast("이 파일은 현재 버전의 LOGOS 진행 기록이 아닙니다.", true);
    }
  });
  reader.readAsText(file);
}

function resetProgress() {
  const confirmed = window.confirm("현재 조사 기록을 완전히 초기화할까요? 먼저 기록을 내보내는 것을 권장합니다.");
  if (!confirmed) return;
  const settings = { ...state.settings };
  localStorage.removeItem(SAVE_KEY);
  state = createInitialState(settings);
  applySettings();
  render();
  showToast("조사 기록을 초기화했습니다.");
}

async function toggleFullscreen() {
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  } catch (error) {
    showToast("이 브라우저에서는 전체 화면을 사용할 수 없습니다.", true);
  }
}
