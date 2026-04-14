export default function Home() {
  const PHONE_NUMBER = "092-292-5881";
  const PHONE_LINK = "tel:092-292-5881";
  const LINE_URL = "https://line.me/R/ti/p/@394fvejx";

  return (
    <main className="bg-black text-white min-h-screen">
      {/* ファーストビュー */}
      <section className="relative overflow-hidden text-center py-28 md:py-36 px-4">
        <img
          src="/hero.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-sm md:text-base tracking-[0.2em] text-gray-300">
            FUKUOKA AUTO / TOWING / DELIVERY / LOGISTICS
          </p>

          <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            福岡｜アメ車・輸入車に強い中古車販売
            <br />
            レッカー・軽運送・物流まで対応
          </h1>

          <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
            年間対応実績1000件以上｜24時間365日対応
            <br />
            緊急時も即対応可能
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href={PHONE_LINK}
              className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:opacity-90 transition"
            >
              今すぐ電話
            </a>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition"
            >
              LINE相談
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-400">TEL: {PHONE_NUMBER}</p>
        </div>
      </section>

      {/* 中古車販売 */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            アメ車・輸入車に強い中古車販売
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <img
              src="/car1.jpg"
              alt="アメ車・輸入車の中古車販売車両1"
              className="rounded-2xl w-full h-full object-cover"
            />
            <img
              src="/car2.jpg"
              alt="アメ車・輸入車の中古車販売車両2"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>

          <p className="text-center mt-6 text-gray-300 leading-relaxed">
            アメ車・輸入車を中心に厳選車両を販売。
            <br />
            カスタム・整備・アフターサポートまで一貫対応。
          </p>
        </div>
      </section>

      {/* レッカー */}
      <section className="bg-white text-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            事故車・故障車 レッカー引き取り
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <img
              src="/tow.jpg"
              alt="レッカーサービス車両"
              className="rounded-2xl w-full h-full object-cover"
            />
            <img
              src="/garage.jpg"
              alt="整備ガレージ"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>

          <p className="text-center mt-6 leading-relaxed">
            24時間365日対応｜最短30分到着
            <br />
            夜間・緊急・アメ車対応OK
          </p>
        </div>
      </section>

      {/* 軽運送 */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            軽運送ビジネス支援
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <img
              src="/kei1.jpg"
              alt="軽運送サポート車両1"
              className="rounded-2xl w-full h-full object-cover"
            />
            <img
              src="/kei2.jpg"
              alt="軽運送サポート車両2"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>

          <p className="text-center mt-6 text-gray-300 leading-relaxed">
            黒ナンバー取得・代車貸出・案件紹介までサポート。
            <br />
            未経験からでもスタート可能。
          </p>
        </div>
      </section>

      {/* 物流 */}
      <section className="bg-white text-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">法人向け物流サービス</h2>

          <div className="mt-10">
            <img
              src="/logistics.jpg"
              alt="法人向け物流サービス"
              className="rounded-2xl w-full object-cover"
            />
          </div>

          <div className="text-center mt-6 space-y-2 leading-relaxed">
            <p>企業配送・スポット・定期便対応</p>
            <p>倉庫保管・仕分け・出荷まで一括対応</p>
            <p>株式会社GAMIと連携した安定物流</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">
            お仕事のご依頼・ご相談はお気軽に
          </h2>

          <p className="mt-4 text-gray-300">
            中古車販売・レッカー・軽運送・物流のご相談に対応しています
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href={PHONE_LINK}
              className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:opacity-90 transition"
            >
              今すぐ電話する
            </a>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition"
            >
              LINEで相談する
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
