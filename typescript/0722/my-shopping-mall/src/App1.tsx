// App1.tsx - Tailwind CSS Tutorial
// Shadcn/ui는 별도 설치가 필요하므로, Tailwind CSS의 기본 컴포넌트들을 보여드립니다
// Shadcn/ui를 사용하시려면: npx shadcn@latest init 명령을 실행하세요

export default function App1() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Tailwind CSS 컴포넌트 예제
        </h1>

        {/* 카드 컴포넌트 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">카드 컴포넌트</h2>
          <p className="text-gray-600 mb-4">
            이것은 Tailwind CSS로 만든 카드 컴포넌트입니다.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded transition-colors">
            클릭하세요
          </button>
        </div>

        {/* 그리드 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-indigo-100 p-4 rounded-lg">
            <h3 className="font-semibold text-indigo-800">박스 1</h3>
            <p className="text-indigo-600">그리드 아이템</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800">박스 2</h3>
            <p className="text-green-600">그리드 아이템</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-800">박스 3</h3>
            <p className="text-yellow-600">그리드 아이템</p>
          </div>
        </div>

        {/* 폼 예제 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">폼 예제</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                이름
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="이름을 입력하세요"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                이메일
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="email@example.com"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-2 px-4 rounded-md hover:from-blue-600 hover:to-purple-700 transition-colors"
            >
              제출
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}