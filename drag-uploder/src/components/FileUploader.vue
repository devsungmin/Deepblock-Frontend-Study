<template>
  <v-container class="inputdata">
    <h1>File Uploader Page</h1>
    <form id="fist_class" method="post" enctype="multipart/form-data">
      <input type="file" ref="file" name="image" id="image"  accept="image/*" multiple/>
      <v-btn class="btn btn-outline-info" @click="submit()">서버에 전송</v-btn>
    </form>

    <form id="secon_class" method="post" enctype="multipart/form-data">
      <input type="file" ref="file2" name="image2" id="image2"  accept="image/*" multiple/>
      <v-btn class="btn btn-outline-info" @click="result()">서버에 전송</v-btn>
    </form>

  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "FileUploader",
  methods: {
    submit() {
      let fd = new FormData(document.getElementById('fist_class'));
      const url = "http://127.0.0.1:8000/users/id/data"
      for (let i = 0; i < this.$refs.file.files.length; i++ ) {
        let img = this.$refs.file.files[i];
        console.log(img)
        fd.append('image', img);
        console.log(fd)
      }
      axios.post(url, fd, {
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      }).then(resp => {
      this.imagePath = resp.data.path;
      console.log(resp);
      }).catch(err => {
          console.log(err);
      });
    },
    result() {
      let fd2 = new FormData(document.getElementById('secon_class'));
      const url = "http://127.0.0.1:8000/users/id/data"
      for (let i = 0; i < this.$refs.file.files.length; i++ ) {
        let img2 = this.$refs.file2.files[i];
        console.log(img2)
        fd2.append('image2', img2);
        console.log(fd2)
      }
      axios.post(url, fd2, {
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      }).then(resp => {
      this.imagePath = resp.data.path;
      console.log(resp);
      }).catch(err => {
          console.log(err);
      });
    }
  }
}
</script>

<style>
form{
  padding: 10px;
}
</style>