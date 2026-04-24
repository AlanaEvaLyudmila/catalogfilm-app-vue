<template>
  <div class="profile">
    <div class="profile-header">
      <div class="avatar">
        <div class="avatar-placeholder">👤</div>
      </div>
      <h1>{{ user.name }}</h1>
      <p class="bio">{{ user.bio }}</p>
      <div class="stats">
        <div class="stat">
          <span class="stat-value">{{ userPosts.length }}</span>
          <span class="stat-label">постов</span>
        </div>
      </div>
    </div>

    <div class="user-posts">
      <h2>Мои посты</h2>
      <div v-if="userPosts.length === 0" class="no-posts">
        У вас пока нет постов
      </div>
      <div v-for="post in userPosts" :key="post.id" class="post-card">
        <p class="post-text">{{ post.text }}</p>
        <div class="post-stats">
          <span>❤️ {{ post.likes }}</span>
          <span>💬 {{ post.comments.length }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: 1,
        name: 'Алан Аланский',
        bio: 'Machune Learning Engineer | Это мой первый опыт работы с Vue.js ✨',
        avatar: ''
      },
      allPosts: [
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
          text: 'Сегодня отличная погода ☀️',
          likes: 3,
          isLiked: true,
          userId: 1,
          comments: [
            { author: 'Мария', text: 'Да, очень тепло!' }
          ]
        },
        {
          id: 3,
          text: 'Изучаю Vue.js и это круто! 🚀',
          likes: 8,
          isLiked: false,
          userId: 2,
          comments: []
        }
      ]
    }
  },
  computed: {
    userPosts() {
      return this.allPosts.filter(post => post.userId === this.user.id)
    }
  }
}
</script>

<style scoped>
.profile {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.profile-header {
  text-align: center;
  background: white;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  background: #4CAF50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: white;
}

.bio {
  color: #666;
  margin: 10px 0;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
}

.stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 24px;
  font-weight: bold;
  color: #4CAF50;
}

.stat-label {
  color: #666;
  font-size: 14px;
}

.user-posts {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.user-posts h2 {
  margin-bottom: 20px;
}

.post-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
}

.post-stats {
  margin-top: 10px;
  display: flex;
  gap: 15px;
  color: #666;
  font-size: 14px;
}

.no-posts {
  text-align: center;
  color: #999;
  padding: 40px;
}
</style>