const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))

let alphabet = [
        {question: "n/a", answer: "n/a", hiragana:"あ" , katakana:"ア" , romaji: "a" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"え" , katakana:"エ" , romaji: "e" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"い" , katakana:"イ" , romaji: "i" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"お" , katakana:"オ" , romaji: "o" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"う" , katakana:"ウ" , romaji: "u" , type: 0 , correct:0, attempts:0, rating:0 },

        {question: "n/a", answer: "n/a", hiragana:"か" , katakana:"カ" , romaji: "ka" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"き" , katakana:"キ" , romaji: "ki" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"く" , katakana:"ク" , romaji: "ku" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"け" , katakana:"ケ" , romaji: "ke" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"こ" , katakana:"コ" , romaji: "ko" , type: 0 , correct:0, attempts:0, rating:0 },

        {question: "n/a", answer: "n/a", hiragana:"さ" , katakana:"サ" , romaji: "sa" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"し" , katakana:"シ" , romaji: "shi" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"す" , katakana:"ス" , romaji: "su" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"せ" , katakana:"セ" , romaji: "se" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"そ" , katakana:"ソ" , romaji: "so" , type: 0 , correct:0, attempts:0, rating:0 },

        {question: "n/a", answer: "n/a", hiragana:"た" , katakana:"タ" , romaji: "ta" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ち" , katakana:"チ" , romaji: "chi" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"つ" , katakana:"ツ" , romaji: "tsu" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"て" , katakana:"テ" , romaji: "te" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"と" , katakana:"ト" , romaji: "to" , type: 0 , correct:0, attempts:0, rating:0 },

        {question: "n/a", answer: "n/a", hiragana:"な" , katakana:"ナ" , romaji: "na" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"に" , katakana:"ニ" , romaji: "ni" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぬ" , katakana:"ヌ" , romaji: "nu" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ね" , katakana:"ネ" , romaji: "ne" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"の" , katakana:"ノ" , romaji: "no" , type: 0 , correct:0, attempts:0, rating:0 },

        {question: "n/a", answer: "n/a", hiragana:"は" , katakana:"ハ" , romaji: "ha" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ひ" , katakana:"ヒ" , romaji: "hi" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ふ" , katakana:"フ" , romaji: "fu" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"へ" , katakana:"ヘ" , romaji: "he" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ほ" , katakana:"ホ" , romaji: "ho" , type: 0 , correct:0, attempts:0, rating:0 },

        {question: "n/a", answer: "n/a", hiragana:"ま" , katakana:"マ" , romaji: "ma" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"み" , katakana:"ミ" , romaji: "mi" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"む" , katakana:"ム" , romaji: "mu" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"め" , katakana:"メ" , romaji: "me" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"も" , katakana:"モ" , romaji: "mo" , type: 0 , correct:0, attempts:0, rating:0 },

        {question: "n/a", answer: "n/a", hiragana:"や" , katakana:"ヤ" , romaji: "ya" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ゆ" , katakana:"ユ" , romaji: "yu" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"よ" , katakana:"ヨ" , romaji: "yo" , type: 0 , correct:0, attempts:0, rating:0 },

        {question: "n/a", answer: "n/a", hiragana:"ら" , katakana:"ラ" , romaji: "ra" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"り" , katakana:"リ" , romaji: "ri" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"る" , katakana:"ル" , romaji: "ru" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"れ" , katakana:"レ" , romaji: "re" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ろ" , katakana:"ロ" , romaji: "ro" , type: 0 , correct:0, attempts:0, rating:0 },

        {question: "n/a", answer: "n/a", hiragana:"わ" , katakana:"ワ" , romaji: "wa" , type: 0 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"を" , katakana:"ヲ" , romaji: "wo" , type: 0 , correct:0, attempts:0, rating:0 },

        {question: "n/a", answer: "n/a", hiragana:"ん" , katakana:"ン" , romaji: "n/m" , type: 0 , correct:0, attempts:0, rating:0 },
        
        {question: "n/a", answer: "n/a", hiragana:"が" , katakana:"ガ" , romaji: "ga" , type: 1 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぎ" , katakana:"ギ" , romaji: "gi" , type: 1 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぐ" , katakana:"グ" , romaji: "gu" , type: 1 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"げ" , katakana:"ゲ" , romaji: "ge" , type: 1 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ご" , katakana:"ゴ" , romaji: "go" , type: 1 , correct:0, attempts:0, rating:0 },        
        
        {question: "n/a", answer: "n/a", hiragana:"ざ" , katakana:"ザ" , romaji: "za" , type: 1 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"じ" , katakana:"ジ" , romaji: "ji" , type: 1 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ず" , katakana:"ズ" , romaji: "zu" , type: 1 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぜ" , katakana:"ゼ" , romaji: "ze" , type: 1 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぞ" , katakana:"ゾ" , romaji: "zo" , type: 1 , correct:0, attempts:0, rating:0 },        
        
        {question: "n/a", answer: "n/a", hiragana:"だ" , katakana:"ダ" , romaji: "da" , type: 1 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぢ" , katakana:"ヂ" , romaji: "ji" , type: 1 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"づ" , katakana:"ヅ" , romaji: "dzu" , type: 1 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"で" , katakana:"デ" , romaji: "de" , type: 1 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ど" , katakana:"ド" , romaji: "do" , type: 1 , correct:0, attempts:0, rating:0 },        
        
        {question: "n/a", answer: "n/a", hiragana:"ば" , katakana:"バ" , romaji: "ba" , type: 1 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"び" , katakana:"ビ" , romaji: "bi" , type: 1 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぶ" , katakana:"ブ" , romaji: "bu" , type: 1 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"べ" , katakana:"ベ" , romaji: "be" , type: 1 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぼ" , katakana:"ボ" , romaji: "bo" , type: 1 , correct:0, attempts:0, rating:0 },        
        
        {question: "n/a", answer: "n/a", hiragana:"ぱ" , katakana:"パ" , romaji: "pa" , type: 1 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぴ" , katakana:"ピ" , romaji: "pi" , type: 1 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぷ" , katakana:"プ" , romaji: "pu" , type: 1 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぺ" , katakana:"ペ" , romaji: "pe" , type: 1 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぽ" , katakana:"ポ" , romaji: "po" , type: 1 , correct:0, attempts:0, rating:0 },
       
        {question: "n/a", answer: "n/a", hiragana:"きゃ" , katakana:"キャ" , romaji: "kya" , type: 3 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"きゅ" , katakana:"キュ" , romaji: "kyu" , type: 3 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"きょ" , katakana:"キョ" , romaji: "kyo" , type: 3 , correct:0, attempts:0, rating:0 },
        
        {question: "n/a", answer: "n/a", hiragana:"しゃ" , katakana:"シャ" , romaji: "sha" , type: 3 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"しゅ" , katakana:"シュ" , romaji: "shu" , type: 3 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"しょ" , katakana:"ショ" , romaji: "sho" , type: 3 , correct:0, attempts:0, rating:0 },
        
        {question: "n/a", answer: "n/a", hiragana:"しゃ" , katakana:"シャ" , romaji: "sha" , type: 3 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"しゅ" , katakana:"シュ" , romaji: "shu" , type: 3 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"しょ" , katakana:"ショ" , romaji: "sho" , type: 3 , correct:0, attempts:0, rating:0 },
        
        {question: "n/a", answer: "n/a", hiragana:"ちゃ" , katakana:"チャ" , romaji: "cha" , type: 3 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ちゅ" , katakana:"チュ" , romaji: "chu" , type: 3 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ちょ" , katakana:"チョ" , romaji: "cho" , type: 3 , correct:0, attempts:0, rating:0 },
        
        {question: "n/a", answer: "n/a", hiragana:"にゃ" , katakana:"ニャ" , romaji: "nya" , type: 3 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"にゅ" , katakana:"ニュ" , romaji: "nyu" , type: 3 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"にょ" , katakana:"ニョ" , romaji: "nyo" , type: 3 , correct:0, attempts:0, rating:0 },
        
        {question: "n/a", answer: "n/a", hiragana:"ひゃ" , katakana:"ヒャ" , romaji: "hya" , type: 3 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ひゅ" , katakana:"ヒュ" , romaji: "hyu" , type: 3 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ひょ" , katakana:"ヒョ" , romaji: "hyo" , type: 3 , correct:0, attempts:0, rating:0 },
        
        {question: "n/a", answer: "n/a", hiragana:"みゃ" , katakana:"ミャ" , romaji: "mya" , type: 3 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"みゅ" , katakana:"ミュ" , romaji: "myu" , type: 3 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"みょ" , katakana:"ミョ" , romaji: "myo" , type: 3 , correct:0, attempts:0, rating:0 },
        
        {question: "n/a", answer: "n/a", hiragana:"みゃ" , katakana:"リャ" , romaji: "rya" , type: 3 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"みゅ" , katakana:"リュ" , romaji: "ryu" , type: 3 , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"みょ" , katakana:"リョ" , romaji: "ryo" , type: 3 , correct:0, attempts:0, rating:0 },];
let opts = [false,false];
let numChars = 45;
let pageNum = 2;

app.get('/api/alphabet/', (req, res) => {
    res.send({alpha: alphabet, tenten: opts[0], yoon: opts[1], numChars: numChars, curPage:pageNum});
});

app.listen(3000, () => console.log('Server listening on port 3000!'));

app.put('/api/alphabet/:id', (req, res) => {
  let index = parseInt(req.params.id);
  let alpha = alphabet[index];
  
  alpha.correct = req.body.correct;
  alpha.attempts = req.body.attempts;
  res.send(alpha);
});

app.put('/api/options/', (req, res) => {
  opts[0] = req.body.tenten;
  opts[1] = req.body.yoon;
  numChars = req.body.numChars;
  
  res.send(alpha);
});

app.put('/api/pageNum/', (req, res) => {
  pageNum = req.curPage;
  res.send(pageNum);
});

app.delete('/api/alphabet/', (req, res) => {
  alphabet.map(alpha => {   
    alpha.correct = 0;
    alpha.attempts = 0; 
    return;
  });
  
  res.sendStatus(200);
});
