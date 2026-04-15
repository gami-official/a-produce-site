export default function Home() {
  const PHONE_NUMBER = "092-292-5881";
  const PHONE_LINK = "tel:092-292-5881";
  const LINE_URL = "https://line.me/R/ti/p/@394fvejx";
  const GAMI_URL = "https://www.gamigami.net/";
  const HEADSPA_URL = "https://www.yuheadspa.net/";

  return (
    <main className="bg-black text-white min-h-screen">

      {/* ファーストビュー */}
      <section className="relative text-center py-28 px-4">
        <img src="/hero.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-gray-400">A-PRODUCE株式会社</p>

          <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
            アメ車・輸入車に強い中古車販売<br />
            レッカー・軽運送・物流まで対応
          </h1>

          <p className="mt-6 text-gray-300">
            車・緊急対応・配送・法人物流まで一括対応可能
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a href={PHONE_LINK} className="bg-white text-black px-6 py-3 rounded-xl font-bold">
              今すぐ電話
            </a>

            <a href={LINE_URL} target="_blank" className="border border-white px-6 py-3 rounded-xl">
              LINE相談
            </a>
          </div>
        </div>
      </section>

      {/* 車事業 */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">
          Styling★Garage（車事業）
        </h2>
        <div className="mt-6 text-center">
  <a
    href="https://www.carsensor.net/shop/fukuoka/315192001/stocklist/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-white text-black px-6 py-3 rounded-xl font-bold hover:opacity-90 transition"
  >
    在庫車両はこちら（カーセンサー）
  </a>
</div>
        <p className="text-gray-400 mt-2">A-PRODUCE株式会社</p>

        <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-6xl mx-auto">
          <img src="/car1.jpg" className="rounded-xl" />
          <img src="/car2.jpg" className="rounded-xl" />
        </div>

        <p className="mt-6 text-gray-300">
          輸入車・アメ車を中心に販売・カスタム・整備まで対応
        </p>
      </section>

      {/* レッカー */}
      <section className="bg-white text-black py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">レッカー対応</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-6xl mx-auto">
          <img src="/tow.jpg" className="rounded-xl" />
          <img src="/garage.jpg" className="rounded-xl" />
        </div>

        <p className="mt-6">
          事故・故障・緊急対応OK｜24時間対応
        </p>
      </section>

      {/* 軽運送（強化） */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">軽運送サービス</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-6xl mx-auto">
          <img src="/kei1.jpg" className="rounded-xl" />
          <img src="/kei2.jpg" className="rounded-xl" />
        </div>

        <p className="mt-6 text-gray-300">
          スポット・定期配送どちらも対応可能。<br />
          個人・法人問わずご相談ください。
        </p>
      </section>

      {/* 物流（GAMI連携） */}
      <section className="bg-white text-black py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">法人向け物流サービス</h2>

        <img src="/logistics.jpg" className="rounded-xl w-full max-w-6xl mx-auto mt-10" />

        <p className="mt-6">
          倉庫保管・仕分け・出荷・配送まで一括対応。<br />
          大規模案件は株式会社GAMIと連携し対応します。
        </p>

        <a href={GAMI_URL} target="_blank" className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-xl font-bold">
          物流の詳細を見る
        </a>
      </section>

      {/* 関連事業 */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">関連事業</h2>

        <div className="mt-10 space-y-4">
          <a href={GAMI_URL} target="_blank" className="block underline">
            株式会社GAMI（物流・軽貨物・法人対応）
          </a>

          <a href={HEADSPA_URL} target="_blank" className="block underline">
            ヘッドスパ専門店ゆう（美容事業）
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-2xl font-bold">
          お問い合わせ・ご相談はこちら
        </h2>

        <div className="mt-6">
          <a href={PHONE_LINK} className="bg-white text-black px-6 py-3 rounded-xl font-bold">
            今すぐ電話する
          </a>
        </div>
      </section>

      {/* フッター */}
      <footer className="text-center py-10 text-gray-400 border-t border-white/10">
        <p>A-PRODUCE株式会社</p>
        <p className="mt-2">Styling★Garage</p>
      </footer>

      {/* スマホ固定CTA */}
      <div className="fixed bottom-0 inset-x-0 bg-black p-3 md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a href={PHONE_LINK} className="bg-white text-black py-3 rounded-xl text-center font-bold">
            電話
          </a>
          <a href={LINE_URL} className="border border-white py-3 rounded-xl text-center font-bold">
            LINE
          </a>
        </div>
      </div>
<a href="/company" className="underline">
  会社概要はこちら
</a>
    </main>
  );
}
