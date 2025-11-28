// --- DICTIONNAIRES CORRIGÉS AVEC TYPE ET GENRE ---
const dictionnaireFR = {
   "bonjour": { hanzi: "你好", pinyin: "nǐ hǎo", pinyinFR: "salut / bonjour", type: "nom", genre: "m" },
  "merci": { hanzi: "谢谢", pinyin: "xièxie", pinyinFR: "merci", type: "nom", genre: "m" },
  "au revoir": { hanzi: "再见", pinyin: "zàijiàn", pinyinFR: "au revoir", type: "nom", genre: "m" },
  "s’il vous plaît": { hanzi: "请", pinyin: "qǐng", pinyinFR: "s'il vous plaît", type: "expression" },
  "désolé": { hanzi: "对不起", pinyin: "duìbuqǐ", pinyinFR: "désolé", type: "expression" },
  "oui": { hanzi: "是", pinyin: "shì", pinyinFR: "oui", type: "adverbe" },
  "non": { hanzi: "不是", pinyin: "bú shì", pinyinFR: "non", type: "adverbe" },
  "je ne comprends pas": { hanzi: "我不懂", pinyin: "wǒ bù dǒng", pinyinFR: "je ne comprends pas", type: "expression" },
  "parlez-vous anglais?": { hanzi: "你会说英语吗？", pinyin: "nǐ huì shuō yīngyǔ ma?", pinyinFR: "parlez-vous anglais ?", type: "question" },
  "combien ça coûte?": { hanzi: "多少钱？", pinyin: "duōshǎo qián?", pinyinFR: "combien ça coûte ?", type: "question" },
  "où est...?": { hanzi: "...在哪儿？", pinyin: "... zài nǎr?", pinyinFR: "où est... ?", type: "question" },
  "je m'appelle...": { hanzi: "我叫...", pinyin: "wǒ jiào...", pinyinFR: "je m'appelle...", type: "expression" },
  "enchanté": { hanzi: "很高兴认识你", pinyin: "hěn gāoxìng rènshi nǐ", pinyinFR: "enchanté", type: "expression" },
  "bonne nuit": { hanzi: "晚安", pinyin: "wǎn'ān", pinyinFR: "bonne nuit", type: "expression" },
  "bonne journée": { hanzi: "祝你有美好的一天", pinyin: "zhù nǐ yǒu měihǎo de yītiān", pinyinFR: "bonne journée", type: "expression" },
  "à bientôt": { hanzi: "回头见", pinyin: "huítóu jiàn", pinyinFR: "à bientôt", type: "expression" },
  "félicitations": { hanzi: "恭喜", pinyin: "gōngxǐ", pinyinFR: "félicitations", type: "expression" },
  "bonne chance": { hanzi: "祝你好运", pinyin: "zhù nǐ hǎoyùn", pinyinFR: "bonne chance", type: "expression" },
  "je t'aime": { hanzi: "我爱你", pinyin: "wǒ ài nǐ", pinyinFR: "je t'aime", type: "expression" },
  "à demain": { hanzi: "明天见", pinyin: "míngtiān jiàn", pinyinFR: "à demain", type: "expression" },
  "chien": { hanzi: "狗", pinyin: "gǒu", pinyinFR: "chien", type: "nom", genre: "m" },
  "chat": { hanzi: "猫", pinyin: "māo", pinyinFR: "chat", type: "nom", genre: "m" },
  "je": { hanzi: "我", pinyin: "wǒ", pinyinFR: "je / moi", type: "pronom" },
  "tu": { hanzi: "你", pinyin: "nǐ", pinyinFR: "tu / toi", type: "pronom" },
  "il": { hanzi: "他", pinyin: "tā", pinyinFR: "il / lui", type: "pronom" },
  "elle": { hanzi: "她", pinyin: "tā", pinyinFR: "elle / elle", type: "pronom" },
  "nous": { hanzi: "我们", pinyin: "wǒmen", pinyinFR: "nous", type: "pronom" },
  "vous": { hanzi: "你们", pinyin: "nǐmen", pinyinFR: "vous", type: "pronom" },
  "ils": { hanzi: "他们", pinyin: "tāmen", pinyinFR: "ils", type: "pronom" },
  "elles": { hanzi: "她们", pinyin: "tāmen", pinyinFR: "elles", type: "pronom" },
  "aller": { hanzi: "去", pinyin: "qù", pinyinFR: "aller", type: "verbe" },
  "venir": { hanzi: "来", pinyin: "lái", pinyinFR: "venir", type: "verbe" },
  "manger": { hanzi: "吃", pinyin: "chī", pinyinFR: "manger", type: "verbe" },
  "boire": { hanzi: "喝", pinyin: "hē", pinyinFR: "boire", type: "verbe" },
  "faire": { hanzi: "做", pinyin: "zuò", pinyinFR: "faire", type: "verbe" },
  "dire": { hanzi: "说", pinyin: "shuō", pinyinFR: "dire", type: "verbe" },
  "écouter": { hanzi: "听", pinyin: "tīng", pinyinFR: "écouter", type: "verbe" },
  "regarder": { hanzi: "看", pinyin: "kàn", pinyinFR: "regarder", type: "verbe" },
  "acheter": { hanzi: "买", pinyin: "mǎi", pinyinFR: "acheter", type: "verbe" },
  "vendre": { hanzi: "卖", pinyin: "mài", pinyinFR: "vendre", type: "verbe" },
  "comprendre": { hanzi: "懂", pinyin: "dǒng", pinyinFR: "comprendre", type: "verbe" },
  "demander": { hanzi: "问", pinyin: "wèn", pinyinFR: "demander", type: "verbe" },
  "répondre": { hanzi: "回答", pinyin: "huídá", pinyinFR: "répondre", type: "verbe" },
  "aimer": { hanzi: "喜欢", pinyin: "xǐhuān", pinyinFR: "aimer", type: "verbe" },
  "aimer(amour)": { hanzi: "爱", pinyin: "ài", pinyinFR: "aimer (amour)", type: "verbe" },
  "bon": { hanzi: "好", pinyin: "hǎo", pinyinFR: "bon / bien", type: "adjectif" },
  "mauvais": { hanzi: "坏", pinyin: "huài", pinyinFR: "mauvais", type: "adjectif" },
  "grand": { hanzi: "大", pinyin: "dà", pinyinFR: "grand", type: "adjectif" },
  "petit": { hanzi: "小", pinyin: "xiǎo", pinyinFR: "petit", type: "adjectif" },
  "nouveau": { hanzi: "新", pinyin: "xīn", pinyinFR: "nouveau", type: "adjectif" },
  "vieux": { hanzi: "老", pinyin: "lǎo", pinyinFR: "vieux", type: "adjectif" },
  "beau": { hanzi: "漂亮", pinyin: "piàoliang", pinyinFR: "beau / joli", type: "adjectif" },
  "laid": { hanzi: "丑", pinyin: "chǒu", pinyinFR: "laid", type: "adjectif" },
  "chaud": { hanzi: "热", pinyin: "rè", pinyinFR: "chaud", type: "adjectif" },
  "froid": { hanzi: "冷", pinyin: "lěng", pinyinFR: "froid", type: "adjectif" },
  "rapide": { hanzi: "快", pinyin: "kuài", pinyinFR: "rapide", type: "adjectif" },
  "lent": { hanzi: "慢", pinyin: "màn", pinyinFR: "lent", type: "adjectif" }
  // … continuer jusqu'à 100 expressions
};

