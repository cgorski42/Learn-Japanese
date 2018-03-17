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
    q_mode: 1,
    
    num_options: 4,
    options: ["n/a","n/a","n/a","n/a"],
    opt_colors: ["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"],
    answer: 0,
    ans_mode: AlphaEnum.ROMAJI,
    
    num_jap_char: 45,
    alphabet: [],/*
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
        {question: "n/a", answer: "n/a", hiragana:"みょ" , katakana:"リョ" , romaji: "ryo" , type: 3 , correct:0, attempts:0, rating:0 },],*/

    checkedNames: ["0","2"],
    
    tenten: false,
    tentenIdx: 46,
    numTenten: 25,
    
    yoon: false,
    yoonIdx: 71,
    
    showStats: false,
    showOpts: false,
    warning: false,
    score: 0,
    attempts: 0,
    stats: ''
  },
  created: function() {
      this.getOptions();
      this.questionMode(this.q_mode, this.ans_mode);
      this.nextQuestion();
  },
  methods: {
   getOptions: function(){
       axios.get("/api/alphabet/").then(response => {
          console.log("Got response!");
          console.log(response.data.length);
          this.alphabet = response.data;
          console.log(this.alphabet.length);
          return true;
        }).catch(err => {
      });
   },
   questionMode: function(q, a)
   {
       q = parseInt(q);
       a = parseInt(a);
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
       this.opt_colors = ["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"];
       for(i=0;i < this.num_options;i++)
       {
            var cont = true;
            while(cont)
            {
                this.question_num = Math.floor(Math.random()*this.num_jap_char);
                if(!this.tenten && this.question_num >= this.tentenIdx)
                {
                    this.question_num += this.numTenten;
                }
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
          i = Math.floor(Math.random() * this.checkedNames.length);
          if(this.checkedNames.length === 3)
          {
              do
              {
                  j = Math.floor(Math.random() * 3);
              }while (i === j);
          }
          else{
              j = (i===0) ? 1 : 0;
          }

          this.q_mode = this.checkedNames[i];
          this.ans_mode = this.checkedNames[j];
          
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
            this.opt_colors[answer] = "#69A561";
            this.score += 1;
            this.alphabet[this.question_num].correct += 1;   
            setTimeout(this.nextQuestion, 350);
        }
        else
        {
            this.opt_colors[answer] = "#ED5C68";
        }
        this.alphabet[this.question_num].rating = this.alphabet[this.question_num].correct / this.alphabet[this.question_num].attempts;    
  },
  setPage: function(page)
  {
      if(page === 1)
      {
          this.showStats = false;
          this.showOpts = false;
      } else if(page === 2){
          this.showStats = false;
          this.showOpts = true;
      } else if (page === 3)
      {
          this.showStats = true;
          this.showOpts = false;
      }
  },
  saveStats: function()
  {
      if(this.checkedNames.length <=1){ 
        this.warning = true;
      }
      else{
        this.warning = false;
        
        this.num_jap_char = 45;
        if(this.tenten) this.num_jap_char += 25;
        if(this.yoon) this.num_jap_char += 24;
    
        this.questionMode(this.checkedNames[0],this.checkedNames[1]);
        console.log(this.checkedNames);
        
        this.setPage(1);
        this.nextQuestion();
      }
  }
  }
});