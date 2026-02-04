<template>
  <div v-if="emailAdmin !== emailLogin">
    <div v-if="!isCheckData" class="container" style="padding: 10px; position: relative;">
      <div
    v-if="emailLogin === emailAdmin"
    class="sheet-list"
  >
    <div
      v-for="(item, index) in dataSheets"
      :key="index"
      class="sheet-item"
    >
      <button
        class="sheet-btn"
        @click="openDialog(item.id, item.data().name, item?.data())"
      >
        <span>{{ item.data().name }}</span>
        <span
          v-if="dataFirebaseOne?.data()?.id === item.id"
          class="check"
        >✔</span>
      </button>
    </div>
  </div>

      <div class="header">
        <div class="title" style="text-align: center;">
          <div class="div1">
            <h1>台鋼學校財團法人台鋼科技大學</h1>
          </div>

          <div class="div2">
            <p style="font-size: 30px; margin: 15px 0;">
              114年度高等教育深耕計畫主冊計畫活動滿意度調查表
            </p>
          </div>
        </div>
        <div class="title_table" style="text-align: center; ">
          <div class="div3" style="text-align: center;">
            <table border="1" style="margin: auto;">
            <tbody>
              <tr>
                <td style="width: 100px;">具體作法</td>
                <td style="width: 500px;">
                  <div v-if="emailLogin === 'vantruong08062002@gmail.com'">
                    <input type="text" v-model="dataText.text1" style="width: 100%; height: 100%;" placeholder="Data...">
                  </div>
                  <div v-else>
                    <p>{{ dataText.text1 }}</p>
                  </div>
                  
                </td>
                <td style="width: 100px;">活動名稱</td>
                <td style="width: 500px;">
                  <div v-if="emailLogin === 'vantruong08062002@gmail.com'">
                    <input type="text" v-model="dataText.text2" style="width: 100%; height: 100%;" placeholder="Data...">
                  </div>
                  <div v-else>
                    <p>{{ dataText.text2 }}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="width: 100px;">辦理日期</td>
                <td style="width: 500px;">
                  <div v-if="emailLogin === 'vantruong08062002@gmail.com'">
                    <input type="date" v-model="dataText.text3" style="width: 100%; height: 100%;" placeholder="Data...">
                  </div>
                  <div v-else>
                    <p>{{ dataText.text3 }}</p>
                  </div>
                  
                </td>
                <td style="width: 100px;">活動地點</td>
                <td style="width: 500px;">
                  <div v-if="emailLogin === 'vantruong08062002@gmail.com'">
                    <input type="text" v-model="dataText.text4" style="width: 100%; height: 100%;" placeholder="Data...">
                  </div>
                  <div v-else>
                    <p>{{ dataText.text4 }}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>

        <div class="div4" style="width: 70%; margin: 0 auto;">
          <div class="div5" style="width: 800px;">
            <p>各位參與學員大家好：<br>
              <span style="display: inline-block; margin-left: 2em;">
                非常感謝您在百忙中參與本次所舉辦之活動，為了瞭解今日活動實施情形並提升爾後活動之品質，以作為未來規劃之參考，煩請您撥冗填答下列問卷，並於活動結束後，擲交工作人員。
              </span><br>
              再次感謝您的協助與支持！
  </p>
          </div>
          <div class="div6">
            <div class="div7" style="float: right; margin-right: 120px;">
              <p>高教深耕計畫辦公室  敬上</p>
            </div>
            <div class="div8" style="padding-top: 30px;">
              -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </div>
          </div>
        </div>
      </div>
      <div class="content" style="width: 78%; margin: 10px auto;">
        <div class="div9" >
          <p>★此部分請依據實際情況與感受，在最適當的□中打勾（✔）。</p>
        </div>
        <div class="div10">
          <table border="1" style="margin: auto;">
            <thead>
              <tr>
                <th style="width: 870px;"></th>
                <th style="width: 100px;">非常滿意</th>
                <th style="width: 100px;">滿意</th>
                <th style="width: 100px;">尚可</th>
                <th style="width: 100px;">不滿意</th>
                <th style="width: 100px;">非常不滿意</th>
              </tr>
            </thead>
          </table>
        </div>

        <div class="div11" style="margin: 15px 0;" v-for="(item, index) in data" :key="index">
          <div class="div12">
            <p style="font-weight: bold;">{{ item.title }}</p>
          </div>
          <div class="div13">
            <table border="1">
              <thead>
              <tr v-for="(itemData, indexData) in item.items" :key="indexData">
                <th style="width: 870px;">{{ itemData }}</th>
                <th style="width: 100px;"><input type="radio" @change="saveData(item.id, itemData, 1)" :name="item.id + '_' + indexData" value="1"></th> <!--Để "name" của thẻ radio giống nhau thì mới chọn được 1 giá trị radio duy nhất-->
                <th style="width: 100px;"><input type="radio" @change="saveData(item.id, itemData, 2)" :name="item.id + '_' + indexData" value="2"></th>
                <th style="width: 100px;"><input type="radio" @change="saveData(item.id, itemData, 3)" :name="item.id + '_' + indexData" value="3"></th>
                <th style="width: 100px;"><input type="radio" @change="saveData(item.id, itemData, 4)" :name="item.id + '_' + indexData" value="4"></th>
                <!-- <th style="width: 100px;"><input type="radio" @change="saveData(item.id, itemData, 5)" :name="item.id + '_' + indexData" value="5" checked></th> Để "checked" nghĩa là tự tích chọn vào lựa chọn này -->
                <th style="width: 100px;"><input type="radio" @change="saveData(item.id, itemData, 5)" :name="item.id + '_' + indexData" value="5"></th>
              </tr>
            </thead>
            </table>
          </div>
        </div>
      </div>

      <div class="footer" style="width: 78%; margin: 0 auto;">
        <div class="div14">
          <p>{{ dataFoodter.title }}</p>
        </div>
        <div class="div15">
          <table style="margin-left: 15px;">
            <thead>
              <tr v-for="(item, index) in dataFoodter.items" :key="index">
                <th>{{ item.title }}</th>
                <th v-for="(itemData, indexData) in item.options" :key="indexData">
                  <div style="margin-left: 20px; display: flex;">
                    <p>{{indexData + 1 }}</p>
                    <input type="radio" @change="saveDataFoodter(item.id, itemData, indexData, 'a' + item.id + '_' + indexData, item.title)" :name="item.title + '_' + index" value="s" />
                    <p>{{ itemData }}</p>
                    <input type="text" v-on:input="saveDataText(item.id, itemData, 'a' + item.id + '_' + indexData, item.title)" :class="'a' + item.id + '_' + indexData" style="width: 50px; border-radius: 10px; border: 1px solid #000;" v-if="indexData === 3" :disabled="true">
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="div16">
          <p>{{ dataFoodter.foodter }}</p>
        </div>

        <div class="div17" style="width: 100%; display: none;">
        <Ckeditor
      :editor="ClassicEditor"
      v-model="content"
      :config="editorConfig"
    />
      </div>

      <div class="div17" style="width: 100%;">
        <textarea v-model="textArea" style="width: 1200px; height: 100px;"></textarea>
      </div>

      <div class="div18" style="margin: 0 auto; width: 100%; display: flex; justify-content: center; margin: 15px 0;">
        <button v-on:click="submitForm">
          Submit
        </button>

        <button v-if="emailLogin === emailAdmin" v-on:click="createSheetsOnline" style="margin: 0 15px;">
          Create Sheets
        </button>

        <button @click="logout">Logout</button>
      </div>
      </div>
      <div v-if="showDialog" class="overlay">
      <div class="dialog">
        <h2>Xác nhận thao tác</h2>
        <p>Bạn muốn thực hiện hành động nào?</p>

        <div class="actions">
          <button class="btn btn-primary" @click="actionOne">Đồng ý</button>
          <button class="btn btn-danger" @click="actionTwo">Huỷ</button>
          <button class="btn btn-danger" @click="showDialog = false">X</button>
        </div>
      </div>
    </div>

    <div style="display: none;">
      <button @click="loginWithGoogle" class="google-btn">
    <img src="https://developers.google.com/identity/images/g-logo.png" />
    Đăng nhập bằng Google
  </button>

  <button @click="logout">Logout</button>
    </div>
    </div>

    <div v-else>
      <!-- <p>Cảm Ơn!!!</p>
      <button @click="logout">Logout</button> -->
      <div class="auth-container">
        <div class="card success-card">
          <img :src="user.photoURL" class="avatar" />
          <h2>Hello, {{ user.displayName }} 🎉</h2>
          <p>Cảm ơn !!!</p><br>
          <p>謝謝！！！</p><br>
          <p>Thank you !!!</p>
          <button class="btn-logout" @click="logout">Logout</button>
        </div>
      </div>
      
    </div>
  </div>

  <div v-if="emailAdmin === emailLogin">
    <div class="container" style="padding: 10px; position: relative;">
      <div
    v-if="emailLogin === emailAdmin"
    class="sheet-list"
  >
    <div
      v-for="(item, index) in dataSheets"
      :key="index"
      class="sheet-item"
    >
      <button
        class="sheet-btn"
        @click="openDialog(item.id, item.data().name, item?.data())"
      >
        <span>{{ item.data().name }}</span>
        <span
          v-if="dataFirebaseOne?.data()?.id === item.id"
          class="check"
        >✔</span>
      </button>
    </div>
  </div>

      <div class="header">
        <div class="title" style="text-align: center;">
          <div class="div1">
            <h1>台鋼學校財團法人台鋼科技大學</h1>
          </div>

          <div class="div2">
            <p style="font-size: 30px; margin: 15px 0;">
              114年度高等教育深耕計畫主冊計畫活動滿意度調查表
            </p>
          </div>
        </div>
        <div class="title_table" style="text-align: center; ">
          <div class="div3" style="text-align: center;">
            <table border="1" style="margin: auto;">
            <tbody>
              <tr>
                <td style="width: 100px;">具體作法</td>
                <td style="width: 500px;">
                  <div v-if="emailLogin === emailAdmin">
                    <input type="text" v-model="dataText.text1" style="width: 100%; height: 100%;" placeholder="Data...">
                  </div>
                  <div v-else>
                    <p>{{ dataText.text1 }}</p>
                  </div>
                  
                </td>
                <td style="width: 100px;">活動名稱</td>
                <td style="width: 500px;">
                  <div v-if="emailLogin === emailAdmin">
                    <input type="text" v-model="dataText.text2" style="width: 100%; height: 100%;" placeholder="Data...">
                  </div>
                  <div v-else>
                    <p>{{ dataText.text2 }}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="width: 100px;">辦理日期</td>
                <td style="width: 500px;">
                  <div v-if="emailLogin === emailAdmin">
                    <input type="date" v-model="dataText.text3" style="width: 100%; height: 100%;" placeholder="Data...">
                  </div>
                  <div v-else>
                    <p>{{ dataText.text3 }}</p>
                  </div>
                  
                </td>
                <td style="width: 100px;">活動地點</td>
                <td style="width: 500px;">
                  <div v-if="emailLogin === emailAdmin">
                    <input type="text" v-model="dataText.text4" style="width: 100%; height: 100%;" placeholder="Data...">
                  </div>
                  <div v-else>
                    <p>{{ dataText.text4 }}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>

        <div class="div4" style="width: 70%; margin: 0 auto;">
          <div class="div5" style="width: 800px;">
            <p>各位參與學員大家好：<br>
              <span style="display: inline-block; margin-left: 2em;">
                非常感謝您在百忙中參與本次所舉辦之活動，為了瞭解今日活動實施情形並提升爾後活動之品質，以作為未來規劃之參考，煩請您撥冗填答下列問卷，並於活動結束後，擲交工作人員。
              </span><br>
              再次感謝您的協助與支持！
  </p>
          </div>
          <div class="div6">
            <div class="div7" style="float: right; margin-right: 120px;">
              <p>高教深耕計畫辦公室  敬上</p>
            </div>
            <div class="div8" style="padding-top: 30px;">
              -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </div>
          </div>
        </div>
      </div>
      <div class="content" style="width: 78%; margin: 10px auto;">
        <div class="div9" >
          <p>★此部分請依據實際情況與感受，在最適當的□中打勾（✔）。</p>
        </div>
        <div class="div10">
          <table border="1" style="margin: auto;">
            <thead>
              <tr>
                <th style="width: 870px;"></th>
                <th style="width: 100px;">非常滿意</th>
                <th style="width: 100px;">滿意</th>
                <th style="width: 100px;">尚可</th>
                <th style="width: 100px;">不滿意</th>
                <th style="width: 100px;">非常不滿意</th>
              </tr>
            </thead>
          </table>
        </div>

        <div class="div11" style="margin: 15px 0;" v-for="(item, index) in data" :key="index">
          <div class="div12">
            <p style="font-weight: bold;">{{ item.title }}</p>
          </div>
          <div class="div13">
            <table border="1">
              <thead>
              <tr v-for="(itemData, indexData) in item.items" :key="indexData">
                <th style="width: 870px;">{{ itemData }}</th>
                <th style="width: 100px;"><input type="radio" @change="saveData(item.id, itemData, 1)" :name="item.id + '_' + indexData" value="1"></th> <!--Để "name" của thẻ radio giống nhau thì mới chọn được 1 giá trị radio duy nhất-->
                <th style="width: 100px;"><input type="radio" @change="saveData(item.id, itemData, 2)" :name="item.id + '_' + indexData" value="2"></th>
                <th style="width: 100px;"><input type="radio" @change="saveData(item.id, itemData, 3)" :name="item.id + '_' + indexData" value="3"></th>
                <th style="width: 100px;"><input type="radio" @change="saveData(item.id, itemData, 4)" :name="item.id + '_' + indexData" value="4"></th>
                <!-- <th style="width: 100px;"><input type="radio" @change="saveData(item.id, itemData, 5)" :name="item.id + '_' + indexData" value="5" checked></th> Để "checked" nghĩa là tự tích chọn vào lựa chọn này -->
                <th style="width: 100px;"><input type="radio" @change="saveData(item.id, itemData, 5)" :name="item.id + '_' + indexData" value="5"></th>
              </tr>
            </thead>
            </table>
          </div>
        </div>
      </div>

      <div class="footer" style="width: 78%; margin: 0 auto;">
        <div class="div14">
          <p>{{ dataFoodter.title }}</p>
        </div>
        <div class="div15">
          <table style="margin-left: 15px;">
            <thead>
              <tr v-for="(item, index) in dataFoodter.items" :key="index">
                <th>{{ item.title }}</th>
                <th v-for="(itemData, indexData) in item.options" :key="indexData">
                  <div style="margin-left: 20px; display: flex;">
                    <p>{{indexData + 1 }}</p>
                    <input type="radio" @change="saveDataFoodter(item.id, itemData, indexData, 'a' + item.id + '_' + indexData, item.title)" :name="item.title + '_' + index" value="s" />
                    <p>{{ itemData }}</p>
                    <input type="text" v-on:input="saveDataText(item.id, itemData, 'a' + item.id + '_' + indexData, item.title)" :class="'a' + item.id + '_' + indexData" style="width: 50px; border-radius: 10px; border: 1px solid #000;" v-if="indexData === 3" :disabled="true">
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="div16">
          <p>{{ dataFoodter.foodter }}</p>
        </div>

        <div class="div17" style="width: 100%; display: none;">
        <Ckeditor
      :editor="ClassicEditor"
      v-model="content"
      :config="editorConfig"
    />
      </div>

      <div class="div17" style="width: 100%;">
        <textarea v-model="textArea" style="width: 1200px; height: 100px;"></textarea>
      </div>

      <div class="div18" style="margin: 0 auto; width: 100%; display: flex; justify-content: center; margin: 15px 0;">
        <button v-on:click="submitForm">
          Submit
        </button>

        <button v-if="emailLogin === emailAdmin" v-on:click="createSheetsOnline" style="margin: 0 15px;">
          Create Sheets
        </button>

        <button @click="logout">Logout</button>
      </div>
      </div>
      <div v-if="showDialog" class="overlay">
      <div class="dialog">
        <h2>Confirm the operation</h2>
        <p>What would you like to choose?</p>

        <div class="actions">
          <button class="btn btn-primary" @click="actionOne">Select sheets</button>
          <button class="btn btn-danger" @click="actionTwo" :disabled="dataFirebaseOne?.data()?.id === idDataFirebase" 
          :style="dataFirebaseOne?.data()?.id === idDataFirebase ? 'opacity: 0.4; cursor: none' : 'opacity: 1'">Delete sheets</button>
          <button class="btn btn-danger" @click="showDialog = false">X</button>
        </div>
      </div>
    </div>

    <div style="display: none;">
      <button @click="loginWithGoogle" class="google-btn">
    <img src="https://developers.google.com/identity/images/g-logo.png" />
    Đăng nhập bằng Google
  </button>

  <button @click="logout">Logout</button>
    </div>
    </div>
  </div>

  <div v-if="isLoading" class="loading-overlay">
      <div class="spinner"></div>
      <p>載入中......</p>
    </div>