const dictionnaireCN = {
  "你好": { fr: "bonjour", pinyin: "nǐ hǎo", pinyinFR: "salut / bonjour", type: "nom", genre: "m" },
  "谢谢": { fr: "merci", pinyin: "xièxie", pinyinFR: "merci", type: "nom", genre: "m" },
  "再见": { fr: "au revoir", pinyin: "zàijiàn", pinyinFR: "au revoir", type: "nom", genre: "m" },
  "请": { fr: "s’il vous plaît", pinyin: "qǐng", pinyinFR: "s'il vous plaît", type: "expression" },
  "对不起": { fr: "désolé", pinyin: "duìbuqǐ", pinyinFR: "désolé", type: "expression" },
  "是": { fr: "oui", pinyin: "shì", pinyinFR: "oui", type: "adverbe" },
  "不是": { fr: "non", pinyin: "bú shì", pinyinFR: "non", type: "adverbe" },
  "我不懂": { fr: "je ne comprends pas", pinyin: "wǒ bù dǒng", pinyinFR: "je ne comprends pas", type: "expression" },
  "你会说英语吗？": { fr: "parlez-vous anglais?", pinyin: "nǐ huì shuō yīngyǔ ma?", pinyinFR: "parlez-vous anglais ?", type: "question" },
  "多少钱？": { fr: "combien ça coûte?", pinyin: "duōshǎo qián?", pinyinFR: "combien ça coûte ?", type: "question" },
  "...在哪儿？": { fr: "où est...?", pinyin: "... zài nǎr?", pinyinFR: "où est... ?", type: "question" },
  "我叫...": { fr: "je m'appelle...", pinyin: "wǒ jiào...", pinyinFR: "je m'appelle...", type: "expression" },
  "很高兴认识你": { fr: "enchanté", pinyin: "hěn gāoxìng rènshi nǐ", pinyinFR: "enchanté", type: "expression" },
  "晚安": { fr: "bonne nuit", pinyin: "wǎn'ān", pinyinFR: "bonne nuit", type: "expression" },
  "祝你有美好的一天": { fr: "bonne journée", pinyin: "zhù nǐ yǒu měihǎo de yītiān", pinyinFR: "bonne journée", type: "expression" },
  "回头见": { fr: "à bientôt", pinyin: "huítóu jiàn", pinyinFR: "à bientôt", type: "expression" },
  "恭喜": { fr: "félicitations", pinyin: "gōngxǐ", pinyinFR: "félicitations", type: "expression" },
  "祝你好运": { fr: "bonne chance", pinyin: "zhù nǐ hǎoyùn", pinyinFR: "bonne chance", type: "expression" },
  "我爱你": { fr: "je t'aime", pinyin: "wǒ ài nǐ", pinyinFR: "je t'aime", type: "expression" },
  "明天见": { fr: "à demain", pinyin: "míngtiān jiàn", pinyinFR: "à demain", type: "expression" },
  "狗": { fr: "chien", pinyin: "gǒu", pinyinFR: "chien", type: "nom", genre: "m" },
  "猫": { fr: "chat", pinyin: "māo", pinyinFR: "chat", type: "nom", genre: "m" },
  "我": { fr: "je", pinyin: "wǒ", pinyinFR: "je / moi", type: "pronom" },
  "你": { fr: "tu", pinyin: "nǐ", pinyinFR: "tu / toi", type: "pronom" },
  "他": { fr: "il", pinyin: "tā", pinyinFR: "il / lui", type: "pronom" },
  "她": { fr: "elle", pinyin: "tā", pinyinFR: "elle", type: "pronom" },
  "我们": { fr: "nous", pinyin: "wǒmen", pinyinFR: "nous", type: "pronom" },
  "你们": { fr: "vous", pinyin: "nǐmen", pinyinFR: "vous", type: "pronom" },
  "他们": { fr: "ils", pinyin: "tāmen", pinyinFR: "ils", type: "pronom" },
  "她们": { fr: "elles", pinyin: "tāmen", pinyinFR: "elles", type: "pronom" },
  "去": { fr: "aller", pinyin: "qù", pinyinFR: "aller", type: "verbe" },
  "来": { fr: "venir", pinyin: "lái", pinyinFR: "venir", type: "verbe" },
  "吃": { fr: "manger", pinyin: "chī", pinyinFR: "manger", type: "verbe" },
  "喝": { fr: "boire", pinyin: "hē", pinyinFR: "boire", type: "verbe" },
  "做": { fr: "faire", pinyin: "zuò", pinyinFR: "faire", type: "verbe" },
  "说": { fr: "dire", pinyin: "shuō", pinyinFR: "dire", type: "verbe" },
  "听": { fr: "écouter", pinyin: "tīng", pinyinFR: "écouter", type: "verbe" },
  "看": { fr: "regarder", pinyin: "kàn", pinyinFR: "regarder", type: "verbe" },
  "买": { fr: "acheter", pinyin: "mǎi", pinyinFR: "acheter", type: "verbe" },
  "卖": { fr: "vendre", pinyin: "mài", pinyinFR: "vendre", type: "verbe" },
  "懂": { fr: "comprendre", pinyin: "dǒng", pinyinFR: "comprendre", type: "verbe" },
  "问": { fr: "demander", pinyin: "wèn", pinyinFR: "demander", type: "verbe" },
  "回答": { fr: "répondre", pinyin: "huídá", pinyinFR: "répondre", type: "verbe" },
  "喜欢": { fr: "aimer", pinyin: "xǐhuān", pinyinFR: "aimer", type: "verbe" },
  "爱": { fr: "aimer (amour)", pinyin: "ài", pinyinFR: "aimer (amour)", type: "verbe" },
  "好": { fr: "bon / bien", pinyin: "hǎo", pinyinFR: "bon / bien", type: "adjectif" },
  "坏": { fr: "mauvais", pinyin: "huài", pinyinFR: "mauvais", type: "adjectif" },
  "大": { fr: "grand", pinyin: "dà", pinyinFR: "grand", type: "adjectif" },
  "小": { fr: "petit", pinyin: "xiǎo", pinyinFR: "petit", type: "adjectif" },
  "新": { fr: "nouveau", pinyin: "xīn", pinyinFR: "nouveau", type: "adjectif" },
  "老": { fr: "vieux", pinyin: "lǎo", pinyinFR: "vieux", type: "adjectif" },
  "漂亮": { fr: "beau / joli", pinyin: "piàoliang", pinyinFR: "beau / joli", type: "adjectif" },
  "丑": { fr: "laid", pinyin: "chǒu", pinyinFR: "laid", type: "adjectif" },
  "热": { fr: "chaud", pinyin: "rè", pinyinFR: "chaud", type: "adjectif" },
  "冷": { fr: "froid", pinyin: "lěng", pinyinFR: "froid", type: "adjectif" },
  "快": { fr: "rapide", pinyin: "kuài", pinyinFR: "rapide", type: "adjectif" },
  "慢": { fr: "lent", pinyin: "màn", pinyinFR: "lent", type: "adjectif" }
  // … continuer jusqu'à 100 expressions
};

