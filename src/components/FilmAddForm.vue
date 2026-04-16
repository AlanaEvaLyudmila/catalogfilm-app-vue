<template>
    <div>
        <h3>{{isEdit ? 'Редактировать фильм':'Добавить фильм'}}</h3>
    <input
        :value="title"
        @input="$emit('update:title',$event.target.value)"
    placeholder="Название"/>
    <input 
        :value="rating"
        @input="$emit('update:rating',$event.target.value)" 
        placeholder="Рейтинг(0-10)"/>
    <input 
        :value="year"
        @input="$emit('update:year',$event.target.value)"
        placeholder="Год"/>
  <button @click="$emit('submit')">{{isEdit ? 'Сохранить':'Добавить'}}</button>
  
  <button @click="$emit('cancel')">Отмена</button>
  <p v-if="error">{{error}}</p>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    year: String,
    rating: String,
    error: String,
    isEdit: Boolean
})

defineEmits([
    'update:title',
    'update:year',
    'update:rating',
    'add',
    'submit',
    'cancel'
])
</script>
