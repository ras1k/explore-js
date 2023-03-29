// console.log(this);

const student = {
    name : 'Rasik',
    money : 5000,
    study : 'math',
    subject : ['calculus', 'programming', 'maths'],
    exam : function(){
        console.log(this);
        return this.name + 'is a good man';
    }
}

student.exam()

function eventHandler(){
    console.log(this);
}

document.getElementById('btn').addEventListener('click', function(){
    console.log(this);
})
