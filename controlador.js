// creo funcion para agregar las tares 
function AgregarTarea(){

   
    var txtNuevo = document.getElementById("MiTarea").value
    // controlo que el textbox no este vacio 
    if (txtNuevo !== '') {
        // creo un elemento parrafo
        var pNuevo = document.createElement("p")
        pNuevo.innerHTML = txtNuevo
        // creo un input checkbox
        var chkNuevo =  document.createElement("input")
        chkNuevo.setAttribute("type","checkbox")
        chkNuevo.setAttribute("onclick", "this.parentElement.classList.toggle('checked')")
        // creo un input button
        var btnNuevo =  document.createElement("button")
        btnNuevo.setAttribute("onclick", "EliminarTarea(this)")
        //btnNuevo.innerHTML = "x"
        btnNuevo.innerHTML = "<i class='ri-delete-bin-line'></i>"  
        // creo una lista desordenada     
        var liNuevo = document.createElement("li")
        // les agrego cada componente a la lista 
        liNuevo.appendChild(chkNuevo)
        liNuevo.appendChild(pNuevo)
        liNuevo.appendChild(btnNuevo)
        // agrego el lista desordenada 
        var luNueva = document.getElementById("MiLista")
        luNueva.appendChild(liNuevo)
        // limpio el textbox
        document.getElementById("MiTarea").value = ""
    }
    else{
        // si no escribio nada para hacer foco en el textbox
        document.getElementById("MiTarea").focus()
    }
    
}
// funcion para eliminar el item de mi lista
function EliminarTarea (tarea){
    // busco el elemento li mas cercano
    tarea.closest("li").remove()
    // hago foco sobre el textbox para agregar una nueva tarea 
    document.getElementById("MiTarea").focus()
 }