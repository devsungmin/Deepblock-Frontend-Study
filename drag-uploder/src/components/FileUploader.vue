<template>
    <v-container class="inputdata">
        <h1>File Uploader Page</h1>
        <div class="dropbox" id="app">
            <input class="input-file"
                   type="file"
                   name="myfile[]"
                   @change="upload($event.target.name, $event.target.files)"
                   @drop="upload($event.target.name, $event.target.files)">
            <h2>file uploader</h2>
        </div>

            <v-file-input label="one file input" show-size counter multiple filled prepend-icon="mdi-camera" @change="onFileChange">
                <template v-slot:selection="{ index, text }">
                    <v-chip
                            v-if="index < 2"
                            color="deep-purple accent-4"
                            dark
                            label
                            small
                    >
                        {{ text }}
                    </v-chip>

                    <span
                            v-else-if="index === 2"
                            class="overline grey--text text--darken-3 mx-2"
                    >
        +{{ files.length - 2 }} File(s)
      </span>
                </template>
            </v-file-input>

        <v-file-input label="two file input" show-size counter multiple filled prepend-icon="mdi-camera" @change="onFileChange">
            <template v-slot:selection="{ index, text }">
                <v-chip
                        v-if="index < 2"
                        color="deep-purple accent-4"
                        dark
                        label
                        small
                >
                    {{ text }}
                </v-chip>

                <span
                        v-else-if="index === 2"
                        class="overline grey--text text--darken-3 mx-2"
                >
        +{{ files.length - 2 }} File(s)
      </span>
            </template>
        </v-file-input>
        <div class="input-group-append">
          <span class="input-group-text" @click="onClickFile"><i class="fa fa-paperclip">
            </i></span>
            <v-btn class="btn btn-outline-info" @click="onClickUpload">서버에 전송</v-btn>
        </div>
    </v-container>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "FileUploader",
        data: () => ({
            files: [],
        }),
        methods: {
            upload: function(name, files) {
                const formData = new FormData();
                formData.append(name, files[0], files[0].name);
                const url = "http://localhost:12000/upload/1";
                axios.post(url, formData).then(response => {
                    console.log(response);
                })
            },
            onClickUpload(event) {
                this.inputImageFile(event.target.files)
            },
            inputImageFile (files) {
                if (files.length) {
                    let file = files[0]
                    if (!/^image\//.test(file.type)) {
                        alert('이미지 파일만 등록이 가능합니다')
                        return false
                    }
                    this.filename = file.name
                    this.preview(file)
                }
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