let browser = prompt("Enter browser name!")
switch(browser){
    case 'Edge':
        alert("You've got the Edge!");
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera' :
        alert("Okay we support these browser too");
        break;
    default :
        alert("We hope this page look ok!")
}