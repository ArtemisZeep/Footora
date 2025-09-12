'use client';

import React, { useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/StaticPage.module.css';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';

const csText = `OBCHODNÍ PODMÍNKY - SLUŽBY
Vážení klienti,
vážíme si toho, že jste se rozhodli nás navštívit, připravili jsme pro Vás následující obchodní podmínky:

1.⁠ ⁠ÚVOD

1.1 Tyto obchodní podmínky (dále jen „OP") upravují vztahy mezi smluvními stranami smlouvy uzavřené prostřednictvím internetových stránek footura.cz.
1.2 S těmito obchodními podmínkami má zákazník možnost se seznámit před odesláním své objednávky a je na ně dostatečně předem upozorněn.
1.3 Zákazník podáním (zadáním) objednávky prostřednictvím internetových stránek footura.cz potvrzuje, že se seznámil s těmito OP, a že s nimi výslovně souhlasí, a to ve znění platném a účinném v momentě odeslání objednávky.
1.4 Prodávajícím a provozovatelem webových stránek footura.cz a také celého Centra jsou Nataliia Rotar se sídlem Praha - Pitkovice, Pýchavková - 282/7, PSČ 10400, ÍCO 06883869, email: info@footura.cz (společně dále je "Centrum")
1.5 Naše Centrum poskytuje podologické a pedikérské služby a prodej na základě platného živnostenského oprávnění a dokladů osvědčujících odbornou způsobilost k vykonávaným činnostem (dále jen „služby").
1.6 Zákazníkem se dle těchto obchodních podmínek rozumí fyzická osoba, která vytvořila rezervaci (objednávku; dále jen „objednávka") služeb na webových stránkách Centra footura.cz.
1.7 Termínem poskytnutí služby se rozumí den a čas, na který se zákazník objednal.
1.8 Objednáním služby (osobně, telefonicky, e-mailem, SMS) projevuje zákazník svůj souhlas s těmito obchodními podmínkami.
1.9 Nesouhlasí-li zákazník s obchodními podmínkami, má možnost služeb nevyužít.

2.⁠ ⁠OBJEDNÁVKA, UZAVŘENÍ A UKONČENÍ SMLOUVY

2.1 Rezervace služeb učiněná prostřednictvím online v rezervačním systemu internetového obchodu footura.cz (http://footura.cz/) nebo telefonicky je závazným návrhem zákazníka na uzavření smlouvy o poskytnutí služeb s Centrem.
2.2 Centrum potvrdí přijetí objednávky prostřednictvím emailu na emailovou adresu uvedenou zákazníkem v objednávce. Po zaslání potvrzení smlouva se považuje za uzavřenou.
2.3 Centrum si vyhrazuje právo ve výjimečných případech, zrušit nebo přesunout objednané poskytnutí služby na jiný termín. Například z důvodu nemoci, výpadku el. energie apod. Pokud by tato situace nastala Centrum bude zákazníka kontaktovat v nejbližším možném termínu o přesunutí termínu poskytnutí služby.
2.4 Centrum tímto vyrozumívá zákazníka o jeho právu dle § 1829 odst. 1 zákona č. 89/2012 Sb., občanského zákoníku (dále jen „o.z.) o možnosti odstoupit od smlouvy s Centrem ve lhůtě 14 dnů ode dne uzavření (tj. ode dne potvrzení rezervace). Formulář pro odstoupení je k dispozici zde. Vyplněný a podepsaný formulář je třeba zaslat Centru na email, uvedený v čl. 1.3. obchodních podmínek.
2.5 V případě zadání objednávky na den pracovního volna (svátek, víkend apod.), zákazník při vytvoření objednávky platí cenu služeb ve výši 100 %.
2.6 V případě zadání objednávky na pracovní den (pondělí-pátek, pokud není státní svátek), zákazník při vytvoření objednávky platí cenu služeb ve výši 50 %.
2.7 V případě zrušení objednávky, neboť pokud se zákazník k poskytnutí služby nedostaví v čase, který si vybral při zadání objednávky, Centrum je oprávněno si ponechat již zaplacenou část ceny služeb uvedené v předchozích odstavcích jako náhradu zmeškaného času (tj. již uhrazená část nebo celá cena v případě nevyužití služeb z důvodů výhradně na straně zákazníka, je nevratná).
2.8 Zákazník může nejpozději 3 dny přede dnem poskytnutí služby, který si vybral při zadání objednávky přenést termín poskytnutí služby na jiný. Centrum může v odůvodněných případech zákazníkovi přenesení termínu odmítnout. V takovém případě se použijí ustanovení čl. 2.7. obchodních podmínek.
2.9 Pokud se Zákazník opozdí o více o více 15 minut, má specialista právo odmítnout službu nebo zkrátit dobu poskytování služby, přičemž náklady na postup budou zachovány v plné výši.
3.0 Centrum dělá vše pro to, aby zajistili bezpečnost a zabezpečení věcí Zákazníku, nenese však za ně odpovědnost.
3.1 Centrum nenese odpovědnost za újmu na zdraví a nebo majetku způsobenou nezákonným jednáním třetích stran.
3.2 Zákazník se zavazuje informovat specialistu o jakémkoliv závažném zdravotním problému, protože některé zákroky se v tomto případě nedoporučují.
3.3 Konzumace jídla je zakázána v místech určených k poskytování služeb.
3.4 Do centra je zakázáno přinášet alkoholické nápoje, látky a léčivé přípravky, které jsou podle právních předpisů České republiky zakázány.
3.5 Specialista centra má právo odmítnout Klientovi, který je ve stavu intoxikace alkoholem nebo drogami, provedení služeb.
3.6 Vstup se zvířaty je zakázán.

3.⁠ ⁠OCHRANA OSOBNÍCH ÚDAJŮ

3.1 Ochrana osobních údajů zákazníka je poskytována zákonem č. 101/2000 Sb., o ochraně osobních údajů, ve znění pozdějších předpisů.
3.2 Zákazník souhlasí se zpracováním těchto svých osobních údajů: jméno a příjmení, adresa bydliště, příp. doručovací adresa, adresa elektronické pošty, telefonní číslo a dalších údajů, které uvedl v objednávce - např. v sekci poznámka, atp. (dále společně vše jen jako „osobní údaje").
3.3 Zákazník souhlasí se zpracováním osobních údajů Centrem, a to pro účely realizace práv a povinností ze smlouvy o poskytnutí služeb a pro účely vedení uživatelského účtu, je-li tento zřízen.
3.4 Zákazník potvrzuje, že poskytnuté osobní údaje jsou přesné a že byl poučen o tom, že se jedná o dobrovolné poskytnutí osobních údajů.
3.5 V případě, že by se Zákazník domníval, že Centrum provádí zpracování jeho osobních údajů, které je v rozporu s ochranou soukromého a osobního života Zákazníka nebo v rozporu se zákonem, zejména jsou-li osobní údaje nepřesné s ohledem na účel jejich zpracování, může:
a) požádat Centrum o vysvětlení,
b) požadovat, aby Centrum odstranilo takto vzniklý stav.
3.6 Požádá-li Zákazník o informaci o zpracování svých osobních údajů, je mu Centrum povinno tuto informaci předat. Centrum má právo za poskytnutí informace podle předchozí věty požadovat přiměřenou úhradu nepřevyšující náklady nezbytné na poskytnutí informace.
3.7 Zákazník má právo svůj souhlas se zpracováním osobních údajů odvolat, a to písemnou formou na adrese sídla Centra. Odvolání souhlasu je účinné okamžikem jeho doručení Centru. Zákazník má dále práva dle § 21 zákona č. 101/2000 Sb., tj. zejména právo přístupu k údajům, které se jej týkají, a právo je opravit, zablokovat nebo požadovat jejich likvidaci, jakož i právo na omluvu, peněžní zadostiučinění nebo peněžitou náhradu, bylo-li jednáním Centra porušeno právo subjektu údajů na lidskou důstojnost, osobní čest, dobrou pověst či právo na ochranu jména.

4.⁠ ⁠ZÁVĚREČNÁ USTANOVENÍ

4.1 Právní vztahy Centra se zákoníkem výslovně neupravené těmito obchodními podmínkami se řídí příslušnými ustanoveními zák. č. 89/2012 Sb., občanský zákoník, zákona č. 634/1992 Sb., o ochraně spotřebitele, jakož i předpisy souvisejícími, vše ve znění předpisů aktuálních ke dni zadání objednávky.
4.2 Obchodní podmínky se řídí právním řádem České republiky.

OBCHODNÍ PODMÍNKY - KURZY
Vážení klienti,
vážíme si toho, že jste se rozhodli zapojit se do naších kurzů. Připravili jsme pro Vás následující obchodní podmínky:

1.⁠ ⁠ÚVOD

1.1 Tyto obchodní podmínky (dále jen „OP") upravují vztahy mezi smluvními stranami smlouvy uzavřené prostřednictvím internetového obchodu footura.cz.
1.2 S těmito obchodními podmínkami má objednatel kurzu možnost se seznámit před odesláním své objednávky a je na ně dostatečně předem upozorněn.
1.3 Objednatel podáním objednávky potvrzuje, že se seznámil s těmito OP, a že s nimi výslovně souhlasí, a to ve znění platném a účinném v momentě odeslání objednávky.
1.4 Poskytovatelem kurzu a provozovatelem webových stránek footura.cz je Nataliia Rotar se sídlem Praha - Pitkovice, Pýchavková - 282/7, PSČ 10400, ÍCO 06883869, email: info@footura.cz, (dale jen "Poskutovatel")
1.5 Objednatelem se rozumí fyzická nebo právnická osoba, která se přihlásila na kurzy a zaplatila cenu kurzu prostřednictvím webových stránek footura.cz (dále jen „objednatel").
1.6 Poskytovatel se zavazuje, že pro objednatele ve stanoveném termínu provede kurzy (dále jen „kurzy").
1.7 Objednatel prohlašuje, že se účastní kurzů v rámci své podnikatelské činnosti, neboť kurzy jsou určeny pro zdokonalení profesní a podnikatelské činnosti. Toto prohlášení platí, i pokud objednatel nemá živnostenské nebo jiné obdobné oprávnění, neboť účastní se kurzu se záměrem provozování své podnikatelské činnosti. Pokud tomu tak není, je objednatel povinen tuto skutečnost oznámit Poskytovateli nejpozději před uhrazením ceny kurzu, aby Poskytovatel mohl zaslat poučení o spotřebitelských právech objednatele.
1.8 Objednávkou se dle těchto obchodních podmínek rozumí rezervace kurzu na webových stránkách Poskytovatele footura.cz (dále jen „objednávka").
1.9 Termínem kurzu se rozumí den a čas, na který se objednatel přihlásil na webových stránkách Poskytovatele footura.cz.
1.10 Úhradou ceny kurzu objednatel ještě jednou potvrzuje, že souhlasí s těmito obchodními podmínkami pro pořádání kurzů.
1.11 Objednáním služby (osobně, telefonicky, e-mailem, SMS) projevuje objednatel svůj souhlas s těmito obchodními podmínkami.
1.12 Nesouhlasí-li objednatel s obchodními podmínkami, má možnost služeb nevyužít.

OBJEDNÁVKA KURZŮ, UZAVŘENÍ A UKONČENÍ SMLOUVY

1.13 Objednávka objednatele učiněná prostřednictvím internetového obchodu footura.cz nebo prostřednictvím telefonu je závazným návrhem objednatele na uzavření smlouvy o účasti objednatele na kurzech Provozovatele ve vybraném objednatelem termínu.
1.14 Provozovatel potvrdí neprodleně přijetí objednávky prostřednictvím emailu na emailovou adresu uvedenou objednatelem v objednávce. Po zaslání potvrzení smlouva se považuje za uzavřenou.
1.15 Provozovatel si vyhrazuje právo ve výjimečných případech, zrušit nebo přesunout provedení kurzu ze stanoveného termínu na termín jiný. Například z důvodu nemoci, výpadku el. energie apod. Pokud by tato situace nastala Provozovatel bude objednatele kontaktovat v nejbližším možném termínu a sdělí náhradní termín kurzů.
1.16 Objednatel bere na vědomí, že v případě jeho neúčasti na kurzu v jim zvoleným v objednávce termínu, nemá nárok na vracení zaplacené ceny kurzů, a zejména, nikoliv však výlučně z důvodu potřeby uhradit Provozovateli náhradu zmeškaného času a škody včetně ušlého zisku.
1.17 Objednatel má právo zrušit objednávku nejpozději 7 dní před termínem jim vybraného termínu kurzu. V případě pozdějšího zrušení objednávky uhrazená kupní cena kurzů se nevrací a započítává se na storno poplatek, který v tomto případě činí 100 % ceny kurzu. Storno poplatek představuje paušální plnění včetně případné náhrady škody bez přímé souvislosti s jakoukoliv službou poskytovanou za protiplnění.
1.18 Objednatel je povinen v průběhu kurzu dbát na pokyny Poskytovatele.
1.19 Objednatel je povinen před zahájením kurzu informovat Poskytovatele o případných zdravotních omezeních (alergie apod.), kterými trpí a které je třeba zohlednit v průběhu kurzů.

REKLAMACE

1.20 V případě, že objednatel má dotazy nebo připomínky ke kurzů, je povinen o tomto informovat Poskytovatele písemně na emailu info@footura.cz a včas, „bez zbytečného odkladu" a vyžádat si případné vysvětlení, nebo nápravu. Na jakékoliv reklamace bez předchozího postupu a zejména až v době, blížící se ukončení kurzu nebude brán ze strany poskytovatele zřetel.
1.21 Důvodem reklamace nemohou být skutečnosti, které byly objednateli známy před vznikem smluvního vztahu, např. místo výuky, cena za výuku a podobně.
1.22 Důvodem pro reklamaci také není, pokud informace, přednesené Poskytovatelem na kurzů byli objednateli ještě před tím známy.

OCHRANA OSOBNÍCH ÚDAJŮ

1.23 Ochrana osobních údajů objednatele je poskytována zákonem č. 101/2000 Sb., o ochraně osobních údajů, ve znění pozdějších předpisů.
1.24 Objednatel souhlasí se zpracováním těchto svých osobních údajů: jméno a příjmení, adresa bydliště, příp. doručovací adresa, adresa elektronické pošty, telefonní číslo a dalších údajů, které uvedl v objednávce - např. v sekci poznámka, atp. (dále společně vše jen jako „osobní údaje").
1.25 Objednatel souhlasí se zpracováním osobních údajů Poskytovatelem, a to pro účely realizace práv a povinností ze smlouvy o poskytnutí služeb a pro účely vedení uživatelského účtu, je-li tento zřízen.
1.26 Objednatel potvrzuje, že poskytnuté osobní údaje jsou přesné a že byl poučen o tom, že se jedná o dobrovolné poskytnutí osobních údajů.
1.27 V případě, že by se objednatel domníval, že Poskytovatel provádí zpracování jeho osobních údajů, které je v rozporu s ochranou soukromého a osobního života objednatele nebo v rozporu se zákonem, zejména jsou-li osobní údaje nepřesné s ohledem na účel jejich zpracování, může:
a) požádat Poskytovatele o vysvětlení,
b) požadovat, aby Poskytovatel odstranil takto vzniklý stav.
1.28 Požádá-li objednatel o informaci o zpracování svých osobních údajů, je mu Poskytovatel povinen tuto informaci předat. Poskytovatel má právo za poskytnutí informace podle předchozí věty požadovat přiměřenou úhradu nepřevyšující náklady nezbytné na poskytnutí informace.
1.29 Objednatel má právo svůj souhlas se zpracováním osobních údajů odvolat, a to písemnou formou na adrese sídla Poskytovatele. Odvolání souhlasu je účinné okamžikem jeho doručení Poskytovateli. Objednatel má dále práva dle § 21 zákona č. 101/2000 Sb., tj. zejména právo přístupu k údajům, které se jej týkají, a právo je opravit, zablokovat nebo požadovat jejich likvidaci, jakož i právo na omluvu, peněžní zadostiučinění nebo peněžitou náhradu, bylo-li jednáním Poskytovatele porušeno právo subjektu údajů na lidskou důstojnost, osobní čest, dobrou pověst či právo na ochranu jména.

ZÁVĚREČNÁ USTANOVENÍ

1.30 Veškeré texty, ilustrace, grafika a fotografie obsažené v materiálech a na internetových stránkách Poskytovatele a dalších, prezentované na kurzech podléhají autorským právům a nesmí být kopírovány nebo používány dále bez výslovného písemného souhlasu Poskytovatele.
1.31 Na kurzech je zakázáno fotit, pořizovat jakékoli video nebo audio nahrávky.
1.32 Fotografie použité v informačních a marketingových materiálech jsou pouze informační a mohou se ve skutečnosti lišit.
1.33 Objednatel účastí na kurzu souhlasí s pořizováním obrazové a zvukové dokumentace a zveřejňováním k marketingovým účelům Poskytovatele. Pokud objednatel s tímto pořizováním a zveřejňováním nesouhlasí písemně požádá o nepořizování a nezveřejňování zvukové a obrazové dokumentace před zahájením kurzu.
1.34 V případě zrušení kurzu ze strany Poskytovatele bude uhrazená částka ceny kurzu vrácena na účet objednatele nejpozději do 14 dní od data zrušení kurzu.
1.35 Právní vztahy výslovně neupravené těmito obchodními podmínkami se řídí příslušnými ustanoveními zák. č. 89/2012 Sb., občanský zákoník, jakož i předpisy souvisejícími, vše ve znění předpisů aktuálních ke dni zadání objednávky.
1.36 Obchodní podmínky se řídí právním řádem České republiky.

Obchodní podmínky platné od 2022 (OP)`;

const ruText = `ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ / УСЛОВИЯ ОКАЗАНИЯ УСЛУГ

Ниже приведён официальный текст условий/политики на чешском языке (оригинал). Для удобства подготовлена локализация на русском языке. В случае расхождений приоритет имеет чешская версия.

Ключевые положения (ru):
1) Оформление записи или заказа услуг на сайте footura.cz означает согласие с актуальной редакцией условий на момент отправки заявки.
2) Перенос записи возможен не позднее чем за 3 дня до выбранной даты. В противном случае предоплата (частичная или полная) не возвращается.
3) При опоздании более 15 минут специалист вправе отказать в услуге или сократить время предоставления услуги; стоимость сохраняется в полном объёме.
4) Центр не несёт ответственность за утрату/повреждение личных вещей, а также за действия третьих лиц.
5) Обработка персональных данных осуществляется для исполнения договора, администрирования записи/учётной записи и коммуникации. Запросы и отзыв согласия направлять на info@footura.cz.
6) Применимое право — законодательство Чешской Республики.`;

export default function PrivacyPage() {
  const { language } = useLanguage();

  const content = useMemo(() => {
    return language === 'ru' ? `${ruText}\n\n${csText}` : csText;
  }, [language]);

  return (
    <div className={styles.pageRoot}>
      <Header />
      <SEOHead
        title={language === 'ru' ? 'Политика конфиденциальности и условия — Footura' : 'Zásady a obchodní podmínky — Footura'}
        description={language === 'ru' ? 'Политика конфиденциальности и условия оказания услуг Footura.' : 'Zásady ochrany osobních údajů a obchodní podmínky Footura.'}
        canonicalUrl="/privacy"
      />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>{language === 'ru' ? 'Политика конфиденциальности / Условия' : 'Zásady ochrany osobních údajů / Obchodní podmínky'}</h1>
        </section>
        <section className={styles.container}>
          <div className={styles.content}>
            {content.split('\n').map((line, idx) => (
              <p key={idx}>{line.trim() === '' ? '\u00A0' : line}</p>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 