</template>

<script setup>
import {ref, nextTick, onMounted, computed, watch } from "vue"
import { Ckeditor } from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '@ckeditor/ckeditor5-build-classic/build/translations/zh'
import { collection, addDoc, getDocs, deleteDoc, doc, query, limit, where } from "firebase/firestore";
import {auth, db} from '@/firebase/config'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
// import axios from "axios"
const data = ref([
  {
    id: 1,
    title: "A.研習內容規劃",
    items: [
      "1.研習所欲達成之目標明確",
      "2.研習時數安排",
      "3.研習內容規劃與個人需求之契合",
      "4.活動辦理方式",
      "5.整體而言，此活動提供之資料有參考價值"
    ]
  },
  {
    id: 2,
    title: "B.講師授課情形",
    items: [
      "1.講師授課內容充實性與教材設計",
      "2.講師與學員有互動及回應",
      "3.講師表達清晰，有實例佐證容易瞭解",
      "4.講師的授課能引導我修正觀念",
      "5.整體而言，對於講師整體授課的方式與內容"
    ]
  },
  {
    id: 3,
    title: "C.學員自我幫助",
    items: [
      "1.有增進我現有的知識與進一步的瞭解",
      "2.對於教師專業成長有所幫助",
      "3.對於教學資源發展有所幫助",
      "4.對於日後的教學工作有所幫助",
      "5.整體而言，此研習對我有實質的幫助"
    ]
  },
  {
    id: 4,
    title: "D.服務品質",
    items: [
      "1.活動前的聯繫",
      "2.場地空間感受",
      "3.活動教學設備",
      "4.活動工作人員的服務與態度",
      "5.整體而言，對此研習的整體滿意度"
    ]
  }
])
const dataFoodter = ref({
  title: "★此部分為學員資本資料，請在最適當的□中打勾（✔）。",
  items: [
    {
      id: 1,
      title: "💥性別: ",
      options: [
        "男",
        "女",
        "非二元"
      ]
    },
    {
      id: 2,
      title: "💥職稱: ",
      options: [
        "學生",
        "職員",
        "教師",
        "其他"
      ]
    },
    {
      id: 3,
      title: "💥院別: ",
      options: [
        "工程學院",
        "商管學院",
        "通識教育中心",
        "其他"
      ]
    }
  ],
  foodter: "★其他具體建議事項"
})
// const emailAdmin = "tf0117@tsust.edu.tw"
const emailAdmin = "vantruong08062002@gmail.com"
const url = "https://script.google.com/macros/s/AKfycbzhk3LakNmOp4KTW1XHABT2awpfjviGAq_DR4NxWoQZBSALJF9btfQ3Q2REy3_vx4X1/exec"
const totalItemsData = computed(() => { // Tính tổng dữ liệu
  return data.value.reduce((sum, group) => {
    return sum + group.items.length
  }, 0)
})
const router = useRouter()
// const totalOptionsDataFooter = computed(() => {
//   return dataFoodter.value.items.reduce((sum, group) => {
//     return sum + group.options.length
//   }, 0)
// })
// const isDis = ref(true)
const isLoading = ref(false)
const content = ref('')
const textArea = ref('')
const dataFormSave = ref({
  // 1hhQaekC8bXnQM4V4OgcvuaR3Xr4Yu2UjV-i2JLpfKjE
  sheetId: '1fBoEaRu09-grXtqtJ8dwNKEe1CTmTtowTYp1Jdn6Se8',
  sheetName: 'test',
  action: "deleteSheet",
  test: [
    "Date", "Full Name", "Title", "非常滿意	", "滿意", "尚可", "不滿意", "非常不滿意"
  ],
  data1: [],
  data2: [],
  newSheetName: "TEST2",
  // sheetName: "TEST2"
})
const emailLogin = ref("")
const isCheckData = ref(false)
const user = ref(null)

