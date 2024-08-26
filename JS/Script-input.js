function validation(){
    let isValid=true;
    if(document.getElementById('name').value==""){
        document.getElementById('er1').style.display="block";
        isValid=false;
    }else{
        document.getElementById('er1').style.display="none";
    }
    if(document.getElementById('email').value==""){
        document.getElementById('er2').style.display="block";
        isValid=false;
    }else{
        document.getElementById('er2').style.display="none";
    }
    if(document.getElementById('password').value==""){
        document.getElementById('er3').style.display="block";
        isValid=false;
    }else{
        document.getElementById('er3').style.display="none";
    }
    if(document.getElementById('address').value==""){
        document.getElementById('er4').style.display="block";
        isValid=false;
    }else{
        document.getElementById('er4').style.display="none";
    }
    const radiobtns=document.getElementsByName('gender');
    let isGenderSelected=false;
    for(let i=0;i<radiobtns.length;i++){
        if(radiobtns[i].checked){
            isGenderSelected=true;
            break;
        }
    }
    if(!isGenderSelected){
        document.getElementById('er5').style.display="block";
        isValid=false;

    }else{
        document.getElementById('er5').style.display="none";
    }

    const checkboxs=document.getElementsByName('check');
    let isHobbyChecked=false;
    for(let i=0;i<checkboxs.length;i++){
        if(checkboxs[i].checked){
            isHobbyChecked=true;
            break;
        }
    }
    if(!isHobbyChecked){
        document.getElementById('er6').style.display="block";
        isValid=false;
    }
    else{
        document.getElementById('er6').style.display="none";
    }
    if(!isValid){
        return false;
    }else{
       
        alert("Form Submitted SuccessFully");
        return true;
    }

}