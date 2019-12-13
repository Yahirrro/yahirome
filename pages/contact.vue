<template>
  <div>
    <header-anm :title="'Contact'" :description="'Contact to me'" />
    <section id="content">
      <h1 class="pagetitle small">
        <span>お問い合わせ</span>
      </h1>
      <p class="text-center">お仕事の依頼、様々なご連絡に関しては、こちらからご送信ください。</p>
      <form v-if="isSubmit === false" @submit.prevent="onSubmit">

        <label for="selecttype">お問い合わせの種類 <span class="badge">必須</span></label>
        <select class="form-control" id="selecttype" v-model="selecttype" required>
          <option>仕事の依頼</option>
          <option>取材の依頼</option>
          <option>宗教の勧誘</option>
          <option>情報商材の押し売り</option>
          <option>その他</option>
        </select>

        <label for="organization">会社名 / 団体名</label>
        <input type="text" id="organization" v-model="organization">

        <label for="name">お名前 <span class="badge">必須</span></label>
        <input type="text" id="name" v-model="name" required>

        <label for="email">メールアドレス <span class="badge">必須</span></label>
        <input type="text" id="email" v-model="email" required>
        
        <label for="title">件名</label>
        <input type="text" id="title" v-model="title">

        <label for="body">本文 <span class="badge">必須</span></label>
        <textarea type="text" id="body" v-model="body" required></textarea>

        <button class="btn btn-yellow" type="submit">送信</button>
      </form>

      <div class="done" v-if="isSubmit === true">
        <h2>Done!</h2>
        <p>送信は完了しました!</p>
        <p>折返しご連絡いたしますので、しばらくお待ち下さい。</p>
      </div>


      <form name="contact" netlify netlify-honeypot="bot-field" hidden>

        <label for="selecttype">お問い合わせの種類 <span class="badge">必須</span></label>
        <select class="form-control" id="selecttype" v-model="selecttype" required>
          <option>仕事の依頼</option>
          <option>取材の依頼</option>
          <option>宗教の勧誘</option>
          <option>情報商材の押し売り</option>
          <option>その他</option>
        </select>

        <label for="organization">会社名 / 団体名</label>
        <input type="text" id="organization" v-model="organization">

        <label for="name">お名前 <span class="badge">必須</span></label>
        <input type="text" id="name" v-model="name" required>

        <label for="email">メールアドレス <span class="badge">必須</span></label>
        <input type="text" id="email" v-model="email" required>
        
        <label for="title">件名</label>
        <input type="text" id="title" v-model="title">

        <label for="body">本文 <span class="badge">必須</span></label>
        <textarea type="text" id="body" v-model="body" required></textarea>
      </form>

    </section>
  </div>
</template>
<style lang="scss">

section#content {
  padding-top: 50px;
  padding-bottom: 100px;
  max-width: 600px;
  margin-right: auto;
  margin-left: auto;
  form {
    max-width: 500px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 50px;
    label {
      display: block;
      font-size: .8rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
      .badge {
        margin-left: 10px;
        font-size: 70%;
        background: yellow;
        padding: 1px 5px;
        border-radius: 20px;
      }
    }
    input,select,textarea {
      font-family: inherit;
      font-size: 1rem;
      width: 100%;
      max-width: 500px;
      display: block;
      padding: 10px;
      border: 2px solid rgba(0, 0, 0, 0.05);
      background-color: rgba(0, 0, 0, 0.03);
      box-sizing: border-box;
      &:focus {
        outline: 2px solid rgba(0, 0, 0, 0.1);
      }
    }
    button {
      margin-top: 2rem;
    }
  }

  .done {
    background: rgba(0, 0, 0, 0.03);
    color: black;
    max-width: 400px;;
    padding: 15px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 2rem;
    
    h2 {
      font-size: 2.5rem;
      font-family: niveau-grotesk, sans-serif;
    }
    p,h2 {
      margin: 0;
      font-weight: bold
    }
  }
}
</style>
<script>
import headerAnm from "~/components/header/header_animated.vue";
import axios from 'axios'
export default {
  components: {
    headerAnm
  },
   data() {
    return {
      selecttype: '',
      organization: '',
      name: '',
      email: '',
      body: '',
      isSubmit: false
    }
  },
  methods: {
    onSubmit() {
      const params = new URLSearchParams()

      params.append('form-name', 'contact') // Forms使うのに必要

      params.append('selecttype', this.selecttype)
      params.append('organization', this.organization)
      params.append('name', this.name)
      params.append('email', this.email)
      params.append('body', this.body)

      axios
        .post('/', params)
        .then(() => {
          this.isSubmit = true
        })
    }
  }
};
</script>