const dictionnairePinyin = {
   "nǐ hǎo": { fr: "bonjour", hanzi: "你好", type: "nom", genre: "m" },
  "xièxie": { fr: "merci", hanzi: "谢谢", type: "nom", genre: "m" },
  "zàijiàn": { fr: "au revoir", hanzi: "再见", type: "nom", genre: "m" },
  "qǐng": { fr: "s’il vous plaît", hanzi: "请", type: "expression" },
  "duìbuqǐ": { fr: "désolé", hanzi: "对不起", type: "expression" },
  "shì": { fr: "oui", hanzi: "是", type: "adverbe" },
  "bú shì": { fr: "non", hanzi: "不是", type: "adverbe" },
  "wǒ bù dǒng": { fr: "je ne comprends pas", hanzi: "我不懂", type: "expression" },
  "nǐ huì shuō yīngyǔ ma?": { fr: "parlez-vous anglais?", hanzi: "你会说英语吗？", type: "question" },
  "duōshǎo qián?": { fr: "combien ça coûte?", hanzi: "多少钱？", type: "question" },
  "... zài nǎr?": { fr: "où est...?", hanzi: "...在哪儿？", type: "question" },
  "wǒ jiào...": { fr: "je m'appelle...", hanzi: "我叫...", type: "expression" },
  "hěn gāoxìng rènshi nǐ": { fr: "enchanté", hanzi: "很高兴认识你", type: "expression" },
  "wǎn'ān": { fr: "bonne nuit", hanzi: "晚安", type: "expression" },
  "zhù nǐ yǒu měihǎo de yītiān": { fr: "bonne journée", hanzi: "祝你有美好的一天", type: "expression" },
  "huítóu jiàn": { fr: "à bientôt", hanzi: "回头见", type: "expression" },
  "gōngxǐ": { fr: "félicitations", hanzi: "恭喜", type: "expression" },
  "zhù nǐ hǎoyùn": { fr: "bonne chance", hanzi: "祝你好运", type: "expression" },
  "wǒ ài nǐ": { fr: "je t'aime", hanzi: "我爱你", type: "expression" },
  "míngtiān jiàn": { fr: "à demain", hanzi: "明天见", type: "expression" },
  "gǒu": { fr: "chien", hanzi: "狗", type: "nom", genre: "m" },
  "māo": { fr: "chat", hanzi: "猫", type: "nom", genre: "m" },
  "wǒ": { fr: "je", hanzi: "我", type: "pronom" },
  "nǐ": { fr: "tu", hanzi: "你", type: "pronom" },
  "tā": { fr: "il / elle", hanzi: "他/她", type: "pronom" },
  "wǒmen": { fr: "nous", hanzi: "我们", type: "pronom" }
  // … continuer jusqu'à 100 expressions
};