onMounted(() => {
  
  onAuthStateChanged(auth, (users) => { // Lấy ra user Login
    if (users) {
      console.log("Đang đăng nhập:", users.email)
      emailLogin.value = users.email
      user.value = users

    } else {
      router.push("/login")
    }
    // checkDataUser()
  })

  loadData()
  findOneData()
  
})


const nameDataFirebase = ref("")
const idDataFirebase = ref("")
const showDialog = ref(false)
const dataFirebaseOne = ref(null)
const dataItemSheetsClick = ref(null)
const openDialog = (id, name, item) => {
  // console.log("Id firebase: ", id)
  idDataFirebase.value = id
  nameDataFirebase.value = name
  showDialog.value = true
  dataItemSheetsClick.value = item
}
const closeDialog = () => showDialog.value = false

const checkDataUser = async () => {
  const q = query(collection(db, "user_form"), 
where("id", "==", dataFirebaseOne.value?.data().id),
where("name", "==", emailLogin.value)
)
  const res = await getDocs(q)

  if(!res.empty) isCheckData.value = true
  else isCheckData.value = false
}
watch([dataFirebaseOne, emailLogin], () => {
  if (dataFirebaseOne.value && emailLogin.value) {
    checkDataUser()
  }
})
const findOneData = async () => {
  const res = query(collection(db, "datachon"), limit(1))

  const dataOne = await getDocs(res)

  if(!dataOne.empty){
    // const docSnap = dataOne.docs[0]

    dataFirebaseOne.value = dataOne.docs[0]
    dataText.value.text1 = dataFirebaseOne.value.data().name
    dataText.value.text2 = dataFirebaseOne.value.data().title
    dataText.value.text3 = dataFirebaseOne.value.data().date
    dataText.value.text4 = dataFirebaseOne.value.data().address
    idDataFirebase.value = dataFirebaseOne.value.data().id
    dataFormSave.value.sheetName = dataFirebaseOne.value.data().name
    console.log("Data: ", dataFirebaseOne.value.data().id)
  }
}
const actionOne = async () => {
  try{
    isLoading.value = true;
    document.body.classList.add("loading"); // Add Lớp "loading"
    document.body.style.overflow = "hidden";
    const data = collection(db, "datachon")
    const snapshot = await getDocs(data)

    const promises = snapshot.docs.map(d => deleteDoc(doc(db, "datachon", d.id)))
    await Promise.all(promises)
    // name: nameDateNow, date: dataText.value.text3, address: dataText.value.text4, title: dataText.value.text2
    await addDoc(collection(db, "datachon"), {
      id: idDataFirebase.value, 
      name: nameDataFirebase.value,
      date: dataItemSheetsClick.value.date,
      address: dataItemSheetsClick.value.address,
      title: dataItemSheetsClick.value.title
    })

    findOneData()
  }catch(e){
    console.log(e)
  }finally{
    isLoading.value = false;
    document.body.classList.remove("loading");
    document.body.style.overflow = "auto";
    closeDialog()
  }
}

