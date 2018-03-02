/*
To do:
    Stop buttons from changing size
    Color change on wrong answer
    Statistics
*/

var AlphaEnum = {
  HIRAGANA: 0,
  KATAKANA: 1,
  ROMAJI: 2,
};

var quiz = new Vue({
  el: '#quiz',
  data: {
    character: '',
    progress: '',

    question_num: 0,
    question:"n/a",
    q_mode: AlphaEnum.HIRAGANA,
    
    num_options: 4,
    options: ["n/a","n/a","n/a","n/a"],
    answer: 0,
    ans_mode: AlphaEnum.ROMAJI,
    
    num_jap_char: 71,
    alphabet: [
        {question: "n/a", answer: "n/a", hiragana:"あ" , katakana:"ア" , romaji: "a" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"い" , katakana:"イ" , romaji: "i" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"う" , katakana:"ウ" , romaji: "u" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"え" , katakana:"エ" , romaji: "e" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"お" , katakana:"オ" , romaji: "o" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"か" , katakana:"カ" , romaji: "ka" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"き" , katakana:"キ" , romaji: "ki" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"く" , katakana:"ク" , romaji: "ku" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"け" , katakana:"ケ" , romaji: "ke" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"こ" , katakana:"コ" , romaji: "ko" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"が" , katakana:"ガ" , romaji: "ga" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぎ" , katakana:"ギ" , romaji: "gi" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぐ" , katakana:"グ" , romaji: "gu" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"げ" , katakana:"ゲ" , romaji: "ge" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ご" , katakana:"ゴ" , romaji: "go" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"さ" , katakana:"サ" , romaji: "sa" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"し" , katakana:"シ" , romaji: "shi" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"す" , katakana:"ス" , romaji: "su" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"せ" , katakana:"セ" , romaji: "se" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"そ" , katakana:"ソ" , romaji: "so" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ざ" , katakana:"ザ" , romaji: "za" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"じ" , katakana:"ジ" , romaji: "ji" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ず" , katakana:"ズ" , romaji: "zu" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぜ" , katakana:"ゼ" , romaji: "ze" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぞ" , katakana:"ゾ" , romaji: "zo" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"た" , katakana:"タ" , romaji: "ta" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ち" , katakana:"チ" , romaji: "chi" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"つ" , katakana:"ツ" , romaji: "tsu" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"て" , katakana:"テ" , romaji: "te" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"と" , katakana:"ト" , romaji: "to" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"だ" , katakana:"ダ" , romaji: "da" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぢ" , katakana:"ヂ" , romaji: "ji" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"づ" , katakana:"ヅ" , romaji: "dzu" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"で" , katakana:"デ" , romaji: "de" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ど" , katakana:"ド" , romaji: "do" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"な" , katakana:"ナ" , romaji: "na" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"に" , katakana:"ニ" , romaji: "ni" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぬ" , katakana:"ヌ" , romaji: "nu" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ね" , katakana:"ネ" , romaji: "ne" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"の" , katakana:"ノ" , romaji: "no" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"は" , katakana:"ハ" , romaji: "ha" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ひ" , katakana:"ヒ" , romaji: "hi" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ふ" , katakana:"フ" , romaji: "fu" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"へ" , katakana:"ヘ" , romaji: "he" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ほ" , katakana:"ホ" , romaji: "ho" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ば" , katakana:"バ" , romaji: "ba" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"び" , katakana:"ビ" , romaji: "bi" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぶ" , katakana:"ブ" , romaji: "bu" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"べ" , katakana:"ベ" , romaji: "be" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぼ" , katakana:"ボ" , romaji: "bo" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぱ" , katakana:"パ" , romaji: "pa" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぴ" , katakana:"ピ" , romaji: "pi" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぷ" , katakana:"プ" , romaji: "pu" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぺ" , katakana:"ペ" , romaji: "pe" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ぽ" , katakana:"ポ" , romaji: "po" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ま" , katakana:"マ" , romaji: "ma" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"み" , katakana:"ミ" , romaji: "mi" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"む" , katakana:"ム" , romaji: "mu" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"め" , katakana:"メ" , romaji: "me" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"も" , katakana:"モ" , romaji: "mo" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"や" , katakana:"ヤ" , romaji: "ya" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ゆ" , katakana:"ユ" , romaji: "yu" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"よ" , katakana:"ヨ" , romaji: "yo" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ら" , katakana:"ラ" , romaji: "ra" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"り" , katakana:"リ" , romaji: "ri" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"る" , katakana:"ル" , romaji: "ru" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"れ" , katakana:"レ" , romaji: "re" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ろ" , katakana:"ロ" , romaji: "ro" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"わ" , katakana:"ワ" , romaji: "wa" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"を" , katakana:"ヲ" , romaji: "wo" , correct:0, attempts:0, rating:0 },
        {question: "n/a", answer: "n/a", hiragana:"ん" , katakana:"ン" , romaji: "n/m" , correct:0, attempts:0, rating:0 },],
   score: 0,
   attempts: 0,
   stats: ''
  },
  created: function() {
      this.questionMode(this.q_mode, this.ans_mode);
      this.nextQuestion();
  },
  methods: {
   questionMode: function(q, a)
   {
       this.alphabet = this.alphabet.map(function(item, idx){
        switch(q){
            case AlphaEnum.HIRAGANA:
                item.question = item.hiragana;
                break;
            case AlphaEnum.KATAKANA:
                item.question = item.katakana;
                break;
            case AlphaEnum.ROMAJI:
                item.question = item.romaji;
                break;
        }
        switch(a){
           case AlphaEnum.HIRAGANA:
               item.answer = item.hiragana;
               break;
           case AlphaEnum.KATAKANA:
               item.answer = item.katakana;
               break;
           case AlphaEnum.ROMAJI:
               item.answer = item.romaji;
               break;
        }
        return item;
       });
   },
   nextQuestion: function()
   {
       for(i=0;i < this.num_options;i++)
       {
            var cont = true;
            while(cont)
            {
                this.question_num = Math.floor(Math.random()*this.num_jap_char);
                cont = false;
                for (j = 0; j < i; j++)
                {
                    if (this.options[j] === this.question_num) 
                    {
                        cont = true;
                        break;
                    }
                }
            }
            this.options[i] = this.question_num;
       }
       
       if(Math.floor(Math.random() * 2) === 0) // occasionally switch mode
       {
          temp = this.q_mode;
          this.q_mode = this.ans_mode;
          this.ans_mode = temp;
          this.questionMode(this.q_mode, this.ans_mode); 
       }
       this.answer  = Math.floor(Math.random() * this.num_options);
       this.question = this.alphabet[this.options[this.answer]].question;       
       for(i=0;i < this.num_options;i++)
       {
           this.options[i] = this.alphabet[this.options[i]].answer;
       }
   },
   checkAnswer: function(answer)
   {
        this.attempts += 1;
        this.alphabet[this.question_num].attempts += 1;
        if(this.answer === answer)
        { 
            this.score += 1;
            this.alphabet[this.question_num].correct += 1;        
            this.nextQuestion();
        }
        else
        {}
        //this.alphabet[this.question_num].rating = this.alphabet[this.question_num].correct / this.alphabet[this.question_num].attempts;
         
   },
  }
});