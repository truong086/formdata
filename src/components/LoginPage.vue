<template>
     <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
         <button @click="loginWithGoogle" class="google-btn">
  <img src="https://developers.google.com/identity/images/g-logo.png" />
  Đăng nhập bằng Google
</button>
     </div>
</template>

<script setup>
import { auth } from '@/firebase/config'
import { useRouter } from 'vue-router'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { onMounted } from 'vue'

onMounted(() => {
  onAuthStateChanged(auth, (user) => { // Lấy ra user Login
    if (user) {
      router.push("/")
    } else {
      router.push("/login")
    }
    // checkDataUser()
  })
})
const router = useRouter()
    const loginWithGoogle = async () => {
  try {
    // Đăng nhập bằng Google
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)

    const user = result.user

    console.log("User:", user)
    // alert("Đăng nhập thành công: " + user.email)
    router.push("/")

  } catch (error) {
    console.error(error)
    alert("Lỗi đăng nhập")
  }
}
</script>

<style scoped>
.google-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  cursor: pointer;
  font-weight: 600;
}

.google-btn img {
  width: 20px;
}
</style>