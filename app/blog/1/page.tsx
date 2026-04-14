export default function BlogPost() {
  return (
    <main className="bg-black text-white min-h-screen">

      <section className="py-20 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">
          事故車をレッカーする流れ
        </h1>

        <p className="mt-6 text-gray-300">
          事故や故障で車が動かなくなった場合の対応方法を解説します。
        </p>

        <h2 className="mt-10 text-xl font-bold">
          ① まずは連絡
        </h2>
        <p className="mt-2">
          状況を確認し、最適な対応を行います。
        </p>

        <h2 className="mt-6 text-xl font-bold">
          ② 現場へ急行
        </h2>
        <p className="mt-2">
          最短30分で到着し対応します。
        </p>

        <h2 className="mt-6 text-xl font-bold">
          ③ 搬送
        </h2>
        <p className="mt-2">
          安全に車両を搬送します。
        </p>

        <div className="mt-10 text-center">
          <a href="tel:0922925881" className="bg-white text-black px-6 py-3 rounded-xl font-bold">
            📞 今すぐ電話
          </a>
        </div>

      </section>

    </main>
  );
}
