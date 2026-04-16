<template>
    <div>
        <FilmAddForm
        v-model:title="newTitle"
        v-model:rating="newRating"
        v-model:year="newYear"
        :error="error"
        @add="addMovie"
        />
    </div>
</template>
<script>
function addMovie(){
  error.value = ''
  if(!newTitle.value){
    error.value = "Введите название"
    return
  }

  const id = movies.value.length ===0 ? 1: movies.value.length + 1

  movies.value.push({
    id,
    title : newTitle.value,
    year: newYear.value,
    rating: newRating.value,
    liked: false
  })
  newTitle.value = ''
  newRating.value =''
  newYear.value =''
}
</script>
