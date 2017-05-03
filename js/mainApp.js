
"use strict";
         
angular.module("noteApp", [])
  .controller('MainController', [function(){
    console.log('MainCtrl has been created');
    this.helloMessage = "Hello";
    //this.byeMessage = "Bye";

    this.changeMsg = function(){
      this.helloMessage = "Nice One!!";
    };

    this.notes = [
      {label: "First Note", done: true, assignee: "Amar"},
      {label: "Second Note", done: true, assignee: "Akbar"},
      {label: "Third Note", done: true, assignee: "Anthony"},
      {label: "Fourth Note", done: false},
      {label: "Five Note", done: false},
    ];

    this.getNoteClass = function(status) {
      return {
        done: status,
        pending: !status
      };
    };
  }]);
         
