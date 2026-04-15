export default function Company() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-5xl mx-auto">

        {/* タイトル */}
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          会社概要
        </h1>

        {/* 会社情報 */}
        <div className="mt-12 border border-white/10 rounded-2xl p-6 space-y-4">
          <p><strong>会社名：</strong>A-PRODUCE株式会社</p>
          <p><strong>所在地：</strong>福岡市博多区金の隈1-21-9</p>
          <p><strong>TEL：</strong>092-292-5881</p>
          <p><strong>FAX：</strong>092-292-5883</p>
          <p><strong>MAIL：</strong>aproduce.inc.1@gmail.com</p>
          <p><strong>WEB：</strong>https://www.a-produce.net/</p>
          <p><strong>設立：</strong>2015年11月（創業） / 2020年 法人設立</p>
          <p><strong>資本金：</strong>300万円</p>
          <p><strong>代表取締役：</strong>有隅 秀秋 / 淵上 和博</p>
          <p><strong>取締役：</strong>有隅 靖代</p>
        </div>

        {/* モットー */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center">
            3つのモットー
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
            <div className="border border-white/10 p-6 rounded-xl">
              顧客への信用
            </div>
            <div className="border border-white/10 p-6 rounded-xl">
              明るい職場
            </div>
            <div className="border border-white/10 p-6 rounded-xl">
              信頼を結ぶ
            </div>
          </div>

          <p className="text-center text-gray-400 mt-6">
            充実した職場環境を整え、より高品質なサービス提供を目指しています。
          </p>
        </div>

        {/* 事業内容 */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center">
            事業内容
          </h2>

          <ul className="mt-8 space-y-3 text-center text-gray-300">
            <li>物流業 / 倉庫業</li>
            <li>軽貨物自動車運送事業</li>
            <li>新車・中古車・輸入車販売（Styling★Garage）</li>
            <li>車検・整備・板金・修理・コーティング</li>
            <li>洗車事業</li>
            <li>ヘッドスパ事業</li>
          </ul>
        </div>

        {/* 沿革 */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center">
            沿革
          </h2>

          <ul className="mt-8 space-y-2 text-gray-300">
            <li>2015年11月 個人事業主として創業</li>
            <li>2016年 市場ルート配送開始</li>
            <li>2017年 食品・飲料配送開始</li>
            <li>2018年 商業便・宅配便配送開始</li>
            <li>2019年 医療・テレビ局・ホテル配送拡大</li>
            <li>2020年 法人設立</li>
            <li>2024年 スポーツジム・飲食配送拡大</li>
          </ul>
        </div>

      </div>

    </main>
  );
}