const actionTwo = async () => {
  try{
    isLoading.value = true;
    document.body.classList.add("loading"); // Add Lớp "loading"
    document.body.style.overflow = "hidden";
    await deleteDoc(doc(db, "sheets", idDataFirebase.value))
  dataSheets.value = dataSheets.value.filter(x => x.id !== idDataFirebase.value)

  const formData = new FormData()
    formData.append("data", JSON.stringify({
      action: "deleteSheet",
      newSheetName: nameDataFirebase.value,
      test: dataFormSave.value.test,
      sheetName: dataFormSave.value.sheetName,
      sheetId: dataFormSave.value.sheetId
    }))

    await fetch(url, {
      method: "POST",
      body: formData
    })

    
  
  }catch(e){
    console.log(e)
  }finally{
    isLoading.value = false;
    document.body.classList.remove("loading");
    document.body.style.overflow = "auto";
    closeDialog()
  }
}


const logout = async () => {
  await signOut(auth)
  alert("Đã đăng xuất")
}
const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)

    const user = result.user

    console.log("User:", user)
    alert("Đăng nhập thành công: " + user.email)

  } catch (error) {
    console.error(error)
    alert("Lỗi đăng nhập")
  }
}
// const testSheet = ref({
//   name: 'sss',
//   email: 'đ',
//   gender: 's',
//   feedback: 'd',
//   sheetId: '1hhQaekC8bXnQM4V4OgcvuaR3Xr4Yu2UjV-i2JLpfKjE',
//   sheetName: 'test',
//   action: "createHeader",
//   test: [
//     "Full Name", "Title", "非常滿意	", "滿意", "尚可", "不滿意", "非常不滿意"
//   ]
// })
const editorConfig = {
  toolbar: [
    'heading', '|',
    'bold', 'italic', 'underline', '|',
    'link', 'bulletedList', 'numberedList', '|',
    'insertTable', 'imageUpload', '|',
    'undo', 'redo'
  ],
  language: 'zh'
}

