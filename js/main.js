 
let meallist= []
let Catlist= []
let Arealist= []
let Ingredlist= []
let Detalies =[]
let searcharr=[]
let searLettercharr=[]
let contain= document.getElementById("dataRow")
let start=document.getElementById('dataRowstart')
let search= document.getElementById('searchhh')
let inputSearch=document.getElementById('searchByName')
let contectt=document.getElementById('contacttt')
let nameeee=document.getElementById('name')
let email=document.getElementById('email')
let phone=document.getElementById('phone')
let pass=document.getElementById('pass')
let repass=document.getElementById('repass')
let searchByFirst=document.getElementById('searchByFirst')
var rep =[]
var categoryarr=[]
var areaarr=[]
var inaarr=[]
var categoryMealArr=[]
var areaMael=[]
var ingMael=[]




$(document).ready(function () {
      
    let sideBarInnerWidth = $(".sideBar-Inner").innerWidth();
    $(".sideBar ").css({left:-sideBarInnerWidth})

    

})
// first page 
 
$(document).ready(function (){
   
    async function meal(){
        
         start.innerHTML=" "
     $(".loading").fadeIn(300)
    var myHttp= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      var repo = await myHttp.json()
      rep=repo.meals
     display()
     $(".loading") .fadeOut(300) 
     
}
meal()


function display (){
     
    var  temp = ' '
    for (let i = 0; i < rep.length; i++) {
        
       temp+= `<div class="col-md-3" onclick="mealinfo(${rep[i].idMeal})">
       <div class="con ">
           <img src="${rep[i].strMealThumb}" alt="" class="w-100">
       <div class="layer">
           <div class="titledis">${rep[i].strMeal}</div>
       </div>
       </div>
       
   </div>`
   
    }
    contain.innerHTML=temp
    // contain.innerHTML=" "
    // dataRowstart.innerHTML= temp  
   
}

})


    $("#openIcone").click(function () {
        
        let width = $(".sideBar-Inner").outerWidth()
        let left = $(".sideBar ").css("left")

        if (left == "0px") {
             $(".sideBar ").animate({left: `-${width}px` }, 500  )
             
             $(".opennnn").removeClass( "fa-x")
             $(".opennnn").addClass( "fa-bars")
           
        }

        else {
            $(".sideBar").animate({ left: "0px" }, 500)
            $(".opennnn").removeClass( "fa-bars")
            $(".opennnn").addClass( "fa-x")
            
        }
    })




// category 

async function category(){
    
    contectt.classList.remove('d-flex')
    contectt.classList.add('d-none')
    search.classList.remove('d-flex')
    search.classList.add('d-none')
    contain.innerHTML=" "
    start.innerHTML =" "
    $(".loading").fadeIn(300)
    
    var myHttpcategory= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      var categoryRsponse = await myHttpcategory.json()
        // categoryarr=categoryRsponse.categories
       
        displayCategory (categoryRsponse.categories)
        let sideBarInnerWidth = $(".sideBar-Inner").innerWidth();
        $(".sideBar ").animate({left:-sideBarInnerWidth},600)
        $(".opennnn").removeClass( "fa-x")
        $(".opennnn").addClass( "fa-bars")
         $(".loading") .fadeOut(300)
} 



function displayCategory (arr){
    var  corner = ' ' 
    for (let i = 0;  i < arr.length; i++){
        corner+= `<div class="col-md-3 " >
       <div class="con " onclick="categorymeals('${arr[i].strCategory}')">
           <img src="${arr[i].strCategoryThumb}" alt="" class="w-100">
       <div class="layer">
           <div class="title">${arr[i].strCategory}</div>
           <p>${arr[i].strCategoryDescription.split(" ").slice(0,20).join(" ")} </p>
       </div>
       </div>
   </div>`
   
    }
    contain.innerHTML=corner
    
  
}

