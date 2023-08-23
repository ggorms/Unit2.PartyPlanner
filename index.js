async function dataGrab() {
    const response  = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events");
    const data = await response.json();
    return data
}

// dataGrab()



const tbody = document.getElementById("tbody")

dataGrab().then((rsp) => {
    rsp.data.forEach(element => {
        const splitted = element.date.split("T")
        const row = document.createElement("tr");
         //Name
         const newName = document.createElement("td");
         newName.innerHTML = element.name;
         row.appendChild(newName);
 
         //date 
         const newDate = document.createElement("td");
         newDate.innerHTML = splitted[0];
         row.appendChild(newDate);
 
         //time
         const newTime = document.createElement("td");
         newTime.innerHTML = splitted[1];
         row.appendChild(newTime);
 
         //location
         const newLocation = document.createElement("td");
         newLocation.innerHTML = element.location;
         row.appendChild(newLocation);
 
         //description
         const newDescription = document.createElement("td");
         newDescription.innerHTML = element.description;
         row.appendChild(newDescription);

         //button
         const button = document.createElement("button")
         button.innerHTML= "DELETE"
         button.addEventListener("click", () => {
            tbody.removeChild(row)
         })
         row.appendChild(button)

         tbody.appendChild(row)

    })
})

// New party

const newParty = (event) => {
   event.preventDefault()
   const row = document.createElement("tr");

   //name
   const newName = document.createElement("td");
   const nameValue = document.getElementById("name").value
   newName.innerHTML = nameValue
   row.appendChild(newName)

   //date
   const newDate = document.createElement("td");
   const dateValue = document.getElementById("date").value
   newDate.innerHTML = dateValue
   row.appendChild(newDate)

   //time
   const newTime = document.createElement("td");
   const timeValue = document.getElementById("time").value
   newTime.innerHTML = timeValue
   row.appendChild(newTime)

   //location
   const newLocation = document.createElement("td");
   const locationValue = document.getElementById("location").value
   newLocation.innerHTML = locationValue
   row.appendChild(newLocation)

   //description
   const newDesc = document.createElement("td");
   const descValue = document.getElementById("description").value
   newDesc.innerHTML = descValue
   row.appendChild(newDesc)

   //button
   const button = document.createElement("button");
   button.innerHTML= "DELETE"
   button.addEventListener("click", () => {
      tbody.removeChild(row)
   })
   row.appendChild(button)

   tbody.appendChild(row)
}

document.getElementById("submit").addEventListener("click", (event) => {
    newParty(event)
})