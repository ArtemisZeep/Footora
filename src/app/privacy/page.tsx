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
3.5 V případě, že by se Zákazník domníval, že Centrum provádí zpracování jeho osobních údajů, které je v rozporu s ochranou soukromého a osobního života Zákazníka nebo v rozporu se zákonem, zejména jsou-li osobní údaje nepřesné s ohledem на účel jejich zpracování, může:
a) požádat Centrum o vysvětlení,
b) požadovat, aby Centrum odstranilo takto vzniklý stav.
3.6 Požádá-li Zákazník o informaci o zpracování svých osobních údajů, je mu Centrum povinno tuto informaci předat. Centrum má práво za poskytnutí informace podle předchozí věty požadovat přiměřenou úhradu nepřevyšující náklady nezbytné na poskytnutí informace.
3.7 Zákazník má právo svůj souhlas se zpracováním osobních údajů odvolat, a to písemnou formou na adrese sídla Centra. Odvolání souhlasu je účinné okamžikem jeho doručení Centru. Zákazník má dále práva dle § 21 zákona č. 101/2000 Sb., tj. zejména právo přístupu k údajům, které se jej týkají, a právo je opravit, zablokovat nebo požadovat jejich likvidaci, jakož i právo na omluvu, peněžní zadostiučinění nebo peněžitou náhradu, bylo-li jednáním Centra porušeno právo subjektu údajů na lidskou důstojnost, osobní čest, dobrou pověst či právo na ochranu jména.

4.⁠ ⁠ZÁVĚREČNÁ USTANOVENÍ

4.1 Právní vztahy Centra se zákoníkem výslovně neupravené těmito obchodními podmínkami se řídí příslušnými ustanoveními zák. č. 89/2012 Sb., občanský zákoník, zákona č. 634/1992 Sb., o ochraně spotřebitele, jakož i předpisy souvisejícími, vše ve znění předpisů aktuálních ke dni zadání objednávky.
4.2 Obchodní podmínky se řídí právním řádem České republiky.

OBCHODNÍ PODMÍNKY - KURZY
Vážení klienti,
vážíme si toho, že jste се rozhodli zapojit se do naších kurzů. Připravili jsme pro Vás následující obchodní podmínky:

1.⁠ ⁠ÚVOD

