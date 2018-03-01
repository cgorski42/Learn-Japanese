/*
3. Color change 
4. Progress bar
*/

var quiz = new Vue({
  el: '#quiz',
  data: {
    character: '',
      progress: '',
      num_questions: 4,
      question_num: 0,
      num_jap_char: 71,
    question:"n/a",
   answer: 0,
      options: ["RIGHT ANSWER", "wrong answer" , "wrong answer", "wrong answer"],
      alphabet: [{hiragana:"あ" , katakana:"ア" , romaji: "a"},
		  {hiragana:"い" , katakana:"イ" , romaji: "i"},
		  {hiragana:"う" , katakana:"ウ" , romaji: "u"},
		  {hiragana:"え" , katakana:"エ" , romaji: "e"},
		  {hiragana:"お" , katakana:"オ" , romaji: "o"},
		  {hiragana:"か" , katakana:"カ" , romaji: "ka"},
		  {hiragana:"き" , katakana:"キ" , romaji: "ki"},
		  {hiragana:"く" , katakana:"ク" , romaji: "ku"},
		  {hiragana:"け" , katakana:"ケ" , romaji: "ke"},
		  {hiragana:"こ" , katakana:"コ" , romaji: "ko"},
		  {hiragana:"が" , katakana:"ガ" , romaji: "ga"},
		  {hiragana:"ぎ" , katakana:"ギ" , romaji: "gi"},
		  {hiragana:"ぐ" , katakana:"グ" , romaji: "gu"},
		  {hiragana:"げ" , katakana:"ゲ" , romaji: "ge"},
		  {hiragana:"ご" , katakana:"ゴ" , romaji: "go"},
		  {hiragana:"さ" , katakana:"サ" , romaji: "sa"},
		  {hiragana:"し" , katakana:"シ" , romaji: "shi"},
		  {hiragana:"す" , katakana:"ス" , romaji: "su"},
		  {hiragana:"せ" , katakana:"セ" , romaji: "se"},
		  {hiragana:"そ" , katakana:"ソ" , romaji: "so"},
		  {hiragana:"ざ" , katakana:"ザ" , romaji: "za"},
		  {hiragana:"じ" , katakana:"ジ" , romaji: "ji"},
		  {hiragana:"ず" , katakana:"ズ" , romaji: "zu"},
		  {hiragana:"ぜ" , katakana:"ゼ" , romaji: "ze"},
		  {hiragana:"ぞ" , katakana:"ゾ" , romaji: "zo"},
		  {hiragana:"た" , katakana:"タ" , romaji: "ta"},
		  {hiragana:"ち" , katakana:" チ" , romaji: "chi"},
		  {hiragana:"つ" , katakana:"ツ" , romaji: "tsu"},
		  {hiragana:"て" , katakana:"テ" , romaji: "te"},
		  {hiragana:"と" , katakana:"ト" , romaji: "to"},
		  {hiragana:"だ" , katakana:"ダ" , romaji: "da"},
		  {hiragana:"ぢ" , katakana:"ヂ" , romaji: "ji"},
		  {hiragana:"づ" , katakana:"ヅ" , romaji: "dzu"},
		  {hiragana:"で" , katakana:"デ" , romaji: "de"},
		  {hiragana:"ど" , katakana:"ド" , romaji: "do"},
		  {hiragana:"な" , katakana:"ナ" , romaji: "na"},
		  {hiragana:"に" , katakana:"ニ" , romaji: "ni"},
		  {hiragana:"ぬ" , katakana:"ヌ" , romaji: "nu"},
		  {hiragana:"ね" , katakana:"ネ" , romaji: "ne"},
		  {hiragana:"の" , katakana:"ノ" , romaji: "no"},
		  {hiragana:"は" , katakana:"ハ" , romaji: "ha"},
		  {hiragana:"ひ" , katakana:"ヒ" , romaji: "hi"},
		  {hiragana:"ふ" , katakana:"フ" , romaji: "fu"},
		  {hiragana:"へ" , katakana:"ヘ" , romaji: "he"},
		  {hiragana:"ほ" , katakana:"ホ" , romaji: "ho"},
		  {hiragana:"ば" , katakana:"バ" , romaji: "ba"},
		   {hiragana:"び" , katakana:"ビ" , romaji: "bi"},
		  {hiragana:"ぶ" , katakana:"ブ" , romaji: "bu"},
		  {hiragana:"べ" , katakana:"ベ" , romaji: "be"},
		  {hiragana:"ぼ" , katakana:"ボ" , romaji: "bo"},
		  {hiragana:"ぱ" , katakana:"パ" , romaji: "pa"},
		   {hiragana:"ぴ" , katakana:"ピ" , romaji: "pi"},
		  {hiragana:"ぷ" , katakana:"プ" , romaji: "pu"},
		  {hiragana:"ぺ" , katakana:"ペ" , romaji: "pe"},
		  {hiragana:"ぽ" , katakana:"ポ" , romaji: "po"},
		  {hiragana:"ま" , katakana:"マ" , romaji: "ma"},
		   {hiragana:"み" , katakana:"ミ" , romaji: "mi"},
		  {hiragana:"む" , katakana:"ム" , romaji: "mu"},
		  {hiragana:"め" , katakana:"メ" , romaji: "me"},
		  {hiragana:"も" , katakana:"モ" , romaji: "mo"},
		  {hiragana:"や" , katakana:"ヤ" , romaji: "ya"},
		   {hiragana:"ゆ" , katakana:"ユ" , romaji: "yu"},
		  {hiragana:"よ" , katakana:"ヨ" , romaji: "yo"},
		  {hiragana:"ら" , katakana:"ラ" , romaji: "ra"},
		  {hiragana:"り" , katakana:"リ" , romaji: "ri"},
		  {hiragana:"る" , katakana:"ル" , romaji: "ru"},
		   {hiragana:"れ" , katakana:"レ" , romaji: "re"},
		  {hiragana:"ろ" , katakana:"ロ" , romaji: "ro"},
		  {hiragana:"わ" , katakana:"ワ" , romaji: "wa"},
		  {hiragana:"を" , katakana:"ヲ" , romaji: "wo"},
		  {hiragana:"ん" , katakana:"ン" , romaji: "n/m "},],
   score: 0
  },
  created: function() {
  },
  methods: {
   nextQuestion: function()
      {
	  this.question_num = Math.floor(Math.random() * this.num_jap_char);
	  this.question= this.alphabet[this.question_num].hiragana;
       right_ans = Math.floor(Math.random() *this.num_questions);     // returns a number between 0 and 4
        this.answer = right_ans;
        for(i=0;i < this.num_questions;i++)
          {
	      do{
		  w = Math.floor(Math.random() *this.num_jap_char)
	      }
	      while(w === right_ans);

	      this.options[i] = this.alphabet[w].romaji;
        }
        this.options[right_ans] = this.alphabet[this.question_num].romaji;
       
   },
   checkAnswer: function(answer)
   {
       if(this.answer === answer)
       { this.score += 1;
         this.nextQuestion();
       }
       else
       {}
   },
  }
});








