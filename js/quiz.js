//Quiz Score Calculator
document.getElementById("questions").onsubmit = function () {

   let external_Css = parseInt(document.querySelector('input[name = "external_Css"]:checked').value);
   let internal_Css = parseInt(document.querySelector('input[name = "internal_Css"]:checked').value);
   let css_Syntax = parseInt(document.querySelector('input[name = "css_Syntax"]:checked').value);
   let text_Color = parseInt(document.querySelector('input[name = "text_Color"]:checked').value);
   let css = parseInt(document.querySelector('input[name = "css"]:checked').value);
   let html = parseInt(document.querySelector('input[name = "html"]:checked').value);
   let html_Br = parseInt(document.querySelector('input[name = "html_Br"]:checked').value);
   let end_Tag = parseInt(document.querySelector('input[name = "end_Tag"]:checked').value);
   let numbered_list = parseInt(document.querySelector('input[name = "numbered_list"]:checked').value);
   let title = parseInt(document.querySelector('input[name = "title"]:checked').value);


   result = external_Css + internal_Css + css_Syntax + text_Color + css + html + html_Br + end_Tag + numbered_list + title;

   document.getElementById("grade").innerHTML += " " + result;



   return false;
}