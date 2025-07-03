<template>
  <div class="login-container">
    <div class="login-overlay"></div>
    <div class="login-box">
      <h2>LOGIN</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>Email:</label>
          <input 
            v-model="email" 
            type="email" 
            required 
            placeholder="Enter your email"
            @input="clearError"
          >
        </div>
        <div class="form-group password-group">
          <label>Password:</label>
          <div class="password-input">
            <input 
              v-model="password" 
              :type="showPassword ? 'text' : 'password'" 
              required 
              placeholder="At least 6 characters"
              minlength="6"
              @input="clearError"
            >
            <button type="button" class="toggle-password" @click="togglePassword">
              {{ showPassword ? '👁️' : '👁️‍🗨️' }}
            </button>
          </div>
        </div>
        
        <div v-if="error" class="error-message">
          {{ error }}
        </div>
        
        <button type="submit" class="login-btn" :disabled="isLoading">
          {{ isLoading ? 'Logging in...' : 'Login' }}
        </button>
        
        <div class="divider">or continue with</div>
        
        <button type="button" class="google-btn" @click="signInWithGoogle">
          <span>G</span>
          Continue with Google
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      error: '',
      isLoading: false
    }
  },
  methods: {
    ...mapActions(['login']),
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    },
    clearError() {
      this.error = ''
    },
    togglePassword() {
      this.showPassword = !this.showPassword
    },
    async handleLogin() {
      try {
        this.isLoading = true
        this.error = ''
        
        if (!this.validateEmail(this.email)) {
          throw new Error('Please enter a valid email address')
        }
        
        if (this.password.length < 6) {
          throw new Error('Password must be at least 6 characters')
        }
        
        await this.login()
        
        const redirect = this.$route.query.redirect || { name: 'Products' }
        this.$router.push(redirect)
      } catch (error) {
        this.error = error.message
      } finally {
        this.isLoading = false
      }
    },
    signInWithGoogle() {
      // Implement actual Google auth in production
      this.login()
      this.$router.push({ name: 'Products' })
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: flex-start; /* Changed from center to flex-start */
  align-items: center;
  min-height: 100vh;
  background-image: url('https://hirikadhruti.com/cdn/shop/files/Hirika_And_Dhruti_Banner_2_Desktop_1.jpg?v=1709205996&width=3840');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  position: relative;
  padding-left: 10%; /* Add this to create consistent left spacing */
}

.login-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 0;
}

.login-box {
  width: 100%;
  max-width: 400px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1;
}

h2 {
  text-align: center;
  margin-bottom: 25px;
  color: white;
  font-size: 28px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.form-group {
  margin-bottom: 25px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: white;
  font-size: 14px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

input {
  width: 100%;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s;
  box-sizing: border-box;
}

input:focus {
  border-color: #42b983;
  outline: none;
  box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.2);
  background: white;
}

.password-group {
  position: relative;
}

.password-input {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 5px;
  color: #555;
}

.error-message {
  color: #ff4444;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
  text-align: center;
  font-size: 14px;
}

.login-btn {
  width: 100%;
  padding: 14px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 10px;
}

.login-btn:hover {
  background-color: #3aa876;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 185, 131, 0.3);
}

.login-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.divider {
  display: flex;
  align-items: center;
  margin: 25px 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.divider::before {
  margin-right: 15px;
}

.divider::after {
  margin-left: 15px;
}

.google-btn {
  width: 100%;
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #444;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s;
}

.google-btn:hover {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.google-btn span {
  font-weight: bold;
  font-size: 18px;
}

@media (max-width: 768px) {
  .login-box {
    margin: 0 20px;
  }
}
</style>