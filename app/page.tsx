export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* ファーストビュー */}
      <section className="relative text-center py-32 px-4">
        <img
          src="/hero.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            福岡｜アメ車・輸入車に強い中古車販売<br />
            レッカー・軽運送・物流まで対応
          </h1>

          <p className="mt-6 text-gray-300">
            年間対応実績1000件以上｜24時間365日対応<br />
            緊急時も即対応可能
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a href="tel:092-292-5881" className="bg-white text-black px-6 py-3 rounded-xl font-bold">
              今すぐ電話
            </a>

            <a href="@394fvejx" className="border border-white px-6 py-3 rounded-xl">
              LINE相談
            </a>
          </div>
        </div>
      </section>

      {/* 中古車販売 */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center">
          アメ車・輸入車に強い中古車販売
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-6xl mx-auto">
          <img src="/car1.jpg" className="rounded-xl" />
          <img src="/car2.jpg" className="rounded-xl" />
        </div>

        <p className="text-center mt-6 text-gray-300">
          アメ車・輸入車を中心に厳選車両を販売。<br />
          カスタム・整備・アフターサポートまで一貫対応。
        </p>
      </section>

      {/* レッカー */}
      <section className="bg-white text-black py-20 px-6">
        <h2 className="text-3xl font-bold text-center">
          事故車・故障車 レッカー引き取り
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-6xl mx-auto">
          <img src="/tow.jpg" className="rounded-xl" />
          <img src="/garage.jpg" className="rounded-xl" />
        </div>

        <p className="text-center mt-6">
          24時間365日対応｜最短30分到着<br />
          夜間・緊急・アメ車対応OK
        </p>
      </section>

      {/* 軽運送 */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center">
          軽運送ビジネス支援
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-6xl mx-auto">
          <img src="/kei1.jpg" className="rounded-xl" />
          <img src="/kei2.jpg" className="rounded-xl" />
        </div>

        <p className="text-center mt-6 text-gray-300">
          黒ナンバー取得・代車貸出・案件紹介までサポート。<br />
          未経験からでもスタート可能。
        </p>
      </section>

      {/* 物流（ここ強化🔥） */}
      <section className="bg-white text-black py-20 px-6">
        <h2 className="text-3xl font-bold text-center">
          法人向け物流サービス
        </h2>

        <div className="max-w-6xl mx-auto mt-10">
          <img src="/logistics.jpg" className="rounded-xl w-full" />
        </div>

        <div className="text-center mt-6 space-y-2">
          <p>企業配送・スポット・定期便対応</p>
          <p>倉庫保管・仕分け・出荷まで一括対応</p>
          <p>株式会社GAMIと連携した安定物流</p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-2xl font-bold">
          お仕事のご依頼・ご相談はお気軽に
        </h2>

        <div className="mt-6">
          <a href="tel:092-292-5881" className="bg-white text-black px-6 py-3 rounded-xl font-bold">
            今すぐ電話する
          </a>
        </div>
      </section>

    </main>
  );
}
