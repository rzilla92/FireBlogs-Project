<template>
  <div class="create-post">
    <Loading v-show="loading" />
    <div class="container">
        <div :class="{ invisible: !error }" class="err-msg">
            <p><span>Error:</span>{{ this.errorMsg }}</p>
        </div>
        <div class="blog-info">
            <input type="text" placeholder="Enter Blog Title" v-model="blogTitle">
            <div class="upload-file">
                <label for="blog-photo">Upload Cover Photo</label>
                <input type="file" ref="blogPhoto" id="blog-photo" accept=".png, .jpg, /jpeg">
                <button class="preview" :class="{ 'button-inactive': !this.$store.state.blogPhotoFileURL }">Preview Photo</button>
                <span>File Chosen: {{ this.$store.state.blogPhotoName }}</span>
            </div>
        </div>
        <div class="editor">
            <vue-editor :editorOptions="editorSettings" v-model="blogHTML" useCustomImageHandler />
        </div>
        <div class="blog-actions">
            <button >Publish Blog</button>
            <router-link class="router-button" :to="{ name: 'BlogPreview' }">Post Preview</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import BlogCoverPreview from "../components/BlogCoverPreview";
import Loading from "../components/Loading";
// import firebase from "firebase/app";
// import "firebase/storage";
// import db from "../firebase/firebaseInit";
import Quill from "quill"
window.Quill = Quill
const ImageResize = require("quill-image-resize-module").default
Quill.register("modules/imageResize", ImageResize)

export default {
    name: "CreatePost",
    components: {
        // BlogCoverPreview,
        Loading,
    },
    data() {
        return {
            error: null,
            errorMsg: null,
            editorSettings: {
                modules: {
                    ImageResize: {}
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>