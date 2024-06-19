import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wordle';
  tries = [["","","","",""]];
  classes = [["normal","normal","normal","normal","normal"]];
  word = Array.from('moved');
  letter = '';

  check(){
    //print everything
    /*for (let i = 0; i < this.tries.length; i++){
      for (let j = 0; j < 5; j++){
        console.log(this.tries[i][j]);
      }
    }*/

    //print last try
    let last = this.tries.length - 1;
    for (let j = 0; j < 5; j++){
      console.log(this.tries[last][j]);
    }

    //checking letters and changing classes
    let letter;
    let score = 0;
    console.log(this.word);
    for (let j = 0; j < 5; j++){
      letter = this.tries[last][j].toLowerCase();
      //check letters
      if (this.word.includes(letter)){
        console.log('correct letter: '+letter);
        this.classes[last][j] = "yellow";
      }
      //check position
      if (letter === this.word[j]){
        console.log('correct letter and position: '+j);
        this.classes[last][j] = "green";
        score++;
      }
    }

    if (score == 5) {
      alert("Congratulations!");
    } else {
      //add new try
      this.tries.push(["","","","",""]);
      this.classes.push(["normal","normal","normal","normal","normal"]);
    }
  }
}
