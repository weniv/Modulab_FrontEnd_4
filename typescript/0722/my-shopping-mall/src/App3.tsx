// App3.tsx - Lucide React Icons Tutorial
import { 
  Home, 
  Search, 
  Heart, 
  ShoppingCart, 
  User, 
  Settings,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Star,
  Download,
  Upload,
  Trash2,
  Edit,
  Check,
  X,
  AlertCircle,
  Info
} from 'lucide-react';

export default function App3() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Lucide React 아이콘 예제
        </h1>

        {/* 네비게이션 예제 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">네비게이션 아이콘</h2>
          <nav className="flex space-x-6">
            <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
              <Home size={20} />
              <span>홈</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
              <Search size={20} />
              <span>검색</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
              <Heart size={20} />
              <span>찜목록</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
              <ShoppingCart size={20} />
              <span>장바구니</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
              <User size={20} />
              <span>내정보</span>
            </a>
          </nav>
        </div>

        {/* 버튼 예제 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">버튼과 아이콘</h2>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
              <Download size={18} />
              <span>다운로드</span>
            </button>
            <button className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors">
              <Upload size={18} />
              <span>업로드</span>
            </button>
            <button className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition-colors">
              <Edit size={18} />
              <span>수정</span>
            </button>
            <button className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors">
              <Trash2 size={18} />
              <span>삭제</span>
            </button>
          </div>
        </div>

        {/* 정보 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center space-x-3 mb-2">
              <Mail className="text-blue-500" size={24} />
              <h3 className="font-semibold">이메일</h3>
            </div>
            <p className="text-gray-600">contact@example.com</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center space-x-3 mb-2">
              <Phone className="text-green-500" size={24} />
              <h3 className="font-semibold">전화번호</h3>
            </div>
            <p className="text-gray-600">010-1234-5678</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center space-x-3 mb-2">
              <MapPin className="text-red-500" size={24} />
              <h3 className="font-semibold">위치</h3>
            </div>
            <p className="text-gray-600">서울특별시 강남구</p>
          </div>
        </div>

        {/* 알림 메시지 */}
        <div className="space-y-3 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start space-x-3">
            <Info className="text-blue-500 flex-shrink-0" size={20} />
            <div>
              <h4 className="font-semibold text-blue-900">정보</h4>
              <p className="text-blue-700">이것은 정보 메시지입니다.</p>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
            <Check className="text-green-500 flex-shrink-0" size={20} />
            <div>
              <h4 className="font-semibold text-green-900">성공</h4>
              <p className="text-green-700">작업이 성공적으로 완료되었습니다.</p>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start space-x-3">
            <AlertCircle className="text-yellow-500 flex-shrink-0" size={20} />
            <div>
              <h4 className="font-semibold text-yellow-900">경고</h4>
              <p className="text-yellow-700">주의가 필요한 사항이 있습니다.</p>
            </div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
            <X className="text-red-500 flex-shrink-0" size={20} />
            <div>
              <h4 className="font-semibold text-red-900">오류</h4>
              <p className="text-red-700">오류가 발생했습니다.</p>
            </div>
          </div>
        </div>

        {/* 아이콘 크기 변형 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">아이콘 크기 변형</h2>
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <Settings size={16} className="text-gray-600 mx-auto mb-1" />
              <p className="text-sm">16px</p>
            </div>
            <div className="text-center">
              <Settings size={24} className="text-gray-600 mx-auto mb-1" />
              <p className="text-sm">24px</p>
            </div>
            <div className="text-center">
              <Settings size={32} className="text-gray-600 mx-auto mb-1" />
              <p className="text-sm">32px</p>
            </div>
            <div className="text-center">
              <Settings size={48} className="text-gray-600 mx-auto mb-1" />
              <p className="text-sm">48px</p>
            </div>
            <div className="text-center">
              <Settings size={64} className="text-gray-600 mx-auto mb-1" />
              <p className="text-sm">64px</p>
            </div>
          </div>
        </div>

        {/* 평점 예제 */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h2 className="text-2xl font-semibold mb-4">평점 표시</h2>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((rating) => (
              <Star
                key={rating}
                size={24}
                className={rating <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}
              />
            ))}
            <span className="ml-2 text-gray-600">4.0 / 5.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}