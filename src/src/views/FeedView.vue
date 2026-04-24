<template>
  <div class="feed">
    <h1>Лента новостей</h1>
    
    <div v-for="post in posts" :key="post.id" class="post">
      <!-- Текст поста (с редактированием) -->
      <div v-if="editingPostId !== post.id">
        <p class="post-text">{{ post.text }}</p>
        <button @click="startEdit(post)" class="edit-btn">✏️ Редактировать</button>
      </div>
      
      <div v-else>
        <textarea v-model="editText" class="edit-textarea"></textarea>
        <button @click="saveEdit(post)" class="save-btn">💾 Сохранить</button>
        <button @click="cancelEdit" class="cancel-btn">❌ Отмена</button>
      </div>

      <!-- Лайки -->
      <div class="likes-section">
        <button 
          @click="toggleLike(post)" 
          :class="{ liked: post.isLiked }"
          class="like-btn"
        >
          ❤️ {{ post.likes }}
        </button>
      </div>

      <!-- Комментарии -->
      <div class="comments-section">
        <h4>Комментарии ({{ post.comments.length }})</h4>
        
        <div v-for="(comment, idx) in post.comments" :key="idx" class="comment">
          <strong>{{ comment.author }}:</strong> {{ comment.text }}
        </div>

        <div class="add-comment">
          <input 
            v-model="newComments[post.id]" 
            placeholder="Написать комментарий..."
            @keyup.enter="addComment(post)"
            class="comment-input"
          />
          <button @click="addComment(post)" class="comment-btn">Отправить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editingPostId: null,
      editText: '',
      newComments: {},
      posts: [
        {
          id: 1,
          text: 'Первый пост! Всем привет! 👋',
          likes: 5,
          isLiked: false,
          userId: 1,
          comments: [
            { author: 'Анна', text: 'Привет! Отличный пост!' },
            { author: 'Петр', text: 'Добро пожаловать!' }
          ]
        },
        {
          id: 2,
          text: 'Делал сайт для нефтяной компании☀️',
          likes: 3,
          isLiked: true,
          userId: 1,
          comments: [
            { author: 'Мария', text: 'Да, видела твой сайт. Круто!' }
          ]
        },
        {
          id: 3,
          text: 'Изучаю Machine Learning 🚀',
          likes: 8,
          isLiked: false,
          userId: 2,
          comments: []
        }
      ]
    }
  },
  methods: {
    // Лайки
    toggleLike(post) {
      if (post.isLiked) {
        post.likes -= 1
        post.isLiked = false
      } else {
        post.likes += 1
        post.isLiked = true
      }
    },

    // Редактирование
    startEdit(post) {
      this.editingPostId = post.id
      this.editText = post.text
    },
    saveEdit(post) {
      if (this.editText.trim() !== '') {
        post.text = this.editText
      }
      this.editingPostId = null
    },
    cancelEdit() {
      this.editingPostId = null
    },

    // Комментарии
    addComment(post) {
      const commentText = this.newComments[post.id]
      if (commentText && commentText.trim() !== '') {
        post.comments.push({
          author: 'Текущий пользователь',
          text: commentText
        })
        this.newComments[post.id] = ''
      }
    }
  }
}
</script>

<style scoped>
.feed {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.post {
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.post-text {
  font-size: 16px;
  margin-bottom: 10px;
}

.edit-textarea {
  width: 100%;
  min-height: 80px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.likes-section {
  margin: 10px 0;
}

.like-btn {
  background: none;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
  font-size: 16px;
}

.like-btn.liked {
  background: #ff4757;
  color: white;
  border-color: #ff4757;
}

.comments-section {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.comment {
  background: #f9f9f9;
  padding: 8px;
  margin: 5px 0;
  border-radius: 5px;
}

.add-comment {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}

.comment-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.comment-btn, .edit-btn, .save-btn, .cancel-btn {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.comment-btn {
  background: #4CAF50;
  color: white;
}

.edit-btn {
  background: #2196F3;
  color: white;
  margin-right: 5px;
}

.save-btn {
  background: #4CAF50;
  color: white;
}

.cancel-btn {
  background: #f44336;
  color: white;
}
</style>