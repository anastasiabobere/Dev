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
  const signature = params.get("signature");
  output_woman = `<h1>Labdien, ${name}. Jūsu vēstule ir gatava! </h1>
<p id="myParagraph">
    Sveicināts, galvenais tehnoloģiju ministrs!
     Esmu ${name}, mākslīgā intelekta entuziaste un pašreizējā ${club} prezidente. 
     Vēršos pie Jums, jo mūsu reģionam – ${region} – ir nepieciešama palīdzība. Mēs esam pilnībā atkarīgi no ${technology}, 
     taču nesen esam saskārušies ar problēmām. Piemēram, mūsu jaunākais ${object} ir sācis izdot skaņas, kas atgādina ${sound}, 
     un mēs vairs neesam pārliecināti par tā drošību. Lai atrisinātu šo jautājumu, mēs lūdzam Jūsu finansiālu atbalstu ${money} eiro 
     apmērā, lai iegādātos nepieciešamo aprīkojumu un atjaunotu darbību. Mēs saprotam, ka valsts budžetu kontrolē ${economic} 
     ministrija, tomēr uzskatām, ka šis ieguldījums palīdzētu mums būt efektīvākiem un konkurētspējīgākiem nākotnē. 
     Piemēram, mana draudzene ${friend}, kura līdz šim nav izpratusi ${technology}, varētu attīstīties un kļūt par nākamo
      ${technology_celebrity}. Pati esmu ${job}, un savā ikdienā bieži izmantoju ${technology}, lai risinātu ${problem} problēmu. 
      Diemžēl bez modernām tehnoloģijām mēs riskējam atpalikt. Cienījamais ministrs, ceram uz Jūsu sapratni un atbalstu mūsu
       iniciatīvai.</br> Ar cieņu, ${name} un visi ${club} dalībnieki.
</p>
<button onclick="copyText()" class="btn">Kopēt tekstu</button>
`;

  output_man = `
 <h1>Labdien, ${name}. Jūsu vēstule ir gatava! </h1>
<p id="myParagraph">
    Sveicināts, galvenais tehnoloģiju ministrs! Esmu ${name}, 
    ${club} prezidents un aizrautīgs tehnoloģiju entuziasts. Vēršos pie Jums, jo mūsu reģionam – ${region} – 
    ir nepieciešama palīdzība. Mēs esam pilnībā atkarīgi no ${technology}, taču nesen esam saskārušies ar problēmām.
     Piemēram, mūsu jaunākais ${object} ir sācis izdot skaņas, kas atgādina ${sound}, un mēs vairs neesam pārliecināti par tā drošību.
      Lai atrisinātu šo jautājumu, mēs lūdzam Jūsu finansiālu atbalstu ${money} eiro apmērā, lai iegādātos nepieciešamo aprīkojumu un atjaunotu darbību. 
      Mēs saprotam, ka valsts budžetu kontrolē ${economic} ministrija, tomēr uzskatām, ka šis ieguldījums palīdzētu mums būt efektīvākiem un konkurētspējīgākiem nākotnē. 
      Piemēram, mans draugs ${friend}, kurš līdz šim nav izpratis ${technology}, varētu attīstīties un kļūt par nākamo ${technology_celebrity}. 
      Pats esmu ${job}, un savā ikdienā bieži izmantoju ${technology}, lai risinātu ${problem} problēmu.
       Diemžēl bez modernām tehnoloģijām mēs riskējam atpalikt. Cienījamais ministrs, ceram uz Jūsu sapratni un atbalstu mūsu iniciatīvai.
 </br> Ar cieņu, ${name} un visi ${club} dalībnieki.
</p>
<button onclick="copyText()" class="btn">Kopēt tekstu</button>`;
  // Display the collected inputs
  if (gender === "woman") {
    document.getElementById("main").innerHTML = output_woman;
  } else {
    document.getElementById("main").innerHTML = output_man;
  }
  if (signature) {
    const signatureImg = document.createElement("img");
    signatureImg.src = signature;
    signatureImg.alt = "Signature";
    signatureImg.id = "signature";
    document.getElementById("main").appendChild(signatureImg);
  }
};
