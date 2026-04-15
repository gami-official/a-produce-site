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
            FUKUOKA AUTO / TOWING / DELIVERY / LOGISTICS
          </p>

          <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            福岡｜アメ車・輸入車に強い中古車販売
            <br />
            レッカー・軽運送・物流まで対応
          </h1>

          <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
            中古車販売・緊急レッカー・配送・法人物流まで
            <br />
            ご相談内容に合わせて最適な体制をご案内します
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
            ご希望の条件に合わせた車両探しから納車後のご相談まで対応します。
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
            急なトラブルや故障時もまずはご相談ください。
            <br />
            夜間・緊急時のご相談にも対応します。
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
            スポット便・定期便・事業相談まで対応。
            <br />
            状況に応じて最適な配送体制をご提案します。
          </p>
        </div>
      </section>

      {/* 物流 */}
      <section className="bg-white text-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            法人向け物流サービス
          </h2>

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
            <p>物流案件は関連事業サイトからも詳しくご案内しています</p>
          </div>

          <div className="mt-8 text-center">
            <a
              href={GAMI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition"
            >
              物流の詳細を見る
            </a>
          </div>
        </div>
      </section>

      {/* 関連事業 */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">関連事業のご案内</h2>
          <p className="text-center mt-4 text-gray-300 leading-relaxed">
            ご相談内容に応じて、関連サイトへスムーズにご案内しています。
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="border border-white/15 rounded-2xl p-8 bg-white/5">
              <p className="text-sm tracking-[0.2em] text-gray-400">LOGISTICS / COMPANY</p>
              <h3 className="mt-3 text-2xl font-bold">株式会社GAMI</h3>
              <p className="mt-4 text-gray-300 leading-relaxed">
                物流・軽貨物・倉庫・車事業など、
                法人案件や事業連携のご相談はこちら。
              </p>
              <div className="mt-6">
                <a
                  href={GAMI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black px-6 py-3 rounded-xl font-bold hover:opacity-90 transition"
                >
                  GAMI公式サイトへ
                </a>
              </div>
            </div>

            <div className="border border-white/15 rounded-2xl p-8 bg-white/5">
              <p className="text-sm tracking-[0.2em] text-gray-400">HEAD SPA / BEAUTY</p>
              <h3 className="mt-3 text-2xl font-bold">ヘッドスパ専門店ゆう</h3>
              <p className="mt-4 text-gray-300 leading-relaxed">
                福岡市西区豊浜の完全個室・1日3名限定。
                ご予約や施術メニューの確認はこちら。
              </p>
              <div className="mt-6">
                <a
                  href={HEADSPA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition"
                >
                  ヘッドスパ専門店ゆうへ
                </a>
              </div>
            </div>
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

      {/* スマホ固定CTA */}
      <div className="fixed bottom-0 inset-x-0 z-50 bg-black/95 border-t border-white/10 p-3 md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={PHONE_LINK}
            className="text-center bg-white text-black py-3 rounded-xl font-bold"
          >
            電話する
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center border border-white py-3 rounded-xl font-bold"
          >
            LINE相談
          </a>
        </div>
      </div>
    </main>
  );
}
