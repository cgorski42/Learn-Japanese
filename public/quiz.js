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
    alphabet: [],

    checkedNames: ["0","2"],
    
    tenten: false,
    tentenIdx: 46,
    numTenten: 25,
    
    yoon: false,
    yoonIdx: 71,
    
    showStats: false,
    showOpts:true,
    warning: false,
    score: 0,
    attempts: 0,
    stats: ''
  },
  created: function() {
      this.getOptions();
      this.questionMode(this.q_mode, this.ans_mode);
      setTimeout(this.nextQuestion(),100);
  },
  methods: {
   getOptions: function(){
       axios.get("/api/alphabet/").then(response => {
          this.alphabet = response.data.alpha;
          this.tenten = response.data.tenten;
          this.yoon = response.data.yoon;
          this.numChars = response.data.numChars;
          this.setPage(response.data.curPage);
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
   updateStats: function(alpha, idx) {
      axios.put("/api/alphabet/" + idx, {
        attempts: alpha.attempts;
        correct: alpha.correct;
      }).then(response => {
        return true;
      }).catch(err => {
      }); 
   },
  updateOpts: function() {
      axios.put("/api/options/", {
        tenten: this.tenten;
        yoon: this.yoon;
        numChars: this.num_jap_char;
      }).then(response => {
        return true;
      }).catch(err => {
      }); 
   },
   updatePage: function(page) {
      axios.put("/api/pageNum/", {
        curPage = page,
      }).then(response => {
        return true;
      }).catch(err => {
      }); 
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
        this.updateStats(this.alphabet[this.question_num],this.question_num);
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
      this.updatePage(page);
  },
  saveOpts: function()
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
        
        this.updateOpts;
        this.setPage(1);
        this.nextQuestion();
      }
  }
  }
});
