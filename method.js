const student = {
    name : 'Rasik',
    money : 5000,
    study : 'math',
    subject : ['calculus', 'programming', 'maths'],
    exam : function(){
        console.log(this.name, 'is a good man');
    }
}

student.exam()