// עמוד שני
// ! תפריט כלים
// בלחיצת כפתור את 1.מחליף תמונה לרקע כחול


// והיה ובחר כלי ומנסה להשתמש בו לחומר שלא מתאים יעלה רקע/תמונה אדום
// כתפתור ריסט שמחזיר את כל המחלקים למקומם המקורי
// !משחק
// בחיתוך על ידי כלי נחשף הרקע הכחול נכנס למסגרת בתפריט ונכנס לתפריט לשימוש מידי 
// https://www.youtube.com/watch?v=OTNpiLUSiB4
// בשימוש מיידי מהמלאי הצבע בתפריט בתא הופך חזרה לשחור
// ניתן להשתמש במה שיש בתא המלאי להחזיר לרקע


// בלחיצת כפתור את 1.מחליף תמונה לרקע כחול 2.בוחר את הכלי ושם אותו במשתנה


//3. matrix row and colm with matriel
function bulitMatrix()
{
    const world = document.querySelector('.world')
    let row=25
    let col=16
  
 
    for (let i = 0; i < row; i++) {
        let div = document.createElement("div");
        for (let j = 0; j < col; j++) {
            let childDiv = document.createElement("div"); // childDiv = <div></div>
            childDiv.classList.add('block') // childDiv = <div class="block"></div>
            childDiv.textContent = (`${i} ${j}`)
                if (i < row && i > 19 ) {
                    childDiv.classList.add('dirt') // <div class="block dirt"></div>
                }
                if ((i >16 && i<20) && (j>10 && j<15) ){
                    childDiv.classList.add('stone') // <div class="block stone"></div>
                }
                if ((i >11  && i <=20 ) &&(j>5 && j<8)) {
                    childDiv.classList.add('wood') //<div class="block wood"></div>
                }
                if (((i >5 && i<=11)&&(j>3 && j<10)))  {
                    childDiv.classList.add('tree') // <div class="block tree"></div>
                }
                if (((i > 1 && i<=4)&&(j>1 && j<=4))) {
                    childDiv.classList.add('cloud'); 
                }
            div.appendChild(childDiv)

             childDiv.addEventListener('click',clickBoxMatrix, false);

        }
        world.appendChild(div)
    }
}
//  chosenBoxMatrix is the backgrund that have in the matrix
let inventory =[];
let chosenBoxMatrix;
var clickBoxMatrix = function(clicked_class)
        {
        chosenBoxMatrix= clicked_class.currentTarget.className;
       
        if (chosenBoxMatrix==="block stone" && choosTool==="butPick")
        {
            clicked_class.currentTarget.setAttribute("class","block")
            document.getElementById("inventorybox").classList.add("stone")
            inventory.push("stone") 
        }
        if (chosenBoxMatrix==="block tree" && choosTool==="butEx")
                {clicked_class.currentTarget.setAttribute("class","block");
                document.getElementById("inventorybox").classList.add("tree")
                inventory.push("tree") 
                }
        if (chosenBoxMatrix==="block wood" && choosTool==="butEx")
                {clicked_class.currentTarget.setAttribute("class","block");
                document.getElementById("inventorybox").classList.add("wood")
                inventory.push("wood")
                }
        if (chosenBoxMatrix==="block dirt" && choosTool==="butShov")
                {clicked_class.currentTarget.setAttribute("class","block");
                document.getElementById("inventorybox").classList.add("dirt")
                inventory.push("dirt")
            }
        
        if (chosenBoxMatrix==="block" && choosTool==="inventorybox")
        {
            let tempInventory=inventory.pop()
            clicked_class.currentTarget.classList.add(tempInventory)
            document.getElementById("inventorybox").classList.remove(tempInventory)
        };
    }

bulitMatrix();



// 4. choos your tool or invntory by click and put it in variabale

let choosTool; //varibal that have the id of the specific tool that chosed.
function NameOfchoosTool ()
{
    var listTools = document.getElementsByClassName("choos");
    //put in our varibel the write tool how choosed.
    var choosenTool = function(clicked_id)
        {
            choosTool= clicked_id.currentTarget.id;
            
            // if (choosTool==="inventorybox" && inventory !=="")
            // {
                
            //         // clicked_id.currentTarget.className=clicked_id.currentTarget.className+" choosTool";

            // } else
            {
                //change the border  by change the class 
                if (choosTool!=="") 
                {
                    let previous = document.getElementsByClassName("choosTool"); 
                    if(previous.length>0)
                    {
                        previous[0].classList.remove("choosTool"); // the other butmens will get the previus border.
                    }
                
                    clicked_id.currentTarget.classList.add("choosTool");
                }
            }
            //click on inventory you will able to enter to matrix an drow
            
        };

        //bulit object of eventlistner of ech tool
    for (var i = 0; i < listTools.length; i++) 
    {
        listTools[i].addEventListener('click', choosenTool, false);
    }
}
NameOfchoosTool();

// 
let chosenMatrix;









// עמוד שני
// ! תפריט כלים
// בלחיצת כפתור את 1.מחליף תמונה לרקע כחול
//  2.בוחר את הכלי ושם אותו במשתנה
// העט חפירה חותך רק אדמה
// הגרזן חותך עץ 
// פטיש שובר סלעים
// ענן לא ניתן לשנות
// והיה ובחר כלי ומנסה להשתמש בו לחומר שלא מתאים יעלה רקע/תמונה אדום
// כתפתור ריסט שמחזיר את כל המחלקים למקומם המקורי
// !משחק
// בחיתוך על ידי כלי נחשף הרקע הכחול נכנס למסגרת בתפריט ונכנס לתפריט לשימוש מידי 
// https://www.youtube.com/watch?v=OTNpiLUSiB4
// בחרת כלי וניסת להשתמש על חומר לא רלוונט לא יקרה כלום
// בשימוש מיידי מהמלאי הצבע בתפריט בתא הופך חזרה לשחור
// ניתן להשתמש במה שיש בתא המלאי להחזיר לרקע


// בלחיצת כפתור את 1.מחליף תמונה לרקע כחול 2.בוחר את הכלי ושם אותו במשתנה