<template>
  <v-container>
      <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <h1>Input Dataset Page</h1>
            <form id="fist_class" method="post" enctype="multipart/form-data">
            <v-file-input type="file" ref="file" name="image" id="image"  accept="image/*" multiple prepend-icon="mdi-camera" label="Image Class-2" show-size counter/>
            <v-btn class="btn btn-outline-info" @click="submit()">서버에 전송</v-btn>
            </form>

            <form id="secon_class" method="post" enctype="multipart/form-data">
            <input type="file" ref="file2" name="image2" id="image2"  accept="image/*" multiple prepend-icon="mdi-camera" label="Image Class-2" show-size />
            <v-btn class="btn btn-outline-info" @click="result()">서버에 전송</v-btn>
            </form>counter
            
        </v-col>
      </v-row>
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
      for (let i = 0; i < this.$refs.file.files.counter; i++ ) {
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
      for (let j = 0; j < this.$refs.file2.files.length; j++ ) {
        let img2 = this.$refs.file2.files[j];
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