const dataText = ref({
  text1: "",
  text2: "",
  text3: "",
  text4: ""
})

// const nameSheets = ref("Sheets_")

const dataSheets = ref([])

const saveDataText = (id, text, classData, title) => {
  console.log(title)
  const valueInput = document.querySelector("." + classData)?.value
  dataFormSave.value.data2.map(x => {
    if(x.id === id && x.name === text) x.text = valueInput
  })

  console.log("Data Input New: ", dataFormSave.value.data2)

}
const saveDataFoodter = async (id, text, index, classData, title) => {
  
  await nextTick()
  console.log("title: ", title)
  // console.log("Data: ", classData)
  const valueInput = document.querySelector("." + classData)?.value
  dataFormSave.value.data2 = dataFormSave.value.data2.filter(x => x.id !== id)
  if(index === 3) {
    // if(valueInput.trim() === ""){
    //   alert("Data Null")
    //   return 
    // }
    dataFormSave.value.data2.push({
      id: id,
      name: text,
      text: valueInput,
      title: title
    })
    // isDis.value = false
    document.querySelector("." + classData).disabled = false
  }
  else if(index !== 3) {
    dataFormSave.value.data2.push({
      id: id,
      name: text,
      title: title
    })
    // isDis.value = true
    if(document.querySelector("." + classData) !== null)
      document.querySelector("." + classData).disabled = true
    // console.log(document.querySelector("." + classData))
  }
  // console.log("Data Id: ", id)
  // console.log("Data text: ", text)

  
  console.log("Data New Foodter: ", dataFormSave.value.data2)
}
const saveData = (id, item, status) => {
  // console.log("Data Test: ", item)
  // console.log("Data Test Id: ", id)
  // console.log("Data Test status: ", status)

  // dataFormSave.value.data1 = dataFormSave.value.data1.filters(x => x.id !== id && x.name !== item)
  console.log("Data Test: ", dataFormSave.value.data1.filter(x => x.name !== item))
  dataFormSave.value.data1.push({
    id: id,
    name: item,
    status: status
  })

  console.log("Data New: ", dataFormSave.value.data1)
}

