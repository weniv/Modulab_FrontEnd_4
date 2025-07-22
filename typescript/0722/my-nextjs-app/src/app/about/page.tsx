import Counter from '@/components/Counter';
import ApiDemo from '@/components/ApiDemo';

export default function About() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Page</h1>
        <p className="mb-6">이 페이지는 /about 경로로 자동 라우팅됩니다.</p>
        
        {/* Counter 컴포넌트 테스트 */}
        <Counter />

        {/* API 호출 테스트 */}
        <ApiDemo />
      </div>
    </main>
  );
}