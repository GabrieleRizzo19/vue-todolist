const { createApp } = Vue;

createApp({
    data(){
        return{
            toDoList: [
                {
                    text: "Fare la spesa",
                    done: true  
                },
                {
                    text: "Fare benzina",
                    done: false  
                }
            ],
            taskInput: {
                text: "",
                done: false
            }
        }
    },
    methods:{
        addTask() {

            let newTask = {...this.taskInput};

            this.toDoList.unshift(newTask);

            this.taskInput.text = "";
        },
        changeState(i){
            this.toDoList[i].done = !(this.toDoList[i].done);
        },
        removeTask(i){
            this.toDoList.splice(i,1);
        }
    }
}).mount("#app");