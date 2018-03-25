<template>
  <div>
    <h1 class="centralized">{{ title }}</h1>
    <input type="search" class="filter" @input="filter = $event.target.value" placeholder="Filter for title">

    <ul class="list-photos">
      <li class="list-photos-item" v-for="photo of photosWithFilter" :key="photo.title">
        <panel :title="photo.title">
          <responsive-image :url="photo.url" :title="photo.title"/>
          <button
            type="button"
            label="REMOVER"
            @active="remove(photo)"
            :confirmation="true"
            style="danger"/>
        </panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from '../shared/panel/Panel.vue';
import ResponsiveImage from '../shared/responsive-image/ResponsiveImage.vue';
import Button from '../shared/button/Button.vue';

export default {
  components: {
    'panel' : Panel,
    'responsive-image': ResponsiveImage,
    'button' : Button
  },

  data() {
    return {
      title: 'Alurapic',
      photos: [],
      filter: ''
    }
  },

  computed: {
    photosWithFilter() {
      if(this.filter) {
        let exp = new RegExp(this.filter.trim(), 'i');
        return this.photos.filter(photo => exp.test(photo.title));
      } else {
        return this.photos;
      }
    }
  },

  methods: {
    remove(photo) {
        alert('Remover a foto!' + photo.title);
    }

  },

  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(photos => this.photos = photos, err => console.log(err));
  }
}
</script>

<style>
  .centralized {
    text-align: center;
  }

  .list-photos {
    list-style: none;
  }

  .list-photos .list-photos-item {
    display: inline-block;
  }

  .filter {
    display: block;
    width: 100%;
  }
</style>
