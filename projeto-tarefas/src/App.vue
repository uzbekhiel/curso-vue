<template>
	<div id="app">
		<h1>Tarefas</h1>
		<task-progress :progress="progress" />
		<new-task @taskAdded="addTask" />
		<task-grid 
			:tasks="tasks" 
			@taskDeleted="deleteTask" 
			@taskStateChange="ToggleTaskState" />
	</div>
</template>

<script>
import TaskGrid from './components/TaskGrid.vue'
import NewTask from './components/NewTask.vue'
import TaskProgress from './components/TaskProgress.vue'

export default {
	components:{ NewTask, TaskGrid, TaskProgress },
	data:function(){
		return {
			tasks:[]
		}
	},
	computed:{
		progress: function(){
			const total = this.tasks.length
			const done = this.tasks.filter(t => !t.pending).length
			return Math.round(done/total * 100) || 0
		}
	},
	methods:{
		addTask:function(task){
			const sameName = t => t.name === task.name
			const reallyNew = this.tasks.filter(sameName).length == 0
			if(reallyNew)
				this.tasks.push({name: task.name, pending: this.pending || true})
		},
		deleteTask:function(index){
			this.tasks.splice(index, 1)
		},
		ToggleTaskState:function(i){
			this.tasks[i].pending = !this.tasks[i].pending
		}
	},
	watch:{
		tasks:{
			deep: true,
			handler:function(){
				localStorage.setItem('tasks',JSON.stringify(this.tasks))
			}
		}
	},
	created: function(){
		const json = localStorage.getItem('tasks')
		const array = JSON.parse(json)
		this.tasks = Array.isArray(array) ? array : []
	}	
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