1.1 Tyto obchodní podmínky (dále jen „OP") upravují vztahy mezi smluvními stranami smlouvy uzavřené prostřednictvím internetového obchodu footura.cz.
1.2 S těmito obchodními podmínkami má objednatel kurzu možnost se seznámit před odesláním své objednávky a je на ně dostatečně předem upozorněn.
1.3 Objednatel podáním objednávky potvrzuje, že se seznámил с těmito OP, a že с ними výslovně souhlasí, a to ve znění platném a účinném v momentě odeslání objednávky.
1.4 Poskytovatelem kurzu a provozovatelem webových stránek footura.cz je Nataliia Rotar se sídlem Praha - Pitkovice, Pýchavková - 282/7, PSČ 10400, ÍCO 06883869, email: info@footura.cz, (dale jen "Poskutovatel")
1.5 Objednatelem se rozumí fyzická nebo právnická osoba, která се přihlásila на kurzy a zaplatila cenu kurzu prostřednictvím webových stránek footura.cz (dále jen „objednatel").
1.6 Poskytovatel se zavazuje, že pro objednatele ve stanoveném termínu provede kurzy (dále jen „kurzy").
1.7 Objednatel prohlašuje, že se účastní курзů v rámci své podnikatelské činnosti, neboť курзы jsou určeny pro zdokonalení profesní a podnikatelské činnosti. Toto prohlášení platí, i pokud objednatel nemá živnostenské nebo jiné obdobné oprávnění, neboť účastní се kurzu se záměrem provozování své podnikatelské činnosti. Pokud tomu tak není, je objednatel povinen tuto skutečnost oznámit Poskytovateli nejpozději před uhrazením ceny курзу, aby Poskytovatel mohl zaslat poučení o spotřebitelských právech objednatele.
1.8 Objednávkou se dle těchto obchodních podmínek rozumí rezervace курзу na webových stránkách Poskytovatele footura.cz (dále jen „objednávka").
1.9 Termínem курзу se rozumí den a čas, на který se objednatel přihlásil на webových stránkách Poskytovatele footura.cz.
1.10 Úhradou ceny курзу objednatel ještě jednou potvrzuje, že souhlasí s těmito obchodními podmínkami pro pořádání курзů.
1.11 Обjednáním služby (osobně, telefonicky, e-mailem, SMS) projevuje objednatel svůj souhlas s těmitо obchodními podmínkami.
1.12 Nesouhlasí-li objednatel s obchodními podmínkami, má možnost služeb nevyužít.

OBJEDNÁVКА KURZŮ, UZAVŘЕНÍ A UKONČENÍ SMLOUVY

1.13 Objednávka objedнatele učiněná prostřednictvím internetového obchodu footura.cz nebo prostřednictvím telefonu je závazným návrhem objedнatele на uzavření smlouvy o účasti objedнatele на курzech Provozovatele ve vybraném objedнatelem termínu.
1.14 Provozovatel potvrdí neprodleně přijetí objednávky prostřednictвím emailu на emailovou adresu uvedenou objedнatelem v objednávce. Po zaslání potvrzení smlouva se považuje za uzavřenou.
1.15 Provozovatel si vyhrazuje právo ve výjimečných případech, zrušit nebo přesunout provedení курзу ze stanoveného termínu на termín jiný. Například z důvodu nemoci, výpadku el. energie apod. Pokud by tato situace nastala Provozovatel bude objedнatele kontaktovat v nejbližším možném termínu a sdělí náhradní termín курзů.
1.16 Objedнatel bere на vědomí, že v případě jeho neúčasti на курзу v jim zvoleným v objednávce termínu, nemá nárok на vracení zaplacené ceny курзů, a zejména, nikoliv však výlučně z důvodu potřeby uhradit Provozovateli náhradu zmešканého času a škody včetně ušлého zisku.
1.17 Обjedнatel má právo zrušit objednávku nejpozději 7 dní před termínem jim vybraného termínu курзу. V případě pozdějšího zrušení objednávky uhrazená kupní cena курзů se nevrací a započítává се на storno poplatek, který v tomto případě činí 100 % ceny курзу. Storno poplatek představuje paušální plnění вčetně případné náhrady škody bez přímé souvislosti s jakoukoliv službou poskytovanou за protiplnění.
1.18 Обjedнatel je povinen v průběhu курзу dbát на pokyny Poskytovatele.
1.19 Обjedнatel je povinen před zahájením курзу informovat Poskytovatele о případných zdravotních omezeních (alergie apod.), kterými trpí a které je třeba zohlednit v průběhu курзů.

REKLAMACE

1.20 V případě, že objedнatel má dotazy nebo připomínky ke курзů, je povinen o tomto informovat Poskytovatele písemně на emailu info@footura.cz a včas, „bez zbytečného odkladu" a vyžádat si případné vysvětlení, nebo nápravu. На jakékoliv reklamace bez předchozího postupu a zejména až v době, blížící se ukončení курзу nebude brán ze strany poskytovatele zřetel.
1.21 Důvodem reklamace nemohou být skutečnosti, které byly objedнateli známy před vznikem smluvního vztahu, např. místo výuky, cena за výuku a podobně.
1.22 Důvodem pro reklamaci také není, pokud informace, přednesené Poskytovatelem на курзů byli objedнateli ještě před tím známy.

OCHRANA OSOBNÍCH ÚDAJŮ

1.23 Ochrana osobních údajů objedнatele je poskytována zákonem č. 101/2000 Sb., o ochraně osobních údajů, ve znění pozdějších předpisů.
1.24 Objedнatel souhlasí se zpracováním těchto svých osobních údajů: jméno a příjmení, adresa bydliště, příp. doručovací adresa, adresa elektronické pošty, telefonní číslo a dalších údajů, které uvedl v objednávce - např. v sekci poznámка, atp. (dále společně vše jen jako „osobní údaje").
1.25 Обjedнatel souhlasí se zpracováním osobních údajů Poskytovatelem, a to pro účely realizace práv a povinností ze smlouvy о poskytnutí služeb a pro účely vedení uživatelského účtu, je-li tento zřízen.
1.26 Обjedнatel potvrzuje, že poskytnuté osobní údaje jsou přesné a že byl poučen о tom, že se jedná о dobrovolné poskytnutí osobních údajů.
1.27 V případě, že бы se objedнatel domníval, že Poskytovatel provádí zpracování jeho osobních údajů, které je v rozporu с ochranou soukromého a osobního života objedнatele nebo v rozporu se zákonem, zejména jsou-li osobní údaje nepřesné s ohledem на účel jejich zpracování, může:
a) požádat Poskytovatele о vysvětlení,
b) požadovat, aby Poskytovatel odstranil такто vzniklý stav.
1.28 Požádá-li objedнatel о informaci о zpracování svých osobních údajů, je mu Poskytovatel povinen tuto informaci předat. Poskytovatel má právo за poskytnutí informace podle předchozí věty požadovat přiměřenou úhradu nepřevyšující náklady nezbytné на poskytnutí informace.
1.29 Обjedнatel má právo svůj souhlas se zpracováním osobních údajů odvolat, a то písemnou formou на adrese sídla Poskytovatele. Отvolání souhlasu je účinné okamžikем jeho doručení Poskytovateli. Обjedнatel má dále práva dle § 21 zákona č. 101/2000 Sb., tj. zejména právo přístupu к údajům, které се jej týkají, a právo je opravit, zablokovat nebo požadovat jejich ликvidaci, jakož i právo на omluvu, peněžní zadostiučinění nebo peněžitou náhradu, bylo-li jednáním Poskytovatele порušeno právo subjektu údajů на lidskou důstojnost, osobní čest, dobrou pověst či právo на ochranu jména.

ZÁVĚREČNÁ USTANOVENÍ

1.30 Veškeré texty, ilustrace, grafika a fotografie obsažené v materiálech a на internetových stránkách Poskytovatele a dalších, prezentované на курzech podléhají autorským právům a nesmí být копírovány nebo používány dále без výslovného písemného souhlasu Poskytovatele.
1.31 На курzech je zakázáno fotit, pořizovat jakékoli video nebo audio nahrávky.
1.32 Fotografie použité v informačních a marketingových materiálech jsou pouze informační a mohou se ve skutečnosti lišit.
1.33 Обjedнatel účastí на курzu souhlasí s pořizováním obrazové a zvukové dokumentace a zveřejňováním к marketingovým účелům Poskytovatele. Pokud objedнatel s tímto pořizováním a zveřejňováním nesouhlasí písemně požádá о nepořizování a nezveřejňování zvukové a obrazové dokumentace před zahájením курзу.
1.34 V případě zrušení курзу ze strany Poskytovatele bude uhrazená částka ceny курзу vrácena на účet objedнatele nejpozději до 14 dní od data zrušení курзу.
1.35 Právní vztahy výslovně neupravené těmitо obchodními podmínkami se řídí příslušnými ustanoveními zák. č. 89/2012 Sb., občanský zákoník, jakož i předpisy souvisejícími, vše ve znění předpisů aktuálních ke dni zadání objednávky.
1.36 Obchodní podmínky se řídí právním řádem České republiky.

Obchodní podmínky platné od 2022 (OP)`;

const ruFullText = `УСЛОВИЯ ОКАЗАНИЯ УСЛУГ — УСЛУГИ
Уважаемые клиенты,
мы ценим, что вы выбрали наш центр. Ниже приведены условия оказания услуг:

1. ВВЕДЕНИЕ

1.1 Настоящие условия оказания услуг (далее — «Условия») регулируют отношения между сторонами договора, заключаемого через сайт footura.cz.
1.2 Клиент имеет возможность ознакомиться с Условиями до отправки своей заявки и заранее на них надлежащим образом уведомляется.
1.3 Отправляя заявку (заказ) через сайт footura.cz, клиент подтверждает, что ознакомился с настоящими Условиями и прямо с ними согласен, в редакции, действующей на момент отправки заявки.
1.4 Продавцом и оператором сайта footura.cz и всего Центра является Nataliia Rotar, адрес: Praha - Pitkovice, Pýchavková - 282/7, PSČ 10400, IČO 06883869, email: info@footura.cz (далее — «Центр»).
1.5 Центр оказывает подологические и педикюрные услуги, а также осуществляет продажу на основании действующих разрешительных документов, подтверждающих профессиональную компетентность (далее — «услуги»).
1.6 Клиентом считается физическое лицо, оформившее бронирование (заказ) услуг на сайте Центра footura.cz (далее — «заказ»).
1.7 Под датой оказания услуги понимаются день и время, на которые клиент записался.
1.8 Оформляя заказ услуги (лично, по телефону, по электронной почте, SMS), клиент выражает согласие с настоящими Условиями.
1.9 В случае несогласия с Условиями клиент вправе не пользоваться услугами.

2. ЗАКАЗ, ЗАКЛЮЧЕНИЕ И РАСТОРЖЕНИЕ ДОГОВОРА

2.1 Бронирование услуг через онлайн‑систему на сайте footura.cz (http://footura.cz/) или по телефону является обязательной офертой клиента на заключение договора об оказании услуг с Центром.
2.2 Центр подтверждает получение заказа по электронной почте на адрес, указанный клиентом. С момента отправки подтверждения договор считается заключённым.
2.3 В исключительных случаях Центр оставляет за собой право отменить или перенести оказание услуги на другой срок (например, по причине болезни, отключения электроэнергии и т. п.). В таком случае Центр свяжется с клиентом в ближайшее время для согласования нового срока.
2.4 Центр информирует клиента о праве, предусмотренном § 1829 абз. 1 Закона № 89/2012 Sb. (Гражданский кодекс ЧР), — отказаться от договора в течение 14 дней с даты его заключения (то есть с даты подтверждения бронирования). Бланк для отказа доступен по запросу; заполненную и подписанную форму следует направить на email, указанный в п. 1.4 настоящих условий.
2.5 При заказе на выходной/праздничный день клиент при оформлении оплачивает 100% стоимости услуги.
2.6 При заказе на рабочий день (понедельник–пятница, если это не государственный праздник) клиент при оформлении оплачивает 50% стоимости услуги.
2.7 В случае отмены заказа или неявки клиента в выбранное время Центр вправе удержать уже уплаченную часть стоимости услуги как компенсацию за забронированное время (уплаченная часть или вся стоимость — невозвратна, если услуга не была оказана по причинам, зависящим исключительно от клиента).
2.8 Клиент может перенести услугу на другой срок не позднее чем за 3 дня до выбранной даты. В обоснованных случаях Центр может отказать в переносе; в таком случае применяются положения п. 2.7.
2.9 При опоздании более чем на 15 минут специалист вправе отказать в оказании услуги или сократить время процедуры; стоимость услуги сохраняется в полном объёме.
3.0 Центр предпринимает всё возможное для обеспечения сохранности вещей клиента, однако ответственности за них не несёт.
3.1 Центр не несёт ответственности за вред здоровью или имуществу, причинённый незаконными действиями третьих лиц.
3.2 Клиент обязуется сообщить специалисту о любых значимых проблемах со здоровьем, поскольку в ряде случаев проведение процедур не рекомендуется.
3.3 Употребление пищи запрещено в помещениях, предназначенных для оказания услуг.
3.4 Запрещено приносить в Центр алкогольные напитки, вещества и лекарственные препараты, запрещённые законодательством Чешской Республики.
3.5 Специалист Центра вправе отказать в оказании услуг клиенту в состоянии алкогольного/наркотического опьянения.
3.6 Вход с животными запрещён.

3. ЗАЩИТА ПЕРСОНАЛЬНЫХ ДАННЫХ

3.1 Защита персональных данных клиента осуществляется на основании Закона № 101/2000 Sb. «О защите персональных данных» с последующими изменениями.
3.2 Клиент соглашается на обработку следующих персональных данных: имя и фамилия, адрес проживания (и/или адрес доставки), адрес электронной почты, номер телефона и иные данные, указанные в заказе (например, в примечании) — далее совместно «персональные данные».
3.3 Клиент соглашается на обработку персональных данных Центром для целей исполнения прав и обязанностей по договору об оказании услуг и ведения учётной записи (если таковая создана).
3.4 Клиент подтверждает, что предоставленные данные точны, и уведомлён, что их предоставление является добровольным.
3.5 Если клиент полагает, что Центр обрабатывает его персональные данные с нарушением права на неприкосновенность частной жизни либо закона (в частности, если данные неточны с учётом целей обработки), он вправе: a) потребовать разъяснений у Центра; b) требовать устранения нарушений.
3.6 По запросу клиента Центр обязан предоставить информацию об обработке его персональных данных. Центр вправе взимать разумную плату, не превышающую фактические затраты на предоставление такой информации.
3.7 Клиент вправе отозвать согласие на обработку персональных данных письменно по адресу Центра. Отзыв действует с момента получения Центром. Клиент также обладает правами по § 21 Закона № 101/2000 Sb., включая право доступа, исправления, блокировки или уничтожения данных, а также право на извинение, денежную компенсацию или возмещение ущерба при нарушении его прав.

4. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ

4.1 Отношения, прямо не урегулированные настоящими Условиями, регулируются Законом № 89/2012 Sb. (Гражданский кодекс ЧР), Законом № 634/1992 Sb. «О защите потребителей» и иными применимыми нормативными актами в редакции на дату оформления заказа.
4.2 Условия регулируются правом Чешской Республики.

УСЛОВИЯ ОКАЗАНИЯ УСЛУГ — КУРСЫ
Уважаемые клиенты,
благодарим за интерес к нашим курсам. Ниже — условия участия:

1. ВВЕДЕНИЕ

1.1 Настоящие Условия регулируют отношения по договорам, заключаемым через сайт footura.cz.
1.2 Заказчик курса имеет возможность ознакомиться с Условиями до отправки заявки и уведомляется о них заранее.
1.3 Отправляя заявку, заказчик подтверждает, что ознакомился с Условиями и прямо с ними согласен, в редакции, действующей на момент отправки.
1.4 Поставщик курса и оператор сайта footura.cz — Nataliia Rotar, адрес: Praha - Pitkovice, Pýchavková - 282/7, PSČ 10400, IČO 06883869, email: info@footura.cz (далее — «Поставщик»).
1.5 Заказчиком считается физическое или юридическое лицо, записавшееся на курс и оплатившее его стоимость через сайт footura.cz.
1.6 Поставщик обязуется провести курс(ы) для заказчика в установленный срок (далее — «курсы»).
1.7 Заказчик заявляет, что участвует в курсах в рамках своей предпринимательской деятельности, поскольку курсы направлены на развитие профессиональной/предпринимательской деятельности. Это заявление действует и при отсутствии у заказчика соответствующих разрешений, если он участвует с намерением в дальнейшем осуществлять предпринимательскую деятельность. Если это не так, заказчик обязан уведомить Поставщика до оплаты курса, чтобы получить информацию о потребительских правах.
1.8 Под «заказом» понимается бронирование курса на сайте Поставщика footura.cz.
1.9 Под «датой курса» понимаются день и время, на которые заказчик записался на сайте Поставщика footura.cz.
1.10 Оплачивая стоимость курса, заказчик дополнительно подтверждает согласие с настоящими Условиями проведения курсов.
1.11 Оформляя заказ услуги (лично, по телефону, email, SMS), заказчик выражает согласие с настоящими Условиями.
1.12 В случае несогласия с Условиями заказчик вправе не пользоваться услугами.

ЗАКАЗ КУРСОВ, ЗАКЛЮЧЕНИЕ И РАСТОРЖЕНИЕ ДОГОВОРА

1.13 Заказ, оформленный через сайт footura.cz или по телефону, является обязательной офертой заказчика на заключение договора об участии в курсе Поставщика в выбранный срок.
1.14 Поставщик незамедлительно подтверждает получение заказа по электронной почте; после отправки подтверждения договор считается заключённым.
1.15 Поставщик в исключительных случаях вправе отменить или перенести проведение курса (болезнь, отключение электричества и т. п.). В таком случае Поставщик свяжется с заказчиком для согласования альтернативной даты.
1.16 Заказчик принимает к сведению, что при неявке в выбранный срок уплаченная сумма не возвращается, в том числе ввиду необходимости компенсировать Поставщику утраченного времени и ущерб, включая упущенную выгоду.
1.17 Заказчик вправе отменить заказ не позднее чем за 7 дней до выбранной даты. При более поздней отмене уплаченная стоимость не возвращается и засчитывается как штраф (100% стоимости курса).
1.18 В ходе курса заказчик обязан соблюдать указания Поставщика.
1.19 До начала курса заказчик обязан сообщить Поставщику о возможных медицинских ограничениях (аллергии и т. п.), которые необходимо учитывать.

РЕКЛАМАЦИИ

1.20 При вопросах и замечаниях по курсам заказчик обязан своевременно (без неоправданной задержки) письменно уведомить Поставщика по email info@footura.cz и запросить разъяснения/устранение недостатков. Рекламации без такого предварительного порядка, особенно ближе к завершению курса, рассматриваться не будут.
1.21 Основанием для рекламации не могут быть обстоятельства, известные заказчику до заключения договора (например, место обучения, цена и т. п.).
1.22 Также не является основанием для рекламации, если информация, предоставленная Поставщиком на курсе, была известна заказчику заранее.

ЗАЩИТА ПЕРСОНАЛЬНЫХ ДАННЫХ

1.23 Защита персональных данных заказчика осуществляется в соответствии с Законом № 101/2000 Sb. с последующими изменениями.
1.24 Заказчик соглашается на обработку своих персональных данных: имя и фамилия, адрес проживания (адрес доставки при наличии), email, телефон и иные данные, указанные в заказе (например, в примечании) — далее «персональные данные».
1.25 Персональные данные обрабатываются Поставщиком для исполнения прав и обязанностей по договору об оказании услуг и ведения учётной записи (если она создана).
1.26 Заказчик подтверждает точность предоставленных данных и уведомлён, что их предоставление — добровольное.
1.27 Если заказчик полагает, что Поставщик осуществляет обработку его данных с нарушением частной жизни или закона (в частности, при неточности данных с учётом цели обработки), он вправе: a) обратиться к Поставщику за разъяснением; b) потребовать устранения нарушений.
1.28 По запросу заказчика Поставщик обязан предоставить информацию об обработке его персональных данных; Поставщик вправе потребовать разумную плату, не превышающую фактические расходы на предоставление информации.
1.29 Заказчик вправе отозвать согласие на обработку данных письменно по адресу Поставщика; отзыв действует с момента получения. Также действуют права по § 21 Закона № 101/2000 Sb. (доступ, исправление, блокировка, уничтожение, извинение, денежная компенсация и т. п.).

ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ

