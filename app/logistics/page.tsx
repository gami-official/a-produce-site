export default function Logistics() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* タイトル */}
      <section className="text-center py-24 px-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          法人向け物流サービス
        </h1>

        <p className="mt-6 text-gray-300">
          軽貨物配送・チャーター・定期便など<br />
          幅広い物流ニーズに対応します
        </p>
      </section>

      {/* サービス */}
      <section className="bg-white text-black py-16 px-6 text-center">
        <h2 className="text-2xl font-bold">対応サービス</h2>

        <div className="mt-10 space-y-3">
          <p>・企業配送</p>
          <p>・チャーター便</p>
          <p>・スポット便</p>
          <p>・定期配送</p>
        </div>
      </section>

      {/* 強み */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold">当社の強み</h2>

        <div className="mt-10 space-y-3">
          <p>✔ 柔軟な対応力</p>
          <p>✔ スピード対応</p>
          <p>✔ 安定した配送体制</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-black text-center py-16">
        <h2 className="text-xl font-bold">
          法人様の物流課題を解決します
        </h2>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="tel:0922925881"
            className="bg-black text-white px-6 py-3 rounded-xl font-bold"
          >
            📞 電話で相談
          </a>

          <a
            href="https://line.me/R/ti/p/%40394fvejx"
            className="border border-black px-6 py-3 rounded-xl"
          >
            LINEで相談
          </a>
        </div>
      </section>

      {/* 固定ボタン */}
      <div className="fixed bottom-0 left-0 w-full bg-black p-4 flex justify-center">
        <a
          href="tel:0922925881"
          className="bg-white text-black px-6 py-3 rounded-xl font-bold w-full text-center"
        >
          📞 今すぐ電話
        </a>
      </div>

    </main>
  );
}
