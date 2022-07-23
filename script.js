
/*icons */
/*home*/
document.getElementById("ho1").addEventListener("click" , function(){
    if(document.getElementById("ho2").getAttribute("d") == "M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z"){
        const elam= document.getElementById("ho2");
        elam.setAttribute("d", "M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z" );
        elam.style.fill="black";  
    }
    else{
        const elam= document.getElementById("ho2");
        elam.setAttribute("d",  "M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z" );
        elam.style.fill="white";  
    }
  });
  /*message */

     document.getElementById("mes1").addEventListener("click" , function(){
        const elam= document.getElementById("mes2");
        elam.setAttribute("d", "M12.003 1.131a10.487 10.487 0 00-10.87 10.57 10.194 10.194 0 003.412 7.771l.054 1.78a1.67 1.67 0 002.342 1.476l1.935-.872a11.767 11.767 0 003.127.416 10.488 10.488 0 0010.87-10.57 10.487 10.487 0 00-10.87-10.57zm5.786 9.001l-2.566 3.983a1.577 1.577 0 01-2.278.42l-2.452-1.84a.63.63 0 00-.759.002l-2.556 2.049a.659.659 0 01-.96-.874L8.783 9.89a1.576 1.576 0 012.277-.42l2.453 1.84a.63.63 0 00.758-.003l2.556-2.05a.659.659 0 01.961.874z" );
        elam.style.fill="black";
        elam.style.stroke="none";
        elam.style.strokeMiterlimit="0";
        elam.style.strokeWidth ="none"
        document.getElementById("mes3").setAttribute("d", "none");
        mes3.style.fill="black";
         });
    /*plus*/

         document.getElementById("plus1").addEventListener("click" , function(e){
            e.style.fill="black";
           const elm= document.getElementById("line1");
           elm.style.fill="black";
           elm.style.stroke="white";
           const elam  =document.getElementById("line2");
           elam.style.fill="black";
           elam.style.stroke="white";
         });

         /*like */
const d1 = document.getElementById("d1");
d1.addEventListener("click" , function(){
    const d2 = document.getElementById("d2");
    if( d2.getAttribute("d")== "M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"){
       d2.setAttribute("d", "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" );
        d1.style.ariaLabel="Unlike";
        d1.style.fill="#ed4956";
        d1.style.color="#ed4956";
        d1.setAttribute("viewBox","0 0 48 48");
    }
    else{
        d2.setAttribute("d", "M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" );
        d1.style.ariaLabel="like";
        d1.style.fill="#262626";
        d1.style.color="#262626";
        d1.setAttribute("viewBox","0 0 24 24");

    }
});

/* hover */
d1.addEventListener("mouseenter", ()=>{
    d1.classList.toggle("op1"); 
});
d1.addEventListener("mouseleave", ()=>{
    d1.classList.toggle("op1"); 
});
/*comment */
document.getElementById("com1").addEventListener("mouseenter", (e)=>{
    e.target.setAttribute("fillOpacity", ".50");
})
 
/*save */
document.getElementById("save1").addEventListener("mouseenter", (e)=>{
   e.target.classList.toggle("op1"); 
});
document.getElementById("save1").addEventListener("mouseleave", (e)=>{
    e.target.classList.toggle("op1");
});

document.getElementById("prof1").addEventListener("click", ()=>{
    const profile1 = document.getElementById("profile1")
   profile1.classList.contains("hide");
   profile1.classList.toggle("show");
});

    

















$(function(){
    $('#poper').popover({
        html: true,
        trigger:'focus',
        content: $('#pop')
    });

});
$(function(){
    $('#poper1').popover({
        html: true,
        trigger:'focus',
        content: $('#pope')
});

});
  