1.30 Все тексты, иллюстрации, графика и фотографии, содержащиеся в материалах и на сайтах Поставщика и демонстрируемые на курсах, охраняются авторским правом и не могут копироваться или использоваться без письменного согласия Поставщика.
1.31 На курсах запрещена фото‑, видео‑ и аудиосъёмка.
1.32 Фотографии в информационных и маркетинговых материалах носят иллюстративный характер и могут отличаться от реальности.
1.33 Участвуя в курсе, заказчик соглашается на создание фото‑ и аудиовизуальной документации и её публикацию в маркетинговых целях Поставщика. При несогласии необходимо письменно потребовать не осуществлять съёмку/публикацию до начала курса.
1.34 В случае отмены курса Поставщиком уплаченная сумма возвращается на счёт заказчика в течение 14 дней со дня отмены.
1.35 Отношения, прямо не урегулированные настоящими Условиями, регулируются Законом № 89/2012 Sb. (Гражданский кодекс ЧР) и иными применимыми актами в редакции на дату оформления заказа.
1.36 Применимое право — Чешская Республика.

Условия действуют с 2022 года.`;

export default function PrivacyPage() {
  const { language } = useLanguage();

  const content = useMemo(() => {
    return language === 'ru' ? ruFullText : csText;
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
          <h1 className={styles.heroTitle}>{language === 'ru' ? 'Политика конфиденциальности / Условия оказания услуг' : 'Zásady ochrany osobních údajů / Obchodní podmínky'}</h1>
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