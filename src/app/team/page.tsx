import React from "react";
import "./team.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CheckIcon = () => (
  <svg
    width="25"
    height="22"
    viewBox="0 0 25 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.41115 21.9923C7.90066 21.9741 7.56034 21.725 7.28079 21.3483C6.01674 19.6229 4.74053 17.9097 3.4704 16.1843C2.41905 14.7627 1.3677 13.3471 0.316343 11.9255C0.109719 11.646 -0.066519 11.3666 0.0246387 10.996C0.182645 10.3884 0.79644 10.109 1.36162 10.4188C2.49197 11.0324 3.61625 11.6582 4.74053 12.2839C5.63388 12.776 6.52722 13.2681 7.41449 13.7724C7.56642 13.8574 7.65758 13.8453 7.77304 13.7177C10.1249 11.1904 12.4829 8.66303 14.8408 6.14176C16.0259 4.87202 17.217 3.5962 18.4081 2.33253C18.7667 1.94978 19.2407 1.89511 19.6235 2.18065C20.0186 2.47226 20.1097 2.95829 19.8484 3.41394C18.7059 5.3945 17.5573 7.37506 16.4148 9.36169C14.1176 13.335 11.8265 17.3022 9.53543 21.2754C9.28018 21.7189 8.91555 21.9741 8.41115 21.9923Z"
      fill="#4D5C4D"
    />
  </svg>
);

const ServicesList = ({ services }: { services: string[] }) => (
  <div className="services-grid">
    {services.map((service, index) => (
      <div key={index} className="service-item">
        <div className="service-check">
          <CheckIcon />
        </div>
        <span className="service-text">{service}</span>
      </div>
    ))}
  </div>
);

const TeamMember = ({
  name,
  title,
  description,
  services,
  imageSrc,
  imageAlt,
  isReversed = false,
  showButton = false,
  backgroundClass = "bg-lightgray",
}: {
  name: string;
  title: string;
  description: string;
  services: string[];
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
  showButton?: boolean;
  backgroundClass?: string;
}) => (
  <section className={`team-section ${backgroundClass}`}>
    <div className="container">
      <div
        className={`team-content ${isReversed ? "team-content--reversed" : ""}`}
      >
        {/* Image */}
        <div className="team-image">
          <img src={imageSrc} alt={imageAlt} className="team-photo" />
        </div>

        {/* Content */}
        <div className="team-info">
          <h2 className="team-name">{name}</h2>

          <p className="team-title">{title}</p>

          <div className="team-services">
            <ServicesList services={services} />
          </div>

          <p className="team-description">{description}</p>

          {showButton && <button className="btn">Подробнее</button>}
        </div>
      </div>
    </div>
  </section>
);

export default function TeamPage() {
  const nataliaServices = [
    "Послеоперационное лечение и контроль",
    "Лечение вросшего ногтя",
    "Применение ногтевых пластин",
    "Ногтевая протетика (метод Arkady)",
    "Подологическая консультация и лечение",
  ];

  const dianaServices = [
    "Лечение вросшего ногтя",
    "Применение ногтевых пластин",
    "Ногтевая протетика",
    "Лечение трещин, моз��лей и куриных глаз",
    "Подологическая консультация и лечение",
  ];

  const elenaServices = [
    "Аппаратный педикюр и маникюр",
    "SPA педикюр и маникюр с массажем",
    "Лечение трещин, мозолей и куриных глаз",
    "Лечение грибковых инфекций ногтей (онихомикоз)",
    "Применение ногтевых пластин (Титановая нить)",
  ];

  const kristinaServices = [
    "Аппаратный педикюр",
    "Лечение вросшего ногтя",
    "Лечение трещин, мозолей и куриных глаз",
    "Лечение грибковых инфекций ногтей (онихомикоз)",
    "Применение ногтевых пластин",
  ];

  const mariannaServices = [
    "Аппаратный педикюр",
    "Лечение трещин, мозолей и куриных глаз",
    "Лечение грибковых инфекций ногтей (онихомикоз)",
    "Применение ногтевых пластин",
    "Подологическое лечение",
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Natalia - Founder */}
        <TeamMember
          name="Наталия Ротарь"
          title="Основательница центра, подолог, инструктор и автор курсов"
          description="Эксперт с многолетней практикой, специализирующийся на сложных случаях вросших и деформированных ногтей, а также пост-хирургической реабилитацией ногтевого аппарата. Применяет все консервативные знания в области ортониксии. Сотрудничает с врачам узкой специализации для достижения эффективного результата лечения. В профессии с 2007 года."
          services={nataliaServices}
          imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/b8f2facd3cc9db08b050911179ac0f94bf3b1196?width=838"
          imageAlt="Наталия Ротарь"
          showButton={true}
          backgroundClass="bg-gradient"
          isReversed={true}
        />

        {/* Diana - Podologist */}
        <TeamMember
          name="Диана Степичева"
          title="Подолог"
          description="Отличается профессионлизмом в работе со случаями вросших и деформированных ногтей, используя консервативные методики ортониксии. Открыта к постоянному совершенствованию профессиональных навыков и расширению знаний в сфере подологии. В профессии с 2017 года."
          services={dianaServices}
          imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/34e569de84f0691dcb3c41f64282bcadfdaadfab?width=838"
          imageAlt="Диана Степичева"
          
          backgroundClass="bg-white"
        />

        {/* Elena - Pedicure and Manicure Specialist */}
        <TeamMember
          name="Елена Павлова"
          title="Специалист по педикюру и маникюру"
          description={`Профессионал с широким спектром навыков и опыта в обработке сложных случаев стоп и ногтей. Особые навыки проявляются в обработке гиперкератозов, трещин, мозолей и коррекции деформированных ногтей. Особые навыки проявляются в о��работке гиперкератозов, трещин, мозолей и коррекции деформированных ногтей.

Единственный специалист в нашем центре, который предоставляет услугу массажа стоп для восстановления легкости и улучшения общего самочувствия.
В профессии с 2016 года.`}
          services={elenaServices}
          imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/ca4f7eae59b616ad96e5d00ae7180bbb04753304?width=838"
          imageAlt="Елена Павлова"
          backgroundClass="bg-lightgray"
          isReversed={true}
        />

        {/* Kristina - Pedicure with Podology Basics */}
        <TeamMember
          name="Кристина Сидорчук"
          title="Специалист по педикюру с основами подологии"
          description="Ориентирована на работу со сложной стопой, коррекцией деформированных и врастающих ногтей, включая методы ортониксии. Углубляет свои знания и активно совершенствуется в подологическом направлении. В профессии с 2018 года."
          services={kristinaServices}
          imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/8bed7758a5f60f641d2334b4cb92bf3994881c20?width=836"
          imageAlt="Кристина Сидорчук"
          
          backgroundClass="bg-white"
        />

        {/* Marianna - Pedicure with Podology Basics */}
        <TeamMember
          name="Марианна Шпайло"
          title="Специалист по педикюру с основами подологии"
          description="Специалист с глубокими знаниями и отточенными навыками в области фундаментальной обработки стоп и ногтей, который в настоящее время повышает квалификацию по узконаправленным темам подологии, внедряя полученные знания и навыки в практику. В профессии с 2017 года."
          services={mariannaServices}
          imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/425827757dcb741c69d7633d451a2dea7ee50b89?width=838"
          imageAlt="Марианна Шпайло"
          backgroundClass="bg-lightgray"
          isReversed={true}
        />
      </main>
      <Footer />
    </>
  );
}
