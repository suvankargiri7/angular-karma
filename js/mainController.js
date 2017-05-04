
"use strict";
         
angular.module("notesApp", [])
  .controller('MainController', [function(){
  
    var self = this;
    self.notes = [
      {label: "First Note", done: true, assignee: "Amar"},
      {label: "Second Note", done: true, assignee: "Akbar"},
      {label: "Third Note", done: true, assignee: "Anthony"},
      {label: "Fourth Note", done: false},
      {label: "Five Note", done: false},
    ];

    self.getNoteClass = function(status) {
      return {
        done: status,
        pending: !status
      };
    };
  }]);
         
