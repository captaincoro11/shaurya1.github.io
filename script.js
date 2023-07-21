function myfunc(){
    let Name=document.getElementById('name').value;
    let Email=document.getElementById('email').value;
    let Password=document.getElementById('password').value;
    let Number=document.getElementById('number').value;
    
    
    console.log( "Name is "+Name);
    console.log( "Email is "+Email);
    console.log( "Password is "+Password);
    console.log( "Number is "+Number);
    

  }
  function displaynone(){
    let ff=document.getElementById('page1');
    let f=document.getElementById('id01');
    ff.style.display='block';
    f.style.display='none';
    


  }