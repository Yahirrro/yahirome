<template>
  <div>
    <section id="content">
      <PageTitle title="問合せ" enTitle="CONTACT"></PageTitle>
      <p class="text-center">
        お仕事の依頼、様々なご連絡に関しては、こちらからご送信ください。
      </p>
      <form name="contact" method="POST">
        <input type="hidden" name="form-name" value="contact" />

        <div>
          <label for="selecttype"
            >お問い合わせの種類 <span class="badge">必須</span></label
          >
          <select
            class="form-control"
            id="selecttype"
            name="selecttype"
            v-model="selecttype"
            required
          >
            <option value="仕事の依頼">仕事の依頼</option>
            <option value="取材の依頼">取材の依頼</option>
            <option value="制作物への感想">制作物への感想</option>
            <option value="その他">その他</option>
          </select>
        </div>

        <div>
          <label for="organization">会社名 / 団体名</label>
          <input
            type="text"
            id="organization"
            name="organization"
            v-model="organization"
          />
        </div>

        <div>
          <label for="name">お名前 <span class="badge">必須</span></label>
          <input type="text" id="name" name="name" v-model="name" required />
        </div>

        <div>
          <label for="email"
            >メールアドレス <span class="badge">必須</span></label
          >
          <input
            type="email"
            id="email"
            name="email"
            v-model="email"
            required
          />
        </div>

        <div>
          <label for="title">件名</label>
          <input type="text" id="title" name="title" v-model="title" />
        </div>

        <div>
          <label for="body">本文 <span class="badge">必須</span></label>
          <textarea
            type="text"
            id="body"
            name="body"
            v-model="body"
            required
          ></textarea>
        </div>

        <button class="btn btn-yellow" type="submit">送信</button>
      </form>
      <div class="done" v-if="isSubmit">
        <h2>Done!</h2>
        <p>送信は完了しました!</p>
        <p>折返しご連絡いたしますので、しばらくお待ち下さい。</p>
      </div>
    </section>
  </div>
</template>
<style lang="scss"></style>
<script>
import axios from "axios";
export default {
  layout: 'page',
  head() {
    return {
      title: "Contact" + " | Yahiro Nakamoto (中本 八尋)",
      meta: [
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:url",
          content: "https://yahiro.me/contact"
        }
      ]
    };
  },
  data() {
    return {
      selecttype: "",
      organization: "",
      name: "",
      email: "",
      title: "",
      body: "",
      isSubmit: false
    };
  },
  methods: {
    onSubmit() {
      this.isSubmit = true;
    }
  },
  
  created() {
    this.$nuxt.$emit('changeHeader', 'Contact', 'Contact to me')
  }
};
</script>
