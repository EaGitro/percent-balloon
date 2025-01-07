import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-[#e8f2f7] flex flex-col items-center justify-center">
        {/* ヘッダー */}
        <header className="w-full bg-blue-500 text-white py-4">
          <h1 className="text-center text-2xl"><b>パーセントバルーン</b></h1>
        </header>

        {/* メインコンテンツ */}
        <main className="mt-8 px-8 text-center">
          {/* msg */}
          <h2 className="text-5xl font-bold mb-4">Congratulations!!</h2>

          {/* game-end-link */}
          <a
            href="/hoge"
            className="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
          >
          Exit
          </a>
        </main>

        {/* フッター */}
        <footer className="mt-12 w-full text-center text-gray-600 border-t">
          <hr className="border-gray-500"></hr>
          <p className="py-3">
            © 2024 PiedPiper-奪還鯖缶. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
    
  );
}