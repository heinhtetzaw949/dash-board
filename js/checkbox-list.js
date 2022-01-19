let CheckboxListArray = ["networking","internet","computer","phone","programming"];

for(x of CheckboxListArray){
    document.getElementById("checkBoxList").innerHTML = `
            
               <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="${x}">
            <label class="form-check-label" for="${x}">
              ${x}
            </label>
        </div>

           
`;
}