const loadData = async () => {
  const res = await getDocs(collection(db, "sheets"))

  console.log("res", res.docs)
  dataSheets.value = res.docs
}
const createSheetsOnline = async () => {
  try {
    console.log(dataText.value.text3)
    if(dataText.value.text1.trim() === "" || dataText.value.text3 === "" || dataText.value.text2 === "" || dataText.value.text4 === ""){
      alert("Data Null")
      return
    }

    const nameDateNow = dataText.value.text1
    const q = query(collection(db, "sheets"), where("name", "==", nameDateNow), limit(1))
    const docData = await getDocs(q)

    if(!docData.empty){
      alert("Data tồn tại")
      return
    }

    isLoading.value = true;
    document.body.classList.add("loading"); // Add Lớp "loading"
    document.body.style.overflow = "hidden";
    const formData = new FormData()
    
    formData.append("data", JSON.stringify({
      action: "createSheet",
      newSheetName: nameDateNow,
      test: dataFormSave.value.test,
      sheetName: dataFormSave.value.sheetName,
      sheetId: dataFormSave.value.sheetId
    }))

    const res = await fetch(url, {
      method: "POST",
      body: formData
    })

    // const text = await res.text()
    if(res.ok){
      await addDoc(collection(db, "sheets"), { name: nameDateNow, date: dataText.value.text3, address: dataText.value.text4, title: dataText.value.text2 })
      loadData()
    }else{
      alert("Add sheets error")
      return
    }

    alert("Gửi thành công!")
  } catch (err) {
    alert("Lỗi gửi dữ liệu")
    console.error(err)
  }finally{
    isLoading.value = false;
    document.body.classList.remove("loading");
    document.body.style.overflow = "auto";
  }
}
const submitForm = async () => {
  try {
    if(dataFormSave.value.data1.length < totalItemsData.value || dataFormSave.value.data2.length < 3){
      alert("Data null")
      return
    }

    isLoading.value = true;
    document.body.classList.add("loading"); // Add Lớp "loading"
    document.body.style.overflow = "hidden";
     const formData = new FormData()
     formData.append("data", JSON.stringify({
      sheetId: dataFormSave.value.sheetId,
      sheetName: dataFormSave.value.sheetName,
      // action: "sss",
      test: dataFormSave.value.test,
      data1: dataFormSave.value.data1,
      data2: dataFormSave.value.data2,
      text: textArea.value.trim(),
      email: emailLogin.value
     }))
     const res = await fetch(url, {
      method: "POST",
      body: formData
    })
    // await fetch(
    //   // AKfycbyfZtC-OJaxhT8TIb3NSZkZI2XxDsAZ05ePlKvfbdIKkzrF9Gi6xSaeDmYwOOc1iW71
    //   "https://script.google.com/macros/s/AKfycbyYAY-_O-YtqkkEFKXOFIHBvp-YQiA4ssxyKKhYpAgmhbqIAMY-d8lM_nkL62xISNzJ/exec",
    //   {
    //     method: "POST",
    //     mode: "no-cors",                 // tránh CORS
    //     headers: {
    //       "Content-Type": "application/json"   // tránh preflight
    //     },
    //     body: JSON.stringify(dataFormSave.value)
    //   }
    // )
    if(res.ok){
      await addDoc(collection(db, "user_form"), {
        id: dataFirebaseOne.value?.data().id,
        name: emailLogin.value
      })

      location.reload()
    }
    console.log("Data ADd: ", res)
    // console.log("Đã vào")
    alert("Gửi thành công!")
  } catch (err) {
    alert("Lỗi gửi dữ liệu")
    console.error(err)
  }finally{
    isLoading.value = false;
    document.body.classList.remove("loading");
    document.body.style.overflow = "auto";
  }
}
</script>

