// getting all required elements

function createNode(element) {
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}


const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
       icon.onclick = ()=>{
            webLink = "https://www.google.com/search?q=" + userData;
             linkTag.setAttribute("href", webLink);
            console.log(webLink);
           linkTag.click();
         }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+ data +'</li>';
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = "https://www.google.com/search?q=" + selectData;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
   }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
//Accordian




const accordion_items = document.querySelectorAll('.accordion_item');
  
let i=0;

 if (accordion_items)
    {
        
     accordion_items.forEach(accordion_item=>{
            let accordion_btn     = accordion_item.querySelector('.btn'),
                accordion_content = accordion_item.querySelector('.content'),
                item = accordion_item.querySelector(".item"),
               span = accordion_item.querySelector(".text"); 
// questions
    const myq = accordion_item.querySelector('span');
    myq.textContent =  A[i]['question'] ;
     append(span,myq);
   
 //Answers    
     const myPara = accordion_item.querySelector('p');
     myPara.textContent =  A[i]['answer'] ;
     append(item,myPara);
     i++;
            
     if (accordion_btn && accordion_content)
            {
                accordion_btn.addEventListener('click', function(){
                    accordion_item.classList.toggle('active');
    
                    console.log(accordion_content.offsetHeight);//return the height of this element 
                    if(accordion_content.offsetHeight>0){
                        accordion_content.style.height = '0px';
                    }else{
                        accordion_content.style.height = accordion_content.scrollHeight+'px';
                        // here accordion_content.scrollHeight = return the scrollable element height of this
                    }
                });
            }
             }); 
    }
    


   


    
    
    
    

