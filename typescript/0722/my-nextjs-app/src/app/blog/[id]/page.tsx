interface Props {
  params: {
    id: string;
  };
}

// 블로그 게시물 데이터 타입
interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  readTime: string;
}

// 정적 블로그 데이터
const blogPosts: Record<string, BlogPost> = {
  '1': {
    id: '1',
    title: 'Next.js 14 App Router 완벽 가이드',
    content: 'Next.js 14의 새로운 App Router는 파일 시스템 기반 라우팅과 서버 컴포넌트를 기본으로 지원합니다. 기존 Pages Router보다 더 직관적이고 성능이 뛰어난 웹 애플리케이션을 구축할 수 있습니다. 레이아웃과 중첩 라우팅 기능으로 복잡한 구조도 쉽게 관리할 수 있어요.',
    author: '김개발',
    date: '2024-07-15',
    tags: ['Next.js', 'React', 'App Router'],
    readTime: '5분'
  },
  '2': {
    id: '2',
    title: 'TypeScript로 안전한 React 개발하기',
    content: 'TypeScript는 JavaScript에 정적 타입을 추가하여 런타임 오류를 미리 방지할 수 있습니다. React 컴포넌트의 props와 state에 타입을 정의하면 IDE의 자동완성과 리팩토링 기능을 최대한 활용할 수 있어요. 대규모 프로젝트에서는 필수적인 도구입니다.',
    author: '이타입',
    date: '2024-07-12',
    tags: ['TypeScript', 'React', '타입 안전성'],
    readTime: '3분'
  },
  '3': {
    id: '3',
    title: 'Tailwind CSS 실무 활용법',
    content: 'Tailwind CSS는 유틸리티 클래스 기반의 CSS 프레임워크입니다. HTML에서 직접 스타일링할 수 있어 개발 속도가 빠르고, 반응형 디자인도 쉽게 구현할 수 있어요. 사용하지 않는 스타일은 자동으로 제거되어 최적화된 CSS 번들을 얻을 수 있습니다.',
    author: '박스타일',
    date: '2024-07-10',
    tags: ['Tailwind CSS', 'CSS', '스타일링'],
    readTime: '4분'
  }
};

// 정적 파라미터 생성 (빌드 타임)
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

// 메타데이터 생성
export async function generateMetadata({ params }: Props) {
  const post = blogPosts[params.id];
  return {
    title: post?.title || `Blog Post ${params.id}`,
    description: post?.content.slice(0, 150) + '...' || '',
  };
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts[params.id];

  // 존재하지 않는 포스트 처리
  if (!post) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">게시물을 찾을 수 없습니다</h1>
          <p className="text-gray-600">요청하신 게시물이 존재하지 않습니다.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        {/* 헤더 정보 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="font-medium">{post.author}</span>
            <span>{post.date}</span>
            <span>{post.readTime} 읽기</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 본문 */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-800 leading-relaxed">
            {post.content}
          </p>
        </div>

        {/* 하단 정보 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            게시물 ID: {params.id} | 동적 라우트로 생성된 페이지입니다.
          </p>
        </div>
      </article>
    </main>
  );
}