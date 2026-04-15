export const metadata = {
  title: "福岡の輸入車・中古車販売ならA-PRODUCE株式会社 | Styling★Garage",
  description:
    "福岡で輸入車・アメ車・中古車販売のご相談ならA-PRODUCE株式会社 Styling★Garage。厳選車両の販売からカスタム・整備・アフターサポートまで対応しています。",
};

export default function CarPage() {
  const PHONE_LINK = "tel:092-292-5881";
  const LINE_URL = "https://line.me/R/ti/p/@394fvejx";
  const CARSENSOR_URL =
    "https://www.carsensor.net/shop/fukuoka/315192001/stocklist/";

  return (
    <main className="bg-black text-white min-h-screen">
      {/* ヒーロー */}
      <section className="relative py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-400">福岡で輸入車・中古車をお探しの方へ</p>

          <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
            福岡の輸入車・中古車販売なら
            <br />
            Styling★Garage
          </h1>

          <p className="mt-3 text-gray-400">A-PRODUCE株式会社 車事業</p>

          <p className="mt-6 text-gray-300 leading-relaxed">
            アメ車・輸入車を中心に、厳選した中古車をご案内。
            <br />
            販売だけでなく、カスタム・整備・アフターサポートまで対応します。
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href={CARSENSOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-xl font-bold"
            >
              在庫を見る（カーセンサー）
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
            Styling★Garageの中古車販売
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="border border-black/10 rounded-2xl p-6 text-center">
              <h3 className="font-bold text-lg">アメ車・輸入車に強い</h3>
              <p className="mt-3 text-sm leading-relaxed">
                アメ車・輸入車を中心に、車両の魅力や状態を見極めながら
                ご案内しています。
              </p>
            </div>

            <div className="border border-black/10 rounded-2xl p-6 text-center">
              <h3 className="font-bold text-lg">厳選車両をご提案</h3>
              <p className="mt-3 text-sm leading-relaxed">
                在庫車はもちろん、ご希望条件に合わせた車両探しのご相談にも
                対応しています。
              </p>
            </div>

            <div className="border border-black/10 rounded-2xl p-6 text-center">
              <h3 className="font-bold text-lg">購入後までサポート</h3>
              <p className="mt-3 text-sm leading-relaxed">
                カスタム・整備・車検・修理など、
                納車後のご相談まで一貫して対応します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* こんな方へ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            こんな方におすすめです
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="border border-white/10 rounded-2xl p-6">
              <p>・福岡で輸入車を探している</p>
              <p className="mt-2">・アメ車を相談できるお店を探している</p>
              <p className="mt-2">・中古車選びで失敗したくない</p>
              <p className="mt-2">・車両状態を相談しながら決めたい</p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6">
              <p>・カーセンサー掲載車両が気になっている</p>
              <p className="mt-2">・カスタムや整備もまとめて相談したい</p>
              <p className="mt-2">・購入後のサポートも重視したい</p>
              <p className="mt-2">・まずはLINEで気軽に聞いてみたい</p>
            </div>
          </div>
        </div>
      </section>

      {/* サポート内容 */}
      <section className="py-20 px-6 bg-white text-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            販売だけで終わらないサポート体制
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-black/10 p-6">
              <h3 className="font-bold text-lg">車両販売・ご提案</h3>
              <p className="mt-3 text-sm leading-relaxed">
                在庫車両のご案内だけでなく、
                条件に合わせたご相談にも柔軟に対応します。
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 p-6">
              <h3 className="font-bold text-lg">カスタム・整備・車検</h3>
              <p className="mt-3 text-sm leading-relaxed">
                購入後のカスタム、点検、整備、車検、修理まで
                継続してご相談いただけます。
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
              <h3 className="mt-2 font-bold">在庫確認・ご相談</h3>
              <p className="mt-3 text-sm">
                カーセンサー掲載車両やご希望条件をお知らせください。
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <p className="text-sm text-gray-400">STEP 2</p>
              <h3 className="mt-2 font-bold">車両のご案内</h3>
              <p className="mt-3 text-sm">
                状態や内容を確認しながら、分かりやすくご案内します。
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <p className="text-sm text-gray-400">STEP 3</p>
              <h3 className="mt-2 font-bold">購入後もサポート</h3>
              <p className="mt-3 text-sm">
                納車後のカスタムや整備のご相談まで対応します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">
            福岡で輸入車・中古車をお探しなら
            <br />
            Styling★Garageへご相談ください
          </h2>

          <p className="mt-4 text-gray-600">
            気になる在庫車両があれば、「カーセンサーを見た」とLINEで送るとスムーズです
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href={CARSENSOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-xl font-bold"
            >
              在庫を見る
            </a>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black px-6 py-3 rounded-xl font-bold"
            >
              LINEで相談する
            </a>

            <a
              href={PHONE_LINK}
              className="border border-black px-6 py-3 rounded-xl font-bold"
            >
              電話で相談する
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