<style>
/* Màn hình chờ */
 .loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  pointer-events: all; /* Kích hoạt lớp phủ ngăn tương tác */
}

/* Biểu tượng spinner */
.spinner {
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

/* Hiệu ứng xoay */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Ngăn người dùng thao tác khi đang load */
body.loading {
  pointer-events: none; /* Ngăn tất cả tương tác */
  user-select: none; /* Ngăn chọn văn bản */
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.auth-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  font-family: "Segoe UI", sans-serif;
}

.card {
  background: white;
  padding: 40px;
  width: 320px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  text-align: center;
  animation: fadeIn 0.5s ease;
}

.success-card {
  border-top: 5px solid #4caf50;
}

.avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 15px;
  border: 3px solid #eee;
}

.btn-google {
  margin-top: 15px;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: white;
  box-shadow: 0 3px 8px rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
}

.btn-google img {
  width: 20px;
}

.btn-google:hover {
  transform: translateY(-2px);
}

.btn-logout {
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #ff5252;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

.btn-logout:hover {
  background: #ff1744;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
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

.open-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}
.open-btn:hover {
  transform: scale(1.05);
}

/* Overlay nền mờ */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease;
}

/* Hộp dialog */
.dialog {
  background: white;
  padding: 25px 30px;
  border-radius: 14px;
  width: 320px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  animation: slideUp 0.3s ease;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btn {
  flex: 1;
  margin: 0 5px;
  padding: 10px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

.btn-primary {
  background: #4CAF50;
  color: white;
}
.btn-primary:hover {
  background: #45a049;
}

.btn-danger {
  background: #ff4d4f;
  color: white;
}
.btn-danger:hover {
  background: #d9363e;
}

@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}

@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0 }
  to { transform: translateY(0); opacity: 1 }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.sheet-list {
  width: 100%;
  display: flex;
  gap: 10px; /**Giống như margin giãn khoảng cách */
  overflow-x: auto;
  padding: 8px 5px;
  box-sizing: border-box;
}

.sheet-item {
  flex: 0 0 auto;
}

.sheet-btn {
  min-width: 120px;
  padding: 10px 12px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  color: white;
  font-weight: 600;
  font-size: 14px;
  position: relative;
  box-shadow: 0 3px 8px rgba(0,0,0,0.15);
  transition: 0.2s;
  cursor: pointer;
}

.sheet-btn:active {
  transform: scale(0.96);
}

.check {
  position: absolute;
  top: 4px;
  right: 8px;
  font-size: 14px;
}

</style>
