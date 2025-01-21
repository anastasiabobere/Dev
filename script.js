window.onload = function () {
  // Parse the URL parameters
  const params = new URLSearchParams(window.location.search);

  // Get all keys and values
  const entries = params.entries();
  let output = "";

  const name = params.get("name");
  const club = params.get("club");
  const region = params.get("region");
  const technology = params.get("technology");
  const technology2 = params.get("technology2");
  const money = params.get("money");
  const object = params.get("object");
  const sound = params.get("sound");
  const economic = params.get("economic");
  const friend = params.get("friend");
  const job = params.get("job");
  const technology_celebrity = params.get("technology_celebrity");
  const problem = params.get("problem");
  const gender = params.get("gender");
  output_woman = `<h1>Labdien, ${name}. Jūsu vēstule ir gatava! </h1>
  <p id="myParagraph" > Sveicināts, galvenais tehnoloģiju ministrs!

Esmu ${name}, mākslīgā intelekta entuziaste un pašreizējā ${club} prezidente. Man ir ļoti svarīga problēma, kuru esmu pieņēmusi ar lielu atbildību, tāpēc vēlos vērsties pie Jums pēc palīdzības.

Pēdējā laikā  ${region} ir saskārusies ar lieliem izaicinājumiem. Mēs esam pilnībā atkarīgi no ${technology}, un diemžēl mūsu rīki vairs nespēj darboties pareizi. Piemēram, mūsu jaunākais ${object} 
ir sācis izdot dīvainas skaņas, kas ļoti atgādina ${sound}, un mēs neesam pārliecināti, vai tas ir normāli!

Tāpēc lūdzu Jūsu palīdzību, lai varētu iegūt ${money} eiro un ātrāk risināt šo jautājumu. Mums steidzami nepieciešams iegādāties ${technology2}, kas varētu palīdzēt atjaunot mūsu sistēmu un mazināt šo traucējumu.

Es zinu, ka mūsu valsts budžets ir ${economic}, tomēr esmu pārliecināta, ka šis ieguldījums būs kā īsta revolūcija nākotnē! Mūsu komanda ir gatava arī uzsākt atbalsta programmu, 
kas palīdzētu visiem iedzīvotājiem izprast šo tehnoloģiju un izmantot to ikdienā.

Piemēram, ${friend}, kurš nekad nav sapratis, kā darbojas ${technology2}, beidzot varēs kļūt par ${technology_celebrity}, kad iegūs šīs zināšanas!

Pati esmu ${job}, un ikdienā ļoti daudz izmantoju ${technology2}, lai palīdzētu risināt ${problem}. Mūsu galvenā problēma ir tā, ka tehnoloģijas attīstās ātrāk, nekā mēs spējam tās saprast, un mēs nevaram to atļauties!

Tāpēc, cienījamais ministrs, ļoti lūdzu Jūsu palīdzību, lai nodrošinātu ${money} eiro.

Ar cieņu,  
${name} un visi ${club} dalībnieki.
</p>
 <button onclick="copyText()">Kopet tekstu</button>
`;

  output_man = `
  <h1>Labdien, ${name}. Jūsu vēstule ir gatava! </h1>
  <p>Sveicināts, galvenais tehnoloģiju ministrs!

Esmu ${name}, mākslīgā intelekta entuziasts un pašreizējais ${club} prezidents. Man ir ļoti svarīga problēma, kuru esmu pieņēmis ar lielu atbildību, tāpēc vēlos vērsties pie Jums pēc palīdzības.

Pēdējā laikā mūsu valsts ${region} ir saskārusies ar lieliem izaicinājumiem. Mēs esam pilnībā atkarīgi no ${technology}, un diemžēl mūsu rīki vairs nespēj darboties pareizi. Piemēram, mūsu jaunākais ${object} 
ir sācis izdot dīvainas skaņas, kas ļoti atgādina ${sound}, un mēs neesam pārliecināti, vai tas ir normāli!

Tāpēc lūdzu Jūsu palīdzību, lai varētu iegūt ${money} un ātrāk risināt šo jautājumu. Mums steidzami nepieciešams iegādāties ${technology2}, kas varētu palīdzēt atjaunot mūsu sistēmu un mazināt šo traucējumu.

Es zinu, ka mūsu valsts budžets ir ${economic}, tomēr esmu pārliecināts, ka šis ieguldījums būs kā īsta revolūcija nākotnē! Mūsu komanda ir gatava arī uzsākt atbalsta programmu, 
kas palīdzētu visiem iedzīvotājiem izprast šo tehnoloģiju un izmantot to ikdienā.

Piemēram, ${friend}, kurš nekad nav sapratis, kā darbojas ${technology2}, beidzot varēs kļūt par ${technology_celebrity}, kad iegūs šīs zināšanas!

Pats esmu ${job}, un ikdienā ļoti daudz izmantoju ${technology2}, lai palīdzētu risināt ${problem}. Mūsu galvenā problēma ir tā, ka tehnoloģijas attīstās ātrāk, nekā mēs spējam tās saprast, un mēs nevaram to atļauties!

Tāpēc, cienījamais ministrs, ļoti lūdzu Jūsu palīdzību, lai nodrošinātu ${money}.

Ar cieņu,  
${name} un visi ${club} dalībnieki.
</p>`;
  // Display the collected inputs
  if (gender === "woman") {
    document.getElementById("main").innerHTML = output_woman;
  } else {
    document.getElementById("main").innerHTML = output_man;
  }
};