/*

$(document).ready(function() {
    $("#testJap").click(function(e) {
        e.preventDefault();
        recommendations = [1,2167,5114,5680,9756,10162,10800,10087,17265,17549,23298,25385,30276,31376,32281,32902,849,1189,2251,1575,2966,4224,6547,6802,9253,9289,11061,16918,21185,23273,24765,24833,25013,28223,28297,28735,31043,32182,34280,34599,34745,35557,35839,7674,13601,20031,20507,21405,22789,28621,28999,30014,31964,32615,33489,34561,35062,13333,19365,27775,30015,9941,12189,35079,10357,16498,23251,28851,167,15809,20583,32093,31798,11843,457,33352,7647,2025,32607,19703]
        
        
        idx = Math.floor(Math.random() * (recommendations.length)+1);  
        var myurl="https://api.jikan.me/anime/" + recommendations[idx];
        
        $.ajax({
            url : myurl,
            dataType : "json",
            success : function(json) {
                console.log(json);
                var results = "<table>";
                results += '<th colspan = "2">' + json.title; + '</th>';
                results += '<tr><td colspan = "2" style="text-align: center;">' + json.episodes + ' episodes, ' + json.duration + '</td></tr>';
                results += '<tr><td><img src =' + json.image_url + '></td>';
                results += '<td style="padding:10px">' + json.synopsis + '</td></td></table>';
                $("#rec").html(results);
            }
        }); 

    });
});
*/
