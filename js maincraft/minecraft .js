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
let inventory ;
let chosenBoxMatrix;
var clickBoxMatrix = function(clicked_class)
        {
        chosenBoxMatrix= clicked_class.currentTarget.className;
        if (chosenBoxMatrix==="block stone" && choosTool==="butPick")
        {
            clicked_class.currentTarget.setAttribute("class","block")
            document.getElementById("inventory").setAttribute("class","block stone")
          
        }
        if (chosenBoxMatrix==="block tree" && choosTool==="butEx")
                {clicked_class.currentTarget.setAttribute("class","block");}
        if (chosenBoxMatrix==="block wood" && choosTool==="butEx")
                {clicked_class.currentTarget.setAttribute("class","block");}
        if (chosenBoxMatrix==="block dirt" && choosTool==="butShov")
                {clicked_class.currentTarget.setAttribute("class","block");}
        
        // if (chosenBoxMatrix!=="block cloud" && choosTool==="inventorybox")
                //! {clicked_class.currentTarget.setAttribute("class","block");
                // !} צריך להכניס תהליך של זיהוי המלאי הקיים ולאפשר השמה לפי האידי
        };

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
        if (choosTool==="butPick")
            {
                element.style.src = "/";
            }
      
        // if (choosTool==="btnReSt")
        //     {world.remove();
        //     bulitMatrix();
        //     }   // !כרגע מגדיל את השטח של המטריקס המטרה של התנאי הזה -תחזור למטריקס ותאפס אותו דרך בניית הפונקציה
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