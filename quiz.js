/*
To do:
    Stop buttons from changing size
    Color change on wrong answer
    Statistics
*/

var quiz = new Vue({
  el: '#quiz',
  data: {
    character: '',
    progress: '',
    num_options: 4,
    num_jap_char: 71,
    question_num: 0,
    question:"n/a",
    answer: 0,
    options: ["n/a","n/a","n/a","n/a"],
    alphabet: [
        {hiragana:"あ" , katakana:"ア" , romaji: "a" , correct:0, attempts:0 },
        {hiragana:"い" , katakana:"イ" , romaji: "i" , correct:0, attempts:0 },
        {hiragana:"う" , katakana:"ウ" , romaji: "u" , correct:0, attempts:0 },
        {hiragana:"え" , katakana:"エ" , romaji: "e" , correct:0, attempts:0 },
        {hiragana:"お" , katakana:"オ" , romaji: "o" , correct:0, attempts:0 },
        {hiragana:"か" , katakana:"カ" , romaji: "ka" , correct:0, attempts:0 },
        {hiragana:"き" , katakana:"キ" , romaji: "ki" , correct:0, attempts:0 },
        {hiragana:"く" , katakana:"ク" , romaji: "ku" , correct:0, attempts:0 },
        {hiragana:"け" , katakana:"ケ" , romaji: "ke" , correct:0, attempts:0 },
        {hiragana:"こ" , katakana:"コ" , romaji: "ko" , correct:0, attempts:0 },
        {hiragana:"が" , katakana:"ガ" , romaji: "ga" , correct:0, attempts:0 },
        {hiragana:"ぎ" , katakana:"ギ" , romaji: "gi" , correct:0, attempts:0 },
        {hiragana:"ぐ" , katakana:"グ" , romaji: "gu" , correct:0, attempts:0 },
        {hiragana:"げ" , katakana:"ゲ" , romaji: "ge" , correct:0, attempts:0 },
        {hiragana:"ご" , katakana:"ゴ" , romaji: "go" , correct:0, attempts:0 },
        {hiragana:"さ" , katakana:"サ" , romaji: "sa" , correct:0, attempts:0 },
        {hiragana:"し" , katakana:"シ" , romaji: "shi" , correct:0, attempts:0 },
        {hiragana:"す" , katakana:"ス" , romaji: "su" , correct:0, attempts:0 },
        {hiragana:"せ" , katakana:"セ" , romaji: "se" , correct:0, attempts:0 },
        {hiragana:"そ" , katakana:"ソ" , romaji: "so" , correct:0, attempts:0 },
        {hiragana:"ざ" , katakana:"ザ" , romaji: "za" , correct:0, attempts:0 },
        {hiragana:"じ" , katakana:"ジ" , romaji: "ji" , correct:0, attempts:0 },
        {hiragana:"ず" , katakana:"ズ" , romaji: "zu" , correct:0, attempts:0 },
        {hiragana:"ぜ" , katakana:"ゼ" , romaji: "ze" , correct:0, attempts:0 },
        {hiragana:"ぞ" , katakana:"ゾ" , romaji: "zo" , correct:0, attempts:0 },
        {hiragana:"た" , katakana:"タ" , romaji: "ta" , correct:0, attempts:0 },
        {hiragana:"ち" , katakana:"チ" , romaji: "chi" , correct:0, attempts:0 },
        {hiragana:"つ" , katakana:"ツ" , romaji: "tsu" , correct:0, attempts:0 },
        {hiragana:"て" , katakana:"テ" , romaji: "te" , correct:0, attempts:0 },
        {hiragana:"と" , katakana:"ト" , romaji: "to" , correct:0, attempts:0 },
        {hiragana:"だ" , katakana:"ダ" , romaji: "da" , correct:0, attempts:0 },
        {hiragana:"ぢ" , katakana:"ヂ" , romaji: "ji" , correct:0, attempts:0 },
        {hiragana:"づ" , katakana:"ヅ" , romaji: "dzu" , correct:0, attempts:0 },
        {hiragana:"で" , katakana:"デ" , romaji: "de" , correct:0, attempts:0 },
        {hiragana:"ど" , katakana:"ド" , romaji: "do" , correct:0, attempts:0 },
        {hiragana:"な" , katakana:"ナ" , romaji: "na" , correct:0, attempts:0 },
        {hiragana:"に" , katakana:"ニ" , romaji: "ni" , correct:0, attempts:0 },
        {hiragana:"ぬ" , katakana:"ヌ" , romaji: "nu" , correct:0, attempts:0 },
        {hiragana:"ね" , katakana:"ネ" , romaji: "ne" , correct:0, attempts:0 },
        {hiragana:"の" , katakana:"ノ" , romaji: "no" , correct:0, attempts:0 },
        {hiragana:"は" , katakana:"ハ" , romaji: "ha" , correct:0, attempts:0 },
        {hiragana:"ひ" , katakana:"ヒ" , romaji: "hi" , correct:0, attempts:0 },
        {hiragana:"ふ" , katakana:"フ" , romaji: "fu" , correct:0, attempts:0 },
        {hiragana:"へ" , katakana:"ヘ" , romaji: "he" , correct:0, attempts:0 },
        {hiragana:"ほ" , katakana:"ホ" , romaji: "ho" , correct:0, attempts:0 },
        {hiragana:"ば" , katakana:"バ" , romaji: "ba" , correct:0, attempts:0 },
        {hiragana:"び" , katakana:"ビ" , romaji: "bi" , correct:0, attempts:0 },
        {hiragana:"ぶ" , katakana:"ブ" , romaji: "bu" , correct:0, attempts:0 },
        {hiragana:"べ" , katakana:"ベ" , romaji: "be" , correct:0, attempts:0 },
        {hiragana:"ぼ" , katakana:"ボ" , romaji: "bo" , correct:0, attempts:0 },
        {hiragana:"ぱ" , katakana:"パ" , romaji: "pa" , correct:0, attempts:0 },
        {hiragana:"ぴ" , katakana:"ピ" , romaji: "pi" , correct:0, attempts:0 },
        {hiragana:"ぷ" , katakana:"プ" , romaji: "pu" , correct:0, attempts:0 },
        {hiragana:"ぺ" , katakana:"ペ" , romaji: "pe" , correct:0, attempts:0 },
        {hiragana:"ぽ" , katakana:"ポ" , romaji: "po" , correct:0, attempts:0 },
        {hiragana:"ま" , katakana:"マ" , romaji: "ma" , correct:0, attempts:0 },
        {hiragana:"み" , katakana:"ミ" , romaji: "mi" , correct:0, attempts:0 },
        {hiragana:"む" , katakana:"ム" , romaji: "mu" , correct:0, attempts:0 },
        {hiragana:"め" , katakana:"メ" , romaji: "me" , correct:0, attempts:0 },
        {hiragana:"も" , katakana:"モ" , romaji: "mo" , correct:0, attempts:0 },
        {hiragana:"や" , katakana:"ヤ" , romaji: "ya" , correct:0, attempts:0 },
        {hiragana:"ゆ" , katakana:"ユ" , romaji: "yu" , correct:0, attempts:0 },
        {hiragana:"よ" , katakana:"ヨ" , romaji: "yo" , correct:0, attempts:0 },
        {hiragana:"ら" , katakana:"ラ" , romaji: "ra" , correct:0, attempts:0 },
        {hiragana:"り" , katakana:"リ" , romaji: "ri" , correct:0, attempts:0 },
        {hiragana:"る" , katakana:"ル" , romaji: "ru" , correct:0, attempts:0 },
        {hiragana:"れ" , katakana:"レ" , romaji: "re" , correct:0, attempts:0 },
        {hiragana:"ろ" , katakana:"ロ" , romaji: "ro" , correct:0, attempts:0 },
        {hiragana:"わ" , katakana:"ワ" , romaji: "wa" , correct:0, attempts:0 },
        {hiragana:"を" , katakana:"ヲ" , romaji: "wo" , correct:0, attempts:0 },
        {hiragana:"ん" , katakana:"ン" , romaji: "n/m" , correct:0, attempts:0 },],
   score: 0,
   attempts: 0,
   stats: ''
  },
  created: function() {
      this.nextQuestion()
  },
  methods: {
   nextQuestion: function()
   {
       for(i=0;i < this.num_options;i++)
       {
            var cont = true;
            while(cont)
            {
                var ans = Math.floor(Math.random()*this.num_jap_char);
                cont = false;
                for (j = 0; j < i; j++)
                {
                    if (this.options[j] === ans) 
                    {
                        cont = true;
                        break;
                    }
                }
            }
            this.options[i] = ans;
       }
       
       this.answer  = Math.floor(Math.random() * this.num_options);
       this.question = this.alphabet[this.options[this.answer]].hiragana;
       
       for(i=0;i < this.num_options;i++)
       {
           this.options[i] = this.alphabet[this.options[i]].romaji;
       }
   },
   checkAnswer: function(answer)
   {
       this.attempts += 1;
       this.options[this.answer].attempts += 1;
       if(this.answer === answer)
       { 
         this.score += 1;
         this.options[this.answer].correct += 1;        
         this.nextQuestion();
       }
       else
       {}
   },
  }
});