async function categorymeals(meal){
    contain.innerHTML=" "
    start.innerHTML =" "
    $(".loading").fadeIn(300)
    var myHttpcategorymeal= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`)
      var categorymaelRsponse = await myHttpcategorymeal.json()
      categoryMealArr=categorymaelRsponse.meals
      
      displaycatecoryMeal()
      let sideBarInnerWidth = $(".sideBar-Inner").innerWidth();
    $(".sideBar ").animate({left:-sideBarInnerWidth},600)
    $(".opennnn").removeClass( "fa-x")
      $(".opennnn").addClass( "fa-bars")
      $(".loading") .fadeOut(300)
}

function displaycatecoryMeal(){
    var  cornermael = ' ' 
    for (let i = 0; i < categoryMealArr.length; i++){
        cornermael+= `<div class="col-md-3" onclick="mealinfo(${categoryMealArr[i].idMeal})">
       <div class="con ">
           <img src="${categoryMealArr[i].strMealThumb}" alt="" class="w-100">
       <div class="layer">
           <div class="title">${categoryMealArr[i].strMeal}</div>
       </div>
       </div>
   </div>`
        
    }
    contain.innerHTML= cornermael
}


//  area 

async function area(){
    
    contain.innerHTML=" "
    start.innerHTML =" "
    $(".loading").fadeIn(300)
    
    contectt.classList.remove('d-flex')
    contectt.classList.add('d-none')
    search.classList.remove('d-flex')
    search.classList.add('d-none')
    contectt.classList.add('d-none')
    var myHttparea= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      var areaRsponse = await myHttparea.json()
      
      areaarr=areaRsponse.meals
      
      displayarea()
      let sideBarInnerWidth = $(".sideBar-Inner").innerWidth();
    $(".sideBar ").animate({left:-sideBarInnerWidth},600)
    $(".opennnn").removeClass( "fa-x")
    $(".opennnn").addClass( "fa-bars")
    $(".loading") .fadeOut(300)
}

function displayarea (){
    var  areacorner = ''
    for (let i = 0; i < areaarr.length; i++) {
        areacorner+= `<div class="col-md-3 text-center text-white ing my-3" onclick="areaMeal('${areaarr[i].strArea}')">
        <i class="fa-solid fa-house-laptop "></i>
        <h4 class="fs-4 fw-bold">${areaarr[i].strArea}</h4>
       </div>`
    
    }
    contain.innerHTML=areacorner
   
}
async function areaMeal(AreaaMeal){
    contain.innerHTML=" "
    start.innerHTML =" "
    $(".loading").fadeIn(300)
   
    var myHttpareaMealL= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${AreaaMeal}`)
    var areaRsponse = await myHttpareaMealL.json()
    areaMael=areaRsponse.meals
    displayAreaMeal()
    let sideBarInnerWidth = $(".sideBar-Inner").innerWidth();
    $(".sideBar ").animate({left:-sideBarInnerWidth},600)
    $(".opennnn").removeClass( "fa-x")
    $(".opennnn").addClass( "fa-bars")
     $(".loading") .fadeOut(300)
}

function displayAreaMeal(){
    var  cornermaelArea = ' ';
    for (let i = 0;  i < areaMael.length; i++) {
        cornermaelArea+= `<div class="col-md-3"onclick="mealinfo(${areaMael[i].idMeal})">
       <div class="con ">
           <img src="${areaMael[i].strMealThumb}" alt="" class="w-100">
       <div class="layer">
           <div class="title">${areaMael[i].strMeal}</div>
       </div>
       </div>
   </div>`
        
    }
    contain.innerHTML= cornermaelArea
}


//  ingredient 

async function ingredient(){
    contain.innerHTML=" "
    start.innerHTML ="  "
    $(".loading").fadeIn(300)
    contectt.classList.remove('d-flex')
    contectt.classList.add('d-none')
    search.classList.remove('d-flex')
    search.classList.add('d-none')
    
   
    var myHttpin= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
      var inRsponse = await myHttpin.json()
      inaarr=inRsponse.meals
      console.log(inaarr)
      displayingredient ()
      let sideBarInnerWidth = $(".sideBar-Inner").innerWidth();
    $(".sideBar ").animate({left:-sideBarInnerWidth},600)
    $(".opennnn").removeClass( "fa-x")
     $(".opennnn").addClass( "fa-bars")
      $(".loading") .fadeOut(300)
}


function displayingredient(){
    var  ingcorner = ''
    for (let i = 0; i < 20; i++) {
        ingcorner+= `<div class="col-md-3 text-center text-white ing" onclick="ingredientMeal('${inaarr[i].strIngredient}')">
        <i class="fa-solid fa-drumstick-bite"></i>
        <h4 class="fs-4 fw-bold">${inaarr[i].strIngredient}</h4>
        <p class="fs-5">${inaarr[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
       </div>`
        
    }
    
    contain.innerHTML=ingcorner
    
}

