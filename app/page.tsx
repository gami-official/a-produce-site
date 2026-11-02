
import Link from "next/link";

const EMAIL = "k_fuchigami@gamigami.email";
const LINE = "https://line.me/R/ti/p/@394fvejx";
const GARAGE = "https://styling-garage.jp/";
const GAMI = "https://www.gamigami.net/";

const services = [
  {
    number: "01",
    english: "AUTOMOTIVE",
    title: "自動車事業",
    subtitle: "中古車販売・買取・オークション代行",
    description:
      "国産車・輸入車・アメ車から軽自動車・商用車まで。購入、売却、注文販売、整備など車のあらゆるご相談に対応します。",
    image: "/car1.jpg",
    href: GARAGE,
    action: "Styling★Garageで車を相談",
    external: true,
  },
  {
    number: "02",
    english: "TRANSPORT",
    title: "運送事業",
    subtitle: "軽貨物・一般貨物・企業配送",
    description:
      "軽バンによる配送から、車格を問わない運送のご相談まで。スポット便・定期便・チャーター便など、用途に合わせて対応を検討します。",
    image: "/kei1.jpg",
    href: "/delivery",
    action: "運送サービスを見る",
    external: false,
  },
  {
    number: "03",
    english: "LOGISTICS",
    title: "物流事業",
    subtitle: "倉庫保管・梱包・発送代行",
    description:
      "商品の入庫・保管・ピッキング・梱包・出荷まで。物流業務は専門パートナーの株式会社GAMIと連携し、小ロットから継続案件まで幅広いご相談に対応します。",
    image: "/logistics.jpg",
    href: GAMI,
    action: "物流・発送代行はGAMIへ相談",
    external: true,
  },
  {
    number: "04",
    english: "INSPECTION & ASSEMBLY",
    title: "内職・検品事業",
    subtitle: "検品・仕分け・セット組み・封入",
    description:
      "商品の目視検品、数量確認、仕分け、ラベル貼り、セット組み、封入・梱包など。専門パートナーの株式会社GAMIと連携し、作業から発送までまとめてご相談いただけます。",
    image: "/logistics.jpg",
    href: GAMI,
    action: "検品・セット組みはGAMIへ相談",
    external: true,
  },
];

const faqs = [
  {
    q: "軽貨物以外の車両でも運送を相談できますか？",
    a: "はい。軽貨物を中心に、2t・4t・大型車両など車格を問わずご相談を受け付けています。案件内容を確認し、対応方法をご案内します。",
  },
  {
    q: "単発の配送でも依頼できますか？",
    a: "スポット配送や緊急の配送案件もご相談ください。集荷先・配送先・荷物の内容・希望日時をお知らせいただくとスムーズです。",
  },
  {
    q: "検品や内職だけでも依頼できますか？",
    a: "はい。検品・仕分け・セット組み・封入など、個別の作業についてもご相談いただけます。専門パートナーの株式会社GAMIが、数量や納期に応じて対応をご案内します。",
  },
  {
    q: "倉庫保管や発送代行はどこに相談すればよいですか？",
    a: "倉庫保管・在庫管理・ピッキング・梱包・発送代行などの物流業務は、専門パートナーの株式会社GAMIへお問い合わせください。小ロットから継続的な物流業務までご相談いただけます。",
  },
  {
    q: "中古車の購入や買取はどこに相談すればよいですか？",
    a: "A-produce株式会社が運営する自動車専門ブランド、Styling★Garageへお問い合わせください。国産車・輸入車・軽自動車・商用車まで幅広くご相談いただけます。",
  },
];

function MailButton({
  subject,
  children,
  className = "",
}: {
  subject: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={`mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`}
      className={`ap-btn ap-btn-gold ${className}`}
    >
      {children}
    </a>
  );
}

function GamiButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={GAMI}
      target="_blank"
      rel="noopener noreferrer"
      className={`ap-btn ap-btn-gold ${className}`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "A-produce株式会社",
    url: "https://www.a-produce.net/",
    email: EMAIL,
    telephone: "+81-92-292-5881",
    description:
      "自動車販売・買取、軽貨物・一般貨物運送、物流・倉庫、内職・検品などを展開する企業。",
    subOrganization: {
      "@type": "Organization",
      name: "Styling★Garage",
      url: GARAGE,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "福岡本店",
        telephone: "+81-92-292-5881",
      },
      {
        "@type": "ContactPoint",
        contactType: "大阪営業所",
        telephone: "+81-6-6115-9935",
      },
    ],
  };

  return (
    <main className="ap-site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
        }}
      />

      <header className="ap-header">
        <div className="ap-header-inner">
          <Link href="/" className="ap-brand">
            <span>A-PRODUCE</span>
            <small>自動車・運送・物流・作業代行</small>
          </Link>

          <nav className="ap-nav" aria-label="メインメニュー">
            <a href="#services">事業案内</a>
            <Link href="/delivery">運送</Link>
            <Link href="/logistics">物流</Link>
            <Link href="/wrecker">レッカー</Link>
            <Link href="/company">会社概要</Link>
          </nav>

          <a href="#contact" className="ap-header-contact">
            無料見積・お問い合わせ
          </a>
        </div>
      </header>

      <section className="ap-hero">
        <div className="ap-hero-overlay" />
        <div className="ap-container ap-hero-content">
          <p className="ap-eyebrow">
            A-PRODUCE CORPORATION
          </p>
          <h1>
            クルマから、
            <br />
            運送・物流・作業代行まで。
          </h1>
          <p className="ap-hero-lead">
            自動車販売・買取をはじめ、
            <br />
            軽貨物・一般貨物運送、倉庫・発送代行、
            <br />
            内職・検品まで。
            <br />
            <strong>企業と暮らしの「困った」に応える。</strong>
          </p>

          <div className="ap-hero-actions">
            <a href="#services" className="ap-btn ap-btn-gold">
              事業内容を見る
            </a>
            <a href="#contact" className="ap-btn ap-btn-outline">
              無料で相談・見積依頼
            </a>
          </div>

          <div className="ap-hero-labels">
            <span>自動車</span>
            <span>運送</span>
            <span>物流</span>
            <span>内職・検品</span>
          </div>
        </div>
      </section>

      <section className="ap-intro">
        <div className="ap-container">
          <p className="ap-eyebrow">OUR BUSINESS</p>
          <h2>
            幅広いニーズに、
            <br />
            専門サービスで対応。
          </h2>
          <p>
            A-produce株式会社は、自動車事業をはじめ、
            運送・物流・作業代行を展開しています。
            物流分野では専門パートナーとも連携し、
            個人のお客様から法人のお客様まで、
            幅広いご相談に対応しています。
          </p>
        </div>
      </section>

      <section className="ap-services ap-container" id="services">
        <div className="ap-section-heading">
          <p className="ap-eyebrow">OUR SERVICES</p>
          <h2>4つの事業領域</h2>
          <p>
            車のことも、配送のことも、物流のことも。
            それぞれの専門サービスをご案内します。
          </p>
        </div>

        <div className="ap-service-grid">
          {services.map((service) => (
            <article className="ap-service-card" key={service.number}>
              <div className="ap-service-image">
                <img
                  src={service.image}
                  alt={`${service.title}のイメージ`}
                  loading="lazy"
                />
                <span>{service.number}</span>
              </div>
              <div className="ap-service-body">
                <p className="ap-card-english">{service.english}</p>
                <h3>{service.title}</h3>
                <h4>{service.subtitle}</h4>
                <p>{service.description}</p>

                <a
                  href={service.href}
                  target={service.external ? "_blank" : undefined}
                  rel={service.external ? "noopener noreferrer" : undefined}
                  className="ap-card-link"
                >
                  {service.action} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ap-car-feature">
        <div className="ap-container ap-feature-grid">
          <div className="ap-feature-photo">
            <img
              src="/car2.jpg"
              alt="Styling★Garageの自動車事業イメージ"
              loading="lazy"
            />
          </div>
          <div className="ap-feature-content">
            <p className="ap-eyebrow">AUTOMOTIVE DIVISION</p>
            <h2>
              クルマのことは、
              <br />
              Styling★Garageへ。
            </h2>
            <p>
              Styling★Garageは、A-produce株式会社が運営する
              自動車事業の専門ブランドです。
            </p>
            <p>
              中古車販売・買取・注文販売・オークション代行から、
              整備・車検・コーティングまで幅広くご相談いただけます。
            </p>
            <div className="ap-feature-actions">
              <a
                href={GARAGE}
                target="_blank"
                rel="noopener noreferrer"
                className="ap-btn ap-btn-gold"
              >
                Styling★Garage公式サイト
              </a>
              <a
                href="https://www.carsensor.net/shop/fukuoka/315192001/stocklist/"
                target="_blank"
                rel="noopener noreferrer"
                className="ap-btn ap-btn-outline"
              >
                カーセンサー掲載車両
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="ap-container ap-details">
        <div className="ap-section-heading">
          <p className="ap-eyebrow">BUSINESS SOLUTIONS</p>
          <h2>法人のお客様へ</h2>
          <p>
            配送業務や物流作業の外注先をお探しの企業様へ。
            それぞれの専門窓口をご案内します。
          </p>
        </div>

        <div className="ap-detail-grid">
          <article>
            <span>TRANSPORT</span>
            <h3>運送・配送のご相談</h3>
            <ul>
              <li>軽貨物・軽運送</li>
              <li>スポット便・チャーター便</li>
              <li>定期配送・企業間配送</li>
              <li>2t・4t・大型車両の運送相談</li>
              <li>配送業務の外部委託</li>
            </ul>
            <MailButton subject="【A-produce】運送・配送の見積相談">
              運送の見積を依頼する →
            </MailButton>
          </article>

          <article>
            <span>LOGISTICS</span>
            <h3>倉庫・発送代行のご相談</h3>
            <ul>
              <li>商品の入庫・倉庫保管</li>
              <li>ピッキング・仕分け</li>
              <li>梱包・発送代行</li>
              <li>在庫管理・出荷業務</li>
              <li>継続的な物流業務の委託</li>
            </ul>
            <p>
              物流業務は専門パートナーの株式会社GAMIへ。
              保管から発送まで一括してご相談いただけます。
            </p>
            <GamiButton>
              GAMIへ物流の見積を相談する →
            </GamiButton>
          </article>

          <article>
            <span>INSPECTION</span>
            <h3>内職・検品のご相談</h3>
            <ul>
              <li>商品検品・数量確認</li>
              <li>仕分け・袋詰め</li>
              <li>セット組み・封入作業</li>
              <li>シール・ラベル貼り</li>
              <li>大量作業・継続作業の相談</li>
            </ul>
            <p>
              検品・セット組み・流通加工などの作業も、
              株式会社GAMIへご相談いただけます。
            </p>
            <GamiButton>
              GAMIへ作業代行を相談する →
            </GamiButton>
          </article>
        </div>
      </section>

      <section className="ap-wrecker">
        <div className="ap-container ap-wrecker-inner">
          <div>
            <p className="ap-eyebrow">ROADSIDE ASSISTANCE</p>
            <h2>レッカー・車両トラブル</h2>
            <p>
              事故・故障・車両搬送など、レッカーに関する
              ご相談も受け付けています。
              対応エリア・時間・費用は状況により異なります。
            </p>
            <Link href="/wrecker" className="ap-btn ap-btn-gold">
              レッカーサービスの詳細 →
            </Link>
          </div>
          <img
            src="/tow.jpg"
            alt="レッカーサービスの車両"
            loading="lazy"
          />
        </div>
      </section>

      <section className="ap-container ap-faq">
        <div className="ap-section-heading">
          <p className="ap-eyebrow">FAQ</p>
          <h2>よくあるご質問</h2>
        </div>
        {faqs.map((faq) => (
          <details key={faq.q}>
            <summary>{faq.q}</summary>
            <p>{faq.a}</p>
          </details>
        ))}
        <div className="ap-feature-actions">
          <GamiButton>
            物流・検品・発送代行はGAMIへ →
          </GamiButton>
        </div>
      </section>

      <section className="ap-contact" id="contact">
        <div className="ap-container ap-contact-inner">
          <p className="ap-eyebrow">CONTACT US</p>
          <h2>
            お仕事のご相談・お見積もりは
            <br />
            お気軽に。
          </h2>
          <p>
            自動車・運送・レッカーに関するご相談は
            A-PRODUCEへお問い合わせください。
            倉庫保管・物流・発送代行・内職・検品については、
            専門パートナーの株式会社GAMIをご案内しています。
          </p>

          <div className="ap-contact-actions">
            <MailButton subject="【A-produce】お問い合わせ・見積依頼">
              A-PRODUCEへ無料見積を依頼
            </MailButton>
            <a href="tel:0922925881" className="ap-btn ap-btn-outline">
              福岡本店に電話
            </a>
            <GamiButton>
              物流・発送代行はGAMIへ →
            </GamiButton>
          </div>

          <div className="ap-office-grid">
            <div>
              <small>FUKUOKA HEAD OFFICE</small>
              <h3>福岡本店</h3>
              <a href="tel:0922925881">092-292-5881</a>
              <p>FAX：092-292-5883</p>
            </div>
            <div>
              <small>OSAKA OFFICE</small>
              <h3>大阪営業所</h3>
              <a href="tel:0661159935">06-6115-9935</a>
              <p>FAX：06-6115-9936</p>
            </div>
          </div>
          <p className="ap-email">
            E-mail：
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </div>
      </section>

      <footer className="ap-footer">
        <div className="ap-container">
          <strong>A-PRODUCE株式会社</strong>
          <p>
            自動車販売・買取 / 軽貨物・一般貨物運送 /
            物流・倉庫 / 内職・検品 / レッカー
          </p>
          <nav>
            <Link href="/company">会社概要</Link>
            <Link href="/delivery">運送事業</Link>
            <Link href="/logistics">物流事業</Link>
            <Link href="/wrecker">レッカー</Link>
            <a
              href={GARAGE}
              target="_blank"
              rel="noopener noreferrer"
            >
              Styling★Garage
            </a>
            <a
              href={GAMI}
              target="_blank"
              rel="noopener noreferrer"
            >
              物流・発送代行｜株式会社GAMI
            </a>
          </nav>
          <p className="ap-copyright">
            © {new Date().getFullYear()} A-produce株式会社
          </p>
        </div>
      </footer>

      <div className="ap-fixed-contact">
        <a href="tel:0922925881" className="ap-fixed-phone">
          <span>電話</span>
        </a>
        <a
          href={`mailto:${EMAIL}?subject=${encodeURIComponent(
            "【A-produce】無料見積相談"
          )}`}
          className="ap-fixed-mail"
        >
          <span>無料見積</span>
        </a>
        <a
          href={GARAGE}
          target="_blank"
          rel="noopener noreferrer"
          className="ap-fixed-car"
        >
          <span>車の相談</span>
        </a>
      </div>
    </main>
  );
}
