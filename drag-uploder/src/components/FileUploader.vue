<template>
    <v-container class="inputdata">
        <h1>File Uploader Page</h1>
        <div class="dropbox" id="app">
            <input class="input-file"
                   type="file"
                   name="myfile"
                   @change="upload($event.target.name, $event.target.files)"
                   @drop="upload($event.target.name, $event.target.files)">
            <h2>file uploader</h2>
        </div>
            <div class="input-group-append">
          <span class="input-group-text" @click="onClickFile"><i class="fa fa-paperclip">
            </i></span>
                <button class="btn btn-outline-info" @click="onClickUpload">서버에 전송</button>
            </div>
            <input type=file class="file-input" accept="image/*" ref="fileInput" @change="onFileChange">
        <div v-show="imageSrc" class="upload-image">
            <img :src="imageSrc">
        </div>
    </v-container>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "FileUploader",
        methods: {
            upload: function(name, files) {
                const formData = new FormData();
                formData.append(name, files[0], files[0].name);
                const url = "http://localhost:12000/upload/1";
                axios.post(url, formData).then(response => {
                    console.log(response);
                })
            }
        }
    }
</script>
<style>
    .inputdata {
        text-align: center;
    }
    .dropbox {
        outline: 2px dashed #aaa;
        width: 300px;
        height: 300px;
        position: relative;
        margin: 0 auto;
    }
    .dropbox > h2{
        position: absolute;
        top: 50px;
        left: 0;
        z-index: 2;
    }
    .input-file{
        position: absolute;
        opacity: 0;
        width:100%;
        height:100%;
        top:0;
        left:0;
        z-index: 3;
    }
</style>