async function ingredientMeal(ingaMeal){
    contain.innerHTML=" "
    start.innerHTML =" "
    $(".loading").fadeIn(300)
    
    let sideBarInnerWidth = $(".sideBar-Inner").innerWidth();
    $(".sideBar ").animate({left:-sideBarInnerWidth},600)
    $(".opennnn").removeClass( "fa-x")
     $(".opennnn").addClass( "fa-bars")
    var myHttpIngMealL= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingaMeal}`)
    var ingRsponse = await myHttpIngMealL.json()
    ingMael=ingRsponse.meals
    displayingMeal()
    $(".loading") .fadeOut(300)
      
}


function displayingMeal(){
    var  cornermaelIng = ' ';
    for (let i = 0;  i<ingMael.length; i++) {
        cornermaelIng+= `<div class="col-md-3" onclick="mealinfo(${ingMael[i].idMeal})">
       <div class="con ">
           <img src="${ingMael[i].strMealThumb}" alt="" class="w-100">
       <div class="layer">
           <div class="title">${ingMael[i].strMeal}</div>
       </div>
       </div>
   </div>`
        
    }
    contain.innerHTML= cornermaelIng
}

//  mealDetails 

async function mealinfo(mealDetails){
    contain.innerHTML=" "
    start.innerHTML =" "
    search.classList.remove('d-flex')
    search.classList.add('d-none')
    $(".loading").fadeIn(300)
    
    let sideBarInnerWidth = $(".sideBar-Inner").innerWidth();
    $(".sideBar ").animate({left:-sideBarInnerWidth},600)
    $(".opennnn").removeClass( "fa-x")
             $(".opennnn").addClass( "fa-bars")
    var myHttpMealInfo= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDetails}`)
    var mealInfoRsponse = await myHttpMealInfo.json()
    details = mealInfoRsponse.meals[0]
    mealInfoDisplay()
    $(".loading") .fadeOut(300)
}
function mealInfoDisplay(){
    let recipes = ``
    for (let i = 1; i <= 20; i++) {
        if (details[`strIngredient${i}`]) {
            recipes +=   `<span class="bg-info  rounded-2 mx-1 my-2  d-flex   p-1 flex-wrap">${details[`strMeasure${i}`]} ${details[`strIngredient${i}`]}</span>`  
        }

    }
    
    let tags = details.strTags?.split(",")
    if (!tags) tags = []

    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `<span class="bg-secondary   rounded-2 mx-1 my-2 p-1 d-flex   flex-wrap">${tags[i]}</span>`
    }
    
        info=`<div class="col-md-4 my-5 mx-1 text-white">
        <img src="${details.strMealThumb}" alt="" class="w-100 rounded-3">
        <h2 class="my-2">${details.strMeal}</h2>
        <h2></h2>
     </div>
     <div class="col-md-7 my-5 mx-1 text-white">
      <h2>Instructions</h2>
      <p>${details.strInstructions}</p>
      <h2>Area : ${details.strArea}</h2>
      <h2>Category :${details.strCategory}</h2>
      <h2>Recipes :</h2>
      <p class="my-4 g-2 d-flex flex-wrap g-5 ">
      ${recipes}
     </p>
      <h2>Tags :</h2>
      <p class="my-4 g-2 d-flex  flex-wrap g-4"> ${tagsStr} </p>
      <p>
      <a href="${details.strSource}"><button class="btn btn-success">source</button></a>
    <a href="${details.strYoutube}"><button class="btn btn-danger">youtube</button></a>
     </p>
     
     </div>`

    contain.innerHTML= info
}

//  search 