// --- FONCTIONS ---
// --- FONCTIONS AMÉLIORÉES ---
// --- FONCTIONS UNIFIÉES ET AMÉLIORÉES ---

function phraseFRtoCN(mot) {
  const entry = dictionnaireFR[mot.toLowerCase()];
  if (!entry) return { erreur: "Mot non trouvé dans le dictionnaire français." };

  const { hanzi, pinyin, type, genre } = entry;

  // Phrase exemple selon le type
  switch(type) {
    case "verbe":
      const phrasesVerbe = {
        "manger": ["我在吃饭。", "Wǒ zài chī fàn."],
        "boire": ["我在喝水。", "Wǒ zài hē shuǐ."],
        "aller": ["我去学校。", "Wǒ qù xuéxiào."],
        "venir": ["我来学校。", "Wǒ lái xuéxiào."],
        "dire": ["我说中文。", "Wǒ shuō zhōngwén."],
        "écouter": ["我在听音乐。", "Wǒ zài tīng yīnyuè."],
        "regarder": ["我在看电视。", "Wǒ zài kàn diànshì."],
        "acheter": ["我买东西。", "Wǒ mǎi dōngxī."],
        "vendre": ["我卖东西。", "Wǒ mài dōngxī."],
        "comprendre": ["我不懂。", "Wǒ bù dǒng."],
        "demander": ["我问问题。", "Wǒ wèn wèntí."],
        "répondre": ["我回答问题。", "Wǒ huídá wèntí."],
        "aimer": ["我喜欢你。", "Wǒ xǐhuān nǐ."],
        "aimer(amour)": ["我爱你。", "Wǒ ài nǐ."]
      };
      const phrase = phrasesVerbe[mot.toLowerCase()] || [`我在${hanzi}。`, `Wǒ zài ${pinyin}.`];
      return { cn: phrase[0], py: phrase[1], exemple: `${mot.charAt(0).toUpperCase() + mot.slice(1)}.` };

    case "nom":
      return { 
        cn: `我有${hanzi}。`,
        py: `Wǒ yǒu ${pinyin}.`,
        exemple: `J’ai ${genre === "f" ? "une" : "un"} ${mot}.`
      };

    case "adjectif":
      return { 
        cn: `${hanzi} 很好。`,
        py: `${pinyin} hěn hǎo.`,
        exemple: `Le/la ${mot} est très bien.` 
      };

    case "pronom":
      return { cn: hanzi, py: pinyin, exemple: `${mot.charAt(0).toUpperCase() + mot.slice(1)}.` };

    default:
      return { erreur: "Type de mot inconnu." };
  }
}

