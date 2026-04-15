export default function Home() {
  const PHONE_NUMBER = "092-292-5881";
  const PHONE_LINK = "tel:092-292-5881";
  const LINE_URL = "https://line.me/R/ti/p/@394fvejx";
  const GAMI_URL = "https://www.gamigami.net/";
  const HEADSPA_URL = "https://www.yuheadspa.net/";

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
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-sm md:text-base tracking-[0.2em] text-gray-300">
            A-PRODUCE株式会社
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
            <a href={PHONE_LINK} className="bg-white text-black px-6 py-3 rounded-xl font-bold">
              今すぐ電話
            </a>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 rounded-xl font-bold"
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
            Styling★Garage（車事業）
          </h2>

          <p className="text-center text-gray-400 mt-2">
            A-PRODUCE株式会社 車事業部
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <img src="/car1.jpg" className="rounded-2xl w-full" />
            <img src="/car2.jpg" className="rounded-2xl w-full" />
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
            <img src="/tow.jpg" className="rounded-2xl w-full" />
            <img src="/garage.jpg" className="rounded-2xl w-full" />
          </div>

          <p className="text-center mt-6">
            24時間365日対応｜最短30分到着
            <br />
            夜間・緊急・アメ車対応OK
          </p>
        </div>
      </section>

      {/* 物流 */}
      <section className="bg-white text-black py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">
            法人向け物流サービス
          </h2>

          <p className="mt-6">
            物流・軽貨物・倉庫業務は
            <br />
            株式会社GAMIと連携して対応しています
          </p>

          <a
            href={GAMI_URL}
            target="_blank"
            className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-xl font-bold"
          >
            GAMI公式サイトへ
          </a>
        </div>
      </section>

      {/* 関連事業 */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">関連事業</h2>

        <div className="mt-10 space-y-6">
          <a href={GAMI_URL} target="_blank" className="block underline">
            株式会社GAMI
          </a>

          <a href={HEADSPA_URL} target="_blank" className="block underline">
            ヘッドスパ専門店ゆう
          </a>
        </div>
      </section>

      {/* フッター */}
      <footer className="text-center py-10 text-sm text-gray-400 border-t border-white/10">
        <p>A-PRODUCE株式会社</p>
        <p className="mt-2">Styling★Garage（車事業）</p>
      </footer>

      {/* スマホ固定CTA */}
      <div className="fixed bottom-0 inset-x-0 bg-black p-3 md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a href={PHONE_LINK} className="bg-white text-black py-3 rounded-xl text-center font-bold">
            電話する
          </a>
          <a href={LINE_URL} className="border border-white py-3 rounded-xl text-center font-bold">
            LINE相談
          </a>
        </div>
      </div>

    </main>
  );
}
