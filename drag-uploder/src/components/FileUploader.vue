<template>
  <v-container class="inputdata">
    <h1>File Uploader Page</h1>

    <input type="file" @change="uploadImage" name="image" id="image"  accept="image/*" >
    <v-btn class="btn btn-outline-info" @click.prevent="submit">서버에 전송</v-btn>

  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "FileUploader",
  methods: {
    uploadImage(e) {
      let img = e.target.files[0];
      let fd = new FormData();
      fd.append("image", img);
      const url = "http://127.0.0.1:8000/"
      axios.post(url, fd).then(resp => {
        this.imagePath = resp.data.path;
        console.log(resp);
      });
    },
    submit() {
      let data = {
        imagePath: this.imagePath,
      };
      console.log(data) 
    }
  }
};
</script>