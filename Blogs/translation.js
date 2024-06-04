// Js file for translation implementation

let google_translate_element = document.getElementById("google_translate_element");
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,es,fr,de,it,pt,ru,zh-CN,zh-TW,ja,ko,ar,hi,bn,ur,tr,nl,el,sv,pl,vi,th,id,ms,fil,fi,da,no,hu,cs,sk,ro,bg,hr,sr,sl,uk,he,fa,ta,te,kn,ml', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
}