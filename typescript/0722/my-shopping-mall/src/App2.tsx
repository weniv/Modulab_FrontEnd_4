// App2.tsx - Framer Motion Tutorial
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function App2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, x:-50, y: -50 }}
          animate={{ opacity: 1, x: 50, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-8 text-gray-800"
        >
          Framer Motion 애니메이션 예제
        </motion.h1>

        {/* 기본 애니메이션 */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-6"
        >
          <h2 className="text-2xl font-semibold mb-4">기본 애니메이션</h2>
          <p>이 카드는 왼쪽에서 슬라이드되어 나타납니다.</p>
        </motion.div>

        {/* 호버 효과 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-lg p-4 cursor-pointer"
            >
              <h3 className="font-semibold">카드 {item}</h3>
              <p className="text-gray-600">호버하거나 클릭해보세요!</p>
            </motion.div>
          ))}
        </div>

        {/* 드래그 가능한 박스 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">드래그 가능한 박스</h2>
          <div className="h-48 bg-gray-100 rounded-lg relative">
            <motion.div
              drag
              dragConstraints={{
                top: 0,
                left: 0,
                right: 150,
                bottom: 100,
              }}
              whileDrag={{ scale: 1.2 }}
              className="w-16 h-16 bg-purple-500 rounded-lg cursor-grab active:cursor-grabbing"
            />
          </div>
        </div>

        {/* 토글 애니메이션 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">토글 애니메이션</h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded mb-4 transition-colors"
          >
            {isOpen ? '닫기' : '열기'}
          </button>
          
          <motion.div
            initial={false}
            animate={{
              height: isOpen ? 'auto' : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-purple-100 rounded">
              <p>이것은 토글 가능한 콘텐츠입니다!</p>
              <p>부드럽게 나타나고 사라집니다.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}