function phraseCNtoFR(phrase) {
  const cleaned = phrase.replace(/[。!?]/g, "");
  const found = Object.keys(dictionnaireCN).find(hz => cleaned.includes(hz));
  if (!found) return { erreur: "Mot non trouvé dans le dictionnaire chinois." };

  const { fr, type, genre, pinyin } = dictionnaireCN[found];

  switch(type) {
    case "verbe": return { chinois: phrase, pinyin, exemple: `${fr.charAt(0).toUpperCase() + fr.slice(1)}.` };
    case "nom": return { chinois: phrase, pinyin, exemple: `J’ai ${genre === "f" ? "une" : "un"} ${fr}.` };
    case "adjectif": return { chinois: phrase, pinyin, exemple: `Le/la ${fr} est très bien.` };
    case "pronom": return { chinois: phrase, pinyin, exemple: `${fr.charAt(0).toUpperCase() + fr.slice(1)}.` };
    default: return { erreur: "Type de mot inconnu." };
  }
}

function pinyinToFR(py) {
  const entry = dictionnairePinyin[py];
  if (!entry) return { erreur: "Pinyin non trouvé dans le dictionnaire." };

  const { fr, hanzi, type, genre } = entry;

  switch(type) {
    case "verbe": return { pinyin: py, chinois: hanzi, exemple: `${fr.charAt(0).toUpperCase() + fr.slice(1)}.` };
    case "nom": return { pinyin: py, chinois: hanzi, exemple: `J’ai ${genre === "f" ? "une" : "un"} ${fr}.` };
    case "adjectif": return { pinyin: py, chinois: hanzi, exemple: `Le/la ${fr} est très bien.` };
    case "pronom": return { pinyin: py, chinois: hanzi, exemple: `${fr.charAt(0).toUpperCase() + fr.slice(1)}.` };
    default: return { erreur: "Type de mot inconnu." };
  }
}

// --- Fonction principale ---
function translateWord() {
  const mot = document.getElementById("searchInput").value.trim();
  const direction = document.getElementById("direction").value;
  let resultat = "";

  if (!mot) {
    resultat = "Veuillez entrer un mot.";
  } else {
    let phrase;
    if (direction === "fr-cn") {
      phrase = phraseFRtoCN(mot);
      resultat = phrase.erreur ? phrase.erreur : `Chinois : ${phrase.cn}<br>Pinyin : ${phrase.py}<br>Exemple : ${phrase.exemple}`;
    } else if (direction === "cn-fr") {
      phrase = phraseCNtoFR(mot);
      resultat = phrase.erreur ? phrase.erreur : `Chinois : ${phrase.chinois}<br>Pinyin : ${phrase.pinyin}<br>Exemple : ${phrase.exemple}`;
    } else if (direction === "pinyin-fr") {
      phrase = pinyinToFR(mot);
      resultat = phrase.erreur ? phrase.erreur : `Pinyin : ${phrase.pinyin}<br>Chinois : ${phrase.chinois}<br>Exemple : ${phrase.exemple}`;
    }
  }

  document.getElementById("resultat").innerHTML = resultat;
}
