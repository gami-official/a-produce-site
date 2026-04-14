export default function Delivery() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* ファーストビュー */}
      <section className="text-center py-24 px-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          軽運送ドライバー募集<br />
          ＆ 仕事依頼受付
        </h1>

        <p className="mt-6 text-gray-300">
          委託・請負どちらも対応可能<br />
          黒ナンバー取得からサポートします
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="tel:0922925881"
            className="bg-white text-black px-6 py-3 rounded-xl font-bold"
          >
            📞 電話で相談
          </a>

          <a
            href="https://line.me/R/ti/p/%40394fvejx"
            className="border border-white px-6 py-3 rounded-xl"
          >
            LINEで相談
          </a>
        </div>
      </section>

      {/* サービス内容 */}
      <section className="bg-white text-black py-16 px-6 text-center">
        <h2 className="text-2xl font-bold">サービス内容</h2>

        <div className="mt-10 space-y-3">
          <p>・軽貨物配送（企業・個人）</p>
          <p>・チャーター便</p>
          <p>・スポット配送</p>
          <p>・定期便</p>
        </div>
      </section>

      {/* サポート内容 */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold">開業サポート</h2>

        <div className="mt-10 space-y-3">
          <p>✔ 黒ナンバー取得サポート</p>
          <p>✔ 車両の貸出・紹介</p>
          <p>✔ 仕事の取り方サポート</p>
          <p>✔ 未経験OK</p>
        </div>
      </section>

      {/* 車両販売 */}
      <section className="bg-white text-black py-16 px-6 text-center">
        <h2 className="text-2xl font-bold">事業用車両販売</h2>

        <div className="mt-10 space-y-3">
          <p>・軽バン</p>
          <p>・軽幌</p>
          <p>・軽クール車</p>
          <p>・軽トラック</p>
        </div>
      </section>

      {/* 強み */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold">当社の強み</h2>

        <div className="mt-10 space-y-3">
          <p>✔ 開業から稼ぐまでサポート</p>
          <p>✔ 車両・仕事・ノウハウすべて提供</p>
          <p>✔ 継続的に案件あり</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-black text-center py-16">
        <h2 className="text-xl font-bold">
          軽運送の仕事・開業についてお気軽にご相談ください
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
          📞 今すぐ電話
        </a>
      </div>

    </main>
  );
}
