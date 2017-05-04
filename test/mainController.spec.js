describe('MainController', function(){
    beforeEach(module('notesApp'));

    var ctrl;
    beforeEach(inject(function($controller){
        ctrl = $controller('MainController');
    }));

    it('should have item available on load', function(){
        expect(ctrl.notes).toEqual([
            {label: "First Note", done: true, assignee: "Amar"},
            {label: "Second Note", done: true, assignee: "Akbar"},
            {label: "Third Note", done: true, assignee: "Anthony"},
            {label: "Fourth Note", done: false},
            {label: "Five Note", done: false},
        ]);
    });
});
