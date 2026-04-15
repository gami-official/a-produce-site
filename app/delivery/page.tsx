export const metadata = {
  title: "福岡の軽運送ならA-PRODUCE株式会社 | スポット便・定期便対応",
  description:
    "福岡で軽運送のご相談ならA-PRODUCE株式会社。スポット配送・定期便・企業配送に対応。個人・法人問わず、お気軽にご相談ください。",
};

export default function DeliveryPage() {
  const PHONE_LINK = "tel:092-292-5881";
  const LINE_URL = "https://line.me/R/ti/p/@394fvejx";

  return (
    <main className="bg-black text-white min-h-screen">
      {/* ヒーロー */}
      <section className="relative py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-400">福岡で軽運送をお探しの方へ</p>

          <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
            福岡の軽運送なら
            <br />
            A-PRODUCE株式会社
          </h1>

          <p className="mt-6 text-gray-300 leading-relaxed">
            スポット便・定期便・企業配送まで対応。
            <br />
            福岡で軽運送のご相談はお気軽にお問い合わせください。
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href={PHONE_LINK}
              className="bg-white text-black px-6 py-3 rounded-xl font-bold"
            >
              今すぐ電話する
            </a>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 rounded-xl font-bold"
            >
              LINEで相談する
            </a>
          </div>
        </div>
      </section>

      {/* 強み */}
      <section className="py-20 px-6 bg-white text-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            A-PRODUCE株式会社の軽運送サービス
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="border border-black/10 rounded-2xl p-6 text-center">
              <h3 className="font-bold text-lg">スポット便対応</h3>
              <p className="mt-3 text-sm leading-relaxed">
                急ぎの配送や単発案件にも対応。
                必要な時に必要な分だけご相談いただけます。
              </p>
            </div>

            <div className="border border-black/10 rounded-2xl p-6 text-center">
              <h3 className="font-bold text-lg">定期便対応</h3>
              <p className="mt-3 text-sm leading-relaxed">
                毎日・毎週など継続案件にも対応。
                安定した配送体制をご提案します。
              </p>
            </div>

            <div className="border border-black/10 rounded-2xl p-6 text-center">
              <h3 className="font-bold text-lg">個人・法人どちらもOK</h3>
              <p className="mt-3 text-sm leading-relaxed">
                個人のお荷物から法人配送まで対応。
                状況に応じて柔軟にご相談いただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* こんなご相談に対応 */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            こんなご相談に対応しています
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="border border-white/10 rounded-2xl p-6">
              <p>・急ぎのスポット配送を依頼したい</p>
              <p className="mt-2">・定期ルート配送を任せたい</p>
              <p className="mt-2">・企業配送の相談をしたい</p>
              <p className="mt-2">・福岡市内で軽運送業者を探している</p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6">
              <p>・法人の配送体制を見直したい</p>
              <p className="mt-2">・配送コストや流れを相談したい</p>
              <p className="mt-2">・単発でも対応できる業者を探している</p>
              <p className="mt-2">・まずは電話やLINEで確認したい</p>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section className="py-20 px-6 bg-white text-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            柔軟な配送体制で対応
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-black/10 p-6">
              <h3 className="font-bold text-lg">福岡エリア中心に対応</h3>
              <p className="mt-3 text-sm leading-relaxed">
                福岡市を中心に、周辺エリアの配送にも対応。
                お荷物の内容や頻度に応じてご案内します。
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 p-6">
              <h3 className="font-bold text-lg">物流案件との連携も可能</h3>
              <p className="mt-3 text-sm leading-relaxed">
                大規模案件や継続案件は、関連事業との連携も含めて
                最適な体制をご提案します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ご相談の流れ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center">ご相談の流れ</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <p className="text-sm text-gray-400">STEP 1</p>
              <h3 className="mt-2 font-bold">電話・LINEで相談</h3>
              <p className="mt-3 text-sm">
                配送内容やご希望の日時をお伝えください。
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <p className="text-sm text-gray-400">STEP 2</p>
              <h3 className="mt-2 font-bold">内容確認・ご案内</h3>
              <p className="mt-3 text-sm">
                対応内容や流れを分かりやすくご案内します。
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <p className="text-sm text-gray-400">STEP 3</p>
              <h3 className="mt-2 font-bold">配送対応</h3>
              <p className="mt-3 text-sm">
                ご依頼内容に応じて、柔軟に配送対応を行います。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">
            福岡で軽運送のご相談は
            <br />
            A-PRODUCE株式会社へ
          </h2>

          <p className="mt-4 text-gray-600">
            スポット便・定期便・企業配送までお気軽にご相談ください
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href={PHONE_LINK}
              className="bg-black text-white px-6 py-3 rounded-xl font-bold"
            >
              今すぐ電話する
            </a>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black px-6 py-3 rounded-xl font-bold"
            >
              LINEで相談する
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
