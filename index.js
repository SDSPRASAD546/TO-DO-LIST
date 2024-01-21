const todolist = () =>{

    all = [];

    const add = (todotask) => {
        all.push(todotask);
    }

    const markascomplete = (index) => {
        all[index].completed = true
    }

    const overdue = () =>{
        var date = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split("T")[0]
        const arr = []
        all.forEach(item => {
            if(item.dueDate == date){
                arr.push(item)
            }
        });
        return arr

    }
    const dueToday = () =>{

        var date = new Date().toISOString().split("T")[0]
        const arr = []
        all.forEach(item => {
            if(item.dueDate == date){
                arr.push(item)
            }
        });
        return arr
    }
    const dueLater = () =>{

        var date = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0]
        const arr = []
        all.forEach(item => {
            if(item.dueDate == date){
                arr.push(item)
            }
        });
        return arr

    }

    const toDisplayableList = (list) =>{


    list.forEach(item =>{
        if(item.completed==true){
            console.log("[x]"+" "+item.title+" "+item.dueDate)
        }else{
            console.log("[ ]"+" "+item.title+" "+item.dueDate)
        }
    })

    }


    return {all, add, markascomplete, overdue,dueLater,dueToday,toDisplayableList};

}

const todos = todolist();

const formateDate = d =>{
    return d.toISOString().split("T")[0] //example 2024-01-21T12:34:56.789Z spit this on T
}

var dateToday = new Date()


const today = formateDate(dateToday)

var yesterday = formateDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
)

var tomorrow = formateDate(
    new Date(new Date().setDate(dateToday.getDate()+1))
)

todos.add({title:"submit assigment", dueDate:yesterday, completed:false})
todos.add({title:"pay rent", dueDate:today, completed:true})
todos.add({title:"service vehicle", dueDate:today,completed:false})
todos.add({title:"File taxes", dueDate:tomorrow,completed:false})
todos.add({title:"pay electric bill", dueDate:tomorrow,completed:false})

console.log("my Todo-list\n\n")

console.log("Overdue\n")

var overdues = todos.overdue()
var formatedOverdues = todos.toDisplayableList(overdues)
console.log(formatedOverdues)
console.log("\n\n")

console.log("Due Today \n")

var itemsDueToday = todos.dueToday()
var formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n\n")

console.log("Due Later \n")

var itemsDueLater = todos.dueLater()
var formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")