function displaySaerch(){
    contain.innerHTML=" "
    start.innerHTML =" "
    contectt.classList.remove('d-flex')
    contectt.classList.add('d-none')

    $(".loading").fadeIn(300)
    $(".loading") .fadeOut(300)
    search.classList.remove('d-none')
    search.classList.add('d-flex')
    $(".opennnn").removeClass( "fa-x")
             $(".opennnn").addClass( "fa-bars")
    let sideBarInnerWidth = $(".sideBar-Inner").innerWidth();
    $(".sideBar ").animate({left:-sideBarInnerWidth},600)
}
// search name
async function searchNameCorner(searchMeal){
    contain.innerHTML=" "
    start.innerHTML=" "
    var myHttpMealSearch= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`)
    var mealSearchRsponse = await myHttpMealSearch.json()
    searcharr=mealSearchRsponse.meals
    displayNameSearch ()
}
function displayNameSearch (){
    var  temp = ' '
    for (let i = 0; i < searcharr.length; i++) {
       temp+= `<div class="col-md-3" onclick="mealinfo(${searcharr[i].idMeal})">
       <div class="con ">
           <img src="${searcharr[i].strMealThumb}" alt="" class="w-100">
       <div class="layer">
           <div class="titledis">${searcharr[i].strMeal}</div>
       </div>
       </div>
       
   </div>`
        
    }
    document.getElementById("saerchCorner").innerHTML= temp
 }

inputSearch.addEventListener("input", function(){
    searchNameCorner(inputSearch.value)
})
// search first letter 

async function searchletterCorner(searchLetterMeal){
    start.innerHTML=" "
    contain.innerHTML=" "
    var myHttpLetterSearch= await fetch(`https://themealdb.com/api/json/v1/1/search.php?f=${searchLetterMeal}`)
    var mealSearchLetterRsponse = await myHttpLetterSearch.json()
    searLettercharr=mealSearchLetterRsponse.meals
    displayletterSearch ()
}
function displayletterSearch (){
    var  temp = ' '
    for (let i = 0; i < searLettercharr.length; i++) {
       temp+= `<div class="col-md-3" onclick="mealinfo(${searLettercharr[i].idMeal})">
       <div class="con ">
           <img src="${searLettercharr[i].strMealThumb}" alt="" class="w-100">
       <div class="layer">
           <div class="titledis">${searLettercharr[i].strMeal}</div>
       </div>
       </div>
       
   </div>`
        
    }
    document.getElementById("saerchCorner").innerHTML= temp
 }

 searchByFirst.addEventListener("input", function(){
    
  
    searchletterCorner(searchByFirst.value)
    
  
    
})

function validationLetterone(){
    
    var Lettervalidation=/^[A-Za-z]$/;
        if(Lettervalidation.test(searchByFirst.value)==true){
            return true
        }
        else{
            return false
        }
     }





//  contactUs

function contactUs(){
    $(".loading").fadeIn(300)
    $(".loading") .fadeOut(300)
    contain.innerHTML=" "
    start.innerHTML =" "
    contectt.classList.remove('d-none')
    contectt.classList.add('d-flex')
    
    search.classList.remove('d-flex')
    search.classList.add('d-none')
    
   
    let sideBarInnerWidth = $(".sideBar-Inner").innerWidth();
        $(".sideBar ").animate({left:-sideBarInnerWidth},600)
        $(".opennnn").removeClass( "fa-x")
        $(".opennnn").addClass( "fa-bars")
       
}

    

nameeee.addEventListener('input',function (){
    if(NameValidation()==true){
        document.querySelector('#nameAlert').classList.replace('d-block', 'd-none')
    }else{
        document.querySelector('#nameAlert').classList.replace('d-none', 'd-block')
    }
})
email.addEventListener('input', function(){
   if(emailValidation()==true){

   document.querySelector('#emailalert').classList.replace('d-block', 'd-none')
    }else{
        document.querySelector('#emailalert').classList.replace('d-none', 'd-block')
    }
})
phone.addEventListener('input', function(){
   if(phoneValidation()==true){

   document.querySelector('#phoneAlert').classList.replace('d-block', 'd-none')
    }else{
        document.querySelector('#phoneAlert').classList.replace('d-none', 'd-block')
    }
})
pass.addEventListener('input', function(){
   if(passValidation()==true){

   document.querySelector('#passAlert').classList.replace('d-block', 'd-none')
    }else{
        document.querySelector('#passAlert').classList.replace('d-none', 'd-block')
    }
})
repass.addEventListener('input', function(){
   if(rePassValidation()==true){

   document.querySelector('#repassAlert').classList.replace('d-block', 'd-none')
    }else{
        document.querySelector('#repassAlert').classList.replace('d-none', 'd-block')
    }
})


function NameValidation(){
    
    var namevalidation=/^[A-Za-z]+$/;
        if(namevalidation.test(nameeee.value)==true){
            return true
        }
        else{
            return false
        }
     }
function emailValidation(){
    
    var namevalidation=/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(namevalidation.test(email.value)==true){
            return true
        }
        else{
            return false
        }
     }
function phoneValidation(){
    
    var phonevalidation=/^[01][0-9]{1,11}$/;
        if(phonevalidation.test(phone.value)==true){
            return true
        }
        else{
            return false
        }
     
     }
function passValidation(){
    
    var passvalidation=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(passvalidation.test(pass.value)==true){
            return true
        }
        else{
            return false
        }
     }
    function rePassValidation(){
        if(pass.value===repass.value){
            return true
        } else{
            return false
        }
    }

    