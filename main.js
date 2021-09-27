(firstitem)
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', loaded)
} else {
    loaded()
}
function openForm() {
    document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}
function testJS()
{

var b = document.getElementById('card-text').value

document.getElementById('cart-price').innerHTML = b;

}
function allItems(){
    var x=document.getElementById('popupForm')
    var b=[]
    b.append(b)
    document.getElementById('quantity').innerHTML=b.length()
}
function closePay() {
    alert("Thank you for shopping with us")
    return (true)
}

function topFunction(){
    document.documentElement.scrollTop=0;
}

function openW(){
    open("#c2",'billingform')
}
