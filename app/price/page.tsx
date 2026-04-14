export default function Price() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* タイトル */}
      <section className="text-center py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          レッカー料金の目安
        </h1>

        <p className="mt-6 text-gray-300">
          明確な料金説明で安心してご依頼いただけます
        </p>
      </section>

      {/* 料金一覧 */}
      <section className="bg-white text-black py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-6">

          <div className="border p-6 rounded-xl">
            <h2 className="font-bold text-xl">基本料金</h2>
            <p className="mt-2 text-sm">8,000円〜</p>
          </div>

          <div className="border p-6 rounded-xl">
            <h2 className="font-bold text-xl">レッカー搬送</h2>
            <p className="mt-2 text-sm">距離・状況により変動</p>
          </div>

          <div className="border p-6 rounded-xl">
            <h2 className="font-bold text-xl">バッテリー上がり</h2>
            <p className="mt-2 text-sm">5,000円〜</p>
          </div>

          <div className="border p-6 rounded-xl">
            <h2 className="font-bold text-xl">故障車引き取り</h2>
            <p className="mt-2 text-sm">状況によりお見積り</p>
          </div>

        </div>
      </section>

      {/* 安心訴求 */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold">安心ポイント</h2>

        <div className="mt-8 space-y-3">
          <p>✔ 事前に料金説明します</p>
          <p>✔ 無断請求・追加請求なし</p>
          <p>✔ ご納得後に作業開始</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-black text-center py-16">
        <h2 className="text-xl font-bold">
          料金についてお気軽にご相談ください
        </h2>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="tel:0922925881"
            className="bg-black text-white px-6 py-3 rounded-xl font-bold"
          >
            📞 電話する
          </a>

          <a
            href="https://line.me/R/ti/p/%40394fvejx"
            className="border border-black px-6 py-3 rounded-xl"
          >
            LINE相談
          </a>
        </div>
      </section>

      {/* 固定ボタン */}
      <div className="fixed bottom-0 left-0 w-full bg-black p-4 flex justify-center">
        <a
          href="tel:0922925881"
          className="bg-white text-black px-6 py-3 rounded-xl font-bold w-full text-center"
        >
          📞 今すぐ電話（24時間対応）
        </a>
      </div>

    </main>
  );
}
