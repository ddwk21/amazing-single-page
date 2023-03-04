import React from 'react'

function Hi() {

    const delay = ms => new Promise(res => setTimeout(res, ms));

    async function changeThemeOnClick(){
        document.getElementById("HiParent").style.backgroundColor = 'black';
        document.getElementById("Hi").innerHTML = ` `;
        await delay(1500);
        document.getElementById("Hi").innerHTML = `I'm Mitch`;
        document.getElementById("HiParent").style.color = 'white';
    }
    return(
        <div onClick={changeThemeOnClick} className="hiParent" id="HiParent">

            <h1 className="greeting" id="Hi">
                hi.
            </h1>


        </div>
    )
}

export default Hi;