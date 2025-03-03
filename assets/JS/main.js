
// githubdaki arrayi köşeli parantez içindeki copy pasteleyip burada starWarsData adında bir const a tanımlıyorum.
// json dosyası js içine kopyalandığında bir hata oluşmuyor. tersini yapsaydım hata olurdu ama.
const starWarsData = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

const homeworldsRaw = starWarsData.map((prop) => {
  // Burada homeworldleri sıralayıp return olarak veriyorum ama
  // prop.homeworld = prop.homeworld ?? 'other'; diyorum veya alttaki kısa yazımı ??= ile
  // yani nullish coalescing kontrolü yapıyorum. Değerlerden biri null ve undefined ise
  // 'other' değeri ile değiştirilsin diyorum.
  prop.homeworld ??= "other";
  return prop.homeworld;
});
console.log(homeworldsRaw);

// önce dışarda bir homeworldsUnique adında boş bir array tanımlıyorum.
// for döngüsündeki if; her bir elemana sıra gelip tarandığında unique arrayi içerisinde
// bu değer henüz yoksa (!.) ozaman bunu unique arrayine pushla yani sonuna ekle diyorum.
const homeworldsUnique = [];
for (let i = 0; i < homeworldsRaw.length; i++) {
  if (!homeworldsUnique.includes(homeworldsRaw[i])) {
    homeworldsUnique.push(homeworldsRaw[i]);
  }
}
console.log(homeworldsUnique);

// oluşturduğum arraydeki elemanları komple küçük harfle yazılmış haline çeviriyorum.
const homeworldsLowerCase = homeworldsUnique.map((prop) => {
  return prop.toLowerCase();
});
console.log(homeworldsLowerCase);

//sonuç listeyi buna tanımlamam istendi ödevde. tekrar extradan yaptım. baştan da son üstteki const u bu isimle tanımlayabilirdim.
const homeworlds = homeworldsLowerCase;

// veri alışverişinde bulunmak istediğim divlere ulaşım yolu tanımlıyorum.
const radioContainer = document.getElementById("radioContainer");
const cardContainer = document.getElementById("cardContainer");
const toggleButton = document.getElementById("showMeBtn");

// js içinde bu fonksiyon aracılığıyla card oluşturmayı tanımlıyorum. içinde template literal string kullanarak 
// yani özel `` tırnak işaretleri içinde ${değişken} biçimini kullandım. buradaki gibi tırnak tırnak içinde olan ve 
// dışardan değişken içinde tanımlamam gereken durumlarda bu yöntemi kullanmalıyım. En kolayı sanki.
function generateCards(data) {
  const cardsGenerate = data
    .map(
      (item) => `
    <div class="card" style="width: 18rem;">
          <img src="${item.pic}" class="card-img-top" alt='${item.name}'>
          <div class="card-body">
            <h5 class="card-title">Name: ${item.name}</h5>
            <p class="card-text">Homeworld: ${item.homeworld}</p>
          </div>
        </div>
        `
    )
    .join("");
  // join ile tüm array elemanları tek bir string içerisine toplanıyor ve
  //  aralarında dizerken kullanmak istediğim ayracı belirtiyorum.
  // Parantez içindeki tırnakların arasına ne yazarsam
  // o ayraç olarak kullanılıyor. burada hiçbirşey yok o yüzden bitişik bir tablo
  //çıkıyor ortaya.
  cardContainer.innerHTML = cardsGenerate;
}

// radio seçeneklerini değiştirdiğimde hepsinin name i aynı olduğu için aralarında sadece bir tanesini seçebiliyorum.
// değişik birini tıkladığım anda 'change' tetiklemiş oluyorum ve bu da içlerindeki her içinde name=homeworld attributu tanımlı
// inputa bakıp checked sınıfına/özelliğine sahip mi diye bakıyor. ve öyleyse, yine içinde tanımladığım value değerini alıp 
// oluşturduğum filterValue değişkenine atıyor.
radioContainer.addEventListener("change", (event) => {
  const filterValue = document.querySelector(
    "input[name='homeworld']:checked"
  ).value;

  // sonrasında bu yeni değişken içinde entepedeki orjinal arraye gidip elemanları içinde (item) homeworldlerin küçük harflere çevrilmiş halleri ile
  // filterValue daki seçtiğim o bir radiodaki isim ile aynı olanları (yani orjinal arraydeki obje elemanları filtreliyor.) 
  const filteredHomeworlds = starWarsData.filter(
    (item) => item.homeworld.toLowerCase() === filterValue
  );

  // ve nihayetinde bunları card fonksiyonu içine sokup o bölümde ilgili cardları oluşturuyor ve gösteriyor. (hepsi yerine)
  generateCards(filteredHomeworlds);
});

// bütün üsttekileri ve ek olarak buton renk değişimlerinin değişimlerini aşağıdaki fonksiyon içinde if ve else if tanımına bağladım.
// tekrar gizleme şartlarını belirleyebilmek için else if kullanımı önemliydi burada.
function clickShowMe() {
  toggleButton.addEventListener("click", function () {
    const btnText = toggleButton.innerHTML;
    if (btnText === "Karakterleri Göster!") {
      // ilk Karakterleri göster butonuna bastığımda hepsinin sıralanması için aşağıdaki generateCards(starWarsData)yı bırakıyorum.
      // sonrasında yapacağım seçim işlemi zaten gereken manipülasyonu yapıp yani filtrelemeyi buradaki durumda, bana istediğim sonucu veriyor.
      generateCards(starWarsData);
// burada butona basınca js tarafından oluşturulması için yine template literal string içerisinde radio seçeneklerinin
//oluşturulmasını tanımladım.
      const radioGenerate = homeworlds
        .map(
          (item) => `
  <div class="form-check">
     <input class="form-check-input" type="radio" name='homeworld' id=${item} value=${item}>
     <label class="form-check-label" for=${item}>
       ${item}
     </label>
    </div>
  `
        )
        .join("");

      radioContainer.innerHTML = radioGenerate;
      toggleButton.innerHTML = "Karakterleri Gizle!";
      toggleButton.style.backgroundColor = "#f00";
    } else if (btnText === "Karakterleri Gizle!") {
      //içeriğin tekrar silinmesi için içi boş tırnak işaretleri
      radioContainer.innerHTML = "";
      cardContainer.innerHTML = "";
      toggleButton.innerHTML = "Karakterleri Göster!";
      toggleButton.style.backgroundColor = "#adff2f";
    }
  });
}

// butonun html kodu içinde onclick tanımlamak yerine buradan sayfa açılır açılmaz hazır olması daha hoşuma gidiyor. 
// ama sayfa performansı açısında verimli mi bunu araştırıp öğrenmem lazım.
// diğer fonksiyon burada tanımlı değil çünkü o radio seçen ekleri arasında change yaptığımda zaten tetikleniyor olacak.
// burada gereksiz başlatmama gerek yok.
window.onload = function () {
  clickShowMe();
};
