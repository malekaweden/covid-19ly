new Vue ({
    el:'#app',
    data:{
     r1:false,
     q1:true
    
    },

});

function q1() {
    var x = document.getElementById('r1');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      var q1 = document.getElementById('q1');
      q1.style.display = 'none';
    } else {
      x.style.display = 'none';

    }

  }
  function q2() {
    var x = document.getElementById('q2');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      var q1 = document.getElementById('q1');
      q1.style.display = 'none';
    } else {
      x.style.display = 'none';

    }
  }
  function yesq2() {
    var x = document.getElementById('r2');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      var q2 = document.getElementById('q2');
      q2.style.display = 'none';
    } else {
      x.style.display = 'none';

    }
  }
  function noq2() {
    var x = document.getElementById('q3');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      var q2 = document.getElementById('q2');
      q2.style.display = 'none';
    } else {
      x.style.display = 'none';

    }
  }
  function yesq3() {
    var x = document.getElementById('r3');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      var q2 = document.getElementById('q3');
      q2.style.display = 'none';
    } else {
      x.style.display = 'none';

    }
  }
  function noq3() {
    var x = document.getElementById('q4');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      var q2 = document.getElementById('q3');
      q2.style.display = 'none';
    } else {
      x.style.display = 'none';

    }
  }
  function yesq4() {
    var x = document.getElementById('r4');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      var q2 = document.getElementById('q4');
      q2.style.display = 'none';
    } else {
      x.style.display = 'none';

    }
  }
  function noq4() {
    var x = document.getElementById('q5');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      var q2 = document.getElementById('q4');
      q2.style.display = 'none';
    } else {
      x.style.display = 'none';

    }
  }
  function yesq5() {
    var x = document.getElementById('r4');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      var q2 = document.getElementById('q5');
      q2.style.display = 'none';
    } else {
      x.style.display = 'none';

    }
  }
  function noq5() {
    var x = document.getElementById('r4');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      var q2 = document.getElementById('q5');
      q2.style.display = 'none';
    } else {
      x.style.display = 'none';

    }
  }
  
